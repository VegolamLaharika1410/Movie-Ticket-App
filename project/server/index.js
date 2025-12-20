require('dotenv').config();
const express=require('express');
const dbConnection=require('./dbConfig.js');
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


