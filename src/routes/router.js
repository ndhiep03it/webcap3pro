import express from 'express';
import upload from '../config/multer.js'; // Assuming multer is configured in this file

const router = express.Router();

const webRoutes = (app) => {
  // Route homepage
  router.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });

  // Mount router vào app
  app.use('/', router);
};

export default webRoutes;
