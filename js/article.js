$(function(){
    /*侧滑菜单*/
    $("#aside-btn").on("tap",function(){
        mui('.mui-off-canvas-wrap').offCanvas('toggle');
    });

    /*文章区域滚动*/
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
});