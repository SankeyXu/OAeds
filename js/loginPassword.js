//首次登录修改密码
function mcSubmit(){
	if($("#newPs").val() == $("#newPsRe").val()){
		$.ajax({
			type:"get",
			url:"",
			data: {username:"Kevin", password:$("#password").val()},
			dataType:"json",
			success:function(data){
				window.location.href="index.html";
			}
		});
	}else{
		alert("请确认两次密码输入一致");
	}
}
