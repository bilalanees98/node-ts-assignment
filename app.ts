import * as dotenv from "dotenv";
import express from "express";
import { postRouter } from "./routes/post.routes";
import { userRouter } from "./routes/user.routes";
import mongoose from "mongoose";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(postRouter);
app.use(userRouter);

const options: Object = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect("mongodb://127.0.0.1:27017/test-ts", options)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
