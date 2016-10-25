<?php

session_start();

if ($_SERVER['SERVER_NAME']=='ivankorepanov.ru') {
	require_once 'core/config_ivankorepanov.php';
}else{
	require_once 'core/config.php';
}
require_once 'core/core.php';
