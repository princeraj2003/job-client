// routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.route('/fetchDataFromJobSearchAPI')
  .get(controller. fetchDataFromJobSearchAPI);

module.exports = router;
