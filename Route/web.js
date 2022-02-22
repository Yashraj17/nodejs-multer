const express = require('express')
const router = express.Router();
const HomeController = require('../Controller/HomeController');
const upload =require('../Middleware/upload')

router.get('/',HomeController.index);
router.post('/insert',upload.single('image'),HomeController.insert);

module.exports =router
