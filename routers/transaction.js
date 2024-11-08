const express=require('express');
const router=express.Router();
const TransactionRender=require('../Controllers/transactionRender');
const TrControllers = require('../Controllers/TrControllers');

router.get('/withdraw',TransactionRender.withdraw.bind(TransactionRender));
router.get('/deposit',TransactionRender.deposit.bind(TransactionRender));
router.get('/wealth',TransactionRender.wealth.bind(TransactionRender));
router.post('/withdraw');
router.post('/deposit',TrControllers.deposit.bind(TrControllers));

module.exports=router;
