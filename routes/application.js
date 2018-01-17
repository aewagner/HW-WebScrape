const express = require('express');
const router = express.Router();

const app_controller = require('../controllers/app_controller');

router.get('/', app_controller.index);


module.exports = router;