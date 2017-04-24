
function opendiv(){
	var div = document.getElementById("modal-wrapper");
	div.style.display="block";
}



function closeD(){
	document.getElementById("modal-wrapper").style.display="none";
}

function send(){
	aimname=document.getElementById("aimname").value;
	console.log(aimname);
	info=document.getElementById("info").value;
	console.log(info);
	$.get("information/usersend?aimname="+aimname+"&&info="+info,function(data){
		if(data>0){
			alert("发送成功！！");
		}
	},"json")
}