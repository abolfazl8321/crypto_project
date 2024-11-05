const express=require('express');
const router=express.Router();
const descriptionController=require('../Controllers/descriptionControllers');

router.get('/',descriptionController.description.bind(descriptionController));

module.exports=router;