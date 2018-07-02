window.onload = function(){
	point('.tab-controller-container');
}
function point(str){
	var parentBox = document.querySelector(str);
	var childBox = parentBox.children[0];
	var liArr=childBox.children;
	var parentBox1 = document.querySelector('.slide-content');
	var slideItem=parentBox1.children;
	for(var i=0;i<liArr.length;i++){
		liArr[i].index = i;
		drq.tap(liArr[i],function(){
			var currentLi=event.target.parentNode;
			var index=currentLi.index;
			for(var i=0;i<liArr.length;i++){
				liArr[i].className="";
				slideItem[i].style.display="none";
			}
			liArr[index].className ="now";
			slideItem[index].style.display="block";
		})
	}
}
var matchCon=document.querySelector('.slide-content');
var matchdivS=matchCon.children;
var tabCon=document.querySelector('.tab-controller-container');
var newTabs=tabCon.firstElementChild.children;
for(var i = 0; i<matchdivS.length; i++ ){
    newTabs[i].index=i;
    matchdivS[i].index=i;
      newTabs[i].addEventListener('click',function () {
          for(var j=0; j<matchdivS.length; j++ ){
          newTabs[j].classList.remove('now');
              matchdivS[this.index].style.transition='';
              matchdivS[j].style.transform='translateX(100%)';
          }
          this.classList.add('now');
          matchdivS[this.index].style.transition='transform  0.5s ease';
          matchdivS[this.index].style.transform='translateX(0)';
      });
}