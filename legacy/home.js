

$(document).ready(function(){//onload

    updateClock(); // initial call

}) ;

function updateClock(){

    var week = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
    var now = new Date(Date.now());
    var formatted = week[now.getDay()] + " ";
    var hour = now.getHours();
    var minutes = now.getMinutes();
    if(hour>12){
        hour = hour - 12;
        if(minutes<10){minutes = "0" + minutes}
        formatted+= hour + ":" + minutes + " PM";
    }else{
        if(minutes<10){minutes = "0" + minutes}
        formatted+= hour + ":" + minutes + " AM";
    }
    // call this function again in 1000ms
    formatted += "    &nbsp;&nbsp;&nbsp;Leshya Bracaglia";
    $("h1").html(formatted);
    setTimeout(updateClock, 1000);  
}

$(document).ready(function () { //home window

    $(".window").drags();

    $( "#window4" ).drags();

    $('.window').on("click", function(){

        $(this).parent().append($(this));
    });

     $('#window4').on("click", function(){

        $(this).parent().append($(this));
    }); 

    $("#close1").on("click", function(){
        $("#window1").hide();
    });
    $("#close2").on("click", function(){
        $("#window2").hide();
    });
     $("#close3").on("click", function(){
        $("#window3").hide();
    });
     $("#close4").on("click", function(){
        $("#window4").hide();
    });
     $("#welcome").on("click", function(){
        $("#window1").show();
        $('#window1').parent().append($('#window1'));
     });
    $("#portfolio").on("click", function(){
        $("#window2").show();
        $('#window2').parent().append($('#window2'));
    });
    $("#creds").on("click", function(){
        $("#window3").show();
        $('#window3').parent().append($('#window3'));
    });
    $("#phot").on("click", function(){
        $("#window4").show();
        $('#window4').parent().append($('#window4'));
    });

});



$(document).ready(function () { //open slacktribe example website when clicked

  $("#st").on("click", slacktribe);

});

$(document).ready(function () { //open resume when clicked

  $("#cio").on("click", cio);

});

$(document).ready(function () { //open resume when clicked
    $("#linkedin").on("click", function(){
        window.open('http://www.linkedin.com/in/leshya-bracaglia');
    });
});

$(document).ready(function () { //open resume when clicked
    $("#github").on("click", function(){
       window.open('https://github.com/leshyabracaglia');
    });
});

function slacktribe(){
    window.open('http://leshyabracaglia.me/slacktribe.html');
}

function cio(){
    window.open("http://leshyabracaglia.me/mycio.html");
}

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});


//Function makes windows draggable
(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

//Function types out welcome window
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(span){
  $('#'+span).addClass('cursor')
  var text = $('#'+span).text();
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(50,150));
    var typing = setTimeout(function(y){
      $('#'+span).append(text.charAt(y));
    },randInt, i);
  };
  setTimeout(function(){
    $('#'+span).removeClass('cursor');
  },randInt+2500);
}

$(document).ready(function(){
  typeWrite('type');
});



