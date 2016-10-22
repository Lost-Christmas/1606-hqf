var oCookie = {
	add:function(info,lifeCircle){
		var oDate = new Date();
		oDate.setDate(new Date().getDate() + lifeCircle);
		for(var i=0;i<info.length;i++){
			document.cookie = info[i] + ";expires=" + oDate + ";path=/";
		}
	},
	del:function(info){
		var oDate = new Date();
		oDate.setDate(new Date().getDate() - 1);
		for(var i=0;i<info.length;i++){
			document.cookie = info[i] + "=abc;expires=" + oDate + ";path=/";
		}
	},
	get:function(info){
		var json = {};
		var reg = /\s+/g;
		var oCookie = document.cookie.replace(reg,"").split(";");
		for(var i=0;i<oCookie.length;i++){
			var keyValArr = oCookie[i].split("=");
			for(var j=0;j<info.length;j++){
				if(info[j] == keyValArr[0]){
					json[info[j]] = keyValArr[1];
				}
			}
		}
		return json;
	}
}