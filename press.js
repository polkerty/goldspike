var aid = 1000;

$(document).ready(function(){

 if (u("aid") != "") aid = u("aid");

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
  					u = xmlhttp.responseText;
  					u = u.split(",,,,");
  					$("#documentTitle").html(u[0]);
  					$("#documentSubtitle").html(u[1]);
  					$("#documentAuthor").html(u[2]);
  					$("#documentDate").html(u[3]);
  					$("#documentBody").html(u[4]);
  				}
  			}
  			
  			xmlhttp.open("GET","http://goldspikeaudio.com/press/dop.php?aid="+aid+"&field=title,,,,subtitle,,,,author,,,,date,,,,body&delim=,,,,",true);
			xmlhttp.send();			

});