(window["webpackJsonp_myapp"]=window["webpackJsonp_myapp"]||[]).push([["chunk-74e4f08e"],{"0be7":function(t,e,a){},"2bb8":function(t,e,a){"use strict";a("0be7")},d424:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-page-wrapper"},[a("div",{staticClass:"common-page-search"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"search-criteria"},[a("div",{staticClass:"search-label"},[t._v("案件编号：")]),a("div",{staticClass:"search-value"},[a("el-input",{attrs:{size:"small"},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}})],1)])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"search-criteria"},[a("div",{staticClass:"search-label"},[t._v("创建时间：")]),a("div",{staticClass:"search-value"},[a("VDatePicker",{on:{datePickChange:t.datePickChange}})],1)])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"search-criteria"},[a("div",{staticClass:"search-button-wrapper"},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("查询")]),a("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])])],1)],1),a("div",{staticClass:"common-page-content"},[a("div",{staticClass:"common-page-content-header"},[a("div",{staticClass:"page-title"},[t._v("任务列表")]),a("div",{staticClass:"task-button-wrapper"},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("创建案件")]),a("el-button",{attrs:{size:"small",type:"text"}},[t._v("切换查看方式")])],1)]),a("div",{staticClass:"common-tabs-wrapper"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"用户管理"}}),a("el-tab-pane",{attrs:{label:"配置管理"}}),a("el-tab-pane",{attrs:{label:"角色管理"}}),a("el-tab-pane",{attrs:{label:"定时任务补偿"}})],1)],1),a("div",{staticClass:"common-table"},[a("el-table",{attrs:{height:"100%",data:t.tableData}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{prop:"date",label:"案件编号",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"案件名称",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"创建人"}}),a("el-table-column",{attrs:{prop:"address",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.toImportData(e.row)}}},[t._v("导入数据")]),a("el-button",{attrs:{type:"text"}},[t._v("数据分析")]),a("el-button",{attrs:{type:"text"}},[t._v("概要报告")]),a("el-button",{attrs:{type:"text"}},[t._v("编辑")]),a("el-button",{attrs:{type:"text"}},[t._v("删除")])]}}])})],1)],1),a("div",{staticClass:"common-pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPageNo,"page-sizes":[5,10,20,50],"page-size":10,layout:"prev, pager, next, sizes, jumper",total:50},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])},n=[],l=a("920b"),r={name:"paycount",components:{VDatePicker:l["a"]},data:function(){return{searchContent:"",startTime:"",endTime:"",currentPageNo:1,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},mounted:function(){},methods:{handleSizeChange:function(t){console.log(t)},handleCurrentChange:function(t){console.log(t)},datePickChange:function(t){console.log(t)}}},o=r,c=(a("2bb8"),a("2877")),i=Object(c["a"])(o,s,n,!1,null,"fb7527be",null);e["default"]=i.exports}}]);