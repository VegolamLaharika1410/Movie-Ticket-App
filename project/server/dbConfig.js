const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://laharika:<db_password>@cluster0.edfvjbg.mongodb.net/?appName=Cluster0')
// .then(()=>{
//     console.log('DB Connected');
// })
// .catch(()=>{
//     console.log('Failed to connect')
// })

const connectDB= async ()=>{
    try{
        // await mongoose.connect('mongodb+srv://laharika:<laharika>@cluster0.edfvjbg.mongodb.net/?appName=Cluster0');
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected');
    }catch(error){
        console.log('DB Connection Failed',error);
    }
}
module.exports={
    connectDB
}