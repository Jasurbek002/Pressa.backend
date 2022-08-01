const { fetchAll,fetch } = require('../../lib/postgres.js')
const {GETSELECT,POSTSELECT,PUTSELECT} = require('./query.js')


const GET = async ({categoryId}) =>{
    try {
        let category = await fetchAll(GETSELECT)
        if(categoryId) category = category.find(category => category.category_id == categoryId)
        return category
    } catch (error) {
        console.log(error)
    }
}
const POST = async ({categoryName}) =>{
try {
    let category = await fetch(POSTSELECT,categoryName)
    return category
} catch (error) {
    console.log(error)
}
}


const PUT = async ({categoryName},{categoryId}) =>{
    try {
        let category = await fetch(PUTSELECT,categoryName,categoryId)
        
        return category
    } catch (error) {
        console.log(error)
    }
    }

module.exports = {
    GET,POST,PUT
}