const router = require('express').Router();
const { createUser, loginUser } = require('../models/passwords');

router.get('/new', function(req,res) {
  res.render('user/newUser');
});

router.post('/new', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('/');
});

router.get('/login', function(req,res) {
  res.render('user/login');
});

router.post('/login', loginUser,function(req,res) {
  console.log(res.user);
  req.session.user = res.newuser;

  req.session.save(function(err) {
    if(err) throw err;
    res.redirect('../api');
  });
});

router.delete('/logout', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});









module.exports = router;
