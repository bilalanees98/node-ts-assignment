import { BaseController } from "./base.controller";
import { Post } from "../models/post.model";

//will inherit
export class PostController extends BaseController {
  constructor() {
    super(Post);
  }
}
