const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
 
router.post('/admin/login',controller.POST)

module.exports = router