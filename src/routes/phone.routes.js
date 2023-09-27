const express = require('express')
const router = express.Router();
const phoneController = require('../controllers/phone.controllers')

router.get('/getAll',  phoneController.getAll())

module.exports = router;