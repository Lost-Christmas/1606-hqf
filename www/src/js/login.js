//判断跳转的tab
if ($.cookie("log")=="in") {
	$(".log_tab>a").eq(0).addClass("active");
	$("form").eq(0).css("display","block");
}else if($.cookie("log")=="on"){
	$(".log_tab>a").eq(1).addClass("active");
	$("form").eq(1).css("display","block");
}else{
	$(".log_tab>a").eq(0).addClass("active");
	$("form").eq(0).css("display","block");
}

$(".log_tab>a").click(function () {
	var num=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("form").css("display","none").eq(num).css("display","block");
})
$(".tologin").click(function () {
	$(".log_tab>a").eq(0).addClass("active").siblings().removeClass("active");
	$("form").css("display","none").eq(0).css("display","block");
})
$(".tologon").click(function () {
	$(".log_tab>a").eq(1).addClass("active").siblings().removeClass("active");
	$("form").css("display","none").eq(1).css("display","block");
})

//注册验证
$(function () {
	var Oyzm=["adab","g8gf","g4nf","prej","hdw8","8yxx"];
	var yzmcon="adab";
	var num=0;
	var $error=$(".lo_err");
	var $strong=$(".strong");
	var flag1,flag2,flag3,flag4,flag6;
	var flag5=1;
	$(".logon_yzm1,.logon_yzm2,#lo_vip").css("display","none");
	$(".argeement").css("display","none");
	$("#lo_txt").blur(function () {
		var str=$(this).val();
		var reg=/^1[3|4|5|7|8][0-9]{9}$/;
		if (str=="") {
			$error.eq(0).text("请输入用户名!").removeClass("lo_error");
			$(this).css("border-color","red");
			$(".logon_yzm1,.logon_yzm2").css("display","none");
		}else if(reg.test(str)){
			$error.eq(0).text("");
			$(this).css("border-color","#ddd");
			flag1=1;
			$(".logon_yzm1,.logon_yzm2").css("display","block");
		}else{
			$error.eq(0).text("请输入正确的手机号!");
			$(this).css("border-color","red");
			$(".logon_yzm1,.logon_yzm2").css("display","none");
		}
	}).focus(function () {
		$error.eq(0).text("请输入您的手机号").addClass("lo_error");
		$(this).css("border-color","#9c003f");
		flag1=0;
	})
	$("#lo_pass").on("input propertychange",function () {
		var str=$(this).val();
		$strong.removeClass("strong_hig strong_low strong_mid");
		var num=Number(/\d/.test(str))+Number(/[a-zA-Z_]/.test(str))+Number(/\W/.test(str));
		if (num==1) {
			$strong.addClass("strong_low");
		}else if(num==2){
			$strong.addClass("strong_mid");
		}else if(num==3){
			$strong.addClass("strong_hig");
		}
		$error.eq(2).text("");
		$strong.css("visibility","visible");
	}).focus(function () {
		$error.eq(2).text("");
		$(this).css("border-color","#9c003f");
		$strong.css("visibility","visible");
		flag2=0;
	}).blur(function () {
		var str=$(this).val();
		if (str=="") {
			$error.eq(2).text("请输入密码!");
			$(this).css("border-color","red");
			$strong.css("visibility","hidden");
		}else if(str.length<6||str.length>16){
			$error.eq(2).text("密码长度6-16个字符，请重新输入!");
			$(this).css("border-color","red");
			$strong.css("visibility","hidden");
		}else{
			$error.eq(2).text("");
			$(this).css("border-color","#ddd");
			$strong.css("visibility","visible");
			flag2=1;
		}
	})
	$("#lo_repass").blur(function () {
		var str=$(this).val();
		var str2=$("#lo_pass").val();
		if (str=="") {
			$error.eq(3).text("密码不能为空!");
			$(this).css("border-color","red");
		}else if(str==str2){
			$error.eq(3).text("");
			$(this).css("border-color","#ddd");
			flag3=1;
		}else{
			$error.eq(3).text("两次输入的不一致，请重新输入!");
			$(this).css("border-color","red");
		}
	}).focus(function () {
		$(this).css("border-color","#9c003f");
		flag3=0;
	})
	$("#lo_yzm").blur(function () {
		var str=$(this).val();
		if (str=="") {
			$error.eq(1).text("验证码不能为空!");
			$(this).css("border-color","red");
			
		}else if (str.length==4) {
			if(str.toLowerCase()==yzmcon){
				$error.eq(1).text("");
				$(this).css("border-color","#ddd");
				flag4=1;
			}else{
				$error.eq(1).text("图形验证码输入错误，请重新输入");
				$(this).css("border-color","red");
			}
		}else{
			$error.eq(1).text("图形验证码输入错误，请重新输入");
			$(this).css("border-color","red");
		}
	}).focus(function () {
		$(this).css("border-color","#9c003f");
		flag4=0;
	})
	$("#lo_yzmimg,#lo_yzma").on("click",function () {
		var num=~~(Math.random()*6+1);
		var strr="../image/simple("+num+").png";
		$("#lo_yzmimg").attr("src",strr);
		yzmcon=Oyzm[num-1];
	})
	
	$("#lo_check").on("click",function () {
		$("#lo_vip").toggle();
	})
	
	$("#lo_argee").on("click",function () {
		$(".argeement").toggle();
	})
	
	$("#lo_vip").focus(function () {
		$(this).css("border-color","#9c003f");
		flag5=0;
	}).blur(function () {
		var str=$(this).val();
		if (str=="") {
			$error.eq(4).text("密码不能为空!");
			$(this).css("border-color","red");
		}else{
			$error.eq(4).text("");
			$(this).css("border-color","#ddd");
			flag5=1;
		}
	})
	$(".lo_sub").on("click",function () {
		var str;
		flag6=0;
		if ($(".argeement").css("display")=="none") {
			flag6=1;
		}
		if (flag1+flag2+flag3+flag4+flag5+flag6==6) {
			$.cookie.json = true;
			$.cookie.raw=true;
			str={name:$("#lo_txt").val(),password:$("#lo_pass").val()};
        	$.cookie("user",str,{ expires: 7 ,path:"/"});
        	$("#mark").show();
		}
		
	})
})

//登陆验证
$(function () {
	var flag=0;
	var str_name=$.parseJSON($.cookie("user")).name;
	var str_pass=$.parseJSON($.cookie("user")).password;
	var str_check=$.cookie("checked");
	
	if (str_check=="true") {
		$("#li_txt").val(str_name).prev().hide().end().next().css("backgroundPositionX","-19px");
	}
	
	$("#li_txt,#li_pass").focus(function () {
		$(this).prev().hide();
		$(this).next().css("backgroundPositionX","-19px");
		$(this).css("borderColor","#e93b39");
		$(".li_error").hide();
	}).blur(function () {
		if ($(this).val()=="") {
			$(this).prev().show();
			$(this).next().css("backgroundPositionX","0px");
		}
		$(this).css("borderColor","#ddd");
	});
	$(".li_sub").click(function () {
		if ($("#li_txt").val()==str_name&&$("#li_pass").val()==str_pass) {
			$.cookie("checked",$(".li_check").is(":checked"),{ expires: 7 ,path:"/"})
			$.cookie("login","true",{ expires: 7 ,path:"/"});
			window.location.href="../index.html";
		}
	})
})
$(".mark_key").on("click",function () {
	$("#mark").hide();
	if($(this).index()){
		$.cookie("login","true",{ expires: 7 ,path:"/"});
		window.location.href="../index.html";
	}
})
