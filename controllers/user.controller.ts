import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import { User } from "../models/user.model";
import { Post } from "../models/post.model";

//will inherit
export class UserController extends BaseController {
  constructor() {
    super(User);
  }
  async getPosts(req: Request, res: Response) {
    try {
      const data = await Post.find({ user: req.params.id }).populate("user");
      res.json({ data: data });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
}
