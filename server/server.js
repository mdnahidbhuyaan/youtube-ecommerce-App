const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")

// create a database connection

mongoose.connect("mongodb+srv://youtubeecommerceapp:youtubeecommerceapp@cluster0.ah5qyau.mongodb.net/youtubeecommerceapp").then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
})


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization","Cache-control","Expires","Pragma"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})