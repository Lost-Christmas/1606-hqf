//console.log($.cookie())
var reg=/^id[0-9]{8}$/;
$.cookie.json=true;
$.cookie.raw=true;
var str="";
var goodnum=0;
var kb=0;
var goodsum=0;
$.each($.cookie(),function (i,n) {
	if (reg.test(i)) {
		str='<tr name="'+i+'"><td><input checked="checked" type="checkbox" name="" id="" value="" /></td><td width="97"><a href="'+n.link+'"><img src="'+n.img+'"/></a></td><td width="262" class="tal"><a href="'+n.link+'">'+n.name+'</a></td><td>'+n.addr+'</td><td>￥<i>'+n.value+'</i></td><td><a class="abut" href="javascript:void(0);">-</a><input class="text" type="text" name="" id="" value="'+n.num+'" /><a class="abut" href="javascript:void(0);">+</a></td><td><span class="cred">￥<i>'+(n.value*n.num)+'</i>元</span><br/><span>返利<i>'+~~(n.value*n.num/200)+'</i>库币</span></td><td><a class="chover" href="javascript:void(0);">删除</a></td></tr>';
		$("tbody").append(str);
		goodnum+=parseInt(n.num);
		kb+=~~(n.value*n.num/200);
		goodsum+=n.value*parseInt(n.num);
	}
	
})
$(".sc_goodnum>i").html(goodnum);
$(".sc_kb>i").html(kb);
$(".sc_goodsum i").html(goodsum);

$("th>:checkbox,p>:checkbox").click(function () {
	kb++;
	$(".sc_goodsum i").html(kb)
	if ($(this).is(":checked")) {
		$(":checkbox").prop("checked",true);
	} else{
		$(":checkbox").prop("checked",false);
	}
})

if($(".sc_goodsum i").text()!="0"){
	$(".sc_shop").hover(function () {
		$(this).toggleClass("act");
	})
}
$(".sc_goodsum i").on("DOMNodeInserted",function() {
console.log(1)
});