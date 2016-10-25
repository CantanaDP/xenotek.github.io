<?

require_once $_SERVER['DOCUMENT_ROOT'].'/app/core/mail.class.php';

class Model_Works{
	
	function get(){
		$sql = "SELECT * FROM `works`";
		$result = DB::getSelect($sql);

		if ($result['count'] > 0) {
			return $result['result'];
		}
	}


	function mail(){

		mail("xenolithium@yandex.ru", "My Subject", "Line 1\nLine 2\nLine 3");

	//	Mail::send('xenolithium@yandex.ru', 'test', 'test');

	}

}