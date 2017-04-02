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
		});
$("#remember-me").click(function() {
	var n = document.getElementById("remember-me").checked;
	if (n) {
		$(".zt").show();
	} else {
		$(".zt").hide();
	}
});



