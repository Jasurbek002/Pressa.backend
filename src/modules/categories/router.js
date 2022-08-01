const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
 
router.get('/category',controller.GET)
router.get('/category/:categoryId',controller.GET)
router.post('/category',controller.POST)
router.put('/category/:categoryId',controller.PUT)


module.exports = router