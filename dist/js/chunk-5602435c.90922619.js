(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5602435c"],{"2e0b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"20px"}},[n("Form",{ref:"entity",attrs:{model:t.entity,rules:t.ruleNew,"label-width":80}},[n("Form-item",{attrs:{label:"兴趣："}},[n("Select",{staticStyle:{width:"200px"},attrs:{filterable:""},on:{"on-change":function(e){t.selectChange(e)}},model:{value:t.interestId,callback:function(e){t.interestId=e},expression:"interestId"}},t._l(t.interestList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),n("Form-item",{attrs:{label:"标题：",prop:"title"}},[n("Input",{staticStyle:{width:"204px"},model:{value:t.entity.title,callback:function(e){t.$set(t.entity,"title",e)},expression:"entity.title"}})],1),n("Form-item",{attrs:{label:"排序：",prop:"sort"}},[n("Input",{staticStyle:{width:"204px"},model:{value:t.entity.sort,callback:function(e){t.$set(t.entity,"sort",e)},expression:"entity.sort"}})],1),n("Form-item",{attrs:{label:"简介：",prop:"info"}},[n("Input",{staticStyle:{width:"50%"},attrs:{type:"textarea",autosize:{minRows:4,maxRows:5}},model:{value:t.entity.info,callback:function(e){t.$set(t.entity,"info",e)},expression:"entity.info"}})],1),n("Form-item",{attrs:{label:"图片：",prop:"image"}},[n("Upload",{ref:"upload",attrs:{headers:t.headers,action:"/interest/admin/interest/upload/picture",name:"picture","show-upload-list":!1,"before-upload":t.handleBeforeUpload,"on-success":t.handleSuccess,"on-format-error":t.handleFormatError,format:["jpg","jpeg","png"]}},[n("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("上传图片")])],1)],1),n("Form-item",[null!=t.entity.image?n("img",{staticStyle:{width:"300px",height:"200px"},attrs:{src:t.entity.image}}):t._e()]),n("Form-item",{attrs:{label:"详情：",prop:"content"}},[n("interest-quill-editor",{staticClass:"editor",attrs:{interestContent:t.interestContent},on:{"editor-change":function(e){t.contentGet(e)}}})],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.submit("entity")}}},[t._v("修改")])],1)],1)],1)},r=[],s=(n("55dd"),n("c5f6"),n("7cdf"),n("74ac")),o={components:{"interest-quill-editor":s["a"]},data:function(){return{interestContent:"",interestId:null,interestList:[],content:null,headers:{Authorization:"bearer "+localStorage.getItem("currentUser_token")},entity:{id:null,title:null,info:null,image:null,content:null,sort:null},ruleNew:{title:[{type:"string",required:!0,message:"填写标题",trigger:"blur"}],info:[{type:"string",required:!0,message:"填写介绍",trigger:"blur"}],image:[{type:"string",required:!0,message:"上传图片",trigger:"blur"}],content:[{type:"string",required:!0,message:"填写内容",trigger:"blur"}],sort:[{required:!0,message:"输入排序",trigger:"blur"},{validator:function(t,e,n){Number.isInteger(+e)?n():n(new Error("请输入数字"))},trigger:"blur"}]}}},mounted:function(){this.axios({method:"get",url:"/public/interests"}).then(function(t){for(var e=t.data.data,n=0;n<e.length;n++)this.interestList.push({value:e[n].id,label:e[n].title})}.bind(this)).catch(function(t){alert(t)})},methods:{initEntity:function(){this.entity.id=null,this.entity.title=null,this.entity.info=null,this.entity.image=null,this.entity.content=null,this.entity.sort=null},entitySet:function(t){this.entity.id=t.id,this.entity.title=t.title,this.entity.info=t.info,this.entity.image=t.image,this.entity.content=t.content,this.entity.sort=t.sort+""},dateGet:function(t){var e=new Date(parseInt(t));return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},listDateSet:function(t){for(var e=t.length-1;e>=0;e--)t[e].time=this.dateGet(t[e].time)},handleSuccess:function(t,e){this.entity.image=t.url,e.url=t.url,e.name=t.url},handleBeforeUpload:function(){return this.$refs.upload.fileList.splice(0,this.$refs.upload.fileList.length),!0},handleFormatError:function(t){this.$Notice.warning({title:"图片格式不对",desc:"图片格式只能为jpg,jpeg,png"})},contentGet:function(t){this.entity.content=t},submit:function(t){var e=this;this.$refs[t].validate(function(t){t&&e.axios({method:"put",url:"/admin/interests/interest",data:e.entity}).then(function(t){this.$Message.info("修改成功")}.bind(e)).catch(function(t){this.$Message.error("修改失败")}.bind(e))})},selectChange:function(t){this.axios({method:"get",url:"/public/interests/interest",params:{id:t}}).then(function(t){this.entitySet(t.data.data),this.interestContent=this.entity.content}.bind(this)).catch(function(t){this.$Message.error("请选择")}.bind(this))}}},l=o,a=(n("baad"),n("2877")),u=Object(a["a"])(l,i,r,!1,null,null,null);u.options.__file="interest-edit.vue";e["default"]=u.exports},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d8e8"),s=n("4bf8"),o=n("79e5"),l=[].sort,a=[1,2,3];i(i.P+i.F*(o(function(){a.sort(void 0)})||!o(function(){a.sort(null)})||!n("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),r(t))}})},"7cdf":function(t,e,n){var i=n("5ca1");i(i.S,"Number",{isInteger:n("9c12")})},"7d69":function(t,e,n){},"9c12":function(t,e,n){var i=n("d3f4"),r=Math.floor;t.exports=function(t){return!i(t)&&isFinite(t)&&r(t)===t}},baad:function(t,e,n){"use strict";var i=n("7d69"),r=n.n(i);r.a}}]);
//# sourceMappingURL=chunk-5602435c.90922619.js.map