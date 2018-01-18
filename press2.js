var curId, pmBegin, pmArr=[], nextStep, pm;

$(document).ready(function(){

 if (u("aid") != "") {
 
 		aid = u("aid");
 		
 		$("#na").show();
 		$("#ana").hide();

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
  					var u = xmlhttp.responseText;
  					u = u.split(",,,,");
  					if (u[4].length > 0) {
  					$("#documentTitle").html(u[0]);
  					$("#documentSubTitle").html(u[1]);
  					$("#documentAuthor").html(u[2]);
  					$("#documentDate").html(u[3]);
  					$("#documentBody").html(u[4]);
  					}
  					else {
  					$("#documentTitle").html("Bad Article ID");
  					$("#documentBody").html("We're sorry, but we could not locate this article.\
  					Please press the BACK button in your browser.");
    				}
    				
    		var xmlhttp2;
			if (window.XMLHttpRequest)
			{
 				xmlhttp2=new XMLHttpRequest();
  			}
  			else
  			{
  				xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			xmlhttp2.onreadystatechange=function()
 			{
  				if (xmlhttp2.readyState==4 && xmlhttp2.status==200) {
  					var u = xmlhttp2.responseText;
  					u = u.split(",,,,");
  					var s="<ul class='news' >";
  					for (var i=0; i<u.length; i++) {
  						
  						var t = u[i].split("<==>");
  						s += "<li><a href='http://goldspikeaudio.com/press/article.html?aid="+t[1]+"' >"+t[0]+"</a></li>";
  						
  					}
  					
  					s+="</ul>";
  					
  					$("#read-more-news").html(s);
  					
  					
  			}
  			
  			}
  			
  			xmlhttp2.open("GET","http://goldspikeaudio.com/press/edit.php?action=listnames&filter=live&delim=,,,,",true);
			xmlhttp2.send();			


  			}
  			
  			}
  			
  			xmlhttp.open("GET","http://goldspikeaudio.com/press/dop.php?aid="+aid+"&field=title,,,,subtitle,,,,author,,,,date,,,,body&delim=,,,,",true);
			xmlhttp.send();		
			
		}
		
		else {
		
  			
  			nextStep = function () {
  			
			
			var xmlhttp3;
			if (window.XMLHttpRequest)
			{
 				xmlhttp3=new XMLHttpRequest();
  			}
  			else
  			{
  				xmlhttp3=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			xmlhttp3.onreadystatechange=function()
 			{
  				if (xmlhttp3.readyState==4 && xmlhttp3.status==200) {
  					var sk = xmlhttp3.responseText;
  					sk = sk.split(",,,,");
  					var conts=[];
  					for (var i=0; i<sk.length; i++) conts.push("<br/><small style='margin-left:5px;' >" + sk[i] + "...</small></li>");
  					  					
  					for (var i=0; i<sk.length; i++) pmBegin += pmArr[i] + conts[i] + "</li>";
  					
  					pm = pmBegin + "</ul>";
  					
  					$("#ana #center").html(pm); 
  					
  			}
  			
  			}
  			
  			xmlhttp3.open("GET","http://goldspikeaudio.com/press/edit.php?filter=live&action=listp&delim=,,,,",true);
			xmlhttp3.send();			

  						  					
  			}
  			
  			var xmlhttp2;
			if (window.XMLHttpRequest)
			{
 				xmlhttp2=new XMLHttpRequest();
  			}
  			else
  			{
  				xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			xmlhttp2.onreadystatechange=function()
 			{
  				if (xmlhttp2.readyState==4 && xmlhttp2.status==200) {
  					var u = xmlhttp2.responseText;
  					u = u.split(",,,,");
  					var wtg = u.length;
  					pmBegin="<ul class='enhanced-news' >";
  					
  					for (var i=0; i<wtg; i++) {
  					  						
  						var t = u[i].split("<==>");
  						pmArr.push( "<li><a href='http://goldspikeaudio.com/press/article.html?aid="+t[1]+"' >"+t[0]+"</a>" );
  						
  					}
  					
  					nextStep();
  						  				  					
  			}
  			
  			
  			}
  			
  			xmlhttp2.open("GET","http://goldspikeaudio.com/press/edit.php?action=listnames&filter=live&delim=,,,,",true);
			xmlhttp2.send();				


		
		}

});