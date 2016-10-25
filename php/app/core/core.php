<?

if ($_SERVER['SERVER_NAME']!='ivankorepanov.ru') {
	//DEBUG: HTML -> php
	require_once 'generate_views.class.php';
	Generate_Views::init();
}

require_once 'db.class.php';

//Инициализация базы
DB::init($db_server, $db_type, $db_name, $db_user, $db_password);

//Подключение роутера
require_once 'route.class.php';
Route::init();

//Доп. классы
require_once 'mail.class.php';
