const express=require('express');
const dbConnection=require('./dbConfig.js');
require('dotenv').config();
const app=express();
app.use(express.json());


dbConnection.connectDB();
const userRoutes=require('./routes/user.route.js');
app.use('/api/auth',userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello from server");
})
app.listen(8001,()=>{
    console.log("server started");
})