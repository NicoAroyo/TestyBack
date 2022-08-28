import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import { router } from "./routes/routes.js";
import questionsRouter from "./routes/questions.js";
import quizesRouter from "./routes/quizes.js";
<<<<<<< HEAD
// import usersRouter from "./routes/users.js";
=======
import usersRouter from "./routes/users.js";
>>>>>>> 4b46555ae0ef8d214c0afc2cda7b347c5a4217a5
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
<<<<<<< HEAD

// app.use("/api/users", usersRouter);
=======
app.use("/api/users", usersRouter);
>>>>>>> 4b46555ae0ef8d214c0afc2cda7b347c5a4217a5
