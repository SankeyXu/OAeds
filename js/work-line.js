/**
 * Created by admin on 2016-10-13.
 */

$(function () {
	 $('.content-second').load("html/beginOne.html");
	
    $('.nav-second').find('li').on('click',function () {//二级菜单
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        if(index == 0){
            $('.content-second').load("html/beginOne.html");
        }else if(index == 1){
            $('.content-second').load("html/waitOne.html");
        }else if(index == 2){
            $('.content-second').load("html/overOne.html");
        }else if(index == 3){
            $('.content-second').load("html/runOne.html");
        }
    });

    $('.nav-third').find('li').on('click',function () {//三级菜单
        $(this).addClass('active').siblings().removeClass('active');
    });

	$(".item-content a").on("click",function(){
		$(".content-second.show").load("html/beginTwo.html",cardItem);
	})
});
//多于5个收起,小于等于5个展开
function cardItem(){
	setTimeout(function(){
		var lineLong = "";
		var lineCardNum = $(".lineBox .lineCard").length;
		var calHeight = $(".lineCard:last-of-type").height();
		if(lineCardNum<8){
			$("#lookMore").hide();
			$("#lookShort").hide();
			lineLong = $(".lineBox").height()-(calHeight/2)+40;
		}else{
			$(".lineCard").hide();
			$(".lineCard").eq(0).show();
			$(".lineCard").eq(1).show();
			$("#lookMore").show();
			$(".lineCard").eq(lineCardNum-1).show();
			lineLong = $(".lineBox").height()-(calHeight/2)+40;
		}
		$(".oneLine").height(lineLong);
	},100)
}
//查看大于5个
function lookMoreItem(obj){
	$(".lineCard").show();
	$(obj).parents("#lookMore").hide();
	var calHeight = $(".lineCard:last-of-type").height();
	var lineLong = $(".lineBox").height()-(calHeight/2)+40;
	$(".oneLine").height(lineLong);
}
//收起大于5个
function lookShortItem(){
	var lineCardNum = $(".lineBox .lineCard").length;
	$(".lineCard").hide();
	$(".lineCard").eq(0).show();
	$(".lineCard").eq(1).show();
	$("#lookMore").fadeIn();
	$(".lineCard").eq(lineCardNum-1).show();
	var calHeight = $(".lineCard:last-of-type").height();
	var lineLong = $(".lineBox").height()-(calHeight/2)+40;
	$(".oneLine").height(lineLong);
}
function goTwo(){
	 var _indexNum =  $('.nav-second').find('li.active').index();
	  if(_indexNum == 0){
		  $(".content-second").load("html/beginTwo.html",cardItem);
	  }else if(_indexNum == 1){
	 	$(".content-second").load("html/waitTwo.html",cardItem);
	 }else if(_indexNum == 2){
	 	$(".content-second").load("html/overTwo.html",cardItem);
	 }else if(_indexNum == 3){
	 	$(".content-second").load("html/runTwo.html",cardItem);
	 } 
}
function historyBack(){
	console.log("back");
}
