const express = require('express');
const { predictRisk } = require('../controllers/prediction.controller');

const router = express.Router();

router.post('/predict', predictRisk);

module.exports = router;
