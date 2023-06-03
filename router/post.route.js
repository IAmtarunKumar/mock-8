
const express = require("express")
const { PostModel } = require("../model/post.model")

const postRouter =  express.Router()

//show all posted data
postRouter.get("/product" , async(req,res)=>{
    try {
        let data = await PostModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})


//post the data
postRouter.post("/product" , async(req,res)=>{
    const payload = req.body
    try {
       let user = new PostModel(payload)
       await user.save()
        res.status(200).send({msg : "product is posted"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg : error})
    }
})

//update product
postRouter.patch("/product/:id" , async(req,res)=>{
    const payload = req.body
    const id = req.params.id
    console.log(id)
    try {
     let data = await PostModel.findByIdAndUpdate({_id : id} , payload)
     res.status(200).send({msg : "Product is updated"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg : error})
    }
})

//deleted
postRouter.delete("/product/:id" , async(req,res)=>{
   
    const id = req.params.id
    try {
     let data = await PostModel.findByIdAndDelete({_id : id})
     res.status(200).send({msg : "Product is Deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg : error})
    }
})



module.exports={
    postRouter
}