const express = require(`express`);
const authorsRouter=express.Router();
const Authordata = require("../model/Authordata");
function router(nav){
    // var authors=[
    //     {
            
    //         author:'PAULO COELHO',
    //         genres:'Literary Fiction, Historical',
    //         img:"paulo1.jpg",
    //         about:'Published in over 100 countries, translated into 42 different languages, with over 21 million copies of his books sold internationally, Paulo Coelho can truly claim to be one of the most popular writers in the world.His writing is a visionary blend of spirituality, magical realism and folklore. His stories are simple and direct, yet they have the power to change lives and inspire you with the courage to follow your dreams...',
    //         books1:'The Alchemist (1993)',
    //         books2:'Manuscript Found in Accra (2013)',
           
    //     },
    //     {
           
    //         author:'AMISH TRIPATHI',
    //         genres:'Fantasy,Historical',
    //         img:"amish.jpg",
    //         about:'The success of his debut book, The Immortals of Meluha (Book 1 of the Shiva Trilogy), encouraged him to give up a fourteen-year-old career in financial services to focus on writing. He is passionate about history, mythology and philosophy, finding beauty and meaning in all world religions.',
    //         books1:'Shiva Trilogy',
    //         books2:'Ram Chandra',
            
    //      },
    //     {
           
    //         author:'ROBIN HOBB',
    //         genres:'Fantasy' ,
    //         img:"hobb.jpg",
    //         about:'Robin Hobb is a confirmed believer not just in research, but in attempting to experience the things she is writing about. When, at the age of ten, she moved with her family from California to Alaska, it shaped her as a writer more than any other experience in her life. In the early stages of her writing career she creating such fine works of modern fantasy as Wizard of the Pigeons, Harpys Flight, The Windsingers, and The Reindeer People.',
    //         books1:'The Ship Of Destiny (2000)',
    //         books2:'The City Of Dragons(2012)',
           
    //     },
    // ]
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){

        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    })
    });
    authorsRouter.get('/:id',function(req,res){
       const id=req.params.id
       Authordata.findOne({_id: id})
       .then(function(author){

       res.render('author',{
       nav,
       title:'Library',
       author
    });
  })
});
authorsRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOneAndDelete({_id:id})
        .then(function(authors){
            res.redirect('/authors');
        });
});

authorsRouter.get('/edit/:id',function(req,res){
const id = req.params.id;
Authordata.findOne({_id:id})
.then(function(author){
    res.render('editauthor',{
        nav,
        title:'Library',
        author 
    });
   })
    
});

authorsRouter.post('/edit/:id',function(req,res){
    const id = req.params.id;
   Authordata.findOne({_id:id})
        .then(function(author){
                if (!author){
                    return next(new Error('cant load'));
                }
                else {
                    var itemedit = {
                        title: req.body.title,
                        author: req.body.author,
                        genre:  req.body.genre,
                        image:  req.body.image,
                        books1:  req.body.books1,
                        books2:  req.body.books2,
                    }
                    // var authoredit = Authordata(itemedit);
                    // authoredit.save();
                    Authordata.findByIdAndUpdate(id,itemedit,(er,author1) => {
                        res.redirect('/authors/'+author1._id);
                    });
                }
        });
});
    return authorsRouter;
}
module.exports=router;