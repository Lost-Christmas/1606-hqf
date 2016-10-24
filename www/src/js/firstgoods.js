$(".login,.logon").attr("a",1);
$(".down").css("display","none");

//二级菜单
$(document).on("mouseover",".down,.nav>a,.down_side",function () {
	$(".down").show();
}).on("mouseout",".down,.nav>a,.down_side",function () {
	$(".down").hide();
})

