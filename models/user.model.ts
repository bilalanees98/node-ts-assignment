import mongoose from "mongoose";

const modelName = "Users";

interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  about?: string;
  picture?: string;
}
const schema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, select: false },
    phoneNumber: { type: String },
    about: { type: String },
    picture: {
      type: String,
      default: "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    },
    createdAt: { type: Date, default: Date.now, select: false },
    updatedAt: { type: Date, default: Date.now, select: false },
  },
  { collection: modelName }
);

const User: mongoose.Model<UserInterface> = mongoose.model<UserInterface>(
  modelName,
  schema
);

export { User, UserInterface };
