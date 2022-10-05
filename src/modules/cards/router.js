const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
 
router.get('/api-49',controller.GET_API)
router.get('/cards',controller.GET)

router.get('/cards/admin/pending',controller.GETPENDEING)
router.get('/cards/admin/deleted',controller.GETDELETED)

router.get('/cards/:cardId',controller.GET)
router.post('/cards',controller.upload,controller.POST)
router.put('/cards/:cardId',controller.upload,controller.PUT)
router.delete('/cards/:cardId',controller.DELETED)
router.put('/cards/admin/:cardId',controller.ADMINACTIVE)



module.exports = router