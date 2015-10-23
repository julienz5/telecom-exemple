// Custom JS
$(document).ready(function(){
	
  // Add your code here

  //.........................................................................Smooth Scroll
   	$(document).ready(function() {
 	$('.scrollTo').click( function() { // Au clic sur un élément
 	var page = $(this).attr('href'); // Page cible
 	var speed = 750; // Durée de l'animation (en ms)
 	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 	return false;
 	});
 	});

 //.........................................................................Pop Over
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
	});



});
