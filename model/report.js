import mongoose from "mongoose";
import user from "./user";

const reportScheme = new mongoose.Schema({
  grade: {
    required: true,
    type: Number,
  },
  student: {
    required: true,
    type: user,
  },
  quizId: {
    required: true,
    type: String,
  },
});

export default mongoose.model("Report", quizScheme);
