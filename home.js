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

    $(".window").draggable({revert: false});
    $( "#window2" ).draggable({ containment: 'body' });

    $("#close1").on("click", function(){
        $("#window1").hide();
    });
    $("#close2").on("click", function(){
        $("#window2").hide();
    });
     $("#welcome").on("click", function(){
        $("#window1").show();
     });
    $("#portfolio").on("click", function(){
        $("#window2").show();
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
    window.location.href = "http://leshyabracaglia.me/mycio.html";
}


