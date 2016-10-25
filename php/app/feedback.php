<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$data = array();


if ($name === '' || $email === '' || $subject === '') {
	$data['status'] = 'error';
	$data['text'] = 'Заполнены не все поля';
}else{
	$data['status'] = 'OK';
	$data['text'] = 'Ваше сообщение успешно отправлено!';
}

header("Content-Type: application/json");
echo json_encode($data);

exit;

?>