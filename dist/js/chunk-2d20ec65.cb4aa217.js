(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ec65"],{b199:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"20px"}},[i("div",[i("Row",{staticStyle:{"margin-bottom":"25px"}},[i("Col",{attrs:{span:"8"}},[t._v("兴趣：\n                    "),i("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.interestid,callback:function(e){t.interestid=e},expression:"interestid"}},t._l(t.interestList,function(e){return i("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.title))])}))],1),i("Col",{attrs:{span:"8"}},[i("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:function(e){t.search()}}},[t._v("搜索")])],1)],1)],1),i("div",[i("ul",[i("li",[i("Button",{attrs:{type:"error",icon:"md-trash"},on:{click:function(e){t.del()}}},[t._v("删除")])],1),i("li",[i("div",{staticStyle:{padding:"10px 0"}},[i("Table",{attrs:{border:"",columns:t.columns1,data:t.data1,height:400},on:{"on-selection-change":function(e){t.change(e)},"on-row-dblclick":function(e){t.dblclick(e)}}})],1)]),i("li",[i("div",{staticStyle:{"text-align":"right"}},[i("Page",{attrs:{total:t.total,"page-size":t.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(e){t.pageSearch(e)}}})],1)])])]),i("Modal",{attrs:{"mask-closable":!1,visible:t.modal,width:"600",title:"查看"},on:{"update:visible":function(e){t.modal=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("Form",{attrs:{"label-width":80}},[i("Form-item",{attrs:{label:"登录名:"}},[i("strong",[t._v(t._s(t.postcard.username))])]),i("Form-item",{attrs:{label:"内容:"}},[i("span",[t._v(t._s(t.postcard.content))])])],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"error",size:"large"},on:{click:t.cancel}},[t._v("关闭")])],1)],1)],1)},a=[],s={data:function(){var t=this;return{groupId:[],interestid:null,interestList:[],modal:!1,total:0,pageInfo:{page:0,pageSize:10},postcard:{id:null,username:null,title:null,interestid:null,content:null,createtime:null,replytime:null},columns1:[{type:"selection",width:60,align:"center"},{title:"登录名",key:"username"},{title:"兴趣归属",key:"interestid",render:function(e,i){for(var n=t.interestList.length-1;n>=0;n--)if(i.row.interestid==t.interestList[n].id)return e("div",[e("strong",null,t.interestList[n].title)])}},{title:"标题",width:500,key:"title"},{title:"时间",key:"createtime"},{title:"操作",align:"center",key:"action",render:function(e,i){return e("a",{attrs:{href:t.$store.state.domainName+"/page/card/"+i.row.id,target:"_blank"}},[e("Button",{props:{type:"info"}},"查看")])}}],data1:[]}},mounted:function(){this.getTable({pageInfo:this.pageInfo,interestid:this.interestid}),this.axios({method:"get",url:"/public/interests"}).then(function(t){this.interestList=t.data.data}.bind(this)).catch(function(t){alter(t)}.bind(this))},methods:{initPageInfo:function(){this.pageInfo.page=0,this.pageInfo.pageSize=10},postcardSet:function(t){this.postcard.id=t.id,this.postcard.username=t.username,this.postcard.title=t.title,this.postcard.interestid=t.interestid,this.postcard.content=t.content,this.postcard.createtime=t.createtime,this.postcard.replytime=t.replytime},dateGet:function(t){var e=new Date(parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},listDateSet:function(t){for(var e=t.length-1;e>=0;e--)t[e].createtime=this.dateGet(t[e].createtime)},getTable:function(t){this.axios({method:"get",url:"/public/postcards",params:{page:t.pageInfo.page,pageSize:t.pageInfo.pageSize,interestid:t.interestid}}).then(function(t){this.data1=t.data.data.data,this.listDateSet(this.data1),this.total=t.data.data.totalCount}.bind(this)).catch(function(t){alert(t)})},search:function(){this.initPageInfo(),this.getTable({pageInfo:this.pageInfo,interestid:this.interestid})},pageSearch:function(t){this.pageInfo.page=t-1,this.getTable({pageInfo:this.pageInfo,interestid:this.interestid})},cancel:function(){this.modal=!1},dblclick:function(t){this.postcardSet(t),this.modal=!0},postcardInfo:function(t){console.log(t),this.postcardSet(t),this.modal=!0},del:function(){null!=this.groupId&&""!=this.groupId&&this.axios({method:"delete",url:"/postcards",data:this.groupId}).then(function(t){this.getTable({pageInfo:this.pageInfo,interestid:this.interestid}),this.groupId=[],this.$Message.info("删除成功")}.bind(this)).catch(function(t){alert(t)})},change:function(t){this.setGroupId(t)},setGroupId:function(t){this.groupId=[];for(var e=0;e<=t.length-1;e++)this.groupId.push(t[e].id)}}},o=s,r=i("2877"),l=Object(r["a"])(o,n,a,!1,null,null,null);l.options.__file="card.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20ec65.cb4aa217.js.map