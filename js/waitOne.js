var workData=[
    {title:'请假申请(集团),有事了',originator:'张丽丽',date:'2016-07-06 14:30',status:1},
    {title:'请假申请(集团),有事了',originator:'张丽丽',date:'2016-07-06 14:30',status:1},
    {title:'请假申请(集团),有事了',originator:'张丽丽',date:'2016-07-06 14:30',status:1}
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
            title:'审批标题',
            width:160,
            template:$('#kendoTemplate_titleStatus').html()
        },{
            field:'originator',
            title:'发起人',
            width:80
        },{
            field:'date',
            title:'发起时间',
            width:160
        },{
            field:'status',
            title:'当前状态',
            width:100,
            template:$('#kendoTemplate_itemStatus').html()
        }]
    }).data('kendoGrid');
})
