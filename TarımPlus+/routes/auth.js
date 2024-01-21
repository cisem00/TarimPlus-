const pool = require("../database");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const auth = require("../middleware/auth");
const generateJWT = require("../utils/generateJWT");

// create a user
router.post('/register', validInfo, async (req, res) => {
    try {
        console.log(req.body)

        // Extract user data from the request body
        const { username ,password, name ,surname ,email ,date_of_birth , sub_type } = req.body;

        // Enclose the email value in single quotes in the SQL query
        const user = await pool.query('SELECT * FROM "user" WHERE email = $1', [email]);

        if (user.rows.length !== 0) {
        return res.status(401).json({ message: 'Email is already in use.'});
        }

        console.log(req.body)
                    

        // hash the password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);


        // Insert user data into the "user" table
        const insertUserQuery = `
        INSERT INTO "user" (username ,password, name ,surname ,email ,date_of_birth , sub_type )
        VALUES ($1, $2, $3, $4, $5, $6, $7 )
        RETURNING user_id, username, email
        `;

        const values = [username, hashedPassword, name, surname, email, date_of_birth, sub_type];
        const { rows } = await pool.query(insertUserQuery, values);


        // generating web token
        const token = generateJWT(rows[0].user_id);
        const userId = rows[0].user_id;

        res.json({ token, userId });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post("/login", validInfo, async (req, res) => {
    try {
        // deconstruct the req.body
        const { email, password } = req.body;
        


        // check if user exists
        const user = await pool.query('SELECT * FROM "user" WHERE email = $1;', [
        email,
        ]);


        if (user.rows.length === 0) {
        return res.status(401).json("Password or email is incorrect.");
        }

        
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
        return res.status(401).json("Password or email is incorrect.");
        }
        

        const token = generateJWT(user.rows[0].user_id);
        const userId = user.rows[0].user_id;

        res.json({ token, userId });
    } catch (err) {
        console.error(err.message);
    }
  });

  router.get("/verify", auth, async (req, res) => {
    try {
      const response = {
        isAuth: true,
        userId: req.userId,
      };
      console.log(response)
      //res.json(response);
    } catch (err) {
      console.error(err.message);
    }
  });

// Get all users
router.get('/users', async (req, res) => {
  try {

    // Query to get all users
    const getUsersQuery = 'SELECT user_id, username, email, date_of_birth, sub_type FROM "user"';

    // Execute the query
    const { rows } = await pool.query(getUsersQuery);

    // Send the list of users in the response
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/add_ilan', async (req, res) => {
  try {
      console.log(req.body);

      // Extract ilan data from the request body
      const { user_id, user_name, Title, Description, Fiyat, ilan_type } = req.body;
      
      const insertIlanQuery = `
          INSERT INTO ilan_tablosu (user_id, user_name, Title, Description, Fiyat, ilan_type)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING ilan_id, user_name, Title, Description, Fiyat, ilan_type;
      `;

      const values = [user_id, user_name, Title, Description, Fiyat, ilan_type];

      const { rows } = await pool.query(insertIlanQuery, values);

      const token = generateJWT(rows[0].ilan_id);
      const ilan_id = rows[0].ilan_id;


      res.json({ token, ilan_id, Title });
  } catch (error) {
      console.error('Error adding ilan:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/ilanlar', async (req, res) => {
  try {

    // Query to get all users
    const getIlanQuery = 'SELECT ilan_id, user_id, user_name, Title, Description, Fiyat, ilan_type FROM "ilan_tablosu"';

    // Execute the query
    const { rows } = await pool.query(getIlanQuery);

    // Send the list of users in the response
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  module.exports = router;