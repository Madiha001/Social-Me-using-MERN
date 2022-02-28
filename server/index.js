const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB!!!")
} )

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req,res) => {
    res.send("Welcome!!!")
})

app.get("/users", (req,res) => {
    res.send("Welcome to users page!!!")
})

app.listen(8800,() =>{
    console.log("Backend server is running!!!")
})