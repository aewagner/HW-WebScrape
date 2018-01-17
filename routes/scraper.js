const express = require('express');
const router = express.Router();

const scraper_controller = require('../controllers/scraper_controller');

router.get('/', scraper_controller.scraper)

module.exports = router;