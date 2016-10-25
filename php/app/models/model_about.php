<?


class Model_About{
	
	function get(){
		$sql = "SELECT * FROM `skills`";
		$result = DB::getSelect($sql);

		if ($result['count'] > 0) {
			return $result['result'];
		}
	}

}