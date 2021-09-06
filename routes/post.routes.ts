import express = require("express");
export const router = express.Router();

import { PostController } from "../controllers/post.controller";
const base = "/posts";

const postController = new PostController();

//Routes - pass req, res object to each function - will prolly have to make these async at some point
router.get(`${base}`, (req, res) => {
  postController.findAll(req, res);
});
router.get(`${base}/:id`, (req, res) => {
  postController.findById(req, res);
});
router.post(`${base}`, (req, res) => {
  postController.create(req, res);
});
router.put(`${base}/:id`, (req, res) => {
  postController.update(req, res);
});
router.delete(`${base}/:id`, (req, res) => {
  postController.delete(req, res);
});
