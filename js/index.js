/**
 * Created by admin on 2016-10-14.
 */
var windowHeight = $(window).height();
$(window).resize(function(){
	windowHeight = $(window).height();
	$("body").css("height",windowHeight);
})
$(function () {
	$(".bodyWindow").load("html/home.html");
    $('.nav').find('li').on('click',function () {//一级菜单
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        if(index == 0){
        	$(".bodyWindow").load("html/home.html");
        }else if(index == 1){
	        $(".bodyWindow").load("html/workLine.html",function () {
	            $('.content-second').eq(0).addClass('show');
	        });
        }else if(index == 2){
        	$(".bodyWindow").load("html/file.html",function () {
	            $('.content-second').eq(0).addClass('show');
	        });
        }
    });
    $("body").css("height",windowHeight);
});
//修改密码
function userPassword(){
	$(".bigModal,#passwordChenge").fadeIn();
}
//退出登录
function userOut(){
	$(".bigModal,#userOut").fadeIn();
}
//点击遮罩层,遮罩层消失
function bigModal(e){
	if(e.currentTarget == e.target){
		$(".bigModal").fadeOut();
	}
}
//密码修改确认
function passwordSure(){
	$(".bigModal").fadeOut();
}
//退出确认
function userOutSure(){
	$(".bigModal").fadeOut();
}
//取消退出
function userOutCancel(){
	$(".bigModal").fadeOut();
}
//关闭弹窗
function closeBox(){
	$(".bigModal").fadeOut();
}
