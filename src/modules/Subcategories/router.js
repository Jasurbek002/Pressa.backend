const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
 
router.get('/subcategory',controller.GET)
router.get('/subcategory/:subId',controller.GET)
router.post('/subcategory',controller.POST)
router.put('/subcategory/:subId',controller.PUT)

module.exports = router