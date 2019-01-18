
$(document).ready(function() {
    
    $('#slide_button').click(function() {
        $('#slide').animate({
          width: 'toggle', display:'block'
        }, 1000, function() {
        });
      });
    
});



