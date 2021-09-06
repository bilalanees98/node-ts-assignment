import { Request, Response } from "express";
import mongoose from "mongoose";

//basecontroller class
//with findAll, findById, create, update and delete methods

//we will keep a model instance in this class, whenever child instance will call parent function operations will be done via that model

export class BaseController {
  model: mongoose.Model<any>;
  constructor(model: mongoose.Model<any>) {
    this.model = model;
  }

  async findAll(req: Request, res: Response) {
    try {
      const data = await this.model
        .find()
        .sort({ _id: -1 })
        .skip(req.query.offset ? parseInt(req.query.offset as string) : 0)
        .limit(req.query.limit ? parseInt(req.query.limit as string) : 0);

      res.json({ data: data });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
  async findById(req: Request, res: Response) {
    try {
      const data = await this.model.findOne({ _id: req.params.id });
      res.json({ data: data });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const data = await this.model.create(req.body);
      res.json({ data: data });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const post = await this.model.updateOne({ _id: req.params.id }, req.body);
      res.json({ data: post });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const post = await this.model.remove({ _id: req.params.id });
      res.json({ data: post });
    } catch (error: unknown) {
      res.json({ error: error });
    }
  }
}
