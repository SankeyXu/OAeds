/**
 * Created by admin on 2016-10-13.
 */

$(function () {
	 $('.content-second').load("html/shareFile.html");
	
    $('.nav-second').find('li').on('click',function () {//二级菜单
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        if(index == 0){
            $('.content-second').load("html/shareFile.html");
        }else if(index == 1){
        	$('.content-second').load("html/uploadFile.html");
        }
    });
});
function historyBack(){
	console.log("back");
}
