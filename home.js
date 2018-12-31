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
    formatted += "   <img src='images/battery.png' class='icon'>";
    $("h1").html(formatted);
    setTimeout(updateClock, 1000);
    
}

$(document).ready(function () { //open resume when clicked

  $(".word").on("click", resume);
    $(".icon-label").on("click", resume);

});

function resume() {

    $(".dialog").show();
    $(".dialog").css('background-color','#e0e0e0');
     $(".dialog").css('border-top','2px #f2f2f2');
    $(".dialog").draggable();

     $("#frame").attr("src", "images/resume.pdf");

}

