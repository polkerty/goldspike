<?php
$pid = $_REQUEST['pid'];
$q = $_REQUEST['q'];
$l = $_REQUEST['l'];
$Q = $q - 1;
$mode = $_REQUEST['m'];


$pp = $pid - 1;

//get content of textfile
$filename = "titles".$pid.".txt";
$content = file($filename);
$qc = file("questions".$pid.".txt");
$ac = file("answers".$pid.".txt");
$tc = file("tracks".$pid.".txt");
$ql = file("len.txt");
$qn = file("name.txt");


//put content in array
$titles = explode("<==>", $content[$q]);
$question = $qc[$q];
$answer = $ac[$Q];
$track = $tc[$q];
$len = $ql[$pp];
$name = $qn[$pp];

$tstr = $titles[0];

$o = sizeof($titles);

for ($i = 1; $i<$o; $i++)
{
$tstr .= "<::>".$titles[$i];	
}

if($len > ($l + 1)){

	$rstr = $question."<==>".$tstr."<==>".$answer."<==>".$track."<==>".$len."<==>".$l."<==>".$name;
}
else 
{	
	$rstr = $answer;
	$rt = $_REQUEST["rt"];
	if ($l == $answer) $rt++;
	$o = file("stats".$pid.".txt");
	$sar = explode("<==>", $o);
	$sar[0] = $sar[0] + $rt;
	$sar[1] = $sar[1] + $len;
	if($rt >= $sar[2]) $sar[2] = $rt;
	if($rt <= $sar[3]) $sar[3] = $rt;
	$sar = "<==>".$sar[0]."<==>".$sar[1]."<==>".$sar[2]."<==>".$sar[3]."<==>";
	$fp = fopen("stats.txt","w");
	fputs($fp,$sar);
	fclose($fp);
	$rstr .= $sar."<==>".$rt."<==>".$len;

}

echo $rstr;

?>