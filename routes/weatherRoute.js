const express = require('express');
const router = express.Router();
const {weatherGet,weatherPost} = require('../controllers/weatherController.js');


router.get("/", weatherGet);
router.post("/",weatherPost);



module.exports = router;