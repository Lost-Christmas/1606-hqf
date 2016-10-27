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
		$(".g_right>h2").html(json.good1.name);
		$(".g_value>i").html(json.good1.value);
		$(".g_hover>i").html(json.good1.addr);
		$(".g_right_mid .time").html(json.good1.time);
		$(".g_tips").html(json.good1.tips);
		$(".add_shopcar,.goto_shopcar").click(function () {
			$.cookie.json=true;
			var $num=parseInt($input.val());
			if ("goods" in $.cookie()) {
			}else{
				$.cookie("goods",{},{ expires: 7 ,path:"/"})
			}
			var goods=$.cookie("goods");
			var obj={
					name:json.good1.name,
					value:json.good1.value,
					addr:json.good1.addr,
					img:json.good1.img[0],
					num:$num,
					link:"../html/firstgoods.html",
					id:"id"+json.good1.id
			}
			if (obj.id in goods) {
				$num+=parseInt(goods[obj.id].num);
				obj.num=$num;
			}
			goods[obj.id]=obj;
			$.cookie("goods",goods,{ expires: 7 ,path:"/"})
			if ($(this).index()) {
				$(".mark").show();
			}else{
				window.location.href="../html/shopcar.html";
			}
			
		})
		$("#smallbox>img").attr("src",$(".littleimgbox>a").eq(0).children().attr("src"))
		$("#big").css("background-image",$(".littleimgbox>a").eq(0).children().attr("src"))
		$(".littleimgbox>a").on("mouseover",function () {
			var $num=$(this).index()-1;
			$(this).siblings("i").css({
				top:($num*80+1)+"px"
			})
			$("#smallbox>img").attr("src",$(".littleimgbox>a").eq($num).children().attr("src"))
		})
	}).done(function () {
	})
})



