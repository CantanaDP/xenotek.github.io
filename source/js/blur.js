var blur = (function(){
    var 
	    blur = $('.blur__form'),
	    blurSection = $('.blur');

	return {
		set : function () {
			var
				imgWidth = $('.blur__background').width(),
				posLeft = blurSection.offset().left - blur.offset().left,
				posTop = blurSection.offset().top - blur.offset().top;

			blur.css({
				'background-size' : imgWidth + 'px' + ' ' + 'auto',
				'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
			})
		}
	}
}());