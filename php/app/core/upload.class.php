<?php 

class UPLOAD{
	
	static function init($upload_dir = "uploads"){

		$allowedMIME = array("image/gif", "image/jpeg", "image/png");
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$MIME = finfo_file($finfo, $_FILES["image"]["tmp_name"]);

		$json = array();
		//ошибка - не поддерживаемый формат
		if ( !in_array($MIME, $allowedMIME) ){    
		    $json["errors"]["mime"] = 'не поддерживаемый формат';
		}
		//ошибка - max размер - 100KB
		if ($_FILES["image"]["size"] > 100*1024){ 
		    $json["errors"]["filesize"] = 'размер не должен превышать 100KB';
		}
		//ошибка загрузки файла
		if ($_FILES["image"]["error"] > 0) {
		    $json["errors"]["load"] = 'ошибка загрузки файла: ' . $_FILES["image"]["error"];
		} 
		//файл уже существует
		if (file_exists($upload_dir . "/" . $_FILES["image"]["name"])) 
		{
		    $json["errors"]["already-exists"] = 'файл уже существует';
		}
		//есть ошибки
		if ($json) {
		    $json["status"] = "error";
		}//нет ошибок
		else{
		   move_uploaded_file($_FILES["image"]["tmp_name"], $upload_dir . "/" . $_FILES["image"]["name"]);
		   $json["status"] = "ok";
		}

	//	header('Content-Type: application/json');
		echo json_encode($json);
	}

}

