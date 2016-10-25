(function () {

	var imgs = [];

	$.each($('*'), function () {
		var
			$this = $(this),
			background = $this.css('background-image'),
			img = $this.is('img');

		if (background != 'none') {
			var path = background.replace('url("', '').replace('")', '');
			imgs.push(path);
			//console.log(path);
		}

		if (img) {
			var path = $this.attr('src');

			if (path) {
				imgs.push(path);
				//console.log(path);
			}
		}
	});
	
	var percentsTotal = 1;
//console.log(imgs.length);
	for (var i = 0; i < imgs.length; i++) {
		var image = $('<img>', {
			attr: {
				src: imgs[i]
			}
		});

		image.on({
			load : function () {
				setPercents(imgs.length, percentsTotal);
				percentsTotal++;
			},

			error : function () {
				percentsTotal++;
			}
		});
	}

	function setPercents(total, current) {
		var percent = Math.ceil(current / total * 100);

		if (percent >= 100) {
			$('.preloader').fadeOut();
		}

		$('.preloader__percents').text(percent + '%');
	}


}());



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



var authorizeForm = (function () {
    
    var messagebox_wrapper = $('.messagebox-wrapper');
    var messagebox = $('.messagebox__text');

    var init = function () {
        _setUpListeners();
    };

    var _setUpListeners = function () {
        $('.messagebox-wrapper,.messagebox__close').on('click', _hideMessageBox);
        $('.messagebox').on('click', _stopPropagation);
        $('.form--authorize').on('submit', _validateForm);
        //$('.form--authorize').on('reset', _resetForm);
    };

    var _showMessageBox = function (event) {
        messagebox_wrapper.show();
    };
    var _hideMessageBox = function (event) {
        messagebox_wrapper.hide();
    };
    var _stopPropagation = function (event) {
        event.stopPropagation();
    };
    var _resetForm = function(event) {
      $('.must-fill').removeClass('must-fill');
    };

    var _validateForm = function(event) {
      event.preventDefault();

      var form = $(this);
      var login = form.find('input[name="login"]');
      var password = form.find('input[name="password"]');
      var robot = form.find('input[name="robot"]');
      var answer_yes = form.find('.radiobox__input--yes');

      var error_message = "";
      //логин
      if ( !$.trim( login.val() )  ) {
        error_message += '<p class="error_message">Введите логин!</p>';
        login.addClass('must-fill');
      }else{
        login.removeClass('must-fill');
      }

      //пароль
      if ( !$.trim( password.val() )  ) {
        error_message += '<p class="error_message">Введите пароль!</p>';
        password.addClass('must-fill');
      }else{
        password.removeClass('must-fill');
      }
      
      //Вы робот?
      if ( !robot.prop("checked") || !answer_yes.prop("checked")) {
        error_message += '<p class="error_message">Роботам тут не место!</p>';
      }
      
      //Если не прошли валидацию
      if (error_message) {
        messagebox.html(error_message);
        _showMessageBox();
        return false;
      }
    
      var response = _ajaxForm(form, "/login.php");

      response.done(function(answer){
        //console.log(answer);
        if (answer.status=='OK') {
          messagebox.html('<p class="success_message">'+answer.text+'</p>');
          _showMessageBox();
        }else{
          messagebox.html('<p class="error_message">'+answer.text+'</p>');
          _showMessageBox();
        }
        
      });

    };

    var _ajaxForm = function (form, url) {
        
        var data = form.serialize();

        var result = $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          data: data
        }).fail(function (ans) {
          console.log('Ошибка на сервере! '+ans.responseText);
          messagebox.html('<p class="error_message">Ошибка на сервере!</p>');
          _showMessageBox();
        });

        return result;
    };

    return {
        init: init
    };


})();

(function () {

  if (!$('.body-welcome').length) {
    return;
  }
  console.log('Страница - Главная');
  console.log('Форма авторизации');
  
  authorizeForm.init();

  document.onkeydown = function (e) {
    if (e.keyCode==27){//esc
      if (location.hash!='#authorize') return;
      location.hash='#';
    }
  };
/*
  $('[name="robot"]').on('click', function(event) {
    alert($(this).val());
  }); 
*/

}());

(function () {

	if (!$('.body-about').length) 
		return;
	
	console.log('Страница - Обо мне');

	 if ($('#map').length>0) initGoogleMaps();




}());

function initGoogleMaps(){
    
    console.log('Загрузка google-карт');

    initMap = function () {
        var mapOptions = {
            disableDefaultUI: true,
            zoom: 11,
            center: new google.maps.LatLng(55.787433, 37.495374),
            styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"all","elementType":"geometry","stylers":[{"saturation":"100"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#86a77a"},{"visibility":"on"}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.797631, 37.558982),
            zoom:8,
            map: map,
            title: 'Я!',
            icon: {
                url: "/assets/img/map_marker.svg",
                scaledSize: new google.maps.Size(43, 60)
            }
        });
    };

    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDijOXp2FZJSfRKEEXqJAvpt6aVHOa2lZw&callback=initMap";
    script.type="text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}


    



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
        var titleTop = titles[i];

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

var worksForm = (function () {
		
		var messagebox_wrapper = $('.messagebox-wrapper');
		var messagebox = $('.messagebox__text');

		var init = function () {
				_setUpListeners();
		};

		var _setUpListeners = function () {
				$('.messagebox-wrapper,.messagebox__close').on('click', _hideMessageBox);
				$('.messagebox').on('click', _stopPropagation);
				$('.feedback__form').on('submit', _validateForm);
				$('.feedback__form').on('reset', _resetForm);
		};

		var _showMessageBox = function (event) {
				messagebox_wrapper.show();
		};
		var _hideMessageBox = function (event) {
				messagebox_wrapper.hide();
		};
		var _stopPropagation = function (event) {
				event.stopPropagation();
		};

		var _resetForm = function(event) {
			$('.must-fill').removeClass('must-fill');
		};

		var _validateForm = function(event) {
			event.preventDefault();

			var form = $(this);
			var name = form.find('input[name="name"]');
			var email = form.find('input[name="email"]');
			var subject = form.find('[name="subject"]');

			var error_message = "";
			//Имя
			if ( !$.trim( name.val() )  ) {
				error_message += '<p class="error_message">Вы не заполнили поле "Имя"!</p>';
				name.addClass('must-fill');
			}else{
				name.removeClass('must-fill');
			}

			//Email
			if ( !$.trim( email.val() )  ) {
				error_message += '<p class="error_message">Вы не заполнили поле "Email"!</p>';
				email.addClass('must-fill');
			}else{
				email.removeClass('must-fill');
			}

			//Ваше сообщение
			if ( !$.trim( subject.val() )  ) {
				error_message += '<p class="error_message">Вы не заполнили поле "Ваше сообщение"!</p>';
				subject.addClass('must-fill');
			}else{
				subject.removeClass('must-fill');
			}
			
			//Если не прошли валидацию
			if (error_message) {
				messagebox.html(error_message);
				_showMessageBox();
				return false;
			}
			
			var feedback_answer = _ajaxForm(form, "/works/mail");

			feedback_answer.done(function(answer){
				//console.log(answer);
				if (answer.status=='OK') {
					messagebox.html('<p class="success_message">'+answer.text+'</p>');
					_showMessageBox();
				}else{
					messagebox.html('<p class="error_message">'+answer.text+'</p>');
					_showMessageBox();
				}
				
			});

		};

		var _ajaxForm = function (form, url) {
				
				var data = form.serialize();

				var result = $.ajax({
					url: url,
					type: 'POST',
					dataType: 'json',
					data: data
				}).fail(function (ans) {
					console.log('Ошибка на сервере! '+ans.responseText);
					messagebox.html('<p class="error_message">Ошибка на сервере!</p>');
					_showMessageBox();
				});

				return result;
		};

		return {
				init: init
		};


})();


(function () {

	if (!$('.body-works').length) {
		return;
	}
	console.log('Форма обратной связи');
	worksForm.init();

}());



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

	


(function() {
  'use strict';

//HAMBURGER
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('body-overlay');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWRlci5qcyIsInBhcmFsbGF4LmpzIiwid2VsY29tZS5qcyIsImFib3V0LmpzIiwibWFwcy5qcyIsImJsb2cuanMiLCJ3b3Jrcy5qcyIsImZvcm0uZmVlZGJhY2suanMiLCJibHVyLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dmFyIGltZ3MgPSBbXTtcclxuXHJcblx0JC5lYWNoKCQoJyonKSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyXHJcblx0XHRcdCR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0YmFja2dyb3VuZCA9ICR0aGlzLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG5cdFx0XHRpbWcgPSAkdGhpcy5pcygnaW1nJyk7XHJcblxyXG5cdFx0aWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcblx0XHRcdHZhciBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG5cdFx0XHRpbWdzLnB1c2gocGF0aCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2cocGF0aCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGltZykge1xyXG5cdFx0XHR2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpO1xyXG5cclxuXHRcdFx0aWYgKHBhdGgpIHtcclxuXHRcdFx0XHRpbWdzLnB1c2gocGF0aCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhwYXRoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdHZhciBwZXJjZW50c1RvdGFsID0gMTtcclxuLy9jb25zb2xlLmxvZyhpbWdzLmxlbmd0aCk7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuXHRcdFx0YXR0cjoge1xyXG5cdFx0XHRcdHNyYzogaW1nc1tpXVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpbWFnZS5vbih7XHJcblx0XHRcdGxvYWQgOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG5cdFx0XHRcdHBlcmNlbnRzVG90YWwrKztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGVycm9yIDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHBlcmNlbnRzVG90YWwrKztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRQZXJjZW50cyh0b3RhbCwgY3VycmVudCkge1xyXG5cdFx0dmFyIHBlcmNlbnQgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcblx0XHRpZiAocGVyY2VudCA+PSAxMDApIHtcclxuXHRcdFx0JCgnLnByZWxvYWRlcicpLmZhZGVPdXQoKTtcclxuXHRcdH1cclxuXHJcblx0XHQkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyY2VudCArICclJyk7XHJcblx0fVxyXG5cclxuXHJcbn0oKSk7XHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0aWYgKCEkKCcucGFyYWxsYXgnKS5sZW5ndGgpIHJldHVybjtcclxuXHJcblx0dmFyIGxheWVyID0gJCgnLnBhcmFsbGF4JykuZmluZCgnLnBhcmFsbGF4X19sYXllcicpO1xyXG5cdFxyXG5cdCQod2luZG93KS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICBtb3VzZV9keCA9IGUucGFnZVg7XHJcbiAgICAgIG1vdXNlX2R5ID0gZS5wYWdlWTtcclxuICAgICAgLy8gJCgnLmRhdGEnKS5odG1sKG1vdXNlX2R4KTtcclxuXHJcbiAgICAgIHZhciB3ID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBtb3VzZV9keDtcclxuICAgICAgdmFyIGggPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBtb3VzZV9keTtcclxuXHJcbiAgICAgIGxheWVyLm1hcChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xyXG4gICAgICBcdHZhciB3aWR0aFBvc2l0aW9uID0gdyAqICgoaW5kZXggKyAxKSAvIDEwMCk7XHJcbiAgICAgIFx0dmFyIGhlaWdodFBvc2l0aW9uID0gaCAqICgoaW5kZXggKyAxKSAvIDEwMCk7XHJcblxyXG4gICAgICBcdCQoZWxlbSkuY3NzKHtcclxuICAgICAgXHRcdCd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJyArIHdpZHRoUG9zaXRpb24gKyAncHgsICcgKyBoZWlnaHRQb3NpdGlvbiArICdweCwgMHB4KSdcclxuICAgICAgXHR9KTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbn0oKSk7XHJcblxyXG4iLCJcclxudmFyIGF1dGhvcml6ZUZvcm0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICB2YXIgbWVzc2FnZWJveF93cmFwcGVyID0gJCgnLm1lc3NhZ2Vib3gtd3JhcHBlcicpO1xyXG4gICAgdmFyIG1lc3NhZ2Vib3ggPSAkKCcubWVzc2FnZWJveF9fdGV4dCcpO1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zZXRVcExpc3RlbmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldFVwTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5tZXNzYWdlYm94LXdyYXBwZXIsLm1lc3NhZ2Vib3hfX2Nsb3NlJykub24oJ2NsaWNrJywgX2hpZGVNZXNzYWdlQm94KTtcclxuICAgICAgICAkKCcubWVzc2FnZWJveCcpLm9uKCdjbGljaycsIF9zdG9wUHJvcGFnYXRpb24pO1xyXG4gICAgICAgICQoJy5mb3JtLS1hdXRob3JpemUnKS5vbignc3VibWl0JywgX3ZhbGlkYXRlRm9ybSk7XHJcbiAgICAgICAgLy8kKCcuZm9ybS0tYXV0aG9yaXplJykub24oJ3Jlc2V0JywgX3Jlc2V0Rm9ybSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfc2hvd01lc3NhZ2VCb3ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBtZXNzYWdlYm94X3dyYXBwZXIuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIHZhciBfaGlkZU1lc3NhZ2VCb3ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBtZXNzYWdlYm94X3dyYXBwZXIuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIHZhciBfc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIF9yZXNldEZvcm0gPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAkKCcubXVzdC1maWxsJykucmVtb3ZlQ2xhc3MoJ211c3QtZmlsbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3ZhbGlkYXRlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBsb2dpbiA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImxvZ2luXCJdJyk7XHJcbiAgICAgIHZhciBwYXNzd29yZCA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJyk7XHJcbiAgICAgIHZhciByb2JvdCA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cInJvYm90XCJdJyk7XHJcbiAgICAgIHZhciBhbnN3ZXJfeWVzID0gZm9ybS5maW5kKCcucmFkaW9ib3hfX2lucHV0LS15ZXMnKTtcclxuXHJcbiAgICAgIHZhciBlcnJvcl9tZXNzYWdlID0gXCJcIjtcclxuICAgICAgLy/Qu9C+0LPQuNC9XHJcbiAgICAgIGlmICggISQudHJpbSggbG9naW4udmFsKCkgKSAgKSB7XHJcbiAgICAgICAgZXJyb3JfbWVzc2FnZSArPSAnPHAgY2xhc3M9XCJlcnJvcl9tZXNzYWdlXCI+0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvSE8L3A+JztcclxuICAgICAgICBsb2dpbi5hZGRDbGFzcygnbXVzdC1maWxsJyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxvZ2luLnJlbW92ZUNsYXNzKCdtdXN0LWZpbGwnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy/Qv9Cw0YDQvtC70YxcclxuICAgICAgaWYgKCAhJC50cmltKCBwYXNzd29yZC52YWwoKSApICApIHtcclxuICAgICAgICBlcnJvcl9tZXNzYWdlICs9ICc8cCBjbGFzcz1cImVycm9yX21lc3NhZ2VcIj7QktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwhPC9wPic7XHJcbiAgICAgICAgcGFzc3dvcmQuYWRkQ2xhc3MoJ211c3QtZmlsbCcpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBwYXNzd29yZC5yZW1vdmVDbGFzcygnbXVzdC1maWxsJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8v0JLRiyDRgNC+0LHQvtGCP1xyXG4gICAgICBpZiAoICFyb2JvdC5wcm9wKFwiY2hlY2tlZFwiKSB8fCAhYW5zd2VyX3llcy5wcm9wKFwiY2hlY2tlZFwiKSkge1xyXG4gICAgICAgIGVycm9yX21lc3NhZ2UgKz0gJzxwIGNsYXNzPVwiZXJyb3JfbWVzc2FnZVwiPtCg0L7QsdC+0YLQsNC8INGC0YPRgiDQvdC1INC80LXRgdGC0L4hPC9wPic7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8v0JXRgdC70Lgg0L3QtSDQv9GA0L7RiNC70Lgg0LLQsNC70LjQtNCw0YbQuNGOXHJcbiAgICAgIGlmIChlcnJvcl9tZXNzYWdlKSB7XHJcbiAgICAgICAgbWVzc2FnZWJveC5odG1sKGVycm9yX21lc3NhZ2UpO1xyXG4gICAgICAgIF9zaG93TWVzc2FnZUJveCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHZhciByZXNwb25zZSA9IF9hamF4Rm9ybShmb3JtLCBcIi9sb2dpbi5waHBcIik7XHJcblxyXG4gICAgICByZXNwb25zZS5kb25lKGZ1bmN0aW9uKGFuc3dlcil7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbnN3ZXIpO1xyXG4gICAgICAgIGlmIChhbnN3ZXIuc3RhdHVzPT0nT0snKSB7XHJcbiAgICAgICAgICBtZXNzYWdlYm94Lmh0bWwoJzxwIGNsYXNzPVwic3VjY2Vzc19tZXNzYWdlXCI+JythbnN3ZXIudGV4dCsnPC9wPicpO1xyXG4gICAgICAgICAgX3Nob3dNZXNzYWdlQm94KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBtZXNzYWdlYm94Lmh0bWwoJzxwIGNsYXNzPVwiZXJyb3JfbWVzc2FnZVwiPicrYW5zd2VyLnRleHQrJzwvcD4nKTtcclxuICAgICAgICAgIF9zaG93TWVzc2FnZUJveCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX2FqYXhGb3JtID0gZnVuY3Rpb24gKGZvcm0sIHVybCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBkYXRhID0gZm9ybS5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoYW5zKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwINC90LAg0YHQtdGA0LLQtdGA0LUhICcrYW5zLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBtZXNzYWdlYm94Lmh0bWwoJzxwIGNsYXNzPVwiZXJyb3JfbWVzc2FnZVwiPtCe0YjQuNCx0LrQsCDQvdCwINGB0LXRgNCy0LXRgNC1ITwvcD4nKTtcclxuICAgICAgICAgIF9zaG93TWVzc2FnZUJveCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH07XHJcblxyXG5cclxufSkoKTtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGlmICghJCgnLmJvZHktd2VsY29tZScpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZygn0KHRgtGA0LDQvdC40YbQsCAtINCT0LvQsNCy0L3QsNGPJyk7XHJcbiAgY29uc29sZS5sb2coJ9Ck0L7RgNC80LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuCcpO1xyXG4gIFxyXG4gIGF1dGhvcml6ZUZvcm0uaW5pdCgpO1xyXG5cclxuICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZT09Mjcpey8vZXNjXHJcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoIT0nI2F1dGhvcml6ZScpIHJldHVybjtcclxuICAgICAgbG9jYXRpb24uaGFzaD0nIyc7XHJcbiAgICB9XHJcbiAgfTtcclxuLypcclxuICAkKCdbbmFtZT1cInJvYm90XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGFsZXJ0KCQodGhpcykudmFsKCkpO1xyXG4gIH0pOyBcclxuKi9cclxuXHJcbn0oKSk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGlmICghJCgnLmJvZHktYWJvdXQnKS5sZW5ndGgpIFxyXG5cdFx0cmV0dXJuO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCfQodGC0YDQsNC90LjRhtCwIC0g0J7QsdC+INC80L3QtScpO1xyXG5cclxuXHQgaWYgKCQoJyNtYXAnKS5sZW5ndGg+MCkgaW5pdEdvb2dsZU1hcHMoKTtcclxuXHJcblxyXG5cclxuXHJcbn0oKSk7IiwiXHJcbmZ1bmN0aW9uIGluaXRHb29nbGVNYXBzKCl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfQl9Cw0LPRgNGD0LfQutCwIGdvb2dsZS3QutCw0YDRgicpO1xyXG5cclxuICAgIGluaXRNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAgICAgICAgIHpvb206IDExLFxyXG4gICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuNzg3NDMzLCAzNy40OTUzNzQpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWxsXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImh1ZVwiOlwiI2ZmMDAwMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhbGxcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6XCIxMDBcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWxsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImh1ZVwiOlwiI2ZmMDAwMFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM0NDQ0NDRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiaHVlXCI6XCIjZmYwMDAwXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2YyZjJmMlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGUubmF0dXJhbC50ZXJyYWluXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1wibGlnaHRuZXNzXCI6NDV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMuaWNvblwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM4NmE3N2FcIn0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1Ljc5NzYzMSwgMzcuNTU4OTgyKSxcclxuICAgICAgICAgICAgem9vbTo4LFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgdGl0bGU6ICfQryEnLFxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2Fzc2V0cy9pbWcvbWFwX21hcmtlci5zdmdcIixcclxuICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDQzLCA2MClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5RGlqT1hwMkZaSlNmUktFRVhxSkF2cHQ2YVZIT2EybFp3JmNhbGxiYWNrPWluaXRNYXBcIjtcclxuICAgIHNjcmlwdC50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRpZiAoISQoJy5ib2R5LWJsb2cnKS5sZW5ndGgpIFxyXG5cdFx0cmV0dXJuO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCfQodGC0YDQsNC90LjRhtCwIC0g0JHQu9C+0LMnKTtcclxuXHJcblx0Ly/QndCw0LLQuNCz0LDRhtC40Y9cclxuXHRzY3JvbGxGcm9tKCAnLm5hdl9fbGluaycsIDYwMCApO1xyXG5cclxuXHQvL0JMT0cgc3dpcGVcclxuICAkKCcuc3dpcGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgJCgnLmJsb2ctd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCduYXYtYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciB0aXRsZXMgPSBbXTtcclxuICAkKCcuYmxvZ19fdGl0bGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCB0aXRsZSkge1xyXG4gICAgICB0aXRsZXMucHVzaCgkKHRpdGxlKS5vZmZzZXQoKS50b3ApO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm5hdl9faXRlbScpLmVxKDApLmFkZENsYXNzKCduYXZfX2l0ZW0tYWN0aXZlJyk7XHJcblxyXG4gIHZhciBjdXJyZW50ID0gLTE7XHJcbiAgdmFyIHNjcm9sbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgdGl0bGVUb3AgPSB0aXRsZXNbaV07XHJcblxyXG4gICAgICAgIGlmICggc2Nyb2xsVG9wID4gdGl0bGVUb3AgJiYgY3VycmVudCAhPT0gaSkge1xyXG4gICAgICAgICAgJCgnLmJsb2ctd3JhcHBlcicpLmFkZENsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICQoJy5uYXZfX2l0ZW0nKS5yZW1vdmVDbGFzcygnbmF2X19pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnLm5hdl9faXRlbScpLmVxKGkpLmFkZENsYXNzKCduYXZfX2l0ZW0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBzY3JvbGxUb3AgPCB0aXRsZXNbMF0gICYmIGN1cnJlbnQgIT09IC0xKSB7XHJcbiAgICAgIGN1cnJlbnQgPSAtMTtcclxuICAgICAgJCgnLmJsb2ctd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBzY3JvbGxlcik7XHJcblxyXG5cdFxyXG59KCkpOyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGlmICghJCgnLmJvZHktd29ya3MnKS5sZW5ndGgpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0Y29uc29sZS5sb2coJ9Ch0YLRgNCw0L3QuNGG0LAgLSDQnNC+0Lgg0YDQsNCx0L7RgtGLJyk7XHJcblxyXG5cdHZhciBjdXJyZW50ID0gMTtcclxuXHR2YXIgd29ya3NfbnVtID0gJCgnLnNsaWRlcl9faW1hZ2UnKS5sZW5ndGg7Ly93b3Jrcy5sZW5ndGhcclxuXHJcblx0JCgnLnNlY3Rpb24tc2xpZGVyJykucHJlcGVuZCgnPHN0eWxlPi5zbGlkZXJbY3VycmVudD1cIjFcIl0gLnNsaWRlcl9fYnV0dG9uLS1wcmV2IC5zbGlkZXJfX3RodW1iW25vbWVyPVwiJyt3b3Jrc19udW0rJ1wiXXsnK1xyXG5cdFx0J3RvcDogMDsgZGlzcGxheTogYmxvY2s7IGFuaW1hdGlvbjogLjVzIGxpbmVhciAxIHNob3dQcmV2O30nK1xyXG5cdFx0Jy5zbGlkZXJbY3VycmVudD1cIicrd29ya3NfbnVtKydcIl0gLnNsaWRlcl9fYnV0dG9uLS1uZXh0IC5zbGlkZXJfX3RodW1iW25vbWVyPVwiMVwiXXsnK1xyXG5cdFx0J3RvcDogMDsgZGlzcGxheTogYmxvY2s7IGFuaW1hdGlvbjogLjVzIGxpbmVhciAxIHNob3dOZXh0O30nK1xyXG5cdCc8L3N0eWxlPicpO1xyXG5cclxuXHQkKCcuc2xpZGVyX19idXR0b24tLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IFxyXG5cdFx0aWYgKGN1cnJlbnQ9PTEpIGN1cnJlbnQgPSB3b3Jrc19udW07XHJcblx0XHRlbHNlIGN1cnJlbnQtLTtcclxuICAgICQoJy5zbGlkZXInKS5hdHRyKCdjdXJyZW50JyxjdXJyZW50KTtcclxuICB9KTtcclxuXHJcblx0JCgnLnNsaWRlcl9fYnV0dG9uLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBcclxuXHRcdGlmIChjdXJyZW50PT13b3Jrc19udW0pIGN1cnJlbnQgPSAxO1xyXG5cdFx0ZWxzZSBjdXJyZW50Kys7XHJcbiAgICAkKCcuc2xpZGVyJykuYXR0cignY3VycmVudCcsY3VycmVudCk7XHJcbiAgfSk7XHJcblxyXG59KCkpOyIsIlxyXG52YXIgd29ya3NGb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG1lc3NhZ2Vib3hfd3JhcHBlciA9ICQoJy5tZXNzYWdlYm94LXdyYXBwZXInKTtcclxuXHRcdHZhciBtZXNzYWdlYm94ID0gJCgnLm1lc3NhZ2Vib3hfX3RleHQnKTtcclxuXHJcblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRfc2V0VXBMaXN0ZW5lcnMoKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKCcubWVzc2FnZWJveC13cmFwcGVyLC5tZXNzYWdlYm94X19jbG9zZScpLm9uKCdjbGljaycsIF9oaWRlTWVzc2FnZUJveCk7XHJcblx0XHRcdFx0JCgnLm1lc3NhZ2Vib3gnKS5vbignY2xpY2snLCBfc3RvcFByb3BhZ2F0aW9uKTtcclxuXHRcdFx0XHQkKCcuZmVlZGJhY2tfX2Zvcm0nKS5vbignc3VibWl0JywgX3ZhbGlkYXRlRm9ybSk7XHJcblx0XHRcdFx0JCgnLmZlZWRiYWNrX19mb3JtJykub24oJ3Jlc2V0JywgX3Jlc2V0Rm9ybSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBfc2hvd01lc3NhZ2VCb3ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRtZXNzYWdlYm94X3dyYXBwZXIuc2hvdygpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBfaGlkZU1lc3NhZ2VCb3ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRtZXNzYWdlYm94X3dyYXBwZXIuaGlkZSgpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBfc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBfcmVzZXRGb3JtID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0JCgnLm11c3QtZmlsbCcpLnJlbW92ZUNsYXNzKCdtdXN0LWZpbGwnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIF92YWxpZGF0ZUZvcm0gPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cdFx0XHR2YXIgbmFtZSA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm5hbWVcIl0nKTtcclxuXHRcdFx0dmFyIGVtYWlsID0gZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcclxuXHRcdFx0dmFyIHN1YmplY3QgPSBmb3JtLmZpbmQoJ1tuYW1lPVwic3ViamVjdFwiXScpO1xyXG5cclxuXHRcdFx0dmFyIGVycm9yX21lc3NhZ2UgPSBcIlwiO1xyXG5cdFx0XHQvL9CY0LzRj1xyXG5cdFx0XHRpZiAoICEkLnRyaW0oIG5hbWUudmFsKCkgKSAgKSB7XHJcblx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnPHAgY2xhc3M9XCJlcnJvcl9tZXNzYWdlXCI+0JLRiyDQvdC1INC30LDQv9C+0LvQvdC40LvQuCDQv9C+0LvQtSBcItCY0LzRj1wiITwvcD4nO1xyXG5cdFx0XHRcdG5hbWUuYWRkQ2xhc3MoJ211c3QtZmlsbCcpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRuYW1lLnJlbW92ZUNsYXNzKCdtdXN0LWZpbGwnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9FbWFpbFxyXG5cdFx0XHRpZiAoICEkLnRyaW0oIGVtYWlsLnZhbCgpICkgICkge1xyXG5cdFx0XHRcdGVycm9yX21lc3NhZ2UgKz0gJzxwIGNsYXNzPVwiZXJyb3JfbWVzc2FnZVwiPtCS0Ysg0L3QtSDQt9Cw0L/QvtC70L3QuNC70Lgg0L/QvtC70LUgXCJFbWFpbFwiITwvcD4nO1xyXG5cdFx0XHRcdGVtYWlsLmFkZENsYXNzKCdtdXN0LWZpbGwnKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZW1haWwucmVtb3ZlQ2xhc3MoJ211c3QtZmlsbCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVxyXG5cdFx0XHRpZiAoICEkLnRyaW0oIHN1YmplY3QudmFsKCkgKSAgKSB7XHJcblx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnPHAgY2xhc3M9XCJlcnJvcl9tZXNzYWdlXCI+0JLRiyDQvdC1INC30LDQv9C+0LvQvdC40LvQuCDQv9C+0LvQtSBcItCS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVwiITwvcD4nO1xyXG5cdFx0XHRcdHN1YmplY3QuYWRkQ2xhc3MoJ211c3QtZmlsbCcpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRzdWJqZWN0LnJlbW92ZUNsYXNzKCdtdXN0LWZpbGwnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly/QldGB0LvQuCDQvdC1INC/0YDQvtGI0LvQuCDQstCw0LvQuNC00LDRhtC40Y5cclxuXHRcdFx0aWYgKGVycm9yX21lc3NhZ2UpIHtcclxuXHRcdFx0XHRtZXNzYWdlYm94Lmh0bWwoZXJyb3JfbWVzc2FnZSk7XHJcblx0XHRcdFx0X3Nob3dNZXNzYWdlQm94KCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZmVlZGJhY2tfYW5zd2VyID0gX2FqYXhGb3JtKGZvcm0sIFwiL3dvcmtzL21haWxcIik7XHJcblxyXG5cdFx0XHRmZWVkYmFja19hbnN3ZXIuZG9uZShmdW5jdGlvbihhbnN3ZXIpe1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coYW5zd2VyKTtcclxuXHRcdFx0XHRpZiAoYW5zd2VyLnN0YXR1cz09J09LJykge1xyXG5cdFx0XHRcdFx0bWVzc2FnZWJveC5odG1sKCc8cCBjbGFzcz1cInN1Y2Nlc3NfbWVzc2FnZVwiPicrYW5zd2VyLnRleHQrJzwvcD4nKTtcclxuXHRcdFx0XHRcdF9zaG93TWVzc2FnZUJveCgpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0bWVzc2FnZWJveC5odG1sKCc8cCBjbGFzcz1cImVycm9yX21lc3NhZ2VcIj4nK2Fuc3dlci50ZXh0Kyc8L3A+Jyk7XHJcblx0XHRcdFx0XHRfc2hvd01lc3NhZ2VCb3goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIF9hamF4Rm9ybSA9IGZ1bmN0aW9uIChmb3JtLCB1cmwpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZGF0YSA9IGZvcm0uc2VyaWFsaXplKCk7XHJcblxyXG5cdFx0XHRcdHZhciByZXN1bHQgPSAkLmFqYXgoe1xyXG5cdFx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHRcdH0pLmZhaWwoZnVuY3Rpb24gKGFucykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ9Ce0YjQuNCx0LrQsCDQvdCwINGB0LXRgNCy0LXRgNC1ISAnK2Fucy5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0bWVzc2FnZWJveC5odG1sKCc8cCBjbGFzcz1cImVycm9yX21lc3NhZ2VcIj7QntGI0LjQsdC60LAg0L3QsCDRgdC10YDQstC10YDQtSE8L3A+Jyk7XHJcblx0XHRcdFx0XHRfc2hvd01lc3NhZ2VCb3goKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbml0OiBpbml0XHJcblx0XHR9O1xyXG5cclxuXHJcbn0pKCk7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0aWYgKCEkKCcuYm9keS13b3JrcycpLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zb2xlLmxvZygn0KTQvtGA0LzQsCDQvtCx0YDQsNGC0L3QvtC5INGB0LLRj9C30LgnKTtcclxuXHR3b3Jrc0Zvcm0uaW5pdCgpO1xyXG5cclxufSgpKTtcclxuIiwiXHJcblxyXG52YXIgYmx1ck1vZHVsZSA9IChmdW5jdGlvbigpe1xyXG5cdHZhciBcclxuXHQgICAgYmx1ciA9ICQoJy5ibHVyX19mb3JtJyksXHJcblx0ICAgIGJsdXJTZWN0aW9uID0gJCgnLmJsdXJfX2JhY2tncm91bmQnKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHNldCA6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGJnV2lkdGggPSAkKCcuYmx1cl9fYmFja2dyb3VuZCcpLndpZHRoKCksXHJcblx0XHRcdFx0YmdIZWlnaHQgPSAkKCcuYmx1cl9fYmFja2dyb3VuZCcpLmhlaWdodCgpLFxyXG5cdFx0XHRcdGltZ0hlaWdodCA9ICQoJy5ibHVyX19pbWcnKS5oZWlnaHQoKSxcclxuXHRcdFx0XHRwb3NMZWZ0ID0gYmx1clNlY3Rpb24ub2Zmc2V0KCkubGVmdCAtIGJsdXIub2Zmc2V0KCkubGVmdCxcclxuXHRcdFx0XHRwb3NUb3AgPSBibHVyU2VjdGlvbi5vZmZzZXQoKS50b3AgLSBibHVyLm9mZnNldCgpLnRvcDtcclxuXHJcblx0XHRcdHBvc1RvcCArPSBiZ0hlaWdodCAtIGltZ0hlaWdodDtcclxuXHJcblx0XHRcdGJsdXIuY3NzKHtcclxuXHRcdFx0XHQnYmFja2dyb3VuZC1zaXplJyA6IGJnV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLXBvc2l0aW9uJyA6IHBvc0xlZnQgKyAncHgnICsgJyAnICsgcG9zVG9wICsgJ3B4J1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCkpO1xyXG5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGlmICghJCgnLmJvZHktd29ya3MnKS5sZW5ndGgpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Ly9jb25zb2xlLmxvZygn0JHQu9GO0YAg0YTQvtGA0LzRiycpO1xyXG5cdCQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKXtcdGJsdXJNb2R1bGUuc2V0KCk7IH0pO1xyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXsgYmx1ck1vZHVsZS5zZXQoKTsgfSk7XHJcbn0oKSk7XHJcblxyXG5cdFxyXG5cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbi8vSEFNQlVSR0VSXHJcbiAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnYm9keS1vdmVybGF5Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxuLy/QktC90LjQt1xyXG5cdHNjcm9sbEZyb20oICcuYXJyb3ctZG93bicsIDcwMCApO1xyXG4vL9CS0LLQtdGA0YVcclxuICBzY3JvbGxGcm9tKCAnLmFycm93LXVwJywgMTAwMCApO1xyXG5cclxufSkoKTtcclxuXHJcbi8v0J3QsNCy0LjQs9Cw0YbQuNGPXHJcblx0ZnVuY3Rpb24gc2Nyb2xsRnJvbShzZWxlY3RvciwgbWlsbGlzZWNvbmRzKXtcclxuXHRcdCQoc2VsZWN0b3IpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHQvL9Cf0L4t0YPQvNC+0LvRh9Cw0L3QuNGOIC0g0YHQutGA0L7Qu9C7INCy0LLQtdGA0YVcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQoICQodGhpcykuYXR0cignaHJlZicpICk7XHJcblx0XHRcdHZhciBzY3JvbGxUb3AgPSAodGFyZ2V0Lmxlbmd0aD4wKSA/IHRhcmdldC5vZmZzZXQoKS50b3AgOiAwO1xyXG5cdFx0XHRcclxuXHRcdCAgJCgnaHRtbCxib2R5Jykuc3RvcCgpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHNjcm9sbFRvcCB9LCBtaWxsaXNlY29uZHMpO1xyXG5cdFx0ICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
