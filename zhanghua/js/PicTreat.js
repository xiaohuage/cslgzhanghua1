$(function(){
	initEvents();
});

function initEvents(){

	$(".middleCL3style2").hover(function(){
$(".middleCL3style2").find("div").hide();
$(this).find("div").show();
	},function(){
$(".middleCL3style2").find("div").hide();
	});
}