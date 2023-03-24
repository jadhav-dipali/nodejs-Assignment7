let mongoose = require("mongoose");
require("dotenv").config

const DB = process.env.URL
mongoose.connect(DB)
.then(res=>console.log("connection successful"))
.catch(err=>console.log("not connected"));