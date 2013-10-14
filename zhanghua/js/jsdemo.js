$(function(){
initEvent();
});

function initEvent(){

	$("#topmain2Content11").mouseover(function(){
$(this).css("background-position","-200px -197px");
	});

	$("#topmain2Content11").mouseout(function(){
		$(this).css("background-position","0 -197px");
	});


	$("#topmain2Content12").mouseover(function(){
$(this).css("background-position","-200px -263px");
	});

	$("#topmain2Content12").mouseout(function(){
		$(this).css("background-position","0 -263px");
	});


	$("#topmain2Content13").mouseover(function(){
$(this).css("background-position","-200px -329px");
	});

	$("#topmain2Content13").mouseout(function(){
		$(this).css("background-position","0 -329px");
	});



$(".bsqy").click(function(){
		//$("#topmain1Pic1").addClass(".topmain1Pic12");
	
	
	var flag=$(this).attr("openflag");
	
if(flag=="no"){
$(".bsqy").next("div").hide();
$(".bsqy").attr("openflag","no");
		$(this).next("div").show();
		$(this).attr("openflag","yes");
$("#kg").css("height","10px");
$("#topmain1").css("height","130px");
$("#topmain2").css("height","240px");

		$(".topmain2Contentdown").css("top","317px");
		var fuhao=$(this).attr("fuhao");
		if (fuhao=="lefts") {
			$("#belongs2").hide();
			$("#belongs1").show();
		}
		else
		{
                       $("#belongs1").hide();
			$("#belongs2").show();
		}
	}
	else
	{
$(this).next(".topmain2Contentdown").hide();
$(this).attr("openflag","no");
$("#kg").css("height","100px");
$("#topmain1").css("height","220px");
$("#topmain2").css("height","150px");
$("#belongs1").hide();
$("#belongs2").hide();
	}
});


$(".fontdown").keyup(function(){
	var val=$(this).val();
	if (val=="") {
		$(this).css("background-image","url(Images/3.png)");	
		
	}
	else
	{
		$(this).css("background-image","none");	
	}

});



$(window).scroll(function(){
	var topdistance=$(this).scrollTop();
	if(topdistance>=700){		
$("#gototop").show();
$("#gototop").css("top",$(window).scrollTop()+480+"px");
	}
	else
	$("#gototop").hide();	
});

}