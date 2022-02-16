const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const session = require("express-session")
const {v4:uuid4} =require("uuid");
const router = require('./router')
// const mongoose = require('mongoose')
// require('dotenv').config()



const app = express();

const port = process.env.PORT || 3000;
 // bodyparser is responsible for passing the incoming request body in the middleware before you use it 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


app.set('view engine','ejs');

// mongoose.connect('mongodb+srv://loginsection:loginsection@cluster0.qzc4l.mongodb.net/loginDatabase?retryWrites=true&w=majority')



//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/picture',express.static(path.join(__dirname,'public/picture')))


app.use(session({
    secret:uuid4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router);


// home rout 
app.get('/',(req,res)=>{
    res.render('base',{titl:"login system"});
}).listen(port,()=>{
    console.log("the server is running")
})