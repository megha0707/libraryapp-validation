const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fbsv2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    name1:String,
    pn:Number,
    email2:String,
    date:String,
    password2:String,
    confirm:String,
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;