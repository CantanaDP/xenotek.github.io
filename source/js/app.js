(function() {
  'use strict';

// WELCOME flip
  function flip() {
  	setTimeout(function () {
  		$('.welcome .win').eq(0).appendTo( $('.welcome') );
  	}, 500);
  }
  if (location.hash=='#authorize') flip();

  $('.welcome .close,.authorize__link,.form__button').on('click', flip);
  
//HAMBURGER

  $('.hamburger').on('click', function(event) {
    event.preventDefault();
    $('body').addClass('body-overlay');
  });
  $('.hamburger-close').on('click', function(event) {
    event.preventDefault();
    $('body').removeClass('body-overlay');
  });

//BLOG swipe

  $('.swipe').on('click', function(event) {
    $('.blog-wrapper').toggleClass('nav-active');
  });

 /* $window = $(window),
  $document = $(document),
  sticked = [],
  windowHeight = $window.height(),*/
  var titles = [];
  $('.blog__title').each(function(index, title) {
      titles.push($(title).offset().top);
  //    console.log(titleTop);

  });

  $('.nav__item').eq(0).addClass('nav__item-active');

  var current = -1;
  var scroller = function() {
    var scrollTop = $(window).scrollTop();
// console.log(scrollTop);
    for (var i = 0; i < titles.length; i++) {
        var titleTop = titles[i]-50;

        if ( scrollTop > titleTop && current !== i) {
          
          $('.blog-wrapper').addClass('sticky');
          $('.nav__item').removeClass('nav__item-active');
          $('.nav__item').eq(i).addClass('nav__item-active');
         // console.log(scrollTop+' '+current+'==='+i);
          current = i;
        }
    }

    if ( scrollTop < titles[0]  && current !== -1) {
      current = -1;
      $('.blog-wrapper').removeClass('sticky');
    }

  };

            /*
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
        elementTop = s.stickyWrapper.offset().top,
        etse = elementTop - s.topSpacing - extra;

      }*/

  $(window).on('scroll', scroller);
/*
  var all = $('*');
  $(window).on('load',function() {
      all.each(function(i, el) {
        console.log($(el).attr('class')+'='+$(el).width());
      });
  });
*/

 /* setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);*/

  
})();