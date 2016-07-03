const router                 = require('express').Router();
const { filterLaureatestwo } = require('../models/laureate');
// const request          = require('request');
// const express          = require('express');
// const app              = express();


// const laureate        = require('../models/laureate');
// const filterLaureates = require('../models/laureate');

router.get('/', filterLaureatestwo, function(req, res) {
res.render('searchNobel');
});

module.exports = router;
