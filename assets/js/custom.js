//remove metadata details indicator page
$(document).ready(function () {
  // $("#national tr:nth-child(1)").remove();
  // $("#national tr:nth-child(2)").remove();
  // $("#national tr:nth-child(2)").remove();
  // $("#national tr:nth-child(3)").remove();
  // $("#national tr:nth-child(3)").remove();
  // $("#national tr:nth-child(3)").remove();
  // $("#national tr:nth-child(3)").remove();
  // $("#national tr:nth-child(4)").remove();
  $("#national tr:nth-child(11)").remove();
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
    if (url.search("1-7-8") != -1) {

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
    } else if (url.search("2-1-4") != -1) {

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

//redirect indicators
$(document).ready(function () {

  function replaceLinks(url, oldLink, newLink){
    if (url.indexOf(oldLink) != -1) {
      url = url.replace(oldLink, newLink);
    }
    return url;
  }

  setTimeout(function () {
    var url = window.location.href;
    if (url.search("/3/") != -1) { //HEALTH
      $('.goal-indicator a').each(function () {
          url = $(this).attr('href');
          url = replaceLinks(url, '3-1-1', '1-3-2');
          url = replaceLinks(url, '3-1-2', '1-3-3');
          url = replaceLinks(url, '3-1-3', '1-3-4');
          url = replaceLinks(url, '3-1-4', '1-3-5');
          url = replaceLinks(url, '3-1-5', '1-3-6');
          url = replaceLinks(url, '3-7-1', '2-5-1');

          $(this).attr('href', url)
      });

    } else if (url.search("/5/") != -1) { //EDUCATION
      $('.goal-indicator a').each(function () {
        url = $(this).attr('href');
        url = replaceLinks(url, '5-7-3', '2-4-1');
        url = replaceLinks(url, '5-7-4', '2-4-2');

        $(this).attr('href', url)
      });
    
    }

  }, 400);

});


