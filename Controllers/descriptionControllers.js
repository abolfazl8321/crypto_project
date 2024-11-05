const Controllers=require('./controllers');

class descriptionController extends Controllers{
    async description(req,res,next){
        try {
            res.render('description');
        } catch (error) {
            next(error)
        }
    }
}
module.exports=new descriptionController;