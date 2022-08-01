const model = require('./model.js')

const GET = async (req,res) =>{
    try {
        const subCategory = await model.GET(req.params)
        if(subCategory){
            res.status(200).json({
                status:200,
                message:'sucsses',
                data:subCategory
            })
        }else{
            res.status(400).json({
                status:400,
                message:'bed reques',
                data:null
            })
        }

    } catch (error) {
        console.log(error)
    }
}


const POST = async (req,res) =>{
    try {
        const subCategory = await model.POST(req.body)
        if(subCategory){
            res.status(201).json({
                status:201,
                message:'new subcategory added',
                data:subCategory
            })
        }else{
            res.status(400).json({
                status:400,
                message:'bed reques',
                data:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const PUT = async (req,res) =>{
    try {
            const subCategory = await model.PUT(req.body,req.params)
            if(subCategory){
                res.status(200).json({
                    status:200,
                    message:'updated subcategory',
                    data:subCategory
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

module.exports = {
    GET , POST ,PUT
}