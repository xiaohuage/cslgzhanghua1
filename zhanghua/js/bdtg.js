$(function(){
 handle=setInterval("lights();",2000);
    setInterval("lights2();",2500);
 
initEvent();
});


var curIndex2=1;
function lights2(){

$(".intro2style").css("display","none");
$(".intro2style").css("top","50px");

$("#intro2"+curIndex2).css("top","0px");
$("#intro2"+curIndex2).slideDown(2400);

curIndex2=curIndex2%6+1;
}

var handle;
var curIndex=1;
function lights(){

$(".contentLDstyle").css("color","#ccc");
$("#contentLD"+curIndex).css("color","#222");

$("#content").css("background-image","none");
$("#content").css("background-image","url(Images/bd"+curIndex+".png)");
curIndex=curIndex%4+1;
}

function initEvent(){
$(".contentLDstyle").hover(function(){
	var index=$(this).attr("flag");
	clearInterval(handle);
$(".contentLDstyle").css("color","#ccc");
$(this).css("color","#222");
$("#content").css("background-image","none");
$("#content").css("background-image","url(Images/bd"+index+".png)");
curIndex=index%4+1;
	},function(){
handle=setInterval("lights();",2000);
	});	

}
