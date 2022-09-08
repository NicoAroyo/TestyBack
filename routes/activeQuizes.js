import express from "express";
import Model from "../model/activeQuiz.js";

const activeQuizesRouter = express.Router();

//GET ALL http://localhost:5000/api/active-quizes/
activeQuizesRouter.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET ONE http://localhost:5000/api/active-quizes/{id}
activeQuizesRouter.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//PATCH http://localhost:5000/api/active-quizes/{id}
activeQuizesRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//POST http://localhost:5000/api/active-quizes/
activeQuizesRouter.post("/", async (req, res) => {
  const data = new Model({
    quiz: req.body.quiz,
    user: req.body.user,
  });
  console.log(data);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE http://localhost:5000/api/active-quizes/{id}
activeQuizesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Model.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET http://localhost:5000/api/questions/bytopic/{topic}
// activeQuizesRouter.get("/bytopic/:topic", async (req, res) => {
//   try {
//     const topic = req.params.topic;
//     const data = await Model.find({ topic: topic.toLowerCase() });

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

export default activeQuizesRouter;
