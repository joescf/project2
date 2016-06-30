const router = require('express').Router();

router.get('/user', function(req,res) {
  res.send('test 456');
});

module.exports = router;
