const mongoose = require('mongoose')

// ! new is keyword to save database
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
   email:String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String
})

module.exports.User = mongoose.model("User", UserSchema)