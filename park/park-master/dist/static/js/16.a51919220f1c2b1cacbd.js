webpackJsonp([16],{dcuG:function(t,e){},kYmV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("nxAZ"),s=a("fJ2I"),n=a("mmca"),o=a("cayO"),c=a("BGNQ"),l=a("z5TY"),r=a("d5Kw"),v=a("ZCI5"),d=a("wX83"),u=a("+62G"),_=(u.a,i.a,s.a,n.a,c.a,l.a,r.a,d.a,v.a,{directives:{TransferDom:u.a},components:{XHeader:i.a,Flexbox:s.a,FlexboxItem:n.a,Cell:c.a,Group:l.a,XButton:r.a,XTable:d.a,Alert:v.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,number1:1,number2:1,userId:o.a.get("userId"),startTime1:"",activePace:"",activeCreatePeople:"",activeId:"",active_Context:"",activeComplete:[],show:!1,msg:""}},filters:{formatDuring:function(t){return""==t||null==t||void 0==t?t="无":(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var e=this.getDate();e<10&&(e="0"+e);var a=this.getHours();a<10&&(a="0"+a);var i=this.getMinutes();return i<10&&(i="0"+i),this.getFullYear()+"."+t+"."+e+" "+a+":"+i},new Date(t).toLocaleString())}},methods:{getActivity:function(){var t=this;this.$http.get("active/getRunningActive",{params:{pageNum:1,pageSize:1}}).then(function(e){console.log(e.data),t.startTime1=e.data.list[0].startTime,t.activePace=e.data.list[0].activePace,t.activeCreatePeople=e.data.list[0].activeCreatePeople,t.active_Context=e.data.list[0].active_Context,t.activeId=e.data.list[0].id}).catch(function(t){console.log(t)})},gettimes1:function(){var t=this;this.$http.post("active/getParticipateCount",{userId:this.userId,activeType:3}).then(function(e){console.log(e),t.number1=e.data}).catch(function(t){console.log(t)})},gettimes2:function(){var t=this;this.$http.post("active/getParticipateCount",{userId:this.userId,activeType:5}).then(function(e){console.log(e),t.number2=e.data}).catch(function(t){console.log(t)})},submit:function(){var t=this;this.$http.post("active/participate",{userId:this.userId,activeId:this.activeId,departmentid:this.departmentid}).then(function(e){t.msg=e.msg,t.show=!0}).catch(function(t){console.log(t)})},getAlreadyActive:function(){var t=this;this.$http.get("active/getAlreadyActive",{params:{pageNum:1,pageSize:4}}).then(function(e){t.activeComplete=e.data.list,console.log(t.activeComplete)}).catch(function(t){console.log(t)})},onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")}},mounted:function(){this.getActivity(),this.gettimes1(),this.gettimes2(),this.getAlreadyActive()}}),f=a("18Nq");var h=function(t){a("dcuG")},m=Object(f.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n    ")]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox mainbox1"},[a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与组织活动：\n                    "),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number1))]),t._v(" 次\n                ")]),t._v(" "),a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与紧邻一战活动：\n                    "),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number2))]),t._v(" 次\n                ")])])])],1),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("section",{staticClass:"mainbox"},[a("div",{staticClass:" clearfix p15 display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("党员生活通知")]),t._v(" "),a("a",{staticClass:" fr"},[a("router-link",{attrs:{slot:"right",to:"/active/activeMore"},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("div",{staticStyle:{padding:"2vw 3.5vw 0"}},[a("table",{staticClass:"table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"100"}},[t._v("活动时间：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t._f("formatDuring")(t.startTime1))+"~"+t._s(t._f("formatDuring")(t.endTime1)))])]),t._v(" "),a("tr",[a("td",[t._v("地点：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activePace))])]),t._v(" "),a("tr",[a("td",[t._v("发起人：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeCreatePeople))])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top"}},[t._v("活动内容：")]),t._v(" "),a("td",{staticClass:"f_b weui-media-box__desc"},[t._v(t._s(t.active_Context))])])])]),t._v(" "),a("div",{staticClass:"book"},[a("a",{on:{click:function(e){t.submit()}}},[t._v("报名")])])])]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox "},[a("div",{staticClass:"p15"},[a("div",{staticClass:" clearfix  display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("已参与组织生活")]),t._v(" "),a("router-link",{staticClass:"fr",attrs:{slot:"right",to:"/active/partyMoment"},slot:"right"},[t._v("查看全部 >")])],1),t._v(" "),a("ul",{staticClass:"news"},t._l(t.activeComplete,function(e,i){return a("li",{key:i},[a("a",{staticClass:" display clearfix ",attrs:{href:"javascript:;"}},[a("div",{staticClass:" fl newsa"},[t._v(t._s(e.activeName))]),t._v(" "),a("div",{staticClass:" fr"},[t._v(t._s(t._f("formatDuring")(e.endTime)))])])])}))])])])],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,h,"data-v-40c9443f",null);e.default=m.exports},wX83:function(t,e,a){"use strict";Boolean,Boolean,Boolean;var i={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},s=a("18Nq");var n=function(t){a("x+1L")},o=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},[],!1,n,null,null);e.a=o.exports},"x+1L":function(t,e){}});
//# sourceMappingURL=16.a51919220f1c2b1cacbd.js.map