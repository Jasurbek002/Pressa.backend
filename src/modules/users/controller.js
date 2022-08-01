const model = require('./model.js')
const {sign} = require('../../lib/jwt.js')

const LOGIN = async (req,res) =>{
    try {
        const user = await model.LOGIN(req.body)
        if(user){
             res.status(200).json({
                status:200,
                message:"sucssess",
                token:sign(user.user_id)
             })
        }else{
            res.status(404).json({
                status:404,
                message:"inwalid username or password",
                token:null
             })
        }
    } catch (error) {
        console.log(error)
    }
}

const REGISTER = async (req,res) =>{
    try {
        const user = await model.REGISTER(req.body)
        if(user){
            res.status(201).json({
               status:201,
               message:"you are registred",
               token:sign(user.user_id)
            })
       }else{
           res.status(404).json({
               status:404,
               message:"inwalid username or password",
               user:null
            })
       }
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    LOGIN ,REGISTER
}