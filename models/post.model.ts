import mongoose from "mongoose";

interface PostInterface {
  title: string;
  description: string;
  user?: string;
}
const modelName: string = "Posts";
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  { collection: modelName, timestamps: true }
);

const Post: mongoose.Model<PostInterface> = mongoose.model<PostInterface>(
  modelName,
  schema
);

export { Post, PostInterface };
