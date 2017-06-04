/**
 * Created by Administrator on 2017/5/25.
 */
mui.ready(function(){
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    //滑动后执行回调函数
    document.querySelector(".mui-slider").addEventListener("slide",function(event){
        //获取当前轮播图的索引，并调用函数
        setLis(event.detail.slideNumber);
    });
    //给当前轮播图添加active样式
    var lis = document.querySelector(".indicators").querySelectorAll("li");
    function setLis(index){
        for(var i=0; i<lis.length; i++){
            lis[i].classList.remove("active");
        }
        lis[index].classList.add("active");
    }
});