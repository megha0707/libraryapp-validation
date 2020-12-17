const express = require(`express`);
const signupRouter=express.Router();
const Signupdata = require('../model/Signupdata');
function router(nav){

signupRouter.get('/',function(_req,res){
    res.render("signup",{
        nav,
         title:'Library',
    
    });
});
 signupRouter.post('/newsignup',function(req,res){
  var item = {
    name1:  req.body.name1,
    pn: req.body.pn,
    email2: req.body.email2,
    date: req.body.date,
    password2 :req.body.password2,
    confirm:req.body.confirm,
  }  
 var signup =  Signupdata(item);
 signup.save();
 res.redirect('/login');

});

  return signupRouter;
}
module.exports=router;


