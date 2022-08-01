const {GETSELECT,POSTSELECT,PUTSELECT} = require('./query.js')
const {fetchAll,fetch} = require('../../lib/postgres.js')


const GET = async ({subId}) =>{
    try {
        let subCtegory = await fetchAll(GETSELECT)
         if(subId) subCtegory = subCtegory.find(sub => sub.sub_id == subId)
        return subCtegory
    } catch (error) {
        console.log(error)
    }
}

const POST = async ({subname,categoryId}) =>{
    try {
        let subCtegory = await fetch(POSTSELECT,subname,categoryId)
        return subCtegory
    } catch (error) {
        console.log(error)
    }
}

const PUT = async ({subname,categoryId},{subId}) =>{
    try {
        let subCtegory = await fetch(PUTSELECT,subname,categoryId,subId)
        return subCtegory
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    GET ,POST , PUT
}