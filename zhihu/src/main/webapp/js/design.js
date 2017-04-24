function lick(id,num){
	var divElementchild;
	var lilist ; 
	var u = document.getElementsByTagName("ul");
	for(var i=0;i<u.length;i++){
		if(u[i].className == "tab-navs"){
			divElementchild = u[i].parentNode.parentNode.childNodes;
			lilist = u[i].childNodes;
			break;
		}
	}
	for(var i=0;i<lilist.length;i++){
		if(i==num){
			lilist[i].className="tab-nav active";
		}else{
			lilist[i].className="tab-nav";
		}
	}
	for(var i=0;i<divElementchild.length;i++){
		if(divElementchild[i].tagName == "DIV" && divElementchild[i].id != ""){
			if(divElementchild[i].id == id){
				divElementchild[i].style.zIndex = "1";
			}else{
				divElementchild[i].style.zIndex = "-1";
			}
		}
	}
}

function modify(){
	var div = document.getElementById("modifypass");
	div.style.display="block";

}

$.post("user/list",function(data){
	$("#Uemail").append("<span class='text email'>"+data[0].uemail+"</span")
},"json")


function make(){
	if($("#password").val() == $("#passwore1").val()){
		$.ajax({url:"user/updataPS?upassword="+$("#password").val(),success:function(data){
			if(data  == "true"){
				alert("修改成功！！！")
				window.location.reload(true);
			}else{
				alert("修改失败！！！")
				window.location.reload(true);
			}
		},dataType:"json"})
	}else{
		alert("两次密码不一致！！！！")
	}
}
