
require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const User = require("./models/User");
// const encrypt = require("mongoose-encryption")

const app = express();


app.use(cors());
app.use(express.json())



mongoose.connect("mongodb+srv://redmiremote06:RJifDlUUbmcy6u0l@cluster0.klbot7o.mongodb.net/?retryWrites=true&w=majority")


app.post("/register", async (req, res) => {
    const { email, password } = req.body

    try {

        const userDoc = await User.create({
            email,
            password
        })
        res.json(userDoc)
        console.log(userDoc.email)

    } catch (error) {
        res.status(400).json(error)
    }
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    try {
        if (email === userDoc.email && password === userDoc.password) {
            res.json("OK")
        } else {
            res.status(400).json(error)
        }
    } catch (error) {

    }
})



app.listen(3000, () => {
    console.log("Server: 3000");
})




// RJifDlUUbmcy6u0l