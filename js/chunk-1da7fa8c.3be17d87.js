(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1da7fa8c"],{3896:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"table-responsive m-4"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(t._s(this.tableHeaders[0]))]),s("th",{on:{click:function(s){return t.toggleSort()}}},[s("span",[t._v(" "+t._s(this.tableHeaders[1])+" "),t.oldestFirst?s("i",{staticClass:"fas fa-arrow-alt-circle-down"}):s("i",{staticClass:"fas fa-arrow-alt-circle-up"})])]),s("th",[t._v(t._s(this.tableHeaders[2]))]),s("th",[t._v(t._s(this.tableHeaders[3]))]),s("th",[t._v(t._s(this.tableHeaders[4]))]),s("th",[t._v(t._s(this.tableHeaders[5]))])])]),s("tbody",t._l(t.sortDate,(function(e,a){return s("tr",{key:a},[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),s("td",[t._v(" "+t._s(t._f("moment")(e.date))+" ")]),s("td",[s("a",{attrs:{href:e.link}},[t._v(" "+t._s(e.title)+" ")])]),s("td",[t._v(t._s(e.proeqti[0]))]),s("td",[s("a",{attrs:{href:e.organizatorLink}},[t._v(t._s(e.organizator))])]),s("td",[t._v(t._s(e.comment))])])})),0)])])])},i=[],r=e("cc84"),c=(e("e71f"),e("c1df")),n=e.n(c),o={data(){return{titleText:"2012-დღემდე",activityMsg:[],newDataArr:[],oldestFirst:!0,activityMsgLength:null,tableHeaders:["#","თარიღი","აქტივობა","პროექტი","ორგანიზატორი","კომენტარი"]}},mounted(){this.fetchMessages()},methods:{toggleSort:function(){this.oldestFirst=!this.oldestFirst},async fetchMessages(){const t=r["b"].firestore(),s=await t.collection("activityMsg").get();this.activityMsg=s.docs.map(t=>t.data()),this.activityMsgForUse=this.activityMsg,this.activityMsgLength=this.activityMsg.length}},computed:{sortDate(){const t=(t,s)=>{let e=this.oldestFirst?1:-1;t=new Date(t.date).getTime(),s=new Date(s.date).getTime();let a=t>s?-1:t<s?1:0,i=a*e;return i};let s=[...this.activityMsg].sort(t);return s}},filters:{moment:function(t){return n()(t).format("DD/MM/YYYY")}}},l=o,d=(e("63cb"),e("2877")),h=Object(d["a"])(l,a,i,!1,null,"321a0d66",null);s["default"]=h.exports},"4dc4":function(t,s,e){},"63cb":function(t,s,e){"use strict";e("4dc4")}}]);
//# sourceMappingURL=chunk-1da7fa8c.3be17d87.js.map