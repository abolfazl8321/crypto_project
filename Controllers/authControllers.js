const Controllers=require('./controllers');
const AuthControll=require('../models/authControll');
const Data=require('../models/Database');
const Joi=require('joi');
const flash=require('connect-flash');
const bcrypt=require('bcrypt');

class AuthControllers extends Controllers{
    async signUpForm(req,res,next){
        try {
            res.render('auth/signup');
        } catch (error) {
            next(error)
        }
    }
    async signInForm(req,res,next){
        try {
           res.render('auth/signin'); 
        } catch (error) {
            next(error);
        }
    }
    async signUp(req,res,next){
        try {
            const schema={
                username:Joi.string().min(5).max(50).required(),
                email:Joi.string().required(),
                password:Joi.string().min(8).max(15).required(),
                country:Joi.string().required()
            }
            const validationResult=Joi.object(schema).validate(req.body);
            if(validationResult.error){
                return req.flash('error',validationResult.error.details[0].message)
            }
            const user=await AuthControll.getUserByEmail(req.body.email);
            if(user){
                return req.flash('errors','user already exist');
            }
            const hashPass=bcrypt.hashSync(req.body.password,10);
            const result=await AuthControll.insertUser(req.body.username,
                req.body.email,hashPass,req.body.country);
                req.flash('message','Sign-Up is success');
                return res.redirect('/dashboard');
        } catch (error) {
            next(error);
        }
    }
    async signIn(req,res,next){
        try {
            const schema={
                email:Joi.string().required(),
                password:Joi.string().min(8).max(15).required(),
            }
            const validationResult=Joi.object(schema).validate(req.body);
            if(validationResult.error){
                return req.flash('error',validationResult.error.details[0].message)
            }
            const user=await AuthControll.getUserByEmail(req.body.email);
            if(!user){
               req.flash('errors','password or email is not valid!');
               return res.redirect('/')
            }
            const comparePass=bcrypt.compare(req.body.password,user.password);
            if(!comparePass){
                req.flash('errors','password or email is invalid');
                return res.redirect('/');
            }
            req.flash('message','Welcome,Sign-In is compeleted');
            return res.redirect('/dashboard');
        } catch (error) {
            next(error);
        }
    }
}

module.exports=new AuthControllers;