const router = require("express").Router();

router.get("/test", async (req, res) => {
    try {
      const response = "hey"
      console.log(response)
      res.json(response);
    } catch (err) {
      console.error(err.message);
    }
  });

module.exports = router;