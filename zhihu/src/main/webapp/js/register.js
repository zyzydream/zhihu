$('.imgcode').hover(function() {
	layer.tips("看不清？点击更换", '.verify', {
		time : 6000,
		tips : [ 2, "#3c3c3c" ]
	})
}, function() {
	layer.closeAll('tips');
}).click(
		function() {
			$(this).attr(
					'src',
					'vcode.jpg?'+ new  Date().getTime());
		})

		$(".login-btn").click(function() {
			var email = $("#email").val();
			var password = $("#password").val();
			var verify = $("#verify").val();
		})
		$("#remember-me").click(function() {
			var n = document.getElementById("remember-me").checked;
			if (n) {
				$(".zt").show();
			} else {
				$(".zt").hide();
			}
		})
				
$("#yanzhengma").dialog({
	title:'',
	border:false,
	closed:true,
	shadow:true,
	modal:true,
	onOpen : function(){
		$(".panel").css("z-index", "999");
		$(".window-shadow").css("z-index", "998")
	}
});

$("#yanzhengma").dialog("close", true);

$("#register").form({
	url:"user/register",    
    success:function(data){	
    	if(data=="true"){
    		$("#yanzhengma").dialog("open");
    	}else{
    		alert("用户名或邮箱重复！！！！")
    	}
    } 
});

function close(){
	alert("aa");
	$("#yanzhengma").dialog("close", true);
}

/*$("#code").form({
	url:"user/code",  
    success:function(data){	
    } 
});
*/




