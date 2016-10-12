(function () {

	if (!$('.body-blog').length) 
		return;
	
	console.log('Страница - Блог');

	//Навигация
	scrollFrom( '.nav__link', 600 );

	//BLOG swipe
  $('.swipe').on('click', function(event) {
    $('.blog-wrapper').toggleClass('nav-active');
  });

  var titles = [];
  $('.blog__title').each(function(index, title) {
      titles.push($(title).offset().top);

  });

  $('.nav__item').eq(0).addClass('nav__item-active');

  var current = -1;
  var scroller = function() {
    var scrollTop = $(window).scrollTop();
    for (var i = 0; i < titles.length; i++) {
        var titleTop = titles[i]-50;

        if ( scrollTop > titleTop && current !== i) {
          $('.blog-wrapper').addClass('sticky');
          $('.nav__item').removeClass('nav__item-active');
          $('.nav__item').eq(i).addClass('nav__item-active');
          current = i;
        }
    }

    if ( scrollTop < titles[0]  && current !== -1) {
      current = -1;
      $('.blog-wrapper').removeClass('sticky');
    }

  };

  $(window).on('scroll', scroller);

	
}());