(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9dFF":function(e,r,t){"use strict";var a=t("Mk3z");t.n(a).a},Mk3z:function(e,r){},OV9C:function(e,r,t){"use strict";t.r(r);var a,o=t("YKMj"),n=(a=function(e,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.formData={name:"",age:0,sex:1,hobby:[],remark:"",birthday:"",girlFriend:!1,num:1},r.rules={name:[{required:!0,message:"请填写名称",trigger:"blur"}],age:[{required:!0,validator:r.validateAge,trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],hobby:[{required:!0,message:"请选择爱好",trigger:"change"}],birthday:[{required:!0,message:"请选择生日",trigger:"change"}],girlFriend:[{required:!0,message:"是否有女朋友",trigger:"change"}],num:[{required:!0,message:"选择数量",trigger:"change"}]},r}return n(r,e),r.prototype.validateAge=function(e,r,t){return r?r<18?t(new Error("没有满18岁哦!")):t():t(new Error("年龄不能为空"))},r.prototype.successHandler=function(e){console.log(e),this.formData.birthday=e.join("-")},r.prototype.submitHandler=function(){var e=this;return this.$refs.form.validate().then((function(r){if(console.log(r),r.validateMessage)return e.$toast.error(r.validateMessage),!1})),!0},function(e,r,t,a){var o,n=arguments.length,i=n<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,t,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n<3?o(i):n>3?o(r,t,i):o(r,t))||i);return n>3&&i&&Object.defineProperty(r,t,i),i}([o.a],r)}(o.f),s=(t("9dFF"),t("KHd+")),l=Object(s.a)(i,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("vu-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("vu-form-item",{attrs:{prop:"name",label:"名字"}},[t("vu-input",{attrs:{type:"text",placeholder:"请输入名字"},model:{value:e.formData.name,callback:function(r){e.$set(e.formData,"name",r)},expression:"formData.name"}})],1),e._v(" "),t("vu-form-item",{attrs:{prop:"age",label:"年龄"}},[t("vu-input",{attrs:{type:"number"},model:{value:e.formData.age,callback:function(r){e.$set(e.formData,"age",r)},expression:"formData.age"}})],1),e._v(" "),t("vu-form-item",{attrs:{prop:"sex",label:"性别"}},[t("vu-radio-group",{model:{value:e.formData.sex,callback:function(r){e.$set(e.formData,"sex",r)},expression:"formData.sex"}},[t("vu-radio",{attrs:{label:"1"}},[e._v("boy")]),e._v(" "),t("vu-radio",{attrs:{label:"2"}},[e._v("girl")])],1)],1),e._v(" "),t("vu-form-item",{attrs:{prop:"hobby",label:"爱好"}},[t("vu-checkbox-group",{model:{value:e.formData.hobby,callback:function(r){e.$set(e.formData,"hobby",r)},expression:"formData.hobby"}},[t("vu-checkbox",{attrs:{label:"1"}},[e._v("唱")]),e._v(" "),t("vu-checkbox",{attrs:{label:"2"}},[e._v("跳")]),e._v(" "),t("vu-checkbox",{attrs:{label:"3"}},[e._v("rap")])],1)],1),e._v(" "),t("vu-form-item",{attrs:{prop:"birthday",label:"生日"}},[t("vu-picker",{attrs:{mode:"date"},on:{success:e.successHandler}},[e._v(e._s(e.formData.birthday||"请选择日期"))])],1),e._v(" "),t("vu-form-item",{attrs:{prop:"girlFriend",label:"是否有女朋友"}},[t("vu-switch",{model:{value:e.formData.girlFriend,callback:function(r){e.$set(e.formData,"girlFriend",r)},expression:"formData.girlFriend"}})],1),e._v(" "),t("vu-form-item",{attrs:{prop:"num",label:"数量"}},[t("vu-stepper",{model:{value:e.formData.num,callback:function(r){e.$set(e.formData,"num",r)},expression:"formData.num"}})],1),e._v(" "),t("vu-form-item",{attrs:{label:"留言"}},[t("vu-input",{attrs:{type:"textarea",placeholder:"请输入留言"},model:{value:e.formData.remark,callback:function(r){e.$set(e.formData,"remark",r)},expression:"formData.remark"}})],1),e._v(" "),t("vu-button",{staticClass:"btn",attrs:{size:"medium",round:"",type:"primary"},on:{click:e.submitHandler}},[e._v("提 交")])],1)],1)}),[],!1,null,"05f37648",null);r.default=l.exports}}]);
//# sourceMappingURL=4.a9cd1bbd6933ccd585bf.js.map