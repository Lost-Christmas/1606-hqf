var $timer2=null;
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


$(function () {
	var json=[];
	var str="";
	$.getJSON("json/index.json",function (date) {
		json=date;
		var $lasttime=json.lasttime;
		setInterval(function () {
			$(".last-time").html(getTime($lasttime))
		},1000)
		for (var i = 0; i < json.bottomlunbo.length; i++) {
			str='<a href="javascript:void(0);"><img src="'+json.bottomlunbo[i].a+'"/><span class="like_name">'+json.bottomlunbo[i].b+'</span><br /><span class="like_value">'+json.bottomlunbo[i].c+'</span></a>';
			$(".likebox").append(str);
		}
		for (var i = 0; i < json.banbottom.length; i++) {
			str='<img src="'+json.banbottom[i]+'" alt="" title=""/>';
			$(".ban_bottom").append(str);
		}
		for (var i = 0; i < $(".global_left>a img").length; i++) {
			$(".global_left>a img").eq(i).attr("src",json.globalleftA[i]);
		}
		for (var i = 0; i < $(".global_left li").length; i++) {
			str='<a href="javascript:void(0);"><img src="'+json.globalleftLi[i].img+'"/></a><em style="background-position:'+json.globalleftLi[i].em+'"></em><div><p>'+json.globalleftLi[i].p+'</p><a href="javascript:void(0);">'+json.globalleftLi[i].a+'</a><span>'+json.globalleftLi[i].span+'</span></div>'
			$(".global_left li").eq(i).append(str);
		}
		for (var i = 0; i < $(".global_right li").length; i++) {
			str='<a class="waggle" href="javascript:void(0);"><img src="'+json.globalRightWag[i].img+'" alt="" /><span>'+json.globalRightWag[i].span+'</span></a><a class="mess" href="javascript:void(0);">'+json.globalRightWag[i].a+'</a>';
			$(".global_right li").eq(i).append(str);
		}
		for (var i = 0; i < $(".sale_bott>li").length; i++) {
			str='<a class="waggle" href="javascript:void(0);"><img src="'+json.saleBottWag[i].img+'" alt="" /><span>'+json.saleBottWag[i].span+'</span></a><a class="mess" href="javascript:void(0);">'+json.saleBottWag[i].a+'</a>';
			$(".sale_bott>li").eq(i).append(str);
		}
		$(".sale_mid_left>img").attr("src",json.saleMidLeft.img1);
		$(".sale_mid_left>.info>img").attr("src",json.saleMidLeft.img2);
		$(".sale_mid_left .info_1").html(json.saleMidLeft.sp);
		for (var i = 0; i < json.saleMidCenter.length; i++) {
			$(".sale_mid_center img").eq(i).attr("src",json.saleMidCenter[i].img);
			$(".sale_mid_center .info_1").eq(i).html(json.saleMidCenter[i].a);
			$(".sale_mid_center .info_2").eq(i).html(json.saleMidCenter[i].b);
		}
		for (var i = 0; i < json.saleMidRight.length; i++) {
			$(".sale_mid_right img").eq(i).attr("src",json.saleMidRight[i].img);
			$(".sale_mid_right dd>a").eq(i).html(json.saleMidRight[i].a);
			$(".sale_mid_right .mid_right_value").eq(i).html(json.saleMidRight[i].b);
		}
		$(".auction>.strickout em").html(json.auctions.num[0]);
		$(".auction #auction_shopnum em").html(json.auctions.num[1]);
		for (var i = 0; i < json.auctions.info.length; i++) {
			str='<li><a href="javascript:void(0);">'+json.auctions.info[i]+'</a></li>';
			$(".auction_right>ul").append(str);
		}
		$(".auction img").attr("src",json.auctions.img1);
		
		
		
	}).done(function () {
		for (var i = 0; i <= 4; i++) {
			$(".likebox>a").eq(i).css({left:(i*230+20)+"px",display:"block"});
		}
		$(".global_left li:last em").css({background: "url(image/ico_index2_1.png) no-repeat"})
		$timer2=setInterval(function () {
			likebox(0,$(".likebox>a"));
		},2000)
		$(".like").hover(
			function () {
				clearInterval($timer2);
			},
			function () {
				clearInterval($timer2);
				$timer2=setInterval(function () {
					likebox(0,$(".likebox>a"));
				},2000)
			}
		)
		$(".like_value").hover(
			function () {
				$(this).addClass("hover");
			},
			function () {
				$(this).removeClass("hover");
			}
		)
		//waggle
		$(".waggle").hover(
			function () {
				$(this).children("span").stop().animate({left:"100px"},200).end().children("img").stop().animate({left:"-40px"},200)
			},
			function () {
				$(this).children("span").stop().animate({left:"180px"},200).end().children("img").stop().animate({left:"0"},200)
			}
		)
		
	})
})
var $likenum=0;
function likebox (flag,obj) {
	$(".left-side,.right-side").prop({disabled: true
});
	if (flag) {
		$likenum++;
		if ($likenum==16) {
			$likenum=-4;
		}
		obj.eq($likenum+4).css({"left":"1170px","display":"block"});
		for (var i = 0; i < obj.length; i++) {
			obj.eq(i).stop().animate({left:obj.eq(i).position().left-230+"px"},function () {
				if ($likenum-1<0) {
					obj.eq($likenum+19).css({"display":"none"});
				}else{
					obj.eq($likenum-1).css({"display":"none"});
				}
				$(".left-side,.right-side").removeAttr("disabled");
			});
		}
	}else{
		$likenum--;
		if ($likenum==-1) {
			$likenum=19;
		}
		obj.eq($likenum).css({"left":"-230px","display":"block"});
		for (var i = 0; i < obj.length; i++) {
			obj.eq(i).stop().animate({left:obj.eq(i).position().left+230+"px"},function () {
				if ($likenum+5>19) {
					obj.eq($likenum-15).css({"display":"none"});
				}else{
					obj.eq($likenum+5).css({"display":"none"});
				}
				$(".left-side,.right-side").removeAttr("disabled");
			});
		}
	}
}


$(".like_box").on("click",".right-side",function () {
	likebox(1,$(".likebox>a"));
}).on("click",".left-side",function () {
	likebox(0,$(".likebox>a"));
})


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
