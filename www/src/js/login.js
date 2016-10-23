$(function () {
	var Oyzm=["adab","g8gf","g4nf","prej","hdw8","8yxx"];
	var yzmcon="adab";
	var num=0;
	var $error=$(".lo_err");
	var $strong=$(".strong");
	var flag1,flag2,flag3,flag4,flag5;
//	$(":checkbox").on("click",function () {
//		$error.eq(4).toggle();
//	})
	$("#lo_txt").blur(function () {
		var str=$(this).val();
		var reg=/^1[3|4|5|7|8][0-9]{9}$/;
		if (str=="") {
			$error.eq(0).text("请输入用户名").removeClass("lo_error");
			$(this).css("border-color","red");
		}else if(reg.test(str)){
			$error.eq(0).text("");
			$(this).css("border-color","#ddd");
			flag1=1;
		}else{
			$error.eq(0).text("请输入正确的手机号！");
			$(this).css("border-color","red");
		}
	}).focus(function () {
		$error.eq(0).text("请输入您的手机号");
		$(this).css("border-color","#9c003f");
		flag1=0;
	})
	$("#pass").on("input propertychange",function () {
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
		$error.eq(1).text("");
		$strong.css("visibility","visible");
	}).focus(function () {
		$error.eq(1).text("");
		$(this).css("border-color","#9c003f");
		$strong.css("visibility","visible");
		flag2=0;
	}).blur(function () {
		var str=$(this).val();
		if (str=="") {
			$error.eq(1).text("请输入密码！");
			$(this).css("border-color","red");
		}else if(str.length<6){
			$error.eq(1).text("密码长度6-16个字符，请重新输入");
		}else{
			$error.eq(1).text("");
			$bool.eq(1).css("backgroundPositionY","-34px");
			$(this).removeClass("border");
			$strong.css("display","inline-block");
			flag2=1;
		}
		$bool.eq(1).css("display","inline-block");
		$error.eq(1).show();
		$(this).parent().next().children().eq(0).hide();
		
	})
	$("#repass").blur(function () {
		var str=$(this).val();
		var str2=$("#pass").val();
		if (str=="") {
			$error.eq(2).text("密码不能为空");
			$bool.eq(2).css("backgroundPositionY","-14px");
			$(this).addClass("input_error");
		}else if(str==str2){
			$error.eq(1).text("");
			$bool.eq(1).css("backgroundPositionY","-34px");
			$(this).removeClass("border");
			$strong.css("display","inline-block");
			flag3=1;
		}
		$bool.eq(2).css("display","inline-block");
		$error.eq(2).show();
		$(this).parent().next().children().eq(0).hide();
	}).focus(function () {
		$(this).parent().next().children().eq(0).show();
		$error.eq(2).hide();
		$bool.eq(2).hide();
		$(this).removeClass("input_error");
		$(this).addClass("border");
		flag3=0;
	})
	$("#yzm").blur(function () {
		var str=$(this).val();
		if (str=="") {
			$error.eq(3).text("密码不能为空");
			$bool.eq(3).css("backgroundPositionY","-14px");
			$(this).addClass("input_error");
		}else if (str.length==4) {
			if(str.toLowerCase()==yzmcon){
				$error.eq(3).text("");
				$bool.eq(3).css("backgroundPositionY","-34px");
				$(this).removeClass("border");
				flag4=1;
			}else{
				$error.eq(3).text("图形验证码输入错误，请重新输入");
				$bool.eq(3).css("backgroundPositionY","-14px");
				$(this).addClass("input_error");
			}
		}else{
				$error.eq(3).text("图形验证码输入错误，请重新输入");
				$bool.eq(3).css("backgroundPositionY","-14px");
				$(this).addClass("input_error");
		}
		$bool.eq(3).css("display","inline-block");
		$error.eq(3).show();
		$(this).parent().next().children().eq(0).hide();
	}).focus(function () {
		$(this).parent().next().children().eq(0).show();
		$error.eq(3).hide();
		$bool.eq(3).hide();
		$(this).removeClass("input_error");
		$(this).addClass("border");
		flag4=0;
	}).on("input propertychange",function () {
		var str=$(this).val();
		if (str.length==4) {
			if(str.toLowerCase()==yzmcon){
				$error.eq(3).text("");
				$bool.eq(3).css("backgroundPositionY","-34px");
				$(this).removeClass("border");
				$(this).parent().next().children().eq(0).hide();
				flag4=1;
				$bool.eq(3).css("display","inline-block");
				$error.eq(3).show();
			}else{
				$error.eq(3).text("图形验证码输入错误，请重新输入");
				$bool.eq(3).css("backgroundPositionY","-14px");
				$(this).addClass("input_error");
				$(this).parent().next().children().eq(0).hide();
				$bool.eq(3).css("display","inline-block");
				$error.eq(3).show();
			}
		} else{
			if ((/[^a-zA-z]/.test(str))) {
				$error.eq(3).text("图形验证码输入错误，请重新输入");
				$bool.eq(3).css("backgroundPositionY","-14px");
				$(this).addClass("input_error");
				$(this).parent().next().children().eq(0).hide();
				$bool.eq(3).css("display","inline-block");
				$error.eq(3).show();
			}else{
				$(this).parent().next().children().eq(0).show();
				$error.eq(3).hide();
				$bool.eq(3).hide();
				$(this).removeClass("input_error");
				$(this).addClass("border");
			}
		}
	})
	$(".yzm,.getyzm").on("click",function () {
		var num=~~(Math.random()*6+1);
		var strr="../img/"+num+".php";
		$(".yzm>img").attr("src",strr);
		yzmcon=Oyzm[num-1];
	})
	
	$("#sub").on("click",function (event) {
		var arr=[];
		var str="";
		event.preventDefault();
		flag5=0;
		if ($error.eq(4).css("display")!="inline") {
			flag5=1;
		}
		if (flag1+flag2+flag3+flag4+flag5==5) {
			str="password="+$("#pass").val();
			arr.push(str);
			str="name="+$("#txt").val();
			arr.push(str);
			oCookie.add(arr,7);
			alert("注册成功！");
		}
		
	})
})