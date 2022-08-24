import express from "express";
import bodyParser from "body-parser";
import questionsRoutes from "./routes/questions.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/questions", questionsRoutes);

app.get("/", (req, res) => res.send("handling your request..."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
