const express = require("express")
const morgan = require('morgan')// you have to install the module
const {v4:uuidv4}  = require('uuid')


const app = express()

const port = process.env.PORT||3000;

// creating morgan token 
morgan.token('id',function getid (req){
return req.id
})

// how to use tken in morgan 
morgan.token('param',function(req,res,param){
    return "userToken";
})


app.use(assigned);
// use of morgan method
app.use(morgan(':id :method :status :url"HTTP/:http-version"'))// know more in morgan git hub page 

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

