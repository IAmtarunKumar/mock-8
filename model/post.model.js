const mongoose =  require("mongoose")

//schema

const postSchema = mongoose.Schema({
     name : String,
     description : String,
     category : String ,   //(Clothing, Electronics, Furniture, Other)
     image : String, 
     location : String,
     postedAt : String,
     price  : String
})



//model

const PostModel = mongoose.model("post" , postSchema)

module.exports={
    PostModel
}