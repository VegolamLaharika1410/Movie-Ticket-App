const express=require('express');
const dbConnection=require('./dbConfig.js');
require('dotenv').config();
const app=express();


dbConnection.connectDB();

app.get('/',(req,res)=>{
    res.send("Hello from server");
})
app.listen(8001,()=>{
    console.log("server started");
})