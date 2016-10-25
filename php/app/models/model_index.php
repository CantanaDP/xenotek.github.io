<?


class Model_Index{
	
	function get(){
		$sql = "SELECT * FROM `works`";
		$result = DB::getSelect($sql);

		if ($result['count'] > 0) {
			return $result['result'];
		}
	}

}