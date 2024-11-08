const express=require('express');
const router=express.Router();
const authRouter=require('./auth');
const dashboardRouter=require('./dashboard');
const descriptionRouter=require('./description');
const cryptoRouter=require('./crypto');
const transactionRouter=require('./transaction');
require('dotenv').config();

router.use('/auth',authRouter);
router.use('/dashboard',dashboardRouter);
router.use('/description',descriptionRouter);
router.use('/crypto',cryptoRouter);
router.use('/transaction',transactionRouter);
router.get('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err){
            return res.status(500).json({message:  "Error during logout."});
        }
        res.redirect('/');
    })
})

router.all('*',(req,res,next)=>{
    try {
        const err=new Error(`This Request Is Not Defind`);
        err.status=404;
        throw err;
    } catch (err) {
        next(err);
    }
});
router.use((err,req,res,next)=>{
    const code=err.status || 500;
    const message=err.message || "";
    const stack=err.stack || "";

    if(process.env.DEBUG){
        return res.render('errors/error',{message,stack});
    }else{
        return res.render(`errors/status`,{code,message});
    }
});

module.exports=router;