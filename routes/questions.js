import express from "express";
import { questionsData as data } from "../bs-data/questionsData.js";

const router = express.Router();

let questionsData = data;

router.get("/", (req, res) => {
  res.send(questionsData);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const question = questionsData.find((q) => q.id === id);
  res.send(question);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const questionToUpdate = questionsData.find((q) => q.id === id);
  questionToUpdate.tags = req.body.tags;
  questionToUpdate.allowExplanation = req.body.allowExplanation;
  questionToUpdate.answers = req.body.answers;
  questionToUpdate.carrectAnswer = req.body.carrectAnswer;
  questionToUpdate.content = req.body.content;
  questionToUpdate.displayVertically = req.body.displayVertically;
  questionToUpdate.topicId = req.body.topicId;
  questionToUpdate.type = req.body.type;

  res.send("question updated");
});

router.post("/", (req, res) => {
  const question = {
    ...req.body,
    id: questionsData[questionsData.length - 1] + 1,
  };
  questionsData.push(question);
  res.send("question added successfuly");
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  questionsData = questionsData.filter((q) => q.id !== id);
  res.send("question deleted successfuly");
});

export default router;
