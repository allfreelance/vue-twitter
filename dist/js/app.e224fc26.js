(function(e){function t(t){for(var s,a,u=t[0],o=t[1],c=t[2],d=0,b=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(b.length)b.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,u=1;u<r.length;u++){var o=r[u];0!==n[o]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},n={app:0},i=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-twitter/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("7a23"),n=(r("b0c0"),{class:"flex flex-col min-h-screen"}),i={class:"flex items-center border-b border-gray-600"},a=Object(s["f"])("i",{class:"fas fa-user"},null,-1),u={class:"text-white font-black text-xl"},o={class:"flex-1 overflow-y-scroll"},c={class:"grid grid-cols-4 border-t border-gray-600"};function l(e,t,r,l,d,b){var f=Object(s["u"])("router-link"),m=Object(s["u"])("router-view");return Object(s["p"])(),Object(s["d"])("div",n,[Object(s["f"])("header",i,[Object(s["f"])(f,{to:"profile",class:"p-4 mr-3 text-green-500 text-2xl"},{default:Object(s["z"])((function(){return[a]})),_:1}),Object(s["f"])("h1",u,Object(s["w"])(e.$route.name),1)]),Object(s["f"])("main",o,[Object(s["f"])(m)]),Object(s["f"])("footer",c,[(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(l.routes,(function(t,r){return Object(s["p"])(),Object(s["d"])(f,{key:r,to:t.path,class:"p-4 text-center text-2xl ".concat(t.name==e.$route.name?"text-green-500":"text-gray-300")},{default:Object(s["z"])((function(){return[Object(s["f"])("i",{class:t.iconClass},null,2)]})),_:2},1032,["to","class"])})),128))])])}r("4de4");var d=r("6c02"),b={setup:function(){var e=Object(s["s"])([]),t=Object(d["c"])();return Object(s["m"])((function(){e.value=t.options.routes.filter((function(e){return e.mainMenu}))})),{routes:e,router:t}}};b.render=l;var f=b,m={class:"home"},p={class:"text-white"};function j(e,t,r,n,i,a){var u=Object(s["u"])("Tweet");return Object(s["p"])(),Object(s["d"])("div",m,[Object(s["f"])("div",p,[(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["t"])(n.tweets,(function(e){return Object(s["p"])(),Object(s["d"])(u,{key:e._id,tweet:e},null,8,["tweet"])})),128))])])}var O={class:"tweet border-b border-gray-600"},_={class:"w-16 h-16 mr-3"},g={class:"flex-1"},h={class:"text-white font-bold"},y={class:"text-gray-500 ml-2 font-normal"},v={key:0,class:"w-1/2 h-auto rounded-xl border border-gray-600 overflow-hidden"},w={class:"mt-2 flex items-center justify-between"},x={class:"text-gray-500"},q=Object(s["f"])("i",{class:"fas fa-comment p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"},null,-1),k={class:"text-gray-500"},P=Object(s["f"])("i",{class:"fas fa-retweet p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"},null,-1),C={class:"text-gray-500"},M=Object(s["f"])("i",{class:"fas fa-heart p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"},null,-1),T=Object(s["f"])("div",{class:"text-gray-500"},[Object(s["f"])("i",{class:"fas fa-share p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"})],-1);function A(e,t,r,n,i,a){var u=Object(s["u"])("router-link");return Object(s["p"])(),Object(s["d"])("article",O,[Object(s["f"])(u,{to:"#",class:"flex p-4"},{default:Object(s["z"])((function(){return[Object(s["f"])("figure",_,[Object(s["f"])("img",{src:r.tweet.author.profile_img_url,alt:"Image",class:"rounded-full w-full h-full object-cover"},null,8,["src"])]),Object(s["f"])("section",g,[Object(s["f"])("div",null,[Object(s["f"])("span",h,Object(s["w"])(r.tweet.author.display_name),1),Object(s["f"])("span",y,Object(s["w"])(r.tweet.author.username),1)]),Object(s["f"])("div",{class:r.tweet.image?"mb-3":""},[Object(s["f"])("p",{class:"text-white",innerHTML:r.tweet.body},null,8,["innerHTML"])],2),r.tweet.image?(Object(s["p"])(),Object(s["d"])("figure",v,[Object(s["f"])("img",{src:r.tweet.image.url,alt:r.tweet.image.alt,class:"w-full h-full object-cover"},null,8,["src","alt"])])):Object(s["e"])("",!0),Object(s["f"])("div",w,[Object(s["f"])("div",x,[q,Object(s["f"])("span",null,Object(s["w"])(r.tweet.stats.comments.length),1)]),Object(s["f"])("div",k,[P,Object(s["f"])("span",null,Object(s["w"])(r.tweet.stats.retweets.length),1)]),Object(s["f"])("div",C,[M,Object(s["f"])("span",null,Object(s["w"])(r.tweet.stats.likes.length),1)]),T])])]})),_:1})])}var E={props:["tweet"]};E.render=A;var L=E,H=[{_id:"0",author:{profile_img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsap4QMo3SYpLD2eq4PK_xHpYjIppDxHR2Q&usqp=CAU",display_name:"Pavel Durov",username:"@nik"},body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!",stats:{likes:["user_1","user_2","user_3","user_4","user_5"],retweets:["user_1","user_2","user_3"],comments:[{username:"@user_1",body:"Persistence"},{username:"@user_2",body:"Consistent"},{username:"@user_3",body:"Patience"},{username:"@user_4",body:"Continuity"}]}},{_id:"1",author:{profile_img_url:"https://media.npr.org/assets/img/2019/10/23/gettyimages-1177729963_wide-24bb05f751e2e5f9cdf86da436bb6bf1eb2ab45a-s800-c85.jpg",display_name:"Mark Zuckerberg",username:"@nik"},body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!",stats:{likes:["user_1","user_2","user_3","user_4","user_5"],retweets:["user_1","user_2","user_3"],comments:[{username:"@user_1",body:"Persistence"},{username:"@user_2",body:"Consistent"},{username:"@user_3",body:"Patience"},{username:"@user_4",body:"Continuity"}]}},{_id:"2",author:{profile_img_url:"https://deadline.com/wp-content/uploads/2018/02/bill-gates-2.jpg?w=792",display_name:"William Henry Gates",username:"@nik"},body:"😄 Lorem ipsum dolor sit, amet consectetur. <br><br>\n    1. Adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!<br><br>\n    2. Adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!<br><br>\n    3. Adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!<br><br>",stats:{likes:["user_1","user_2","user_3","user_4","user_5"],retweets:["user_1","user_2","user_3"],comments:[{username:"@user_1",body:"Persistence"},{username:"@user_2",body:"Consistent"},{username:"@user_3",body:"Patience"},{username:"@user_4",body:"Continuity"}]}},{_id:"3",author:{profile_img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpifPKkhslJtQFh5On-czvm1fbdxcO3Vb3-Q&usqp=CAU",display_name:"Jawed Karim",username:"@nik"},body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequatur minima delectus distinctio veritatis odit reprehenderit ducimus atque ex dolore!",image:{url:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/21/20/screen-shot-2020-04-21-at-3.03.53-pm.png?width=1200&auto=webp&quality=75",alt:"Image"},stats:{likes:["user_1","user_2","user_3","user_4","user_5"],retweets:["user_1","user_2","user_3"],comments:[{username:"@user_1",body:"Persistence"},{username:"@user_2",body:"Consistent"},{username:"@user_3",body:"Patience"},{username:"@user_4",body:"Continuity"}]}}],S={components:{Tweet:L},setup:function(){var e=Object(s["s"])(H);return{tweets:e,Tweet:L}}};S.render=j;var z=S,G=[{path:"/",name:"Home",component:z,iconClass:"fas fa-home",mainMenu:!0},{path:"/explore",name:"Explore",component:z,iconClass:"fas fa-search",mainMenu:!0},{path:"/notifications",name:"Notifications",component:z,iconClass:"fas fa-bell",mainMenu:!0},{path:"/messages",name:"Messages",component:z,iconClass:"fas fa-envelope",mainMenu:!0},{path:"/profile",name:"Profile",component:z}],J=Object(d["a"])({history:Object(d["b"])("/vue-twitter/"),routes:G}),Q=J,D=r("5502"),I=Object(D["a"])({state:{},mutations:{},actions:{},modules:{}});r("cc3c"),r("034b");Object(s["c"])(f).use(I).use(Q).mount("#app")},cc3c:function(e,t,r){}});
//# sourceMappingURL=app.e224fc26.js.map