$(function(){
initEvevts();
setInterval("lights();",1500);
});

function initEvevts(){
	$("#navC").hover(function(){
		$("#navCD").show();
		$(this).addClass("nvaCclass");
	},function(){
$("#navCD").hide();	
	$(this).removeClass("nvaCclass");	
	});
}

var curindex=1;
function lights(){

	$(".belowCRDstyle").hide();
	$("#belowCRD"+curindex).show();
	curindex=curindex%7+1;
}