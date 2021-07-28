import { Router } from 'express';
import Cry from '../models/Cry';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const entry = await Cry.create(req.body);
      res.send(entry);
    } catch (err) {
      next(err);
    }
  });