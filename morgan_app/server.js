const express = require("express")
const morgan = require('morgan')// you have to install the module
const {v4:uuidv4}  = require('uuid')
const fs = require('fs')
const path = require('path')


const app = express()

const port = process.env.PORT||3000;

// creating morgan token 
morgan.token('id',function getid (req){
return req.id
})

// how to create token in morgan 
morgan.token('param',function(req,res,param){
    // const time =  + new Date()
    // return time;
    return "username";
})


app.use(assigned);
// use of morgan method

let thisfile = fs.createWriteStream(path.join(__dirname,"access.log"),{flags:'a'})


app.use(morgan(':id :method :param :status :url"HTTP/:http-version"'))// know more in morgan git hub page 
app.use(morgan(':param',{stream: thisfile}))

// rout 
app.get('/',(req,res)=>{
    res.end(" Morgan logger app is running ")
})

function assigned(req,res,next){
    req.id = uuidv4();
    next()
}


app.listen(port,()=>{
    console.log(`The server is running on the port ${port}`)
    
})

// using this techinque you can get the request of the user 
// you can get all the user information of the user request 
// you can store the information in your database as well


