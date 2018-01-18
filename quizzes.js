			var geo, geodata;
			if (window.XMLHttpRequest)
			{
 				geo=new XMLHttpRequest();
  			}
  			else
  			{
  				geo=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			geo.onreadystatechange=function()
 			{
  				if (geo.readyState==4 && geo.status==200) geodata=geo.responseText; 
  			}
			geo.open("GET","http://geoiplookup.wikimedia.org",true);
			geo.send();

var q=0,z,ajax,Lc,Lb,rt=0,wg=0,S,Aky=[],Qky=[],qlen=0,check_scores,get_stats, get_grade, get_col, ptz, db=-1, foo, os, go=true;

var pid = u('pid');

$(document).ready(function(){
if (pid != 1 && pid != 2) 
{
go=false;
}
else
{
	$("#qds").hide();
	$("#qtt").show();
}
});


z = function(pid,q,c,Rt,Wg)
{	
	
	qlen++;
	
	Lc = -1;

	var f = "http://goldspikeaudio.com/quizzes/data.php?pid="+pid+"&q="+q+"&l="+c+"&rt="+Rt+"&wg="+Wg;
		
	ajax(f,c,function(ans,ret,document, geodata){
		
		var m='<form id="bno" class="tabs vl q center" ><fieldset><div class="tab-top" ><span class="block float-left pad" style="width:100px" ></span>';
		ret = ret.split("<==>");
		ret[1] = ret[1].split("<::>");
		var g = ret[1].length;
		
		for (var i=0; i<g; i++)
		{
			var addClass="";
			if(i==0) addClass = " first ";
			if (i==(g-1)) addClass = " last ";
			m+="<label class='tab pad tab-"+i+addClass+"' onclick='Lc="
				+i+"; Lb="+i+";' >" 
				+ ret[1][i] + "</label>";
		}
		
		var dis = "";
		if ( db==-1 ) dis = " this.disabled=\"disabled\"; ";
		
		m+="<button class='special button' id='bqs' style='float:left;margin-left:20px;' type='submit' \
			onclick='q++;z(pid,q,Lc,rt,wg);"+dis+"return false;' >Next</button></div></fieldset></form>";
	
		$("#busy").show();
	
		ret = {question:ret[0],titles:ret[1],ans:ret[2],track:ret[3],done:ret[4],pans:ret[5],nm:ret[6]};
							
			Qky.push(ret.question);
			
			if((ret.ans - ret.pans) == 0) 
			{
				rt=rt+1;
				Aky.push(1);	
			}
			else 
			{
				wg = wg+1;
				Aky.push(0);
			}
			
		var Iq = "<h1 class='center' >" + ret.nm + " Quiz</h1><div class='line default-width' ></div>";
		
		if(q < ret.done)
		{
			var Ih = "<h2 class='block center' >"+(q+1)+". "+ret.question
			+"<br/><span style='color:#aaa;letter-spacing:4px;font-size:12pt;' ><span class='block center' >ANSWER IN TRACK "
			+ ret.track + "</span></span></h2>";
		 	Iq += Ih + m;
		 	
		 	$("#qzc").html(Iq);
		 	
		 }
	
		else
		{
		
			db++;
									
			var f = "http://goldspikeaudio.com/quizzes/data.php?pid="+pid+"&q="+q+"&l="+c+"&m=off"+"&rt="+Rt+"&wg="+Wg+"&lim="+ret.done;
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
  				if (xmlhttp.readyState==4 && xmlhttp.status==200) S=xmlhttp.responseText;
  			}
			xmlhttp.open("GET",f,true);
			xmlhttp.send();
			
			S = "";
			
			if ( S != undefined ) {	
				
				S = S.split("<==>");
				S = {ans:S[0],tp:S[1],tl:S[2],mx:S[3],mn:S[4],cr:S[5],cl:S[6]};

				if(c == S.ans) {
					rt++;
					Aky.push(1);
				}
				else Aky.push(0);
										
				ptz = Math.round(rt/q*200);
				Iq += "<h2>Score: " + rt + "/" + q + "</h2>";
				Iq += "<a href='?pid="+pid+"' >Retake the Quiz</a> | ";
				Iq += "<a href='javascript:do:file.print' \
					onclick='window.print();return false;' >\
					Print</a> | <a href='http://goldspikeaudio.com/go?pid="+pid+"' >Buy our CD</a>";
													
			if (window.XMLHttpRequest)
			{
 				foo=new XMLHttpRequest();
  			}
  			else
  			{
  				foo=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			foo.onreadystatechange=function()
 			{
  				if (foo.readyState==4 && foo.status==200) {
  				
  					os = foo.responseText;
  					get_stats(S, os);
  				
  				}
  			}
  			  			
  			foo.open("GET","http://goldspikeaudio.com/quizzes/alert.php?geo="+geodata+"&right="+rt+"&total="+qlen+"&pid="+pid,true);
			foo.send();	
  			  						
				check_scores(S);
				
				$("#bqs").attr("disabled","enabled");
				$("#bqs").html("Finish & View Score");	
				
				$("#qzc").html(Iq);
				
			
			}
			
			else {
			
				$("#bqs").attr("disabled","enabled");
			
			}
						
		}			
		
				
		$(".tabs.q .tab").click(function(){

			$(".tabs.q .tab").removeClass("open");
			$(".tabs.q .tab").addClass("off");
			$(this).removeClass("off");
			$(this).addClass("open");
		
		});
		
		$("#busy").hide();
		
	});
		
}

ajax = function(fname,d,x)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function() {

  	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    	var s=xmlhttp.responseText;
    	x(d,s,document, geodata);
	}
}
xmlhttp.open("GET",fname,true);
xmlhttp.send();
}

check_scores = function()
{
	var CSR='<br/>', odd = true, bgcolor;
	for (var i=1; i<qlen; i++)
	{
		odd = !odd;
		if (odd) bgcolor = "#ffffee";
		else bgcolor = "none"
		if (Aky[i] == 1)
			CSR += "<div class='hs' style='background:"+bgcolor+";' ><strong>#" + i 
				+ ". " + Qky[i-1] + " </strong><span class='float-right' style='color:green' >Correct</span></div>";
		else 
			CSR += "<div class='hs' style='background:"+bgcolor+";' ><strong>#" + i 
				+ ". " + Qky[i-1] + " </strong><span class='float-right' style='color:red' >Wrong</span></div>";
			
	}
	
	document.getElementById('scores').innerHTML = CSR;
	
	$("#qdl").fadeIn();

}

get_stats = function(S, OS)
{
	OS = OS.split("<==>");
	var otz= Math.round(OS[0] / OS[1]* 200);
	
	var hk = (Math.round(S.tp / S.tl * 100) / 100);
	var rV = "<br/><br/>";
	rV += "<table><tr><td style='width:400px;' ><strong>Your Score</strong><br/><table style='height:200px;' >\
			<tr>\
			<td rowspan='6' height='100' class='statsTable' >\
			<div style='height:"+(200-ptz)+"px; width:100%;' class='statsTableClear' ></div>\
			<b style='color:white; display:block; width:100%; text-align:center;' >"+Math.round(ptz/2)+"%</b></td>\
			<td rowspan='6' style='width:200px; vertical-align:center; text-align:center;' >\
			<div style='font-size:80pt; color: "+get_col(ptz)+"' >"+get_grade(ptz)+"</div>\
			</td></tr><tr></tr>\
			<tr></tr>\
			<tr></tr>\
			<tr></tr>\
			<tr></tr>\
			</table></td><td style='width:400px;' ><strong>Quiz Average Score</strong><br/><table style='height:200px;' ><tr></td>\
			<td rowspan='6' height='100' class='statsTable' >\
			<div style='height:"+(200-otz)+"px; width:100%;' class='statsTableClear' ></div>\
			<b style='color:white; display:block; width:100%; text-align:center;' >"+Math.round(otz/2)+"%</b></td>\
			<td rowspan='6' style='width:200px; vertical-align:center; text-align:center;' >\
			<div style='font-size:80pt; color: "+get_col(otz)+"' >"+get_grade(otz)+"</div>\
			</td></tr><tr></tr>\
			<tr></td></tr>\
			<tr></td></tr>\
			<tr></tr>\
			<tr></tr>\
	</table></td></tr></table>"
	
	
	
	document.getElementById('stats').innerHTML = rV;
		
}

get_grade = function ( ptz ) {

	ptz = ptz/2;
	if ( ptz < 60 ) ptz = "F";
	else if ( ptz <= 63 ) ptz = "D-";
	else if ( ptz <= 69 ) ptz = "D";
	else if ( ptz <= 73 ) ptz = "C-";
	else if ( ptz <= 77 ) ptz = "C";
	else if ( ptz <= 79 ) ptz = "C+";
	else if ( ptz <= 83 ) ptz = "B-";
	else if ( ptz <= 87 ) ptz = "B";
	else if ( ptz <= 89 ) ptz = "B+";
	else if ( ptz <= 93 ) ptz = "A-";
	else if ( ptz <= 97 ) ptz = "A";
	else ptz = "A+";
		
	return ptz;
	
}

get_col = function (ptz) {

	ptz = ptz/4 * 2.55 + 128;
	
	ptz = "rgb(0, " + Math.round(ptz) + ", 0)";
	
	return ptz;

}


if(go) z(pid,q,-1,0,0); //initialize;