const db = require("../../config/db.config")
const Sale_Commission = db.Sale_Commission

exports.commission = async(req, res) => {
    try{
        const {total_amount} = req.body
        if(!total_amount){
            return res.status(400).json({
                message : "please provide the total amount "
            })
        }
        const user_commission = parseFloat(total_amount*.05)
        const commission = await Sale_Commission.create({
            total_sale_amount : total_amount,
            commission : user_commission
        })
        return res.status(200).json({
            status : true,
            message :"Payment successfull",
            data : commission
        })

    }
    catch(error){
        console.log("error", error)
        return res.status(500).json({error : "Internal server error"})
    }
}