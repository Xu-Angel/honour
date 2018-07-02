/*公告轮播栏*/
//1、获取到所有的公告
var bigvCon = document.getElementsByClassName('bigv-con');
//2、初始化索引值
var index = 0;
auto();
//3、播放函数
function  auto() {
    //3.1 如果播完一个，索引值加加
    index++
    //3.2 判断是否到达最后一个
    if (index > bigvCon.length-1){
        index = 0;
    }
    //3.3 遍历所有公告，初始为-100%
    for (var i=0;i<bigvCon.length;i++){
        bigvCon[i].style.right = - 100 + "%";
    }
    //3.4 动画函数
    animate(bigvCon[index],50,2);
}
bigvCon.timer=setInterval(auto,6000);
//4.动画函数
function animate(obj,target,sp) {
    //4.1 清除定时器
    clearInterval(obj.timer);
    var tar = 0;
    //4.2 创建一个定时器
    obj.timer = setInterval(function () {
        //4.2.1 每次增加一段距离
        tar += sp;
        //4.2.2 判断若超过设定距离，则变为最终距离，并清除定时器
        if(Math.abs(tar - target)<sp){
            obj.style.right = target + '%';
            clearInterval(obj.timer);
        }else{
            //否则 每次增加设定值
            obj.style.right = -10 + tar + '%';
        }
    },200);

}

/*-------------------carousel----------------------------*/

