(function() {
  'use strict';

//HAMBURGER
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('body-overlay');
  });
  $('.hamburger-close').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('body-overlay');
  });

//Вниз
	scrollFrom( '.arrow-down', 700 );
//Вверх
  scrollFrom( '.arrow-up', 1000 );

})();

//Навигация
	function scrollFrom(selector, milliseconds){
		$(selector).on('click', function(e){
			//По-умолчанию - скролл вверх
			var target = $( $(this).attr('href') );
			var scrollTop = (target.length>0) ? target.offset().top : 0;
			
		  $('html,body').stop().animate({ scrollTop: scrollTop }, milliseconds);
		  e.preventDefault();
		});
	}
