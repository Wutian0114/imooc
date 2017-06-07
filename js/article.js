$(function(){
    /*侧滑菜单*/
    $("#aside-btn").on("tap",function(){
        mui('.mui-off-canvas-wrap').offCanvas('toggle');
    });
});