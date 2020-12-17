const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fbsv2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    title:String,
    genre:String,
    about:String,
    books1:String,
    books2:String,
    image:String,
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;