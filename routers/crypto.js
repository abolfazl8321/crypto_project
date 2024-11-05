const express=require('express');
const cryptoControllers = require('../Controllers/cryptoControllers');
const router=express.Router();

router.get('/',cryptoControllers.crypto.bind(cryptoControllers));

module.exports=router;