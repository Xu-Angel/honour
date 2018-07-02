window.onload = function(){
	point('.hero-nav');
}
function point(str){
	var parentBox = document.querySelector(str);
	var childBox = parentBox.children[0];
	drq.tap(childBox,function(){	
		var currLi = event.target.parentNode;
		var liArr = childBox.children;
		for(var i=0;i<liArr.length;i++){
			liArr[i].index = i;
			liArr[i].className="";
		}
		currLi.className ="now";
	})
}
