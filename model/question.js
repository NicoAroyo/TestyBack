import mongoose from "mongoose";

const questionScheme = new mongoose.Schema({
  topic: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  displayVertically: {
    required: false,
    type: Boolean,
  },
  allowExplanation: {
    required: false,
    type: Boolean,
  },
  explanation: {
    required: false,
    type: String,
  },
  answers: {
    required: true,
    type: Array,
  },
  tags: {
    required: false,
    type: Array,
  },
});

export default mongoose.model("Question", questionScheme);
