const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")





const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const secret = "asdfkaji234jkafdlks48lkj4"
UserSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] })


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;