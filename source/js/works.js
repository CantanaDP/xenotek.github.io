(function () {

	if (!$('.body-works').length) {
		return;
	}
	
	console.log('Страница - Мои работы');

	var current = 1;
	var works_num = $('.slider__image').length;//works.length

	$('.section-slider').prepend('<style>.slider[current="1"] .slider__button--prev .slider__thumb[nomer="'+works_num+'"]{'+
		'top: 0; display: block; animation: .5s linear 1 showPrev;}'+
		'.slider[current="'+works_num+'"] .slider__button--next .slider__thumb[nomer="1"]{'+
		'top: 0; display: block; animation: .5s linear 1 showNext;}'+
	'</style>');

	$('.slider__button--prev').on('click', function(e) { 
		if (current==1) current = works_num;
		else current--;
    $('.slider').attr('current',current);
  });

	$('.slider__button--next').on('click', function(e) { 
		if (current==works_num) current = 1;
		else current++;
    $('.slider').attr('current',current);
  });

}());