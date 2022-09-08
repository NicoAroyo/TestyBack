import mongoose from "mongoose";
import user from "./user.js";

const reportScheme = new mongoose.Schema({
  grade: {
    required: true,
    type: Number,
  },
  student: {
    required: true,
    type: Object,
  },
  quizId: {
    required: true,
    type: String,
  },
  date: {
    required: false,
    type: Date,
    default: Date.now(),
  },
  questions: {
    required: true,
    type: Array,
  },
});

export default mongoose.model("Report", reportScheme);
