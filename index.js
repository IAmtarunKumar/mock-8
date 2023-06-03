const express = require("express")
require("dotenv").config()

const cors = require("cors")
const {connection}  = require("./config/db")
const { userRouter } = require("./router/user.router")
const { postRouter } = require("./router/post.route")

const {authorization} = require("./config/middleware/auth.middleware")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/" , (req,res)=>{
    res.send("welcome")
})


//user router
app.use("/" , userRouter)

//post router
app.use("/" , postRouter)




app.listen(process.env.port , async()=>{
try {
    await connection
    console.log("Database is connected")

    console.log(`${process.env.port} port is working`)
} catch (error) {
   console.log(error) 
}
  
})