
(function() {
  'use strict';


  $('.tabs__controls-link').on('click', function(e) {
    e.preventDefault();
    
    var item = $(this).closest('.tabs__controls-item'),
    		contentItem = $('.content__item'),
    		itemPosition = item.data('content');

   	contentItem.filter('.content__item--' + itemPosition)
   		.add(item)
   		.addClass('active')
   		.siblings()
   		.removeClass('active');

  });

  $('.files__input').on('change', function(event) {
    $('.files__button').text('Изображение загружено!');  
  });

  $(".works").submit(function(event) { 
    event.preventDefault();

    var form = $(this),
        formData = new FormData(form[0]);

    var result = $.ajax({
      url: "/admin/addwork",
      type: 'POST',
      data: formData,
      dataType: 'json',
      contentType: false,
      processData: false
    });

    result.fail(function (ans) {
      console.log('Ошибка на сервере!');
    });
    result.done(function (ans) {
      alert(ans);
      //console.log('Ответ: '+ans.status);
    });

    // return result;  
  });

})();

