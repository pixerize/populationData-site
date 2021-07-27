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
      $('#units h4').css('display', 'none');
      $('.projection-pyramid').css('display', 'none');
      //remove year in table pyramid, and chart legend
      $('div#plotLegend').css('display', 'none');
      $('.data-view .nav-item:last-child').css('display', 'none');
      // if (url.search('bs')) { //translation
      //   $('#units h4').text('Godina Censusa');
      // }

    } else if (url.search("2-1-8") != -1) {


      //hide toolbar + legend, and rename unit measurement
      $('#toolbar').css('display', 'none');
      $('div#plotLegend').css('display', 'none');
      $('#units h4').css('display', 'none');
      $('.census-pyramid').css('display', 'none');
      //remove table tab 
      $('.data-view .nav-item:last-child').css('display', 'none');
    } else {
      $('.pyramid-units').css('display', 'none');
    }

  }, 400);

});

  opensdg.chartConfigAlter(function(config, info) {
    // Force the "bar" type if there are less than 2 years of data.
    if (config.type === 'line' && info.labels.length < 2) {
      var overrides = {type: 'bar'}
      $.extend(true, config, overrides);
    }
  });
