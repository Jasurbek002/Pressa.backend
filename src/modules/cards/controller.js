const model = require('./model.js')
const multer = require('../../lib/multer.js')
const upload = multer.single('cardImg')
const GET = async (req,res) =>{
    try {
        const cards = await model.GET(req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const GETPENDEING = async (req,res) =>{
    try {
        const cards = await model.GETACTIVED()
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const GETDELETED = async (req,res) =>{
    try {
        const cards = await model.GETDELETED()
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(404).json({
                status:404,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const POST = async (req,res) =>{
    console.log(req.body,req.file)
    try {
        const cards = await model.POST(req.body,req.files)
        if(cards){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const PUT = async (req,res) =>{
    try {
        const cards = await model.PUT(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'updated',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const DELETED = async (req,res) =>{
    try {
        const cards = await model.DELETE(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'deleted',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const ADMINACTIVE = async (req,res) =>{
    try {
        const cards = await model.ADMINACTIVE(req.body,req.params)
        if(cards){
            res.status(200).json({
                status:200,
                message:'actived',
                data:cards
            })
        }else{
            res.status(200).json({
                status:200,
                message:'cards not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    GET,GETPENDEING,GETDELETED, POST ,PUT , DELETED ,ADMINACTIVE , upload 
}