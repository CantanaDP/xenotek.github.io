<?


class Model_Blog{
	
	function get(){
		$sql = "SELECT * FROM `blog`";
		$result = DB::getSelect($sql);

		if ($result['count'] > 0) {
			return $result['result'];
		}
	}

}