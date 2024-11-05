const controllers=require('./controllers');

class CryptoControllers extends controllers{
    async crypto(req,res,next){
        try {
            res.render('crypto/crypto');
        } catch (error) {
            next(error)
        }
    }
}
module.exports=new CryptoControllers;