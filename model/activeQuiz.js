import mongoose from "mongoose";

const activeQuizSchema = new mongoose.Schema({
  quiz: {
    required: true,
    type: Object,
  },
  user: {
    required: true,
    type: Object,
  },
});

export default mongoose.model("ActiveQuiz", activeQuizSchema);
