<?

require_once $_SERVER['DOCUMENT_ROOT'].'/app/core/upload.class.php';

class Model_Admin{
	
	function get(){

		$sql = "SELECT * FROM `skills`";
		$result = DB::getSelect($sql);

		if ($result['count'] > 0) {
			return $result['result'];
		}
	}

	function update_skills(){
		
		foreach ($_POST['percent'] as $id => $percent) {

			$sql = "UPDATE `skills` SET percent=:percent WHERE id=:id";
			DB::executeSQL($sql,array('percent' => $percent, 'id' => $id));

		}//foreach

	}//update_skills

	function addarticle(){

		$title = $_POST['title'];
		$date = $_POST['date'];
		$content = $_POST['content'];

		$sql = "INSERT INTO `blog` (title,date,content) VALUES (:title,:date,:content)";
		DB::executeSQL($sql, array('title' => $title, 'date' => $date, 'content' => $content));

	}//addarticle

	function addwork(){


		$title = $_POST['name'];
		$description = $_POST['description'];
		$link = $_POST['link'];
		$img = $_FILES["image"]["name"];

		$sql = "INSERT INTO `works` (title,description,link,img) VALUES (:title,:description,:link,:img)";
		DB::executeSQL($sql, array('title' => $title, 'description' => $description, 'link' => $link, 'img' => $img));

		UPLOAD::init($_SERVER['DOCUMENT_ROOT'].'/assets/img/works');

	}//addarticle

	function uploadimage(){

		print_r($_POST);
			echo "<br>";
exit;

		

	}




}