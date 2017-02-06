$(function(){
	navTogger();
})
//二维码有效时间
function codeTogger(){
	setTimeout(function(){
		$(".codeIco").addClass("codeOld");
	},5000);
}
//登录切换
function navTogger(obj){
	$(obj).addClass("active").siblings().removeClass("active");
	var navBox = $(".navBox");
	navBox.hide();
	var picCodeBox = $(".picCodeBox");
	var passwordBox = $(".passwordBox");
	if($(obj).hasClass("codeLogin")){
		picCodeBox.show();
		codeTogger();
	}else{
		passwordBox.show();
	}
}
//
////刷新二维码
function refresh(obj){
	$(obj).find("span").addClass("rotate");
	setTimeout(function(){
		$(obj).find("span").removeClass("rotate");
	},500);
	$(".codeIco").removeClass("codeOld");
	codeTogger();
}




//登录
function submitItem(){
	$.ajax({
		type:"get",
		url:"",
		data: {username:$("#username").val(), password:$("#password").val()},
		dataType:"json",
		success:function(data){
			window.location.href = "loginPassword.html";
		}
	});
}