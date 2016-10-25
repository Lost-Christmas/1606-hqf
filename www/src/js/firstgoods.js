$(".login,.logon").attr("a",1);
$(".down").css("display","none");

//二级菜单
$(document).on("mouseover",".down,.nav>a,.down_side",function () {
	$(".down").show();
}).on("mouseout",".down,.nav>a,.down_side",function () {
	$(".down").hide();
})
$(function () {
	var $smallbox = $("#smallbox");
	var $small = $("#small");
	var $bigbox = $("#bigbox");
	var $big = $("#big");
	$smallbox.hover(
		function(e) {
			$small.show();
			$bigbox.show();
			$big.css("background-image","url("+$smallbox.children("img").attr("src")+")");
			$(this).mousemove(function(e) {
				var left = e.pageX - $(this).offset().left - $small.width() / 2;
				var top = e.pageY - $(this).offset().top - $small.height() / 2;
				if(left < 0) {
					left = 0;
				} else if(left > ($(this).width() - $small.width())) {
					left = $(this).width() - $small.width();
				}
				if(top < 0) {
					top = 0;
				} else if(top > ($(this).height() - $small.height())) {
					top = $(this).height() - $small.height();
				}
				$small.css({
					left: left ,
					top: top 
				});
				$big.css({
					left: (-$small.position().left - 1) * $big.width() / $smallbox.width(),
					top: (-$small.position().top - 1) * $big.width() / $smallbox.width()
				})
			})
		},
		function() {
			$small.hide();
			$bigbox.hide();
		}
	)
})

$(function () {
	var json=[];
	var str="";
	$.getJSON("../json/goods.json",function (date) {
		json=date;
		for (var i = 0; i < json.good1.link.length; i++) {
			str='&gt;<a href="javascript:void(0);">'+json.good1.link[i]+'</a>';
			$(".goods_content>h3").append(str);
		}
		for (var i = 0; i < json.good1.img.length; i++) {
			str='<a href="javascript:void(0);"><img src="'+json.good1.img[i]+'"/></a>';
			$(".littleimgbox").append(str);
		}
		$(".goods_content>h3>span>i").html(json.good1.id);
		$("title,.g_right>h2").html(json.good1.name);
		$(".g_value>i").html(json.good1.value);
		$(".g_hover>i").html(json.good1.addr);
		$(".g_right_mid .time").html(json.good1.time);
		$(".g_tips").html(json.good1.tips);
		$(".add_shopcar,.goto_shopcar").click(function () {
			$.cookie.raw=true;
			$.cookie.json=true;
			var $num=parseInt($input.val());
			$.each($.cookie(),function (i,n) {
				if (i==("id"+json.good1.id)) {
					$num+=parseInt(n.num);
				}
			})
			$.cookie("id"+json.good1.id,{
				name:json.good1.name,
				value:json.good1.value,
				addr:json.good1.addr,
				img:json.good1.img[0],
				num:$num,
				link:"../html/firstgoods.html"
			},{ expires: 7 ,path:"/"})
			if ($(this).index()) {
				$(".mark").show();
			}else{
				window.location.href="../html/shopcar.html";
			}
			
		})
	}).done(function () {
		$("#smallbox>img").attr("src",$(".littleimgbox>a").eq(0).children().attr("src"))
		$("#big").css("background-image",$(".littleimgbox>a").eq(0).children().attr("src"))
		$(".littleimgbox>a").on("mouseover",function () {
			var $num=$(this).index()-1;
			$(this).siblings("i").css({
				top:($num*80+1)+"px"
			})
			$("#smallbox>img").attr("src",$(".littleimgbox>a").eq($num).children().attr("src"))
		})
	})
})
var $input=$(".g_num>input");
$(".cut").click(function () {
	if ($input.val()<=1) {
		$input.val("1");
		$(this).css("cursor","not-allowed")
		return false;
	}
	$input.val(parseInt($input.val())-1);
})
$(".add").click(function () {
	$input.val(parseInt($input.val())+1);
})

$input.blur(function () {
	var reg=/^[0-9]+$/;
	if(!reg.test($input.val())){
		$input.val("1");
	}
})
$(".markcon a").click(function () {
	$(".mark").hide();
	if ($(this).index()==0) {
		window.location.href="../html/shopcar.html";
	}
})

$(".g_hover").hover(
	function () {
		$(".g_back").toggle();
	}
)



