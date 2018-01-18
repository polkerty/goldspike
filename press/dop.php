<?php
$aid = $_REQUEST['aid'];
$action = $_REQUEST['action'];
$field = $_REQUEST['field'];
$delim = $_REQUEST['delim'];

if($action != "edit") {

	$filename = $aid.".txt";
	$content = file($filename);
	$car = explode("<::>", $content[0]); 
		
	$f = explode($delim,$field);
	$fl = sizeof($f);
	
	$rstr = $car[o($f[0])];
	
	for($i=1;$i<$fl;$i++)$rstr.=$delim.$car[o($f[$i])];
	
	echo $rstr;
	
}

else {



}

function o ($x) {

	if ($x == "title") return 0;
	else if ($x == "subtitle") return 1;
	else if ($x == "author") return 2;
	else if ($x == "date") return 3;
	else if ($x == "body") return 4;
	else return null;

}

?>