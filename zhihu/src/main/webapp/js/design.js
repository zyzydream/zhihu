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
	div.style.display="none";
	document.getElementById("Password1").style.display="block";
	document.getElementById("Password2").style.display="block";
}
