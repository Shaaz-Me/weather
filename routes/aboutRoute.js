const express = require('express');
const router = express.Router();
const about = require('../controllers/aboutController.js');
const errorController = require('../controllers/errorController.js');


router.get("/", about);

router.get("*", errorController);


module.exports = router;