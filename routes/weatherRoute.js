const express = require('express');
const router = express.Router();
const {weatherGet,weatherPost} = require('../controllers/weatherController.js');
const errorController = require('../controllers/errorController.js');


router.get("/", weatherGet);
router.post("/",weatherPost);

router.get("*", errorController);


module.exports = router;