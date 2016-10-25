
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICQoJy50YWJzX19jb250cm9scy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYnNfX2NvbnRyb2xzLWl0ZW0nKSxcclxuICAgIFx0XHRjb250ZW50SXRlbSA9ICQoJy5jb250ZW50X19pdGVtJyksXHJcbiAgICBcdFx0aXRlbVBvc2l0aW9uID0gaXRlbS5kYXRhKCdjb250ZW50Jyk7XHJcblxyXG4gICBcdGNvbnRlbnRJdGVtLmZpbHRlcignLmNvbnRlbnRfX2l0ZW0tLScgKyBpdGVtUG9zaXRpb24pXHJcbiAgIFx0XHQuYWRkKGl0ZW0pXHJcbiAgIFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgIFx0XHQuc2libGluZ3MoKVxyXG4gICBcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5maWxlc19faW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoJy5maWxlc19fYnV0dG9uJykudGV4dCgn0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDQt9Cw0LPRgNGD0LbQtdC90L4hJyk7ICBcclxuICB9KTtcclxuXHJcbiAgJChcIi53b3Jrc1wiKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpIHsgXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBmb3JtID0gJCh0aGlzKSxcclxuICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtWzBdKTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gJC5hamF4KHtcclxuICAgICAgdXJsOiBcIi9hZG1pbi9hZGR3b3JrXCIsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXN1bHQuZmFpbChmdW5jdGlvbiAoYW5zKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAg0L3QsCDRgdC10YDQstC10YDQtSEnKTtcclxuICAgIH0pO1xyXG4gICAgcmVzdWx0LmRvbmUoZnVuY3Rpb24gKGFucykge1xyXG4gICAgICBhbGVydChhbnMpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCfQntGC0LLQtdGCOiAnK2Fucy5zdGF0dXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHJlc3VsdDsgIFxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
