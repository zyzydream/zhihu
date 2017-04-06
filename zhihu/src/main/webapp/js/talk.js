function changeColor(game){
	var g=document.getElementById(game);
	if(g.className=="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-green-check"){
		g.className="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-gray-check";
	}else if(g.className=="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-gray-check"){
		g.className="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-green-check";
	}
	g.append();
}
