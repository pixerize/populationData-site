//remove metadata details indicator page
$(document).ready(function () {
  $("#national tr:nth-child(1)").remove();
  $("#national tr:nth-child(2)").remove();
  $("#national tr:nth-child(2)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(4)").remove();
});

$(document).ready(function () {
  var date = '';
  $("#national td a").each(function () {
    date = $(this).text().substring(17, 27);
    $(this).html(date).removeAttr("href");
  });
});

$(document).ready(function () {
  $("#sources tr").each(function () {
    $("#sources tr:nth-child(" + 2 + ")").remove();
  });
});

//back to top button

$(document).ready(function () {
  $('#back-to-top').click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});


//pyramid chart alternations
$(document).ready(function () {
  setTimeout(function () {
    var url = window.location.href;
    if (url.search("1-1-6") != -1) {

      //hide toolbar
      $('#toolbar').css('display', 'none');

      //rename Unit Measure 
      $('#units h4').text('Census');
      //remove year in table pyramid, and chart legend
      $('div#plotLegend').css('display', 'none');
      $('th.sorting_1').css('display', 'none');
      $('th.sorting_asc').css('display', 'none');
      // if (url.search('bs')) { //translation
      //   $('#units h4').text('Godina Censusa');
      // }

    } else if (url.search("2-1-8") != -1) {
      //hide toolbar
      $('#toolbar').css('display', 'none');
      $('div#plotLegend').css('display', 'none');
      $('#units h4').text('Year of projection');
      //remove year in table pyramid
      $('th.sorting_1').css('display', 'none');
      $('th.sorting_asc').css('display', 'none');
    }


  }, 300);

});