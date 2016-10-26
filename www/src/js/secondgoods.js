$(function () {
	var json=[];
	var str="";
	$.getJSON("../json/goods.json",function (date) {
		json=date;
		console.log(json)
		for (var i = 0; i < json.good2.link.length; i++) {
			str='&gt;<a href="javascript:void(0);">'+json.good2.link[i]+'</a>';
			$(".goods_content>h3").append(str);
		}
		for (var i = 0; i < json.good2.img.length; i++) {
			str='<a href="javascript:void(0);"><img src="'+json.good2.img[i]+'"/></a>';
			$(".littleimgbox").append(str);
		}
		$(".goods_content>h3>span>i").html(json.good2.id);
		$("title,.g_right>h2").html(json.good2.name);
		$(".g_value>i").html(json.good2.value);
		$(".g_hover>i").html(json.good2.addr);
		$(".g_right_mid .time").html(json.good2.time);
		$(".g_tips").html(json.good2.tips);
		$(".add_shopcar,.goto_shopcar").click(function () {
			$.cookie.json=true;
			var $num=parseInt($input.val());
			if ("goods" in $.cookie()) {
			}else{
				$.cookie("goods",{},{ expires: 7 ,path:"/"})
			}
			var goods=$.cookie("goods");
			var obj={
					name:json.good2.name,
					value:json.good2.value,
					addr:json.good2.addr,
					img:json.good2.img[0],
					num:$num,
					link:"../html/secondgoods.html",
					id:"id"+json.good2.id
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