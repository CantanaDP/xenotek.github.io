<?


class Error404{
	
	public function __construct()	{
		require_once($_SERVER['DOCUMENT_ROOT'].'/app/views/error404.php');

	}
}