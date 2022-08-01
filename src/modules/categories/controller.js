const model = require('./model.js')

const GET = async (req,res) =>{
    try {
        const category = await model.GET(req.params)
        if(category){
            res.status(200).json({
                status:200,
                message:'sucssess',
                data:category
            })
        }else{
            res.status(404).json({
                status:404,
                message:'not found',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}



const POST = async (req,res) =>{
    try {
        const category = await model.POST(req.body)
        if(category){
            res.status(200).json({
                status:200,
                message:'new caregory add',
                data:category
            })
        }else{
            res.status(404).json({
                status:404,
                message:'bed request',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const PUT = async (req,res) =>{
    try {
        const category = await model.PUT(req.body,req.params)
        if(category){
            res.status(200).json({
                status:200,
                message:'new caregory add',
                data:category
            })
        }else{
            res.status(404).json({
                status:404,
                message:'bed request',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    GET , POST, PUT
}