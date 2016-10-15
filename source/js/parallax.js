(function () {

	if (!$('.parallax').length) return;

	var layer = $('.parallax').find('.parallax__layer');
	
	$(window).on('mousemove', function(e){

      mouse_dx = e.pageX;
      mouse_dy = e.pageY;
      // $('.data').html(mouse_dx);

      var w = (window.innerWidth / 2) - mouse_dx;
      var h = (window.innerHeight / 2) - mouse_dy;

      layer.map(function(index, elem) {
      	var widthPosition = w * ((index + 1) / 100);
      	var heightPosition = h * ((index + 1) / 100);

      	$(elem).css({
      		'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0px)'
      	});

      });

  });

}());

