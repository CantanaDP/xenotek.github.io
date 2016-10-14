
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
