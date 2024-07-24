const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const bodyParser = require('body-parser');


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());

app.use("/api",router)

// app.post('/api/generate-upi-url', (req, res) => {
//     const { amount } = req.body;
//     const upiID = 'ommsai414-1@okicici'; // Replace with your UPI ID
//     const upiURL = `upi://pay?pa=${upiID}&pn=Your%20Name&mc=0000&tid=000000000000&tt=10&am=${amount}&cu=INR&url=`;

//     res.json({ upiURL });
// });

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})


console.log(`Server running on http://localhost:${PORT}`);

