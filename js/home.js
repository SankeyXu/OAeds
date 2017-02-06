var waitDate=[
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"王乐乐审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"王凯文审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"张超审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"杨丽审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"王蒙审批中"}
];
var putDate=[
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"已审批"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"已审批"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"张超审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"杨丽审批中"},
    {title:'请假申请(集团),有事了',type:'请假申请(集团)',originator:'张丽丽',date:'2016-07-06 14:30',status:"王蒙审批中"}
];
var waitGrid;
var putGrid;
//获取DataSource
function getDataSource(){
    return new kendo.data.DataSource({
        data:waitDate
    })
}
function getDataSourceTwo(){
    return new kendo.data.DataSource({
        data:putDate
    })
}
$(function(){
	 waitGrid =$('#grid-waitThing').kendoGrid({
        dataSource: getDataSource(),
        allowCopy: true,//可以复制
        scrollable: false,//滚动条
        columns: [{
            field:'title',
            title:'审批标题',
            width:200
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
            template:$("#kendoTemplate_itemStatus").html()
        }]
    }).data('kendoGrid');
     putGrid =$('#grid-putThing').kendoGrid({
        dataSource: getDataSourceTwo(),
        allowCopy: true,//可以复制
        scrollable: false,//滚动条
        columns: [{
            field:'title',
            title:'审批标题',
            width:200
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
            template:$("#kendoTemplate_itemStatus").html()
        }]
    }).data('kendoGrid');
})

