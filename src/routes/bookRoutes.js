const express = require(`express`);

const booksRouter=express.Router();
const Bookdata = require("../model/Bookdata");
function router(nav){
    // var books=[
    //     {
    //         title: 'Tom & Jerry',
    //         author:'Joesph Barbera',
    //         genre:'Cartoon',
    //         image:"TomandJerry.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         image:"harrypotter.jpg"
    //     },
    //     {
    //         title: 'Paatumayude Aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         image:"pic3.jpg"
    //     },
    // ]
    booksRouter.get('/',function(req,res){
      Bookdata.find()
      .then(function(books){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    })
});
    booksRouter.get('/:id',function(req,res){
       const id=req.params.id;
       Bookdata.findOne({_id: id})
       .then(function(book){
       res.render("book",{
       nav,
       title:'Library',
       book
       
    });
 })
});
booksRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOneAndDelete({_id:id})
        .then(function(books){
            res.redirect('/books');
        });
});

booksRouter.get('/edit/:id',function(req,res){
const id = req.params.id;
Bookdata.findOne({_id:id})
.then(function(book){
    res.render('editbook',{
        nav,
        title:'Library',
        book 
    });
   })
    
});

booksRouter.post('/edit/:id',function(req,res){
    const id = req.params.id;
   Bookdata.findOne({_id:id})
        .then(function(book){
                if (!book){
                    return next(new Error('cant load'));
                }
                else {
                    var itemedit = {
                        title: req.body.title,
                        author: req.body.author,
                        genre:  req.body.genre,
                        image:  req.body.image
                    }
                    // var authoredit = Authordata(itemedit);
                    // authoredit.save();
                    Bookdata.findByIdAndUpdate(id,itemedit,(er,book1) => {
                        res.redirect('/books/'+book1._id);
                    });
                }
        });
});
 return booksRouter;
}
module.exports=router;