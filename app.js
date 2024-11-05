const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const flash=require('connect-flash');
require('dotenv').config();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
    cookie:{expires:new Date(Date.now()+1000*3600*24*100)}
}));
app.use(flash());

app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/',require('./routers/RoutersControll'));


const port=process.env.ADD_PORT;
app.listen(port,()=>{
    console.log(`Conneting to port,port is ${port}`);
});