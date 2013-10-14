$(function(){
	initEvents();
});

function initEvents(){
	$("#headerCL3").hover(function(){
$("#headerCL32").show();
$("#headerCL31").css("color","rgb(205, 2, 0)");
	},function(){
$("#headerCL32").hide();
$("#headerCL31").css("color","#fff");
	});


	$(window).scroll(function(){
	var topdistance=$(this).scrollTop();
	if(topdistance>=1000){	
$("#neon-ctaneon-cta").show();
$("#neon-ctaneon-cta").css("top",$(window).scrollTop()+80+"px");
	}
	else
	$("#neon-ctaneon-cta").hide();	
});
}