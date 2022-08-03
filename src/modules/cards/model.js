const {GETSELECT,PENDINGGET,DELETEDGET,POSTSELECT, PUTSELECT, DELETESELECT,ADMINACTIVED} = require('./query.js')
const {fetchAll,fetch} = require('../../lib/postgres.js')
const GET = async ({cardId}) =>{
    try {
        let cards = await fetchAll(GETSELECT)
        if(cardId) cards = cards.find(card => card.card_id == cardId)
        return cards
    } catch (error) {
        console.log(error)
    }
}

const GETACTIVED = async () =>{
    try {
        let cards = await fetchAll(PENDINGGET)
        return cards
    } catch (error) {
        console.log(error)
    }
}

const GETDELETED = async () =>{
    try {
        let cards = await fetchAll(DELETEDGET)
        return cards
    } catch (error) {
        console.log(error)
    }
}





const POST = async ({sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,thema,company},{filename}) =>{
    console.log(sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,thema,company,filename)
    try {
        let cards = await fetch(POSTSELECT,sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,filename,thema,company)
        return cards
    } catch (error) {
        console.log(error)
    }
}

const PUT = async ({sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,thema,status,company},{filename},{cardId}) =>{
    try {
        let cards = await fetch(PUTSELECT,sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,filename,thema,status,company,cardId)
        return cards
    } catch (error) {
        console.log(error)
    }
}

const DELETE = async ({status},{cardId}) =>{
    try {
        let cards = await fetch(DELETESELECT,status,cardId)
        return cards
    } catch (error) {
        console.log(error)
    }
}


const ADMINACTIVE = async ({status},{cardId}) =>{
    try {
        let cards = await fetch(ADMINACTIVED,status,cardId)
        return cards
    } catch (error) {
        console.log(error)
    }
}



module.exports ={
    GET,GETACTIVED,GETDELETED, POST , PUT , DELETE , ADMINACTIVE
}