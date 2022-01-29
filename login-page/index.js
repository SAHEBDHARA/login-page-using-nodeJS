const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs');
//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/picture',express.static(path.join(__dirname,'public/picture')))
// home rout 
app.get('/',(req,res)=>{
    res.render('base',{title:"login system"});
}).listen(port,()=>{
    console.log("the server is running")
})