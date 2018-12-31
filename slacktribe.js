//****************************************************************
//BASIC JQUERY WEBSITE -- SLACKTRIBE
//****************************************************************

$(document).ready(function() {

    $('nav').hide().delay(500).fadeIn(1000);

   $('.links').eq(0).on('click', function() { //video
        $('.links').removeClass('selected'); //selected
        $(this).addClass('selected');

      $('section').empty();
       var $video = '</br></br><div class="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/bjyftzD8GwU" frameborder="0" allowfullscreen></iframe></div></br></br>';
       $('section').html($video);
    });
    
    $('.links').eq(1).on('click', function() { //art
        $('.links').removeClass('selected');
        $(this).addClass('selected');

        $('links').empty();
        var $nyphoto = '</br></br><div class="center"><img src="images/st1.jpg" width="400" border=2></div></br></br><div class="center"><img src="images/st2.jpg" width="400" border=2></div></br></br><div class="center"><img src="images/st3.jpg" width="400" border=2></div>';
        $('section').html($nyphoto);
    });

    $('.links').eq(2).on('click', function() { //Shows
        $('.links').removeClass('selected');
        $(this).addClass('selected');
        $('section').empty();


        var $concerts = '</br><p class="shows">No upcoming shows</p><p class="shows">Please contact to schedule:</p><p class="shows">slacktribefcc@gmail.com</p>';
       $('section').html($concerts);

    });


});