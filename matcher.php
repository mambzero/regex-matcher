<?php

error_reporting(0);

$pattern = '/'.$_POST['pattern'].'/';
$text = $_POST['text'];
$func = $_POST['function'];

switch ($func) {
	case "preg_match_all":
		if (preg_match_all($pattern, $text,$matches)) {
		   print_r($matches);
		}
		break;
	case "preg_match":
		if (preg_match($pattern, $text,$matches)) {
		   print_r($matches);
		}
		break;
	case "preg_split":
		$array = preg_split($pattern,$text,-1,1);
		if ($array) {
			print_r($array);
		}
		break;
}

?>