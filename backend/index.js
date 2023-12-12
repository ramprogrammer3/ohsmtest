require("dotenv").config();
const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const connect = require("./config/db");

const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// userRoutes
app.use("/api/user",require("./Routes/userRoute"));

// test route
app.get("/",(req,res)=>{
    res.send("<h1>This is is home page baby!!!...</h1>")
})

// DB connection 
connect();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})