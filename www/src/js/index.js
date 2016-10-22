//广告栏
$(".ad>input").click(function () {
	$(this).parent().hide();
})

//轮播
var $index=0;
var $timer=null;
$(".button>li").on("click mouseover",function () {
	if ($index==$(this).index()) {
		return false;
	}
	$index=$(this).index();
	lunbo($index);
})
$timer=setInterval(time,3000)
//$(".carousel").on("mouseover",function () {
//	$(".left_side,.right_side").stop().fadeIn();
//	clearInterval($timer);
//}).on("mouseout",function () {
//	$(".left_side,.right_side").stop().fadeOut();
//		clearInterval($timer);
//		$timer=setInterval(time,3000);
//})
$(".carousel").hover(
	function () {
		$(".left_side,.right_side").stop().fadeIn();
		clearInterval($timer);
	},
	function () {
		$(".left_side,.right_side").stop().fadeOut();
		clearInterval($timer);
		$timer=setInterval(time,3000);
})

$(".left_side,.right_side").hover(
	function () {
		$(this).css({opacity: 1,filter: "alpha(opacity=100)"});
	},
	function () {
		$(this).css({opacity: .5,filter: "alpha(opacity=50)"});
	}
)
function lunbo (num) {
	$(".button>li").removeClass("act").eq(num).addClass("act");
	$(".imgbox>li").stop().fadeOut().eq(num).stop().fadeIn().children(".bigimg").css({left:"-10px"}).stop().animate({left:0},1000).end().children(".smallimg").css({right:"-10px"}).stop().animate({right:0},1000);
	$(".background>div").stop().fadeOut().eq(num).stop().fadeIn();
}
$(".left_side").click(function () {
	$index==0?$index=4:$index--;
	lunbo($index);
})
$(".right_side").click(function () {
	time();
})
function time () {
	$index==4?$index=0:$index++;
	lunbo($index);
}

//waggle
$(".waggle").hover(
	function () {
		$(this).children("span").stop().animate({left:"100px"},200).end().children("img").stop().animate({left:"-40px"},200)
	},
	function () {
		$(this).children("span").stop().animate({left:"180px"},200).end().children("img").stop().animate({left:"0"},200)
	}
)



$(function () {
	var json=[];
	var str="";
	$.getJSON("json/index.json",function (date) {
		json=date;
		var $lasttime=json.lasttime;
		setInterval(function () {
			$(".last-time").html(getTime($lasttime))
		},1000)
		str='<a href="javascript:void(0);"><img src="'+json.bottomlunbo[json.bottomlunbo.length-1].a+'"/><span class="like_name">'+json.bottomlunbo[json.bottomlunbo.length-1].b+'</span><br /><span class="like_value">'+json.bottomlunbo[json.bottomlunbo.length-1].c+'</span></a>';
			$(".likebox").append(str);
		for (var i = 0; i < json.bottomlunbo.length; i++) {
			str='<a href="javascript:void(0);"><img src="'+json.bottomlunbo[i].a+'"/><span class="like_name">'+json.bottomlunbo[i].b+'</span><br /><span class="like_value">'+json.bottomlunbo[i].c+'</span></a>';
			$(".likebox").append(str);
		}
		str='<a href="javascript:void(0);"><img src="'+json.bottomlunbo[0].a+'"/><span class="like_name">'+json.bottomlunbo[0].b+'</span><br /><span class="like_value">'+json.bottomlunbo[0].c+'</span></a>';
			$(".likebox").append(str);
		
		
		
//		
//					
	}).done(function () {
		for (var i = 0; i < $(".likebox>a").length; i++) {
			$(".likebox>a").eq(i).css({left:(i*230+20)+"px"})
		}
		
	})
})
var $likenum=0;
function likebox () {
	
}
function getTime (str) {
	var $Totime=Date.parse(str);
	var today=new Date();
	var $Fromtime=Date.parse(today);
	var $t=$Totime-$Fromtime;
	var day=0,
        hour=0,
        minute=0,
        second=0;
	if ($t>=0) {
		day=Math.floor($t/86400000);
		hour=Math.floor($t%86400000/3600000);
		minute=Math.floor($t%86400000%3600000/60000);
		second=$t/1000%60;
		if (minute <= 9) 	minute = '0' + minute;
		if (second <= 9) 	second = '0' + second;
		if (day <= 9) 		day = '0' + day;
   		if (hour <= 9) 		hour = '0' + hour;
		return day+"天"+hour+"小时"+minute+"分"+second+"秒"
	}else{
		return "已到期！";
	}
}
//		for (var i = 0; i < json.hotsearch.length; i++) {
//			str='<a href="javascript:void(0);">'+json.hotsearch[i]+'</a>';
//			$(".hot_search").append(str);
//		}
