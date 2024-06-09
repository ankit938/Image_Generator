const express= require('express');
const imageRouter=express.Router();
const{generateImage}=require('../controllers/imageController.js');

imageRouter.route('/').post(generateImage)

module.exports=imageRouter;



