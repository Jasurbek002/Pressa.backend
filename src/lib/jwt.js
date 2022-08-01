const jwt = require('jsonwebtoken')
const {secretkey} = require('../conifig.js')

module.exports = {
    sign:(paylod) => jwt.sign({paylod},secretkey),
    verify:(token) => jwt.verify(token,secretkey)
}