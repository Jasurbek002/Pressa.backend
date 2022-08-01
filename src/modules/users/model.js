const {LOGINSELECT , REGISTERSELECT} = require('./query.js')
const {fetch} = require('../../lib/postgres.js')
const {verify} = require('../../lib/jwt.js')

const LOGIN = async ({username,password}) =>{
    try {
        let user = await fetch(LOGINSELECT,username,password)
        return user
    } catch (error) {
        console.log(error);
    }
}

const REGISTER = async ({username,password,gender}) =>{
    try {
        let user = await fetch(REGISTERSELECT,username,password,gender)
        return user
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    LOGIN , REGISTER
}