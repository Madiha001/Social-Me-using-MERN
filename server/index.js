const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require('multer');
const path = require('path');


dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB!!!")
} )

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/server/users" , userRoute);
app.use("/server/auth" , authRoute);
app.use("/server/posts" , postRoute);
/*const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"public/icons")
},
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const upload = multer({storage});
app.post("/server/upload",upload.single("file",(req,res)=>{
    try{
        return res.status(200).json("file uploaded successfully");
    }
catch(err){
    console.log(err)
}}));*/

app.listen(8800,() =>{
    console.log("Backend server is running!!!")
})