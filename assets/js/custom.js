$( document ).ready(function() {
  $("a[href*='/1-a-3']").parent().remove();
  $("a[href*='/8-9-2']").parent().remove();
  $("a[href*='/13-3-2']").parent().remove();
  $("a[href*='/17-6-2']").parent().remove();
});

//remove metadata details indicator page
$( document ).ready(function() {
  $("#national tr:nth-child(1)").remove();
  $("#national tr:nth-child(2)").remove();
  $("#national tr:nth-child(2)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(3)").remove();
  $("#national tr:nth-child(4)").remove();
});

$( document ).ready(function() {
  var date = '';
  $("#national td a").each(function(){
    date = $(this).text().substring(17, 27);
    $(this).html(date).removeAttr("href");
  });
});

$( document ).ready(function() {
  $("#sources tr").each(function(){
  $("#sources tr:nth-child("+2+")").remove();
  });
});

//back to top button

$(document).ready(function () {
  $('#back-to-top').click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

//end of metadata details

$( document ).ready(function() {
  opensdg.chartConfigAlter(function(config, info) {
    var overrides = {
      options: {
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              var label = (Array.isArray(tooltipItem)) ? tooltipItem[0].label : tooltipItem.label;
              return convertXAxisLabel(label);
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return convertXAxisLabel(value);
              }
            },
          }]
        },
      }
    }

    // Add these overrides onto the normal config.
    $.extend(true, config, overrides);
  });

  opensdg.chartConfigAlter(function(config, info) {
    // Force the "bar" type if there are less than 2 years of data.
    if (config.type === 'line' && info.labels.length < 2) {
      var overrides = {type: 'bar'}
      $.extend(true, config, overrides);
    }
  });

  opensdg.tableConfigAlter(function(config, info) {
    config.columnDefs = [
      {
        targets: 0,
        render: function(data, type, row) {
          return (type === 'display') ? convertXAxisLabel(data) : data;
        }
      }
    ]
  });

  function convertXAxisLabel(label) {
    let strVal = label.toString();
    let newLabel = strVal;
    if (strVal.length > 3 && strVal.charAt(1) == ")") {
      newLabel = strVal.substring(2);
    }

    return newLabel;
  }
});

//set first year selected
$(document).ready(function () {
  setTimeout(function () { 
    var url = window.location.href;  
    console.log(url);
    if (url.search("1-1-6") != -1) {
      $('#units').append('<h4>Census</h4>');
      $('#units h4').remove();
    }

   }, 3000);


});

