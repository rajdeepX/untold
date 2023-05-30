require('dotenv').config()
const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")





const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
})

// console.log();
UserSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] })


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;