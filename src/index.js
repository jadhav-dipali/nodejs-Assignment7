const express = require('express')
require("dotenv").config()
const app = express()
const bodyParser = require("body-parser");
const port = process.env.PORT;
app.use(express.urlencoded());
require("./db/connection");
const router = require("./routes/student")




// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.use(router);




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   