const express = require('express')
const path = require("path")
const fs = require("fs")

const app = express()

const port = process.env.PORT||3000
// middleware
app.use(function(req,res,next){
    console.log("resuest date:" + new Date());
  
    next()
})




// another middleware 
app.use(function(req,res,next){
    var filepath = path.join(__dirname,"static",req.url)// create a path module to access all the static file 
// " req.url" this variable will return the user requested url
// store everithing in the filepath variable 
    fs.stat(filepath,function(err,fileinfo){               
     if(err){
         next();
         return
     }
     if(fileinfo.isFile()){  // if this is a file then just send the file 
         res.sendFile(filepath);// and if this is not a file then move to the next middleware
     }else
     {
         next()
     }
    })                                

})


// 404 middleware handeler 
// the middleware will exicute only if the file is not found

app.use((req,res)=>{
    res.status(404)
    res.send('file not fond')
})



app.listen(port,()=>{console.log(` the server is running in http://localhost:${port}`)})
