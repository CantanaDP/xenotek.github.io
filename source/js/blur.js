

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
		//		deltaHeight = bgHeight - imgHeight,
				posLeft = blurSection.offset().left - blur.offset().left,
				posTop = blurSection.offset().top - blur.offset().top;

		//	deltaHeight = (deltaHeight > 0) ? deltaHeight : 0;
			posTop += bgHeight - imgHeight;

			console.log(posLeft+'-'+posTop);

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
	console.log('Блюр формы');
	$(window).on('load',function(){	blurModule.set(); });
	$(window).resize(function(){ blurModule.set(); });
}());

	

