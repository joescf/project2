const dbConnection                    = require('http://api.nobelprize.org/v1/laureate.json');


module.exports = {
  filterLaureates: function (req, res, next) {
    console.log('dbConnection');
    next();
  }
}









    // const filterObj = {};
    // if ('year' in req.query) {
    //   filterObj = ['year'] = req.query.year
    // }
