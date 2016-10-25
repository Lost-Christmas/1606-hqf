console.log($.cookie())
$.each($.cookie(),function (i,n) {
	var reg=/^id[0-9]{8}$/;
	var str="";
	if (reg.test(i)) {
		str='<tr><td><input checked="checked" type="checkbox" name="" id="" value="" /></td><td width="97"><a href="'+n.html+'"><img src="'+n.img+'"/></a></td><td width="262" class="tal"><a href="">'+n.name+'</a></td><td>'+n.addr+'</td><td>￥<i>'+n.value+'</i></td><td><a class="abut" href="javascript:void(0);">-</a><input class="text" type="text" name="" id="" value="'+n.num+'" /><a class="abut" href="javascript:void(0);">+</a></td><td><span class="cred">￥<i>'+(n.value*n.num)+'</i>元</span><br/><span>返利<i>'+~~(n.value*n.num/200)+'</i>库币</span></td>td><a class="chover" href="javascript:void(0);">删除</a></td></tr>';
		$("tbody").append(str);
	} else{
		
	}
})
