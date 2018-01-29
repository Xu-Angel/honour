/**
 * 轮播图
 */
var banner = document.querySelector('.carousel');
var imgUl = banner.children[0];
var docUl = banner.children[1];
slider({cont:banner,imgCon: imgUl,dotCon:docUl,dotSty:'current',time:2000});

/**
 * 日周月选项卡
 */
//获取到日周月
var hotTop = document.querySelector('.hot-top');

var hotLies = hotTop.children[1].children;
console.info(hotLies)
//获取到要切换的选项卡
var hotDay = document.querySelector('.penl-mag-l');
var hotUls = hotDay.children;
console.info(hotUls);
//遍历点击事件
for (var y=0;y<hotLies.length;y++){
    //获取索引值
    hotLies[y].index = y;
    hotUls[y].index =y;
    //点击事件
    hotLies[y].addEventListener('click',function () {
        for (var j=0;j<hotLies.length;j++){
            hotLies[j].className = '';
            hotUls[j].style.visibility = 'hidden';
        }
        this.className = 'now';

        hotUls[this.index].style.visibility = 'visible';
    });
}



//.......................................
/**
 *选项卡类型
 * 视频选项卡
 */

//1.获取按钮选项卡（wonderful-tv-title）
var title = document.getElementsByClassName('wonderful-tv-title')[0];
var lies = title.children[0].children;
//2.获取切换选项卡（wonderful-tv）
var tv = document.getElementsByClassName('wonderful-tv')[0];
var tvUl = tv.children;
var isMove = false;
for (var i=0; i<tvUl.length;i++){
    // 获取按钮的索引值
    lies[i].index = i;
    tvUl[i].index = i;
    //3.点击事件
    lies[i].addEventListener('click',function () {
        //3.2 清除原来的样式，进行排他准备
        for(var j=0;j<tvUl.length;j++){
            //lies[j].classList.remove('current')
            lies[j].className = '';
            tvUl[this.index].style.transition='';
            tvUl[j].style.transform='translateX(7.3rem)';
        }
        //this.classList.add('current');
        this.className = 'current';

        tvUl[this.index].style.transition = 'transform 1s ease';
        tvUl[this.index].style.transform='translateX(0rem)';
    });

    /*--------模拟滑动-----------*/
    tvUl[i].addEventListener('touchstart',function (e) {
        this.startX=e.touches[0].pageX;
    });
    tvUl[i].addEventListener('touchmove',function (e) {
        this.isMove=true;
        this.endX=e.touches[0].pageX;
        // console.log(this.endX)
        this.distance=this.endX-this.startX;
    });

    tvUl[i].addEventListener('touchend',function () {
        if(this.isMove){
            // console.log(this.distance)
            if(Math.abs(this.distance)>this.offsetWidth/20){
                for(var j = 0; j < lies.length; j++ ){
                    lies[j].classList.remove('current');
                    tvUl[j].style.transform='translateX(7.3rem)';
                }
                if(this.distance>0){//向右
                    if(this.index==lies.length-1){//判断滑倒到最后一个
                        tvUl[0].style.transition='transform  0.5s ease';
                        tvUl[0].style.transform='translateX(0%)';

                        lies[0].classList.add('current')
                    }else{
                        this.nextElementSibling.style.transition='transform 0.5s ease';
                        this.nextElementSibling.style.transform='translateX(0%)';
                        lies[this.index+1].classList.add('current')

                    }
                }else{//向左
                    // console.log('l')
                    if(this.index==0){//判断划到第一个
                        tvUl[tvUl.length-1].style.transition='transform 0.5s ease';
                        tvUl[tvUl.length-1].style.transform='translateX(0%)';
                        lies[lies.length-1].classList.add('current')
                    }else{
                        this.previousElementSibling.style.transition='transform 0.5s ease';
                        this.previousElementSibling.style.transform='translateX(0%)';
                        lies[this.index-1].classList.add('current')
                    }
                }
            }
        }
    })

}

