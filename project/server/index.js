require('dotenv').config();
const express=require('express');
const dbConnection=require('./dbConfig.js');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))


dbConnection.connectDB();
const userRoutes=require('./routes/user.route.js');
app.use('/api/auth',userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello from server");
})
app.listen(8001,()=>{
    console.log("server started");
})


