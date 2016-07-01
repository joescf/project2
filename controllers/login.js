const router = require('express').Router();

router.get('/login', function(req,res) {
  res.render('user/login');
});

module.exports = router;
