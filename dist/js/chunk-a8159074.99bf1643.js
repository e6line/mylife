(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8159074"],{"5cd1":function(t,e,i){"use strict";var s=i("c6a6"),a=i.n(s);a.a},c6a6:function(t,e,i){},fde7:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mywork"}},[i("div",{staticClass:"page-header-main"},[i("div",{staticClass:"box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center"},[i("div",{staticClass:"line-height-50 font-size-22"},[t._v(t._s(t.insterest.title))]),i("div",{staticClass:"text-align-center margin-top-2"}),i("div",{staticStyle:{width:"80%","margin-top":"20px"}},[i("div",{staticClass:"ql-container"},[i("div",{staticClass:"ql-editor"},[i("div",{domProps:{innerHTML:t._s(t.insterest.content)}})])])]),i("div",{staticStyle:{width:"100%",margin:"10% 0 20px 0"}},[t._m(0),t._l(t.postcardList,function(e,s){return i("Card",{key:s},[i("div",{attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"chat"},[i("Icon",{attrs:{type:"md-chatboxes",size:"25"}}),i("span",[t._v(t._s(e.replyCount))])],1),i("router-link",{attrs:{to:"/page/card/"+e.id}},[i("span",{staticClass:"tirtleFont lineThrou title-text"},[t._v(t._s(e.title))])])],1),i("div",{attrs:{slot:"extra"},slot:"extra"},[i("a",{attrs:{href:e.githuburl,target:"_blank"}},[i("img",{staticStyle:{width:"25px",height:"25px","border-radius":"100%"},attrs:{src:e.headimg}}),t._v("\n                            "+t._s(e.username)+"\n                        ")])]),i("div",[i("p",{staticClass:"content"},[t._v(t._s(e.content))]),i("span",[i("Icon",{attrs:{type:"ios-time"}}),t._v("\n                            "+t._s(e.replytime)+"\n                        ")],1)])])}),i("div",{staticStyle:{"margin-top":"20px"}},[i("Page",{attrs:{total:t.total,"page-size":t.pageInfo.pageSize,"show-elevator":"","show-total":""},on:{"on-change":function(e){t.pageSearch(e)}}})],1)],2),i("div",{staticClass:"box-flex width-100 margin-auto margin-top-2 border-top border-color-bfbfbf"}),i("div",{staticClass:"box-flex margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center",staticStyle:{width:"100%"}},[i("div",{staticClass:" width-100 flex-direction-row"},[i("div",{staticClass:"box-flex flex-1 padding-all-5x"},[i("span",[i("Icon",{attrs:{type:"edit"}}),t._v("发帖")],1)]),i("div",{staticClass:"box-flex flex-6 width-100 padding-all-5x"},[i("Input",{attrs:{placeholder:"标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("div",{staticClass:"box-flex flex-6 width-100 padding-all-5x"},[i("Input",{attrs:{type:"textarea",rows:6,placeholder:"内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)]),i("div",{staticClass:"box-flex width-100 margin-top-2 flex-items-flex-end flex-justify-flex-end margin-bottom-3"},[i("Button",{attrs:{type:"primary"},on:{click:function(e){t.sendCard()}}},[t._v("发表")])],1)])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ivu-card-head",staticStyle:{background:"#eceef2"}},[i("p",[t._v("看帖")])])}],n={data:function(){return{postcardList:[],interestid:null,insterest:{id:"",title:"",info:"",content:"",image:""},total:0,pageInfo:{page:0,pageSize:20},textarea:"",title:""}},mounted:function(){this.interestid=this.$route.params.id,this.getArticle(this.$route.params.id),this.getPostCard({pageInfo:this.pageInfo,interestid:this.interestid})},methods:{getArticle:function(t){this.axios({method:"get",url:"/public/interests/interest",params:{id:t}}).then(function(t){this.insterestSet(t.data.data)}.bind(this)).catch(function(t){alter(t)}.bind(this))},listDateSet:function(t){for(var e=t.length-1;e>=0;e--)t[e].replytime=this.dateGet(t[e].replytime)},getPostCard:function(t){this.axios({method:"get",url:"/public/postcards",params:{page:t.pageInfo.page,pageSize:t.pageInfo.pageSize,interestid:t.interestid}}).then(function(t){this.postcardList=t.data.data.data,this.listDateSet(this.postcardList),this.total=t.data.data.totalCount}.bind(this)).catch(function(t){alert(t)})},pageSearch:function(t){this.pageInfo.page=t-1,this.getPostCard({pageInfo:this.pageInfo,interestid:this.interestid})},insterestSet:function(t){this.insterest.id=t.id,this.insterest.title=t.title,this.insterest.info=t.info,this.insterest.content=t.content,this.insterest.image=t.image},sendCard:function(){null!=this.title&&null!=this.textarea&&""!=this.title&&""!=this.textarea?null!=this.axios.defaults.headers.common["Authorization"]&&""!=this.axios.defaults.headers.common["Authorization"]?this.axios({method:"post",url:"/postcards/postcard",data:{interestid:this.interestid,title:this.title,content:this.textarea}}).then(function(t){this.$Message.info("发帖成功"),this.title="",this.textarea="",this.pageInfo.page=0,this.getPostCard({pageInfo:this.pageInfo,interestid:this.interestid})}.bind(this)).catch(function(t){alter(t)}.bind(this)):this.$Message.error("登录后，才能发帖！"):this.$Message.error("请填写标题和内容")}}},r=n,o=(i("5cd1"),i("2877")),l=Object(o["a"])(r,s,a,!1,null,"400dd918",null);l.options.__file="detail.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a8159074.99bf1643.js.map