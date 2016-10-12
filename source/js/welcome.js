(function () {

	if (!$('.welcome').length) 
		return;
	
  console.log('Страница - Главная');

	var swapElements = function() {
  	setTimeout(function () {
  		$('.welcome .win').eq(0).appendTo( $('.welcome') );
  	}, 500);
  };

  if (location.hash=='#authorize') swapElements();
  $('.welcome .close,.authorize__link,.form__button').on('click', swapElements);
  
  document.onkeydown = function (e) {
    if (e.keyCode==27){//esc
    	if (location.hash!='#authorize') 
    		return;
    	swapElements();
      location.hash='#';
    }
  };

}());