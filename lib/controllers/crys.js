const { Router } = require('express');
const Cry = require('../models/Cry.js');
const CryService = require('../services/CryServices.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const entry = await CryService.createEntry(req.body);
      res.send(entry);
    } catch (err) {
      next(err);
    }
  })
  
  .get('/', async (req, res, next) => {
    try {
      const entry = await Cry.getAll();
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .get('/crys', async (req, res, next) => {
    try {
      const entry = await Cry.getAllCrys();

      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .get('/entry/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const entry = await Cry.getById(id);
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .get('/:date', async (req, res, next) => {
    try {
      const { date } = req.params;
      const entry = await Cry.getEntriesByDate(date);
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .get('/crys/:date', async (req, res, next) => {
    try {
      const { date } = req.params;
      const entry = await Cry.getCrysByDate(date);
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .put('/update/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const entry = await CryService.updateEntry(id);
      res.send(entry);
    } catch(err) {
      next(err);
    }
  })

  .delete('/delete/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const entry = await CryService.deleteEntry(id);
      res.send({
        message: `Entry ${entry.id} was deleted.`
      });
    } catch (err) {
      next(err);
    }
  });
