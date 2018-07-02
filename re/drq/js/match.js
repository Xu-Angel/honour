window.onload = function(){
	point('.tab-controller-container');
//	pageload('.slide-content');
}
function point(str){
	var parentBox = document.querySelector(str);//ul盒子
	var childBox = parentBox.children[0];//ul
	var liArr=childBox.children;//li
	var parentBox = document.querySelector('.slide-content');//slideitem盒子
	var slideItem=parentBox.children;//sldeitem
	//循环给li绑定点击事件
	for(var i=0;i<liArr.length;i++){
		liArr[i].index = i;
		drq.tap(liArr[i],function(){
			//当前的li
			var currentLi=event.target.parentNode;
			//当前的索引
			var index=currentLi.index;
			//排他
			for(var i=0;i<liArr.length;i++){
				liArr[i].className="";
				slideItem[i].style.display="none";
			}
			//当前li的样式和当前slideitem的显隐
			liArr[index].className ="now";
			slideItem[index].style.display="block";
		})
	}
}
