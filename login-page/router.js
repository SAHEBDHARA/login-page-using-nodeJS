var express = require('express');
var router = express.Router();

const credential = {
    email:"admin@gmail.com",
    password:"12345"
}

// log in user
router.post('/login',(req,res)=>{
    if(req.body.email = credential.email&&req.body.password == credential.password){
    req.session.user = req.body.email;
    res.redirect('/route/dashboard')
    // res.end('loged in succssfully.. ')
    }
    else{
        res.end('invelid Username')
    }

})

// route for dashboard 
router.get('/dashboard',(req,res)=>{
  if(req.session.user){
      res.render('dashboard',{user:req.session.user})
  }
  else{
      res.send('Unauthotized User')
  }
})

// rout logout

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("Error")
        }else{
            res.render('base',{title: 'Express', logout:'log out successfully'})
        }
    })
})

module.exports = router;