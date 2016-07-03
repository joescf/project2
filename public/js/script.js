$(document).ready(function() {
  let $body = $('body');
 $('#sButton').click(function () {
    let $choice = $('#categories').val();
    $.ajax({
  url: 'http://api.nobelprize.org/v1/prize.json?category=' + $choice,
  method: 'GET',
  datatype: 'json',
  success: function (data) {
      console.log($choice);
      console.log(data.prizes[58]);
      console.log(data.prizes[58].laureates[0].firstname);
      $('<p>');
      $('<p>').text(data.prizes[58].laureates[0].firstname + ' ' + data.prizes[58].laureates[0].surname).appendTo($body);
      }
    });

  });






















});



// http://localhost:3000/api
