const express = require(`express`);
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');
function router(nav){

addauthorRouter.get('/',function(_req,res){
    res.render("addauthor",{
        nav,
        title:'Library',
    
    });
});
addauthorRouter.post('/add',function(req,res){
  var item={
    title:req.body.title,
    genre:req.body.genre,
    about:req.body.about,
    books1:req.body.books1,
    books2:req.body.books2,
    image:req.body.image,
 }
    var author= Authordata(item);
    author.save();
    res.redirect('/authors');
 });
  return addauthorRouter;
}
module.exports=router;


