const mongoose = require("mongoose")

// const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected successfully");
    } catch (err) {
        console.log("Error connecting to the database:", err);
    }
}

module.exports = connectDB;

// async function connectDB(){
//     try{
//        const connect = await mongoose.connect(process.env.MONGODB_URI)

//         if(!connect.success){
//             return console.log("db not connected successfully....")
//         }
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB