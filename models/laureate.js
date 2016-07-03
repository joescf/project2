const request     = require('request');
const apiURL      = 'http://api.nobelprize.org/v1/laureate.json';
const apiURL2     = 'http://api.nobelprize.org/v1/prize.json';


// function filterByName(name, data) {
//   data.filter(laureate => {
//     return laureate.firstname === name;
//   });
// }
 module.exports = {filterLaureates, filterLaureatestwo}
   function filterLaureates(req, res, next) {
//use request to get data
      request({
      url: apiURL,
      method:'get',
      qs: {

      },
      json:true
    },(err,result,body)=>{
      if (err) throw err;
      // console.log(result);
      res.send(result)
    next();
    })
}
// module.exports = {
 function filterLaureatestwo(req, res, next) {
//use request to get data
      request({
      url: apiURL2,
      method:'get',
      qs: {},
      json:true
    },(err,result,body)=>{
      if (err) throw err;
      // console.log(result);
      // res.send(result)
    next();
    })
  }
// }





// module.exports = {
//   filterLaureates: function(req, res, next) {



//       // inside that request, take result and filter based on req.query
//       // ex: if(name in req.query) res.data = filterByName(req.query.name)

//       console.log(apiURL);
//       next();
//     })
//   }
// };






// module.exports = {
//   filterLaureates: function(req, res, next) {

//     // use request to get data
//     request({
//       url: apiURL,
//       method:'get',
//       qs: {
//         'id': 1,
//         format:'json',
//       },
//       json:true
//     },(err,result,body)=>{
//       if (err) throw err;

//       console.log(result);
//       // res.send(result)

//       // inside that request, take result and filter based on req.query
//       // ex: if(name in req.query) res.data = filterByName(req.query.name)

//       console.log(apiURL);
//       next();
//     })
//   }
// };


















