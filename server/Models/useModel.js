const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: { type: String, require, minlength: 3, maxlenth: 30 },
    email: {
        type: String, require, minlength: 3, maxlenth: 200,unique:true
    },
    password:{ type: String, require, minlength: 3, maxlenth: 1024, unique:true }
}, {
    timestamps:true
})
const userModel = mongoose.model('User', userSchema)

module.exports=userModel