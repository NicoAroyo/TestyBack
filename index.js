
import express from "express";
<<<<<<< HEAD
import mongoose from "mongoose";
import env from "dotenv";
import { router } from "./routes/routes.js";
import questionsRouter from "./routes/questions.js";
import quizesRouter from "./routes/quizes.js";

env.config();
const mongoString = process.env.DB_URL;

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database Connected");
});
=======
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



>>>>>>> 8168bea93b121153f5b36afe699ae1f32b919443

const app = express();
const PORT = 5000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}/`);
});

app.use("/api", router);

app.use("/api/questions", questionsRouter);

app.use("/api/quizes", quizesRouter);
