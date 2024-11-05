const express=require('express');
const router=express.Router();
const AuthControllers=require('../Controllers/authControllers');


router.get('/signup',AuthControllers.signUpForm.bind(AuthControllers));
router.get('/signin',AuthControllers.signInForm.bind(AuthControllers));
router.post('/signup',AuthControllers.signUp.bind(AuthControllers));
router.post('/signin',AuthControllers.signIn.bind(AuthControllers));

module.exports=router;