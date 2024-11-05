const Controller=require('./controllers');
const authControllers = require('./authControllers');

class DashboardController extends Controller{
    async dashboard(req,res,next){
        try {
            return res.render('dashboard');
        } catch (error) {
            next(error)
        }
    }
    
}
module.exports=new DashboardController;