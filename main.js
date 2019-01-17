
$(document).ready(function() {
    // all custom jQuery will go here


    // $("#trigger").click(function() {
    //     $("#demo").html("Hello, World!");
    //     });

    

    $('#slide_button').click(function() {
        $('#slide').animate({
          width: 'toggle',display:'block'
        }, 1000, function() {
        });
      });


    
});



