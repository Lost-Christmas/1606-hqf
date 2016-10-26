if (count($.cookie("goods"))) {
	$.cookie.json=true;
	var goods=$.cookie("goods");
	var str="";
	var goodnum=0;
	var kb=0;
	var goodsum=0;
	
	$.each(goods,function (i,n) {
		str='<tr name="'+n.id+'"><td><input checked="checked" type="checkbox" name="" id="" value="" /></td><td width="97"><a href="'+n.link+'"><img src="'+n.img+'"/></a></td><td width="262" class="tal"><a href="'+n.link+'">'+n.name+'</a></td><td>'+n.addr+'</td><td>￥<i>'+n.value+'</i></td><td><a class="abut" href="javascript:void(0);">-</a><input class="text" type="text" name="" id="" value="'+n.num+'" /><a class="abut" href="javascript:void(0);">+</a></td><td><span class="cred">￥<i>'+(n.value*n.num)+'</i>元</span><br/><span>返利<i>'+Math.round(n.value*n.num/200)+'</i>库币</span></td><td><a class="chover" href="javascript:void(0);">删除</a></td></tr>';
		$("tbody").append(str);
		goodnum+=parseInt(n.num);
		goodsum+=n.value*parseInt(n.num);
		kb+=Math.round(goodsum/200);
	})
	$(".sc_goodnum>i").html(goodnum);
	$(".sc_kb>i").html(kb);
	$(".sc_goodsum i").html(goodsum);
}else{
	$(".sc_centers").hide().siblings().show();
}



$("th>:checkbox,p>:checkbox").click(function () {
	if ($(this).is(":checked")) {
		$(":checkbox").prop("checked",true);
	} else{
		$(":checkbox").prop("checked",false);
	}
	summation();
	$(":checked").parents("tr").children("td").css("background-color","#fdf0ef");
	$(":checkbox:not(:checked)").parents("tr").children("td").css("background-color","white");
})

function summation () {
	var $goodnum=0;
	var $kb=0;
	var $goodsum=0;
	$.each($("td>:checkbox:checked"),function (i,n) {
		var $td=$("td>:checkbox:checked").eq(i).parents("tr").children("td");
		$goodnum+=parseInt($td.eq(5).children("input").val());
		$kb+=parseInt($td.eq(6).find("i").eq(1).html());
		$goodsum+=parseInt($td.eq(6).find("i").eq(0).html());
	})
	$(".sc_goodnum>i").html($goodnum);
	$(".sc_kb>i").html($kb);
	$(".sc_goodsum i").html($goodsum);
	if ($goodsum==0) {
		$(".sc_shop").addClass("null");
	} else{
		$(".sc_shop").removeClass("null");
	}
}
function dele (obj) {
	obj.parents("tr").remove();
	goods=$.cookie("goods");
	delete goods[obj.parents("tr").attr("name")]
	$.cookie("goods",goods,{ expires: 7 ,path:"/"})
	var $len1=$("td>:checkbox").length;
	var $len2=$(":checkbox:checked").length;
	if($len1==$len2){
		console.log($(":checkbox:checked").length)
		$(":checkbox:first,:checkbox:last").prop("checked",true)
	}
	if ($len1==0) {
		$(":checkbox:first,:checkbox:last").prop("checked",false)
	}
	if(!count($.cookie("goods"))){
		$(".sc_centers").hide().siblings().show();
		$.cookie("goods","",{ expires: -1 ,path:"/"})
	}
}

function count(o){
        var t = typeof o;
        if(t == 'string'){
                return o.length;
        }else if(t == 'object'){
                var n = 0;
                for(var i in o){
                        n++;
                }
                return n;
        }
        return false;
}

$("td>.abut").click(function () {
	var $input=$(this).siblings("input");
	var $value=parseFloat($(this).parent().prev().children("i").html());
	var num=parseInt($input.val());
	if ($(this).index()) {
		$input.val(parseInt($input.val())+1);
	} else{
		if ($input.val()<=1) {
			$input.val("1");
			$(this).css("cursor","not-allowed")
			return false;
		}
		$(this).css("cursor","pointer")
		$input.val(num-1);
	}
	$(this).parent().next().find("i").eq(0).html($value*parseInt($input.val())).end().eq(1).html(~~($value*parseInt($input.val())/200))
	var goods=$.cookie("goods");
	goods[$(this).parents("tr").attr("name")].num=$input.val();
	$.cookie("goods",goods,{ expires: 7 ,path:"/"})
	summation();
}).hover(function () {
	$(this).css({"background-color":"red","color":"white"})
},function () {
	$(this).css({"background-color":"white","color":"#333"})
}).eq(0).mouseover(function () {
	var $input=$(this).siblings("input");
	if ($input.val()<=1) {
		$(this).css("cursor","not-allowed");
	}else{
		$(this).css("cursor","pointer");
	}
})


$(".text").blur(function () {
	var $value=parseFloat($(this).parent().prev().children("i").html());
	var reg=/^[0-9]+$/;
	if(!reg.test($(this).val())){
		$(this).val("1");
	}
	if ($(this).val()<=1) {
		$(this).prev().css("cursor","not-allowed");
	}else{
		$(this).prev().css("cursor","pointer");
	}
	$(this).parent().next().find("i").eq(0).html($value*parseInt($(this).val())).end().eq(1).html(~~($value*parseInt($(this).val())/200))
	var goods=$.cookie("goods");
	goods[$(this).parents("tr").attr("name")].num=$(this).val();
	$.cookie("goods",goods,{ expires: 7 ,path:"/"})
	summation();
})

$(".chover").click(function () {
	dele($(this));
	summation();
	
})
$(".del").click(function () {
	$.each($("td>:checkbox:checked"), function(i,n) {
		dele($(this))
	});
	summation();
})


if($(".sc_goodsum i").text()!="0"){
	$(".sc_shop").hover(function () {
		$(this).toggleClass("act");
	})
}


$("td>:checkbox").click(function(){
	if ($(this).is(":checked")){
		var $len1=$("td>:checkbox").length;
		var $len2=$(":checkbox:checked").length;
		if($len1==$len2){
			$(":checkbox:first,:checkbox:last").prop("checked",true)
		}
	}else{
		$(":checkbox:first,:checkbox:last").prop("checked",false)
	}
	summation();
	$(":checked").parents("tr").children("td").css("background-color","#fdf0ef");
	$(":checkbox:not(:checked)").parents("tr").children("td").css("background-color","white");
	
})

