require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

const port = process.env.PORT || 4001;


app.use(cors({ origin: '*' }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")));
    console.log("env is prod" )
}

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/auth", require("./routes/auth"))
app.use("/test", require("./routes/test"))


if (process.env.NODE_ENV === "production") {
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}
