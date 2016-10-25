<?

class Route{
	
	static function init(){

		//echo "Routing...<br>";
		$URI = $_SERVER['REQUEST_URI'];

		//Удаляем .html
		$URI = str_replace('.html', '', $URI);
		
		$routes = explode('/', $URI);

		$action = "view";
		if ($routes[2])
			$action = $routes[2];

		if (empty($routes[1])) {

			require_once ('app/controllers/index.php');
			new Index('index', $action);

		}else{

			$controller_name = $routes[1];
			$controller_file = strtolower($controller_name).'.php';
			$controller_path = 'app/controllers/'.$controller_file;

			if (file_exists($controller_path)) {
				require_once ($controller_path);

				$controller_class = strtoupper($controller_name[0]).substr($controller_name, 1);
				new $controller_class($controller_name, $action);

			}else{
				self::error404();
			}
			
		}
	}

	static function error404(){

		require_once ('app/controllers/error404.php');
		new Error404();

	}

}