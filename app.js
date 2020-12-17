const express = require(`express`);
// const booksRouter=express.Router();
const app= express();

const nav=[
    // {
    //     link:'/books',name:'Books'
    // },
    // {
    //     link:'/authors',name:'Authors'
    //  },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Login'
    }],    
   
booksRouter=require('./src/routes/bookRoutes')(nav)
authorsRouter=require('./src/routes/authorRoutes')(nav)
addbookRouter=require('./src/routes/addbookRoutes')(nav)
 addauthorRouter=require('./src/routes/addauthorRoutes')(nav)
loginRouter=require('./src/routes/loginRoutes')(nav)
signupRouter=require('./src/routes/signupRoutes')(nav)
app.use(express.urlencoded({extended:true}));
app.use(express.static(`./public`));
app.set(`view engine`,`ejs`);
app.set(`views`,__dirname+`/src/views`);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
 app.use('/addbook',addbookRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
 app.use('/addauthor',addauthorRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        
        title:'Library'
    });
});

app.listen(5000);