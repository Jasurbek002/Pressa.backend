 const model = require('./model.js')

 const POST = async (req,res) =>{
 
    try {
        const admin = await model.POST(req.body)
        
        if(admin){
            res.status(200).json({
                status:200,
                message:'Your registred',
                data:admin
            })
        }else{
            res.status(403).json({
                status:403,
                message:'invalin password or username',
                data:null
            })
        }
    } catch (error) {
        console.log(error);
    }
 }

 module.exports ={
    POST
 }