var workData=[
    {title:'云盘怎么用.pdf',type:1,date:'2016-07-06 14:30',status:0,size:"865.7KB"},
    {title:'原型图.jpg',type:1,date:'2016-07-06 14:30',status:0,size:"865.7KB"},
    {title:'首页效果图.zip',type:1,date:'2016-07-06 14:30',status:1,size:"865.7KB"},
    {title:'首页效果图.png',type:1,date:'2016-07-06 14:30',status:1,size:"865.7KB"},
    {title:'首页效果图.doc',type:1,date:'2016-07-06 14:30',status:0,size:"865.7KB"},
    {title:'首页效果图.ppt',type:1,date:'2016-07-06 14:30',status:0,size:"865.7KB"},
    {title:'首页效果图.txt',type:1,date:'2016-07-06 14:30',status:0,size:"865.7KB"},
    {title:'首页效果图.xls',type:1,date:'2016-07-06 14:30',status:1,size:"865.7KB"}
];
var workGrid;

//获取DataSource
function getDataSource(){
    return new kendo.data.DataSource({
        data:workData,
        pageSize:15
    })
}
$(function(){
	 workGrid =$('#grid-work').kendoGrid({
        dataSource: getDataSource(),
        allowCopy: true,//可以复制
        scrollable: false,//滚动条
        columns: [{
            field:'title',
            title:'名称',
            template:$('#kendoTemplate_itemTitle').html()
        },{
        	field:'type',
            title:'分类',
            width:128,
            template:$('#kendoTemplate_itemType').html()
        },{
            field:'date',
            title:'更新时间',
            width:207
        },{
        	field:"size",
        	title:'大小',
        	width:149
        },{
            field:'status',
            title:'状态',
            width:143,
            template:$('#kendoTemplate_itemStatus').html()
        },{
            field:'operation',
            title:'操作',
            width:245,
            template:$('#kendoTemplate_itemOperation').html()
        }]
    }).data('kendoGrid');
    
    //	翻页
	$(".listFooter").on("click","span",function(){
		var btnIndex;
		var btnNum =  $(this).html();
		if(btnNum == "上一页"){
			if($("span.pagerActive").html() == 1){
				return;
			}else{
				$("span.pagerActive").removeClass("pagerActive").prev().addClass("pagerActive");
				btnIndex = $('span.pagerActive').html();
			}
		}else if(btnNum == "下一页"){
			if($("span.pagerActive").html() == 10){
				return;
			}else{
				$("span.pagerActive").removeClass("pagerActive").next().addClass("pagerActive");
				btnIndex = $('span.pagerActive').html();
			}
		}else{
			$(this).addClass("pagerActive").siblings().removeClass("pagerActive");
			btnIndex = $('span.pagerActive').html();
		}
		
		$(".fileBg li.pager").each(function(){
			var pagerNum =  $(this).index();
			if(pagerNum == btnIndex){
				$(this).addClass("showList").siblings().removeClass("showList");
			}
		})
	})
})
//文库搜索
function fileSearch(){
	$(".contentBody").hide();
	$(".navTitle").show();
	$(".content-third").show();
}
//文件上传
function uploadItem(){
	$(".content-second").load("html/upload.html");
}
