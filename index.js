import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import { router } from "./routes/routes.js";
import questionsRouter from "./routes/questions.js";
import quizesRouter from "./routes/quizes.js";
import usersRouter from "./routes/users.js";
import cors from "cors";
import topicsRouter from "./routes/topics.js";

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

const app = express();
const PORT = 5000;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}/`);
});

app.use(cors());

app.use("/api", router);

app.use("/api/questions", questionsRouter);

app.use("/api/quizes", quizesRouter);

app.use("/api/topics", topicsRouter);
app.use("/api/users", usersRouter);
