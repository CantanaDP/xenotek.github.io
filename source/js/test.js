(function () {

	if (!$('.body-works').length) {
		return;
	}
	
	console.log('Страница - Мои работы');

	var json = {
		"works": [
			{"title": "Сайт 1",	"description": "HTML, CSS, JAVASCRIPT", "img": "/assets/img/works/work1.jpg"},
			{"title": "Сайт 2",	"description": "HTML, CSS, JAVASCRIPT", "img": "/assets/img/works/work2.jpg"},
			{"title": "Сайт 3",	"description": "HTML, CSS, JAVASCRIPT", "img": "/assets/img/works/work1.jpg"},
			{"title": "Сайт 4",	"description": "HTML, CSS, JAVASCRIPT", "img": "/assets/img/works/work2.jpg"},
			{"title": "Сайт 5",	"description": "HTML, CSS, JAVASCRIPT", "img": "/assets/img/works/work1.jpg"},
		]
	};

	var works = json.works;

	var current = 1;
	var works_num = 3;//works.length

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
	//alert( works[0].title ); 


}());