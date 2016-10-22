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
		for (var i = 0; i < $(".down>li").length; i++) {
			str='<div class="down_side">';
			for (var j = 0; j < json.down[i].c.length; j++) {
				str+='<dl><dt>'+json.down[i].c[j]+'</dt><dd>';
				for (var k = 0; k < json.down[i].d[j].length; k++) {
					str+='<a href="javascript:void(0);">'+json.down[i].d[j][k]+'</a>';
				}
				str+='</dd></dl>'
			}
			for (var l = 0; l < json.down[i].f.length; l++) {
				str+='<a href="javascript:void(0);">'+json.down[i].f[l]+'</a>';
			}
			str+='</div>';
			$(".logo").append(str);
		}
		
	}).done(function () {
		$(".down_side dl:nth-child(3)").css("background-image","none");
		//下拉菜单
		$(".down>li").hover(
			function () {
				var $index=$(this).index();
				$(this).addClass("hover");
				var $num=$index*62;
				var $h=$(".down_side").eq($index).height();
				if (($num+$h)>$(".down").height()) {
					$(".down_side").eq($index).css({"display":"block","top":$(".down").height()-$h+166});
				}else{
					$(".down_side").eq($index).css({"display":"block","top":180+$num});
				}
			},
			function () {
				var $index=$(this).index();
				$(this).removeClass("hover");
				$(".down_side").eq($index).css({"display":"none"});
			}
		);
		$(".down_side").hover(
			function () {
				var $index=$(this).index(".down_side");
				$(".down>li").eq($index).addClass("hover");
				$(this).show();
			},
			function () {
				var $index=$(this).index(".down_side");
				$(".down>li").eq($index).removeClass("hover");
				$(this).hide();
			}
		)
		
	})
})

$(window).scroll(function () {
	var $hei=$("#foot").offset().top-$(window).height();
	if ($(window).scrollTop()>$hei) {
		$(".foot_top").animate({"background-position-x":"768px"},300);
	}else{
		$(".foot_top").stop().animate({"background-position-x":0},0);
	}
});

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
$(".down>li:even").addClass("blue");
$(".down>li:odd").addClass("deepblue");


