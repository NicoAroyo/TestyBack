import express from "express";
import Model from "../model/quiz.js";

const quizesRouter = express.Router();

//GET ALL http://localhost:5000/api/quizes/
quizesRouter.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//GET ONE http://localhost:5000/api/quizes/{id}
quizesRouter.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//PATCH http://localhost:5000/api/quizes/{id}
quizesRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

//POST http://localhost:5000/api/quizes/
quizesRouter.post("/", async (req, res) => {
  const data = new Model({
    topic: req.body.topic,
    language: req.body.language,
    name: req.body.name,
    passingGrade: req.body.passingGrade,
    showAnswers: req.body.showAnswers,
    instructions: req.body.instructions,
    passText: req.body.passText,
    failText: req.body.failText,
    questions: req.body.questions,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE http://localhost:5000/api/quizes/
quizesRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`${data} deleted`);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

quizesRouter.get("/bytopic/:topic", async (req, res)=>{
  try{
    const topic = req.params.topic;
    console.log(topic);
   console.log("hi");
    const data = await Model.find({topic : req.params.topic});
    
     res.json(data);
  }
 catch (error) {
  res.send(500).json({ message: error.message });
}
});

export default quizesRouter;
