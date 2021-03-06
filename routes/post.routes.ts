import express = require("express");
const router = express.Router();

import { PostController } from "../controllers/post.controller";
const base = "/posts";

const controller = new PostController();

//Routes - pass req, res object to each function - will prolly have to make these async at some point
router.get(`${base}`, (req, res) => {
  controller.findAll(req, res);
});
router.get(`${base}/:id`, (req, res) => {
  controller.findById(req, res);
});
router.post(`${base}`, (req, res) => {
  controller.create(req, res);
});
router.put(`${base}/:id`, (req, res) => {
  controller.update(req, res);
});
router.delete(`${base}/:id`, (req, res) => {
  controller.delete(req, res);
});
export { router as postRouter };
