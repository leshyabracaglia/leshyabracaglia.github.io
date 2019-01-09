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

$(document).ready(function () { //open resume when clicked

  $(".word").on("dblclick", resume);
    $(".icon-label").on("dblclick", resume);

});

function resume() {

    $(".dialog").show();
    $(".dialog").css('background-color','#e0e0e0');
     $(".dialog").css('border-top','2px #f2f2f2');
    $(".dialog").draggable();

     $("#frame").attr("src", "images/resume.pdf");

}

$(document).ready(function () { //home window

    $( ".window" ).draggable({ containment: 'body' });
    $( ".window" ).resizable();
    $(".close").on("click", close);

});

function close(){
    $(".window").hide();
}

$(document).ready(function () { //open slacktribe example website when clicked

  $(".st").on("click", slacktribe);
    $(".icon-label2").on("click", slacktribe);

});

$(document).ready(function () { //open resume when clicked

  $(".cio").on("click", cio);
    $(".icon-label3").on("click", cio);

});

function slacktribe(){

    window.location.href = "http://leshyabracaglia.me/slacktribe.html";

}

function cio(){

    window.location.href = "http://leshyabracaglia.me/mycio.html";

}

