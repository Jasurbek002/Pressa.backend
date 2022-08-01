const {fetch} = require('../../lib/postgres.js')
const {sign,verify} = require('../../lib/jwt.js')


const {POSTSELECT} = require('./query.js')

const POST = async ({adminname,password}) =>{
    try {
        let admin = await fetch(POSTSELECT,adminname,password)
      if(admin){
        admin.token = sign(admin.adminId,admin.status)
        delete admin.adminId
        delete admin.status
      }
        return admin
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    POST
}