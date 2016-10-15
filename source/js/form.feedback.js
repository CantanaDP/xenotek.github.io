
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
			
			var feedback_answer = _ajaxForm(form, "/feedback.php");

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
