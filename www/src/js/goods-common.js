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