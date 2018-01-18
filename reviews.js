var revsub;

$(document).ready(function() {

	revsub = function (r) {

	var validates=true;
	
	if(r.name.length == 0) {
		validates = false;
		vf("src");
	}
	
	else unvf("src");
			
	if (r.spamCheck != r.spamVal) {
		validates = false;
		vf("val");
	}

	else unvf("val");

	if (r.review.length == 0) {
		validates = false;
		vf("msg");
	}

	else unvf("msg");
	
	if (validates) {

			var xmlhttp, f="http://goldspikeaudio.com/reviews/submit.php?name="+r.name+"&state="+r.state+"&review="+r.review+"&prod="+r.product+"&owns="+r.isOwner;
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
  				if (xmlhttp.readyState==4 && xmlhttp.status==200) void(0);
  			}
			xmlhttp.open("GET",f,true);
			xmlhttp.send();
			
			$("#review .hide a").click();
			
			alert("Thank you for submitting your review. \n\n Note: we review all submissions before posting and may edit them for brevity.");
	
	}

}

function vf(id) {

	var obj = document.getElementById(id);
	obj.style.border = "2px dashed red";
	obj.style.background = "#fffafa";

}

function unvf(id) {

	var obj = document.getElementById(id);
	obj.style.border = "2px inset #cccccc";
	obj.style.background = "#ffffff";


}

function novf(id) {

	var obj = document.getElementById(id);
	obj.style.border = "2px solid transparent";
	obj.style.background = "transparent";


}

});



