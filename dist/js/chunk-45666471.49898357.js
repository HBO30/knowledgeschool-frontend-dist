(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45666471"],{"20f6":function(t,e,a){},"62ad":function(t,e,a){"use strict";var s=a("ade3"),r=a("5530"),i=(a("d3b7"),a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),n=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["offset"+Object(o["w"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["order"+Object(o["w"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function v(t,e,a){var s=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");s+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(s+="-".concat(a),s.toLowerCase()):s.toLowerCase()}}var m=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,i=e.children,o=(e.parent,"");for(var c in a)o+=String(a[c]);var l=m.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var s=a[t],r=v(e,t,s);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!a.cols},Object(s["a"])(t,"col-".concat(a.cols),a.cols),Object(s["a"])(t,"offset-".concat(a.offset),a.offset),Object(s["a"])(t,"order-".concat(a.order),a.order),Object(s["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),m.set(o,l)}(),t(a.tag,Object(n["a"])(r,{class:l}),i)}})},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var s=a("2b0e");function r(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var n=r.attrs;if(n){r.attrs={};var o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,i)}})}var i=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,r=e.data,n=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),t(s.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),n)}})},b2ea:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-namespace"},[a("header",[a("div",{staticClass:"fas fa-bars",attrs:{id:"menu"}}),a("router-link",{staticClass:"logo",attrs:{to:"/home"}},[a("i",{staticClass:"fas fa-user-graduate"}),t._v(" مدرسة المعرفة ")]),a("nav",{staticClass:"navbar"},[a("ul",[a("li",[a("router-link",{staticClass:"active",attrs:{to:"#home"}},[t._v("الصفحة الرئيسة")])],1),a("li",[a("router-link",{attrs:{to:"#about"}},[t._v("حول المدرسة ")])],1),a("li",[a("router-link",{attrs:{to:"#course"}},[t._v("الصفوف والاسعار")])],1),a("li",[a("router-link",{attrs:{to:"#library"}},[t._v("المكتبة")])],1),a("li",[a("router-link",{attrs:{to:"#contact"}},[t._v("التواصل ")])],1),a("li",[t.isLogin?a("router-link",{attrs:{to:"/admin"}},[t._v("مدير النظام ")]):t._e()],1)])]),t.isLogin?a("v-btn",{attrs:{icon:""},on:{click:t.logout}},[a("v-icon",{staticStyle:{transform:"rotate(180deg)",color:"white"},attrs:{size:"30"}},[t._v("mdi-logout")])],1):a("div",{staticClass:"fas fa-user-circle",attrs:{id:"login"},on:{click:function(e){t.dialog=!0}}}),a("v-dialog",{attrs:{"max-width":"360"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("div",{staticClass:"login-form"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.log.apply(null,arguments)}}},[a("h3",[t._v("تسجيل دخول")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.user,expression:"loginForm.user"}],staticClass:"box",attrs:{placeholder:"اسم مستخدم"},domProps:{value:t.loginForm.user},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"user",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"box",attrs:{type:"text",placeholder:"كلمة المررو"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),a("p",{staticClass:"red--text"},[t._v(t._s(t.msg))]),a("input",{staticClass:"btn",attrs:{type:"submit",value:"login"},on:{click:t.log}}),a("i",{staticClass:"fas fa-times",on:{click:function(e){t.dialog=!1}}})])])])],1),t._m(0),t._m(1),t._m(2),t._m(3),a("p",{staticClass:"mt-3 fs-2 text-center"},[t._v(" هنا مجموعة متنوعة من الرسوم المتحركة المفيدة والمسلية لمختلف الأعمار ")]),a("v-container",[a("v-row",t._l(t.movies,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("d-vid",{attrs:{item:t}})],1)})),1)],1),t._m(4),a("v-container",[a("v-row",t._l(t.songs,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("d-song",{attrs:{item:t}})],1)})),1)],1),t._m(5)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s"},[a("div",{staticClass:"overlay"}),a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"px-5-lg p-5 fs-1 fw-bold lh-lg px-4 mx-3 pt-5 fw-bold",staticStyle:{border:"none"}},[t._v(" مكتبة متنوعة (قصص - أفلام - أغاني) ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"containe"},[a("p",{staticClass:"mt-5 text-center",staticStyle:{"font-size":"50px"}},[t._v("القصص")]),a("p",{staticClass:"mt-3 fs-2 text-center"},[t._v(" لدينا مجموعة متنوعة من القصص المتوفرة مجاناً لكل زوار موقعنا حيث يمكنهم قراءتها أو تحميلها مجاناً ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{display:"flex","justify-content":"center"}},[a("div",{staticClass:"card m-3 w-25",staticStyle:{position:"relative",border:"none","border-radius":"20px !important","align-items":"center"}},[a("img",{staticClass:"card-img-top hvr-float-shadow hvr-glow w-50",attrs:{src:"https://i.ibb.co/fGqptR4/Mosque1-removebg-preview.png",alt:"..."}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"mt-5 text-center fs-1 fw-bold"},[t._v("قصص إسلامية")]),a("p",{staticClass:"mt-3 fs-3 text-center"},[t._v(" مكتبة متنوعة من قصص السيرة والأنبياء ")])])]),a("div",{staticClass:"card m-3 w-25",staticStyle:{position:"relative",border:"none","border-radius":"20px !important","align-items":"center"}},[a("img",{staticClass:"card-img-top hvr-float-shadow hvr-glow w-50",attrs:{src:"https://i.ibb.co/bXZPBB4/tar.png",alt:"..."}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"mt-5 text-center fs-1 fw-bold"},[t._v("قصص تربوية")]),a("p",{staticClass:"mt-3 fs-3 text-center"},[t._v("مكتبة من القصص الهادفة والمتنوعة")])])]),a("div",{staticClass:"card m-3 w-25",staticStyle:{position:"relative",border:"none","border-radius":"20px !important","align-items":"center"}},[a("img",{staticClass:"card-img-top hvr-float-shadow hvr-glow w-50",attrs:{src:"https://i.ibb.co/4gk6Kz9/world-book-fun-billboard-03.png",alt:"..."}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"mt-5 text-center fs-1 fw-bold"},[t._v("قصص ترفيهية متنوعة")]),a("p",{staticClass:"mt-3 fs-3 text-center"},[t._v("مكتبة من القصص الممتعة والرائعة")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"containe"},[a("p",{staticClass:"mt-5 text-center",staticStyle:{"font-size":"50px"}},[t._v("الأفلام")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"containe"},[a("p",{staticClass:"mt-5 text-center",staticStyle:{"font-size":"50px"}},[t._v("الأغاني")]),a("p",{staticClass:"mt-3 fs-2 text-center"},[t._v(" لدينا مجموعة متنوعة من الأناشيد والأغاني المسلية والمفيدة بآن واحد ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"box-container"},[a("div",{staticClass:"box"},[a("h3",[t._v("روابط سريعة")]),a("a",{attrs:{href:"#"}},[t._v("الصفحة الرئيسة")]),a("a",{attrs:{href:"#"}},[t._v("حول المدرسة")]),a("a",{attrs:{href:"#"}},[t._v("الصفوف والاسعار ")]),a("a",{attrs:{href:"#"}},[t._v("المكتبة")]),a("a",{attrs:{href:"#"}},[t._v("التواصل ")])]),a("div",{staticClass:"box"},[a("h3",[t._v("معلومات الاتصال")]),a("p",[a("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" syria.")]),a("p",[a("i",{staticClass:"fas fa-envelope"}),t._v(" Knowledge School@gmail.com")]),a("p",[a("i",{staticClass:"fas fa-phone"}),t._v(" +963 56 2248449")])])]),a("h1",{staticClass:"credit"},[t._v(" Copyright © 2022 | "),a("a",{attrs:{href:"#"}},[t._v("Knowledge School")]),t._v(" all rights reserved. ")]),a("h1",{staticClass:"credit"},[t._v(" Design by students: hiba_114565 | reem_130110 | shahd-156257 | marim_156262"),a("br"),a("small",[t._v(" virtual university, Information Technology Engineering | Web Programming 1 (BWP401) F21 Homework, Dr. Bassel AlKhatib ")])])])}],i=a("1da1"),n=a("5530"),o=(a("96cf"),a("2f62")),c=a("bb36"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card m-3",staticStyle:{position:"relative",border:"none","border-radius":"20px !important","align-items":"center"}},[a("img",{staticClass:"card-img-top hvr-float-shadow hvr-glow w-50",attrs:{src:t.item.image,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-center fw-bold fs-1"},[t._v(t._s(t.item.title))]),a("a",{staticStyle:{display:"flex","justify-content":"center"},attrs:{href:t.item.url,target:"_blank"}},[a("p",{staticClass:"btn mt-4 p1 hvr-grow float-end",attrs:{type:"button"}},[t._v("للاستماع")])])])])},d=[],u={props:{item:{type:Object}}},f=u,v=a("2877"),m=Object(v["a"])(f,l,d,!1,null,null,null),p=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card m-3",staticStyle:{position:"relative","background-size":"cover",border:"none","border-radius":"20px !important"},style:{backgroundImage:"url("+t.item.image+")"}},[a("a",{attrs:{href:t.item.url,target:"_blank"}},[a("i",{staticClass:"bi bi-caret-right-square-fill mx-5 hvr-grow",staticStyle:{"font-size":"80px",color:"red","margin-top":"80px"}})]),a("div",{staticClass:"card-body",staticStyle:{"margin-top":"-90px"}},[a("h1",{staticClass:"card-title text-center text-dark fw-bold"},[t._v(t._s(t.item.title))]),a("p",{staticClass:"card-text fs-3 text-center",staticStyle:{color:"gray"}},[t._v("46 حلقة")])])])},b=[],h={props:{item:{type:Object}}},_=h,C=Object(v["a"])(_,g,b,!1,null,null,null),y=C.exports,w={components:{"d-song":p,"d-vid":y},data:function(){return{msg:"",songs:[],movies:[],msgContack:"",contactLoading:!1,dialog:!1,loginForm:{user:"",password:""}}},computed:Object(n["a"])({},Object(o["b"])("school",["isLogin","user","isRegistered","userData"])),methods:Object(n["a"])({fetchSongs:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].get("/song");case 3:a=e.sent,t.songs=a.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchVids:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].get("/movie");case 3:a=e.sent,t.movies=a.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},log:function(){var t=this;"admin"===this.loginForm.user&"123"==this.loginForm.password?(this.dialog=!1,this.login(),setTimeout((function(){t.$router.push("/admin")}),1e3)):this.msg="خطأ في اسم المستخدم او كلمة المرور"}},Object(o["c"])("school",["login","logout","register"])),created:function(){this.fetchSongs(),this.fetchVids()}},x=w,k=(a("d31a"),a("6544")),S=a.n(k),j=a("8336"),O=a("62ad"),F=a("a523"),$=a("169a"),E=a("132d"),P=a("0fd9"),B=Object(v["a"])(x,s,r,!1,null,null,null);e["default"]=B.exports;S()(B,{VBtn:j["a"],VCol:O["a"],VContainer:F["a"],VDialog:$["a"],VIcon:E["a"],VRow:P["a"]})},d31a:function(t,e,a){"use strict";a("da79")},da79:function(t,e,a){}}]);
//# sourceMappingURL=chunk-45666471.49898357.js.map