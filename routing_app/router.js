

const express = require('express')

const route = express.Router()
const account = require('./database')


// simple get requiest 
route.get('/account',(req,res)=>{
res.json({UserData: account})
})

module.exports = route;