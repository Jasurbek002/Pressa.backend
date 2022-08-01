const adminRouter = require('../modules/Admin/router.js')
const userRouter = require('./users/router.js')
const categoryRouter = require('./categories/router.js')
const subRouter = require('./Subcategories/router.js')
const cardRouter = require('./cards/router.js')
module.exports = [
    adminRouter,
    userRouter,
    subRouter,
    categoryRouter,
    cardRouter
]