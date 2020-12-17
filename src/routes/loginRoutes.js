const express = require(`express`);
const loginRouter=express.Router();
const Signupdata = require('../model/Signupdata');
function router(nav){

loginRouter.get('/',function(_req,res){
    res.render("login",{
        nav,
        title:'Library',
        loginError : ""
    });
});
loginRouter.post("/add", (req, res) => {
  let email1 = req.body.email;
  let password1 = req.body.password;
  Signupdata.findOne({email2:email1,password2:password1})
  .then((signup)=>
        {
         if(signup==null){
         res.render("login",
         { 
            nav,
         title:'Library',
         loginError : "Please enter email or password given in signup form"
         });
        
        
          res.redirect('/login');
          
        }
        else
        {
         
         
       
          res.redirect('/books');
          
        }
        })
});
  return loginRouter;
}
module.exports=router;


