const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB!!!")
} )

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/server/users" , userRoute);
app.use("/server/auth" , authRoute);

app.listen(8800,() =>{
    console.log("Backend server is running!!!")
})