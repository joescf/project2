const router = require('express').Router();

router.get('/newuser', function(req,res) {
  res.render('user/newUser');
});


module.exports = router;
