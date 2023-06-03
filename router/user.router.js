const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  console.log(password, confirmPassword);

  try {
    if (password === confirmPassword) {
      bcrypt.hash(password, 8, async (err, hash) => {
        const user = new UserModel({
          email,
          password: hash,
          confirmPassword: hash,
        });
        await user.save();
        res.status(200).send({ msg: "signup succsefully"});
      });
    } else {
      res.status(400).send("Something went wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(err)

  }
});


//login router

userRouter.post("/login" , async(req,res)=>{
    const {email,password} =  req.body

    try {
        let user = await UserModel.findOne({email})
        if(user){

            bcrypt.compare(password, user.password, function(err, result) {
               if(result){
                var token = jwt.sign({ name: 'tarun' }, 'masai');

                res.status(200).send({msg : "login succsefully" , token : token})
               }else{
                res.send({msg : err})
                console.log(err)
               }
            });
        }

        
    } catch (error) {
        console.log(error)
        res.status(400).send(err)
    }
})

module.exports = {
  userRouter,
};
