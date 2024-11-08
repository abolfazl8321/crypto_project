const Controllers=require('./controllers');

class TransactionRender extends Controllers{
    async withdraw(req,res,next){
        try {
            res.render('crypto/withdraw');
        } catch (error) {
            next(error)
        }
    }
    async deposit(req,res,next){
        try {
            res.render('crypto/deposit');
        } catch (error) {
            next(error)
        }
    }
    async wealth(req,res,next){
        try {
            res.render('crypto/wealthTransfer');
        } catch (error) {
            next(error)
        }
    }
}
module.exports=new TransactionRender;