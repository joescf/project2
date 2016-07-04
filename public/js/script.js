$(document).ready(function() {
  let $body = $('body');
  $('#sButton').click(function () {
    let $choice = $('#categories').val();
    let $year = $('#year').val();
    $.ajax({
  url: 'http://api.nobelprize.org/v1/prize.json',
  method: 'GET',
  data: { year: $year,
          category: $choice },
  datatype: 'json',
  success: function (data) {
      console.log(data);
      // console.log(data.prizes[58]);
      // console.log(data.prizes[58].laureates[0].firstname);
      let $name = $('<ul id=nameOfWinners>');
      let $firstName = $('<li id=winnerOne>');
      let $nextName = $('<li id=winnerTwo>');
      $('.nameOfWinnersDiv').append($name);
      ($firstName).text(data.prizes[0].laureates[0].firstname + ' ' + data.prizes[0].laureates[0].surname);
      $name.append($firstName);
      let $reason = $('<p id=motivation>');
      console.log(data.prizes[0].laureates[0].motivation);
      $reason.text(data.prizes[0].laureates[0].motivation);
      $reason.appendTo($('.motivation'));
      if (!(data.prizes[0].laureates[1].firstname)) {
          console.log('this award only had one winner');
        } else {
      ($nextName).text(data.prizes[0].laureates[1].firstname + ' ' + data.prizes[0].laureates[1].surname);
      $name.append($nextName);
        }
      }
    });

  });






















});



// http://localhost:3000/api
