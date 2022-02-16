const express = require("express")
const morgan = require('morgan')


const app = express()

const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`The server is running on the port ${port}`)
    
})

