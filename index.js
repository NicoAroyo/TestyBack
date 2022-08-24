
import express from "express";
import bodyParser from "body-parser";
import questionsRoutes from "./routes/questions.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const  db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      
    })
  } catch (error) {
    console.log(error.message)
  }
}




const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/questions", questionsRoutes);

app.get("/", (req, res) => res.send("handling your request..."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
