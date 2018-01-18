/* */

var load = 0;

var isIE = false, IE8 = false;

if(navigator.userAgent.indexOf("MSIE") != -1) isIE = true;
if(navigator.userAgent.indexOf("MSIE 8.0") != -1) IE8 = true;



var oNav=false;

// Useful dynamic functions using jQuery

var dcnt=0, lcnt=0, carcnt=0, tcnt=0;
var $odl, $oti, $fti;
var car=0;
var cpt=true;
var mcpt=true;
var arcl,ct;
var GAR='';

var help;

$(document).ready(function(){

/* Navigation */

$("a[href=#]").click(function(e){e.preventDefault();});

$(".box .hide a").attr("title","Hide");

			var xmlhttp;
			if (window.XMLHttpRequest)
			{
 				xmlhttp=new XMLHttpRequest();
  			}
  			else
  			{
  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			xmlhttp.onreadystatechange=function()
 			{
  				if (xmlhttp.readyState==4 && xmlhttp.status==200) {
  					$("#nav").html(xmlhttp.responseText);
  					$("body").show();
  				}
  			}
  			
  			xmlhttp.open("GET","http://goldspikeaudio.com/nav.txt",true);
			xmlhttp.send();			
			
if (isIE) $("#nav").mouseover(function(){$(this).css("height", $("#nav li").height());});
if (IE8) $("#nav li").css("margin-top", "-20px");

//Load info-boxes

$(".box").addClass("fx");
$(".box").addClass("outset");
$(".box").css("width",$(window).width()-24);
$(".box").show();

try
{
if(clips) var a;
}
catch(e)
{
var clips=false;
}

$(".box .hide a").click(function(event){

	event.preventDefault();
	$(".box").fadeOut();

});


/* Carousel */

//arcl = $(".carousel[rotate=rotate]").toArray();
//ct = [];
//for(var i=0; i<arcl.length; i++){
//arcl[i].rotateSpeed=4000; //temp fix
//ct.push(setTimeout("rotateCarousel("+i+","+arcl[i].rotateSpeed+")", arcl[i].rotateSpeed));
//}

$(".carousel").mouseover(function(event){
	
	var that=this;
	$(".carousel").attr("id","-car-0");
	$(that).attr("id", "-car-2");	

});

$(".carousel a.btnCarouselLeft" ).click(function(event){

	event.preventDefault();
	if(cpt) move("back");

});

$(".carousel a.btnCarouselRight" ).click(function(event){

	event.preventDefault();
	if (cpt) move("forward");	

});

arcl = $(".carousel.autorotate").toArray();
ct = [];
for (var i=0; i<arcl.length; i++) ct.push(setTimeout("rotateCarousel(" + i + ", " + 6000 + ")", 6000));
	

/* modal dialog */

$(".modal-dialog-box#mailinglist").html(

		'<div class="top" >Mailing List Sign Up<span class="float-right hide" ><a href="" >X</a></span></div>\
		<form action="http://goldspikeaudio.com/m/j.php" ><div class="imbdf" ><fieldset >\
		<table><tr><td>Email Address</td><td><input type="text" name="utm_e" id="utm_e" style="width:100%" /></td></tr>\
		<tr><td>Name</td><td><input type="text" name="utm_n" id="utm_n" style="width:100%" /></td></tr></table>\
		</fieldset><br/><button type="submit" >JOIN</button></form><br/><p class="sg" >Copyright &copy; \
		2012 GoldSpike Audio. <a href="http://goldspikeaudio.com/privacy"  target="_blank" >Privacy &rsaquo;</a>\
		</p></div>'

);

$(".modal-dialog-bg").css("height",$(window).height());
$(window).resize(function(){

	$(".modal-dialog-bg").css("height",$(window).height());

});

$(function(){var a=document.getElementsByTagName('a'),r=[];for(var i=0;i<a.length;i++){if(a[i].href.indexOf('#!/dialog')!=-1)r.push(a[i]);}return r;}()).click(function(event){

	var that=this;
	event.preventDefault();
	var s="#!/dialog/".length,k=$(that).attr('href'),l=k.substr(s),id="#"+l;
	$(".modal-dialog-box").hide();
	$(id).show();
	$(".modal-dialog-bg").fadeIn();	

});

/*$("a[href=#!/dialog]").click(function(event){
	
	event.preventDefault();
	$(".modal-dialog-bg").fadeIn();

});*/

$(".modal-dialog-box .hide a").click(function(event){

	event.preventDefault();
	$(".modal-dialog-bg").fadeOut();
	
});

$(".modal-dialog-box a[href=#close]").click(function(event){

	event.preventDefault();
	$(".modal-dialog-bg").fadeOut();
	
});

/* tabs */

$(".tabs .tab-content .tb").hide();
$(".tabs .tab-content .tab-1.tb").show();


$(".tabs").mouseover(function(){

	$(".tabs").attr("id","-tb-off");
	$(this).attr("id","-tb-on");

});

$(".tabs .tab").click(function(){

	$(".tabs#-tb-on .tab").removeClass("open");
	$(".tabs#-tb-on .tab").addClass("off");
	$(this).removeClass("off");
	$(this).addClass("open");
	var c = $(this).attr("class").substr($(this).attr("class").indexOf('tab-')+4,1);
	$(".tabs#-tb-on .tab-content div.tb").hide();
	$(".tabs#-tb-on .tab-content div.tab-"+c).show();

});

/* Text-Inputs  */

$("textarea").focus(function(){

$(this).attr("class", "focused");

});

$("textarea").blur(function(){

$(this).attr("class", "");

});

$("input[type=text]").focus(function(){

$(this).attr("class", "focused");

});

$("input[type=text]").blur(function(){

$(this).attr("class", "");

});

help = function ( id ) {

	$("#"+id).slideToggle();

}

});


function move(amt)
{
	cpt=false; 
	//clearTimeout(ct[i]);

	var l = $(".carousel[id='-car-2'] ul li").toArray();						
	var id, f=false, nt;
	for(var i=0; i<l.length;i++)
	{
		if($(l[i]).attr("id") == 2) 
		{
			id = i;
			f=true;		}
	}
	
	$(".carousel[id='-car-2'] ul li").attr('id', -1);
	$(l[id]).attr('id', 1);													

	if(!f) 
	{	
		$(l[0]).attr("id", 1);													
		id=0;
	} 
	
	
	$(l[id]).fadeOut(0, function(){

	switch(amt)
	{
		case "back" :
		
			if (id == 0) nt = l.length-1;
		    else nt = id-1;
			
			break;
			
		case "forward" :
		
			if (id == (l.length-1)) nt = 0;
			else nt = id+1;
		
			break;
			
		default :
		
			break;
	}
	
		

	$(l[nt]).attr('id', 2);
	$(l[nt]).fadeIn(500, function(){cpt=true;});
	
	});
	
	
}

function moveA(amt)
{
	cpt=false; 
	//clearTimeout(ct[i]);

	var l = $(".carousel[id='-car-1'] ul li").toArray();						
	var id, f=false, nt;
	for(var i=0; i<l.length;i++)
	{
		if($(l[i]).attr("id") == 2) 
		{
			id = i;
			f=true;		}
	}
	
	$(".carousel[id='-car-1'] ul li").attr('id', -1);
	$(l[id]).attr('id', 1);													

	if(!f) 
	{	
		$(l[0]).attr("id", 1);													
		id=0;
	} 
	
	
	$(l[id]).fadeOut(0, function(){

	switch(amt)
	{
		case "back" :
		
			if (id == 0) nt = l.length-1;
		    else nt = id-1;
			
			break;
			
		case "forward" :
		
			if (id == (l.length-1)) nt = 0;
			else nt = id+1;
		
			break;
			
		default :
		
			break;
	}
	
		

	$(l[nt]).attr('id', 2);
	$(l[nt]).fadeIn(500, function(){cpt=true;});
	
	});
	
	
}


function rotateCarousel(i,s){
	
	setCarousel(arcl[i]);
	moveA("forward");
	clearTimeout(ct[i]);
	ct[i] = setTimeout("rotateCarousel("+i+","+s+")", s);

}

function setCarousel(c){

	c.id="-car-1";
}


	function us(){
		
		var vars = [], hash;
  		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  		for(var i = 0; i < hashes.length; i++)
  		{
	      hash = hashes[i].split('=');
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1];
	    }
	    return vars;
	  }

	function u(name){
		if (!us()[name]) return '';
		else return decodeURI(unescape(us()[name]));
	  }
	  
