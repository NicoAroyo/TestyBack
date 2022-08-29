import express from "express";
import mongoose from "mongoose";
import UserModel from "../model/user.js";

const authRouter = express.Router();

authRouter.post("/", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await UserModel.findOne({
      email: credentials.email,
      password: credentials.password,
    }).exec();
    console.log(user);

    if (!user) {
      res.status(500).send(Error("Invalid credentials"));
    } else {
      res.send({
        token: "token123",
        user,
      });
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

authRouter.post("/sign-up", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await UserModel.findOne({
      email: credentials.email,
    }).exec();
    console.log(user);

    if (!user) {
      res.status(500).send(Error("Invalid credentials"));
    } else {
      res.send({
        token: "token123",
        user,
      });
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

export default authRouter;
