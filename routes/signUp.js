import express from "express";
import mongoose from "mongoose";
import UserModel from "../model/user.js";

const signUpRouter = express.Router();

signUpRouter.post("/", async (req, res) => {
  const {email} = req.body;
  console.log("hi");
  try {
    const user = await UserModel.findOne({
      email,
    }).exec();
    console.log(user);
    
    if(user){
      res.send({message:"user exists", exists:true});
    }  else{
      res.send({message:"user doesnt exist", exists:false});
    }    
    
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
});

export default signUpRouter;