/*
    App
---------------------------------------------------------------------------------- */

$(document).ready(function() {



    $( ".tabs" ).tabs({
      active: 0
    });

    $( ".collapsible" ).accordion();

    setTimeout(function(){
      $(".splash").fadeOut();
    }, 2000);


    // Cache 'spots' for DOM
    var $spots = $('#Spots');

    $.ajax({
        type: 'GET',
        url: '/js/map.json',
        success: function(spots) {
            $.each(spots, function(i, spot) {
                $spots.append('<li>name: test</li>');
            });
        }
    });



});
