import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

export default mongoose.model("Topic", topicSchema);
