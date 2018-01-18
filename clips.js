		var tag = u('tag');
		var pid = u('pid');
		var cid = u('cid');		
				
		$(document).ready(function(){
				
		$(".box .hide a").click(function(){
		
			localStorage.noBox = "true";
		
		});
						
		switch(tag)
		{
			case "standalone" :
				$("#clip-wrapper .clip-container[name=standalone]").fadeIn();
				$("#clip-wrapper .clip-container[name=standalone]").addClass('block');
				break;
			case "product" :
					$("#clip-wrapper .clip-container[id=-clp-"+pid+"]").fadeIn();
					$("#clip-wrapper .clip-container[id=-clp-"+pid+"]").addClass('block');
				break;
			default :
				$("#clip-wrapper .clip-container").fadeIn();
				$("#clip-wrapper .clip-container").addClass('block');
				break;
		}
		
		if($("#clip-wrapper .clip-container.block").toArray().length == 0)
		{
		
				if(tag != "product")
				{
					$("#clip-wrapper .clip-container").fadeIn();
					$("#clip-wrapper .clip-container").addClass('block');
				}
				else
				{
					$("#clip-wrapper .clip-container[name=product]").fadeIn();
					$("#clip-wrapper .clip-container[name=product]").addClass('block');

				}

		}
		
		document.getElementById('clip-form').tag.value = tag;
		document.getElementById('clip-form').pid.value = pid;
		$(".tabs .tab-top.clip-select a").removeClass('open');
		$(".tabs .tab-top.clip-select a[name="+tag+"]").addClass('open');
		if(tag == "product") 
		{
		
			$("#clip-pid-select option[value="+pid+"]").attr('selected','selected');
			$("#clip-pid-select").show();
		}
		
		$(".clip-select a.tab").click(function(){
		
			document.getElementById('clip-form').tag.value = $(this).attr('name');
			document.getElementById('clip-form').submit();
			
		
		});

		$("#clip-pid-select").change(function(){
		
			document.getElementById('clip-form').pid.value = $(this).attr('value');
			document.getElementById('clip-form').submit();
			
		});		
		

		$(".clip-container a:even").click(function(event){
		
			if (!isIE) {
				event.preventDefault();
				$(".modal-dialog-box").hide();
				$("#clip-pop .inner-clip-pop-wrap iframe").attr("src",$(this).attr("href"));
				$("#clip-pop").show();
				$(".modal-dialog-bg").fadeIn();
			}
		});
		
		$("#clip-pop .top .hide a").click(function(event){
		
			event.preventDefault();
			$("#clip-pop iframe").attr("src","");
			
		});
		
	});
