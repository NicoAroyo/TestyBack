import express from "express";
import Model from "../model/question.js";

const questionsRouter = express.Router();

//GET ALL http://localhost:5000/api/questions/
questionsRouter.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//GET ONE http://localhost:5000/api/questions/{id}
questionsRouter.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//PATCH http://localhost:5000/api/questions/{id}
questionsRouter.patch("/:id", async (req, res) => {
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

//POST http://localhost:5000/api/questions/
questionsRouter.post("/", async (req, res) => {
  const data = new Model({
    topic: req.body.topic,
    content: req.body.content,
    type: req.body.type,
    displayVertically: req.body.displayVertically,
    allowExplanation: req.body.allowExplanation,
    explanation: req.body.explanation,
    answers: req.body.answers,
    tags: req.body.tags,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE http://localhost:5000/api/questions/{id}
questionsRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`${data} deleted`);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
});

questionsRouter.get("/bytopic/:topic", async (req, res)=>{
  try{
    const topic = req.params.topic;
    console.log(topic);
   console.log("hi");
    const data = await Model.find({topic : req.params.topic.toLowerCase()});
    
     res.json(data);
  }
 catch (error) {
  res.send(500).json({ message: error.message });
}
});
export default questionsRouter;
