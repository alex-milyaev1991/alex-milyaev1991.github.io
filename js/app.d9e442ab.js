(function(){"use strict";var e={9109:function(e,a,t){var l=t(9242),n=t(3396);function o(e,a,t,l,o,r){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)((0,n.LL)(r.layout),null,{default:(0,n.w5)((()=>[(0,n.Wm)(i)])),_:1})}var r={computed:{layout(){return(this.$route.meta.layout||"default")+"-layout"}}},i=t(89);const u=(0,i.Z)(r,[["render",o]]);var s=u,d=t(2483);const m={class:"home"};function c(e,a,t,l,o,r){const i=(0,n.up)("v-progress-circular"),u=(0,n.up)("v-spacer"),s=(0,n.up)("v-btn"),d=(0,n.up)("v-card-actions"),c=(0,n.up)("v-img"),p=(0,n.up)("v-card"),g=(0,n.up)("v-col"),f=(0,n.up)("v-row"),_=(0,n.up)("v-carousel-item"),v=(0,n.up)("v-carousel"),w=(0,n.up)("v-dialog"),h=(0,n.up)("v-container");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(h,{fluid:""},{default:(0,n.w5)((()=>[e.cards.length?((0,n.wg)(),(0,n.j4)(f,{key:1,dense:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cards,(e=>((0,n.wg)(),(0,n.j4)(g,{key:e.title,cols:"12",md:"4",sm:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{src:e.url,class:"align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px",cover:""},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u),(0,n.Wm)(s,{color:"white",variant:"tonal",onClick:a=>r.handlerMore(e.breed.id)},{default:(0,n.w5)((()=>[(0,n.Uk)(" More ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,n.wg)(),(0,n.j4)(i,{key:0,width:3,color:"red",indeterminate:""})),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{modelValue:o.isDialog,"onUpdate:modelValue":a[1]||(a[1]=e=>o.isDialog=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.currentImages,(e=>((0,n.wg)(),(0,n.j4)(_,{key:e.id,src:e.url,cover:""},null,8,["src"])))),128))])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{color:"primary",block:"",onClick:a[0]||(a[0]=e=>r.handlerCloseDialog())},{default:(0,n.w5)((()=>[(0,n.Uk)("Close Dialog")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var p=t(65),g={name:"HomeView",data(){return{limit:12,isDialog:!1}},computed:{...(0,p.Se)({cards:"GET_IMAGES",currentImages:"GET_BREED_IMAGES"})},created(){this.LOAD_IMAGES(this.limit)},methods:{...(0,p.nv)(["LOAD_IMAGES","LOAD_BREED"]),...(0,p.OI)({setBreedImages:"GET_BREED_IMAGES"}),async handlerMore(e){try{let a={limit:8,breed_ids:e};await this.LOAD_BREED(a),this.isDialog=!0}catch(a){console.log(a)}},handlerCloseDialog(){this.isDialog=!1,this.setBreedImages=[]}}};const f=(0,i.Z)(g,[["render",c]]);var _=f,v=t(7139);const w={class:"upload"};function h(e,a,t,o,r,i){const u=(0,n.up)("v-img"),s=(0,n.up)("v-text-field"),d=(0,n.up)("v-col"),m=(0,n.up)("v-icon"),c=(0,n.up)("v-btn"),p=(0,n.up)("v-layout"),g=(0,n.up)("v-container"),f=(0,n.up)("v-alert");return(0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(g,{fluid:""},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{xs12:"",class:"text-xs-center text-sm-center text-md-center text-lg-center"},{default:(0,n.w5)((()=>[r.image_url?((0,n.wg)(),(0,n.j4)(u,{key:0,src:r.image_url,height:"300px",contain:""},null,8,["src"])):(0,n.kq)("",!0),(0,n.Wm)(s,{label:"Select Image",onClick:i.pickFile,modelValue:r.image_name,"onUpdate:modelValue":a[0]||(a[0]=e=>r.image_name=e)},null,8,["onClick","modelValue"]),(0,n._)("input",{type:"file",style:{display:"none"},ref:"image",accept:"image/*",onChange:a[1]||(a[1]=(...e)=>i.onFilePicked&&i.onFilePicked(...e))},null,544)])),_:1}),(0,n.Wm)(p,{"align-center":"","justify-center":""},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(c,{class:"mr-3",color:"green",dark:"",large:"",onClick:i.pickFile},{default:(0,n.w5)((()=>[(0,n.Uk)(" Choose New Image   "),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)("upload")])),_:1})])),_:1},8,["onClick"]),[[l.F8,!r.uploading]]),(0,n.wy)((0,n.Wm)(c,{color:"blue",dark:"",large:"",onClick:i.uploadFile},{default:(0,n.w5)((()=>[(0,n.Uk)(" Upload   "),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)("upload")])),_:1})])),_:1},8,["onClick"]),[[l.F8,r.image_file&&!r.uploading]]),(0,n.wy)((0,n._)("div",null,"Uploading",512),[[l.F8,r.uploading]])])),_:1})])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(f,{value:!0,type:"error"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,v.zw)(r.error_message),1)])),_:1},512),[[l.F8,r.error_message]])])),_:1})])}var y={data(){return{image_name:"",image_file:"",image_url:"",uploading:!1,error_message:null}},computed:{...(0,p.Se)({uploaded_image:"GET_UPLOAD_IMAGE"})},methods:{...(0,p.nv)(["UPLOAD_IMAGE"]),pickFile(){this.error_message=null,this.$refs.image.click()},onFilePicked(e){const a=e.target.files;if(void 0!==a[0]){if(this.image_name=a[0].name,this.image_name.lastIndexOf(".")<=0)return;const e=new FileReader;e.readAsDataURL(a[0]),e.addEventListener("load",(()=>{this.image_url=e.result,this.image_file=a[0]}))}else this.image_name="",this.image_file="",this.image_url=""},async uploadFile(){this.uploading=!0;let e=new FormData;e.append("file",this.image_file);try{await this.UPLOAD_IMAGE(e),this.uploading=!1,this.image_file=null}catch(a){console.log(a),this.error_message=a.response.data.message,this.uploading=!1,this.image_file=null}}}};const k=(0,i.Z)(y,[["render",h]]);var E=k;const b={class:"uploaded"},W=(0,n._)("h2",null,"My uploaded images",-1),D=(0,n._)("p",{class:"mb-2"},"You don't have any images uploaded right now!",-1);function A(e,a,t,l,o,r){const i=(0,n.up)("v-btn"),u=(0,n.up)("v-img"),s=(0,n.up)("v-card"),d=(0,n.up)("v-col"),m=(0,n.up)("v-row"),c=(0,n.up)("v-container");return(0,n.wg)(),(0,n.iD)("div",b,[(0,n.Wm)(c,{fluid:""},{default:(0,n.w5)((()=>[W,o.cards.length?((0,n.wg)(),(0,n.j4)(m,{key:1,dense:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.cards,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.title,cols:"12",md:"4",sm:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{src:e.url,class:"align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px",cover:""},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[D,(0,n.Wm)(i,{to:"/cats/new",size:"small",variant:"outlined"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Upload image ")])),_:1})],64))])),_:1})])}var I={name:"MyImages",data(){return{cards:[]}},created(){let e=localStorage.images,a=e?JSON.parse(e):[];this.cards=a}};const M=(0,i.Z)(I,[["render",A]]);var O=M;const S=[{path:"/",name:"home",component:_},{path:"/cats",redirect:{name:"my"},children:[{name:"new",path:"new",component:E,meta:{layout:"upload"}},{name:"my",path:"my",component:O}]}],U=(0,d.p7)({history:(0,d.PO)("/"),routes:S});var G=U,j=(t(7658),t(4311));j.Z.defaults.headers.common["x-api-key"]="DEMO-API-KEY",j.Z.defaults.baseURL="https://api.thecatapi.com/v1/images";var x={loadData:async(e,a)=>{try{let t=await j.Z.get(e,{params:a});return t}catch(t){return console.log(t),t}},uploadImage:async e=>{try{let a=await j.Z.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}});return a}catch(a){return console.log(a),a}}},C=(0,p.MT)({state:{images:[],breed_images:[],uploaded_image:{}},getters:{GET_IMAGES(e){return e.images.map((e=>({...e,breed:e.breeds[0]})))},GET_UPLOAD_IMAGE(e){return e.uploaded_image},GET_BREED_IMAGES(e){return e.breed_images}},mutations:{SET_IMAGES(e,a){e.images=a},SET_UPLOAD_IMAGE(e,a){e.uploaded_image=a},SET_BREED_IMAGES(e,a){e.breed_images=a}},actions:{async LOAD_IMAGES({commit:e},a){let t={limit:a,has_breeds:1,upload_image:null};try{let a=await x.loadData("/search",t);e("SET_IMAGES",a.data)}catch(l){console.log(l)}},async LOAD_BREED({commit:e},{limit:a,breed_ids:t}){let l={limit:a,breed_ids:t};try{let a=await x.loadData("/search",l);e("SET_BREED_IMAGES",a.data)}catch(n){console.log(n)}},async UPLOAD_IMAGE({commit:e},a){try{let t=await x.uploadImage(a),l=localStorage.images,n=l?JSON.parse(l):[];n.push(t.data),localStorage.setItem("images",JSON.stringify(n)),e("SET_UPLOAD_IMAGE",t)}catch(t){console.log(t)}}},modules:{}}),L=(t(9773),t(8957)),T=t(1850),P=t(8600),F=t(596);const V=(0,n._)("p",{class:"text-center"},"Aleksandr Milyaev 2022",-1);function R(e,a,t,o,r,i){const u=(0,n.up)("v-app-bar-nav-icon"),s=(0,n.up)("v-toolbar-title"),d=(0,n.up)("v-spacer"),m=(0,n.up)("v-icon"),c=(0,n.up)("v-btn"),p=(0,n.up)("v-toolbar"),g=(0,n.up)("navigation-layout"),f=(0,n.up)("v-main"),_=(0,n.up)("v-col"),v=(0,n.up)("v-row"),w=(0,n.up)("v-footer"),h=(0,n.up)("v-app");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{dark:"",prominent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onClick:a[0]||(a[0]=(0,l.iM)((e=>r.drawer=!r.drawer),["stop"]))}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Cats")])),_:1}),(0,n.Wm)(d),(0,n.Wm)(c,{icon:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-export")])),_:1})])),_:1})])),_:1}),(0,n.Wm)(g,{modelValue:r.drawer,"onUpdate:modelValue":a[1]||(a[1]=e=>r.drawer=e),links:r.links},null,8,["modelValue","links"]),(0,n.Wm)(f,{class:"main pa-5"},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3}),(0,n.Wm)(w,{class:"bg-grey-lighten-1",height:"50px",app:"true"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[V])),_:1})])),_:1})])),_:1})])),_:3})}function Z(e,a,t,l,o,r){const i=(0,n.up)("v-list-item"),u=(0,n.up)("v-list"),s=(0,n.up)("v-navigation-drawer");return(0,n.wg)(),(0,n.j4)(s,{temporary:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{density:"compact",nav:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.links,(e=>((0,n.wg)(),(0,n.j4)(i,{key:e.name,"prepend-icon":"mdi-forum",title:e.title,value:e.name,to:{name:e.name},exact:""},null,8,["title","value","to"])))),128))])),_:1})])),_:1})}var B={props:{links:{type:Array,requered:!0}}};const H=(0,i.Z)(B,[["render",Z]]);var Y=H,N={components:{NavigationLayout:Y},data(){return{drawer:!1,links:[{name:"home",title:"Home"},{name:"my",title:"My images"},{name:"new",title:"Upload image"}]}}};const K=(0,i.Z)(N,[["render",R]]);var $=K;function J(e,a,t,o,r,i){const u=(0,n.up)("v-app-bar-nav-icon"),s=(0,n.up)("v-toolbar-title"),d=(0,n.up)("v-spacer"),m=(0,n.up)("v-icon"),c=(0,n.up)("v-btn"),p=(0,n.up)("v-toolbar"),g=(0,n.up)("navigation-layout"),f=(0,n.up)("v-main"),_=(0,n.up)("v-app");return(0,n.wg)(),(0,n.j4)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{dark:"",prominent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onClick:a[0]||(a[0]=(0,l.iM)((e=>r.drawer=!r.drawer),["stop"]))}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Cats")])),_:1}),(0,n.Wm)(d),(0,n.Wm)(c,{icon:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-export")])),_:1})])),_:1})])),_:1}),(0,n.Wm)(g,{modelValue:r.drawer,"onUpdate:modelValue":a[1]||(a[1]=e=>r.drawer=e),links:r.links},null,8,["modelValue","links"]),(0,n.Wm)(f,{class:"main pa-5 pa-15"},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3})])),_:3})}var q={components:{NavigationLayout:Y},data(){return{drawer:!1,links:[{name:"home",title:"Home"},{name:"my",title:"My images"},{name:"new",title:"Upload image"}]}}};const z=(0,i.Z)(q,[["render",J]]);var Q=z;const X=(0,l.ri)(s),ee=(0,L.Rd)({components:T,directives:P,icons:{defaultSet:"fa",aliases:F.j,sets:{fa:F.fa}}});X.component("default-layout",$),X.component("upload-layout",Q),X.use(C),X.use(G),X.use(ee),X.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,u=0;u<l.length;u++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[u])}))?l.splice(u--,1):(i=!1,o<r&&(r=o));if(i){e.splice(d--,1);var s=n();void 0!==s&&(a=s)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,r=l[0],i=l[1],u=l[2],s=0;if(r.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(u)var d=u(t)}for(a&&a(l);s<r.length;s++)o=r[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},l=self["webpackChunkinstagram"]=self["webpackChunkinstagram"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(9109)}));l=t.O(l)})();
//# sourceMappingURL=app.d9e442ab.js.map