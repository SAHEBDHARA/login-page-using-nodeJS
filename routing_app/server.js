const express = require('express')
const app = express()
const route = require('./router')

const port = 3000 

// middleware function
app.use('/api',route)

// rout 
app.get('/',(req,res)=>{
    res.send('rout application')
})
 
app.listen(port,()=>{
console.log('the server is running in the port 3000')
})
