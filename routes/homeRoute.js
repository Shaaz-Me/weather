const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController.js');
const errorController = require('../controllers/errorController.js');


router.get("/", home);

router.get("*", errorController);


module.exports = router;