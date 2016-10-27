$(".login,.logon").attr("a",1);
$(".down").css("display","none");

$(document).on("mouseover",".down,.nav>a,.down_side",function () {
	$(".down").show();
}).on("mouseout",".down,.nav>a,.down_side",function () {
	$(".down").hide();
})


$(function () {
	var json=[];
	var str="";
	$.getJSON("../json/list.json",function (date) {
		json=date;
		for (var i = 0; i < 12; i++) {
			str='<dl><dt><a href="javascript:void(0);"><img src="'+json.hotSale[i].a+'"/></a></dt><dd><p class="list_name"><a href="javascript:void(0);">'+json.hotSale[i].b+'</a></p><p class="list_value"><span>'+json.hotSale[i].c+'</span></p></dd></dl>';
			$(".list_content").append(str);
		}
		for (var i = 0; i < json.soldOut.length; i++) {
			str='<dl><dt><a href="javascript:void(0);"><img src="'+json.soldOut[i].a+'"/></a></dt><dd><p class="list_name"><a href="javascript:void(0);">'+json.soldOut[i].b+'</a></p><p class="list_value"><span>'+json.soldOut[i].c+'</span></p></dd></dl>';
			$(".list_sold").append(str);
		}
		var n=12;
		$hei=$(".list_content").offset().top;
		$minh=$(".list_content>dl:last").outerHeight();
		$(window).scroll(function () {
			var $h=$hei+$minh*(parseInt(n/4)+0.5);
			if ($(window).scrollTop()+$(window).height()>=$h) {
				if(n+1>json.hotSale.length){return false;}
				str='<dl><dt><a href="javascript:void(0);"><img src="'+json.hotSale[n].a+'"/></a></dt><dd><p class="list_name"><a href="javascript:void(0);">'+json.hotSale[n].b+'</a></p><p class="list_value"><span>'+json.hotSale[n].c+'</span></p></dd></dl>';
				$(".list_content").append(str);
				n++;
			}
			
		})
		
		
		
		
		
		
		
		
		
		
	}).done(function () {
		$("dl").hover(function () {
			$(this).css("background","#f5f5f5");
		},function () {
			$(this).css("background","white");
		})
		$("dt").on("mouseover","img",function () {
			$(this).stop().animate({
				opacity: 0.75,filter: "alpha(opacity=75)"
			},100,function () {
				$(this).stop().animate({
				opacity: 1,filter: "alpha(opacity=100)"
			});
			})
		})
	})	
})
