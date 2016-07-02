const router              = require('express').Router();
const { filterLaureates } = require('../models/laureate');
// const request          = require('request');
// const express          = require('express');
// const app              = express();


// const laureate        = require('../models/laureate');
// const filterLaureates = require('../models/laureate');

router.get('/',filterLaureates, function(req, res) {
res.send('hello');
});

module.exports = router;
