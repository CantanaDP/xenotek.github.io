<?

class DB{

	private static $link;

	public static function init($db_server, $db_type, $db_name, $db_user, $db_password)
	{
		self::$link = self::connect($db_server, $db_type, $db_name, $db_user, $db_password);
	}

	private static function connect($db_server, $db_type, $db_name, $db_user, $db_password)
	{

		$link = null;

		$dsn = $db_type . ':host=' . $db_server . ';dbname='. $db_name;
		
		try {
			$link = new PDO($dsn, $db_user, $db_password);
			$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			//echo "Connection ok!";
		} catch (PDOException $e) {
    	echo "Err: " . $e->getMessage();
    }

		return $link;
	}

	public static function getSelect($sql, $data = array()){
		
		$link = self::$link;

		$res = $link->prepare($sql);
		$res->execute($data);

		$count = $res->rowCount();
		$result = $res->fetchAll();

		return array('count' => $count, 'result' => $result);
	}

	public static function executeSQL($sql, $data = array()){
		
		$link = self::$link;

		$res = $link->prepare($sql);
		$res->execute($data);

	}



}