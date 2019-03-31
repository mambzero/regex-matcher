<?php

error_reporting(0);

$pattern = '/'.$_POST['pattern'].'/';
$text = $_POST['text'];

if (preg_match_all($pattern, $text,$matches)) {
   print_r($matches); 
}

?>