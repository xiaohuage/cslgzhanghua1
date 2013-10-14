 $(function(){
	initPosition();
initEvent();
handle=setInterval("light();",1200);
});


var curIndex=1;
var handle;
function light(){
	for (var i = 1;i<=4;i++) {
//var ele=document.getElementById("top-banner"+2+i);
//alert(ele);
//alert(20+i);
$("#top-banner2").css("background-image","none");
 //$("#top-banner"+2+i).css("background-image","url(Images/3602.png)");
$("#top-banner"+2+i).css("background-position","0 0");
	}

     //var ele=document.getElementById("top-banner"+curIndex);
$("#top-banner2").css("background-image","url(Images/"+1+curIndex+".jpg)");
    $("#top-banner"+2+curIndex).css("background-position","0 -10px");
     curIndex=curIndex%4+1;
}



 function initEvent(){
$("#top-banner2").css("background-image","Images/"+12+".jpg");

 	$(".tbmenu").hover(function(){
 		$(this).find("dd").show();
 		$(this).find("dt").addClass("dtover");
 	},function(){

 	 		$(this).find("dd").hide();
 		$(this).find("dt").removeClass("dtover");	
 	});


 	$(".huandengpian").hover(function(){

 		var flag=$(this).attr("flag");
 		//alert(2+flag);
 		clearInterval(handle);
 		$(".huandengpian").css("background-position","0 0");
 		$("#top-banner2").css("background-image","none");
 			/* for (var i = 1;i<=4;i++) {
$("#top-banner"+2+i).css("background-position","0 0");
$("#top-banner"+2+i).css("background-image","none");
} */
$("#top-banner2").css("background-image","url(Images/"+1+flag+".jpg)");
//alert(1+flag);
$(this).css("background-position","0 -10px");
curIndex=flag%4+1;
 	},
 	function(){

handle=setInterval("light();",1200);
 	});
 }


 function initPosition(){
	$.each($(".tbmenu"),function(i){
$(this).css("left",i*70+"px");
	});
}


