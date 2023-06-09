import mongoose from "mongoose";

const quizScheme = new mongoose.Schema({
  topic: {
    required: true,
    type: String,
  },
  language: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  passingGrade: {
    required: true,
    type: Number,
  },
  showAnswers: {
    required: false,
    type: Boolean,
  },
  instructions: {
    required: false,
    type: String,
  },
  passText: {
    required: false,
    type: String,
    default : "pass"
  },
  failText: {
    required: false,
    type: String,
    default : "fail"
  },
  questions: {
    required: true,
    type: Array,
  },
});

export default mongoose.model("Quiz", quizScheme);
