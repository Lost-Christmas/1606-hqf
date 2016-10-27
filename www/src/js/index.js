
var $timer2=null;
//广告栏
$(".ad>input").click(function () {
	$(this).parent().hide();
})

$(".login,.logon").attr("a",0);
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

//json数据
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
		$(".mall>.strickout em").html(json.mall.num);
		for (var i = 0; i < $(".mall_box").length; i++) {
			$(".mall_box").eq(i).find("span").eq(0).html(json.mall.content[i].a1).end().eq(1).html(json.mall.content[i].b2);
			$(".mall_box").eq(i).find(".more").eq(0).html(json.mall.content[i].a3);
			for (var j = 0; j < $(".mall_box").eq(i).find("img").length; j++) {
				$(".mall_box").eq(i).find("img").eq(j).attr("src",json.mall.content[i].img[j]);
			}
			$(".mall_box").eq(i).find("p").html(json.mall.content[i].b1);
			for (var k = 0; k < $(".mall_box").eq(i).find(".info-1").length; k++) {
				$(".mall_box").eq(i).find(".info-1").eq(k).html(json.mall.content[i].info1[k]);
				$(".mall_box").eq(i).find(".info-2").eq(k).html(json.mall.content[i].info2[k]);
			}
			for (var l = 0; l < json.mall.content[i].a2.length; l++) {
				str='<a href="javascript:void(0);">'+json.mall.content[i].a2[l]+'</a>';
				$(".mall_box>h3").eq(i).append(str);
			}
		}
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
		
		$(".ban_bottom>img").eq(2).click(function () {
			window.location.href="html/list.html";
		})
		
	})
})


//倒计时
function getTime (str) {
	var Ostr=new Date(str);
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

//楼梯
$(function() {
	flag = 0;
	$(".rightbar>li").hover(
		function() {
			$(this).children().addClass("hover");
		},
		function() {
			$(this).children().removeClass("hover");

		}
	).last().click(function() {
		flag = 1;
		$("html,body").stop().animate({
			scrollTop: 0
		}, 600, function() {
			flag = 0;
		})
	}).end().not(":last").on("click", function() {
		var $index = $(this).index() + 2;
		flag = 1;
		$(".rightbar span").removeClass("active").eq($index - 2).addClass("active");
		$("html,body").stop().animate({
			scrollTop: $(".louti").eq($index).offset().top
		}, 600, function() {
			flag = 0;
		});
	})
	$(".top").hover(
		function () {
			$(this).css("background-position-y","-108px");
		},
		function () {
			$(this).css("background-position-y","-76px");
		}
	)
	$(window).scroll(function() {
		var $h = $(this).scrollTop();
		var $div = $(".louti");
		if($h > ($div.eq(2).offset().top - $div.eq(2).height() / 4)) {
			$(".rightbar>li,.rightbar a").removeProp("disabled");
			$(".rightbar>li").not(".top").css("visibility","visible");
			$(".rightbar").stop().fadeIn(600);
			for(var i = 0; i < $div.length - 2; i++) {
				var ceil = $div.eq(i + 2).height() / 2 + $div.eq(i + 1).offset().top;
				var floor = $div.eq(i + 2).height() / 2 + $div.eq(i+2).offset().top;
				if($h > ceil && $h <= floor && flag == 0) {
					$(".rightbar span").removeClass("active").eq(i).addClass("active");
				}
			}
			if ($h>$(".like").offset().top) {
				$(".rightbar>li").not(".top").css("visibility","hidden");
			}
		} else {
			$(".rightbar>li,.rightbar a").prop({disabled: true});
			$(".rightbar").stop().fadeOut(600);
		}
	})
})

//商品详情
$(".global_left>ul>li").eq(4).click(function () {
	window.location.href="html/firstgoods.html"
})
$(".global_left>ul>li").eq(2).click(function () {
	window.location.href="html/goods2.html"
})



//底部轮播
var $likenum=0;
function likebox (flag,obj) {
	$(".left-side,.right-side").prop({disabled: true});
	if (flag) {
		$likenum++;
		if ($likenum==20) {
			$likenum=0;
		}
		if ($likenum>15) {
			obj.eq($likenum-16).css({"left":"1170px","display":"block"});
		}else{
			obj.eq($likenum+4).css({"left":"1170px","display":"block"});
		}
		obj.not(":hidden").stop().animate({left:"-=230px"},600)
		setTimeout(function () {
			if($likenum==0){
				obj.eq(19).css({"display":"none"});
			} else if ($likenum>15) {
				obj.eq($likenum-1).css({"display":"none"});
			} else{
				obj.not(":hidden").first().css({"display":"none"});
			}
			$(".left-side,.right-side").removeAttr("disabled");
		},600)
		
	}else{
		$likenum--;
		if ($likenum==-1) {
			$likenum=19;
		}
		obj.eq($likenum).css({"left":"-230px","display":"block"});
		obj.not(":hidden").stop().animate({left:"+=230px"},600);
		setTimeout(function () {
			if ($likenum>=15) {
				obj.eq($likenum-15).css({"display":"none"});
			} else{
				obj.not(":hidden").last().css({"display":"none"});
			}
			$(".left-side,.right-side").removeAttr("disabled");
		},600)
	}
}


$(".like_box").on("click",".right-side",function () {
	likebox(1,$(".likebox>a"));
}).on("click",".left-side",function () {
	likebox(0,$(".likebox>a"));
})