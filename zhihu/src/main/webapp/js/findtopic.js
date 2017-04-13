var str="";

if(location.search.indexOf("?")!=-1){
	var str=url.substr(1);
	alert(str);
}
$.get("topic/allExplore?"+str,function(date){},"json");