const mongoose =  require("mongoose")

//schema

const userSchema = mongoose.Schema({
    email  : String,
    password : String,
    confirmPassword : String
})



//model

const UserModel = mongoose.model("user" , userSchema)

module.exports={
    UserModel
}