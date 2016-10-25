

var blurModule = (function(){
	var 
	    blur = $('.blur__form'),
	    blurSection = $('.blur__background');

	return {
		set : function () {

			var
				bgWidth = $('.blur__background').width(),
				bgHeight = $('.blur__background').height(),
				imgHeight = $('.blur__img').height(),
				posLeft = blurSection.offset().left - blur.offset().left,
				posTop = blurSection.offset().top - blur.offset().top;

			posTop += bgHeight - imgHeight;

			blur.css({
				'background-size' : bgWidth + 'px' + ' ' + 'auto',
				'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
			});
		}
	};
}());


(function () {

	if (!$('.body-works').length) {
		return;
	}
	//console.log('Блюр формы');
	$(window).on('load',function(){	blurModule.set(); });
	$(window).resize(function(){ blurModule.set(); });
}());

	

