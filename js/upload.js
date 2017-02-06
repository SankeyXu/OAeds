$(function(){
	//为上传文件选择类型
	$("#fileTapModel").parent().click(function(e){
		e.stopPropagation();
	})
	var oneTypeTitle;
	var twoTypeTitle;
	$(".modelRow").on("click","span",function(e){
		$("#typeSelect").val("")
		oneTypeTitle = $(this).parent().prev().html();
		twoTypeTitle = $(this).html();
		$("#typeSelect").val(oneTypeTitle +"  >  "+ twoTypeTitle);
	})
})
//发布
function issueBtnItem(){
	
}
//保存
function saveBtnItem(){
	
}
//取消
function cancelBtnItem(){
	
}
//显示上传文件的分类
function downTypeModel(event){
	$("#fileTapModel").addClass("fileTapModelShow");
	$("body").one("click",function(){
		upTypeModel();
	});	
}
//隐藏上传文件分类
function upTypeModel(){
	$("#fileTapModel").removeClass("fileTapModelShow");
}