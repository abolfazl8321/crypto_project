const Data = require('../models/Database');
const Controllers=require('./controllers');
const Joi=require('joi');
const flash=require('connect-flash');
const TrControll = require('../models/TrControll');

//TrControllers=transactionControllers
class TrControllers extends Controllers{
    async deposit(req,res,next){
        try {
            const schema={
                wealth:Joi.number().min(50).max(10000000).required().messages(
                   {"number.min":"The minimum price for a Transmission is $50"})
            }
            const validateResult=Joi.object(schema).validate(req.body);
            if(validateResult.error){
                req.flash('error',validateResult.error.details[0].message);
                return res.redirect('/dashboard');
            }
            const amount=req.body.withdraw;
            const newDeposit=await TrControll.insertDeposit(amount);
            req.flash('message','The money has been deposited into your account');
            res.redirect('/dashboard');
            return newDeposit;
        } catch (error) {
            next(error)
        }
    }
    async withdraw(req,res,next){
        try {
            const schema={
                wealth:Joi.number().min(50).max(10000000).required().messages(
                   {"number.min":"The minimum price for a Transmission is $50"})
            }
            const validateResult=Joi.object(schema).validate(req.body);
            if(validateResult.error){
                req.flash('error',validateResult.error.details[0].message);
                return res.redirect('/dashboard');
            }
            const order_id=req.body.id;
            const [wealth]=await Data.query(`select wealth from orders where order_id=?`,[order_id]);
            if(!wealth){
                req.flash('message','Please first add money to your accuont');
                return res.redirect('/transaction/deposit');
            }
        } catch (error) {
            next(error)
        }
    }
}
module.exports=new TrControllers;