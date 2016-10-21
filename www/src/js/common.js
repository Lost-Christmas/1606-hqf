var timer=null;



//head_nav
$(".more:eq(1),.khfw").hover(
	function () {
		$(".khfw").stop().slideDown(200);
	},
	function () {
		$(".khfw").stop().slideUp(200);
	}
)


$(function () {
	var json=[];
	var str="";
	$.getJSON("json/common.json",function (date) {
		json=date;
		//hot_search
		for (var i = 0; i < json.hotsearch.length; i++) {
			str='<a href="javascript:void(0);">'+json.hotsearch[i]+'</a>';
			$(".hot_search").append(str);
		}
		for (var i = 0; i < json.navcontent.length; i++) {
			str='<a href="javascript:void(0);">'+json.navcontent[i]+'</a>';
			$(".nav_content").append(str);
		}
		for (var i = 0; i < $(".down>li").length; i++) {
			str='<a class="title" href="javascript:void(0);">'+json.down[i].a+'</a><br />';
			for (var j = 0; j < json.down[i].b.length; j++) {
				str+='<a href="javascript:void(0);">'+json.down[i].b[j]+'</a>';
			}
			 $(".down>li").eq(i).append(str);
		}
		
//		for (var i = 0; i < json.shop.length; i++) {
//			str='<li><a class="today_pic" href="javascript:void(0);"><img src="'+json.shop[i].a+'"/></a><div class="xianshi"><img src="img/b_12.png"/></div><a class="spjs" href="javascript:void(0);">'+json.shop[i].b+'<br/><span>'+json.shop[i].c+'</span></a><br /><p>'+json.shop[i].d+'</p></li>';
//			$(".today_left>ul").append(str);
//		}
	})
})



//placeholder

$(".logo_search").focusin(function() {
  	$(".tst").css('color','#999999');
  	timer=setInterval(function(){
  		if($("#txt").val()!=""){
  			$(".tst").css("display","none");
  		}else{
  			$(".tst").css("display","block");
  		}
  	},10)
}).focusout(function(){
	$(".tst").css('color','#666');
})

//reset
$(".down>li:even").css("background-color","#463b7f");
$(".down>li:odd").css("background-color","#382f6b");

