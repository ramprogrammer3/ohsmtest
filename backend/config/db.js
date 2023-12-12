require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.URL;

const connect = () =>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB connection successfull");
    }).catch((error)=>{
        console.log("DB connection Failed");
        console.error(error);
        process.exit(1);
    })
}

module.exports = connect;