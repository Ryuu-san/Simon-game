(function(e){function t(t){for(var o,i,c=t[0],r=t[1],u=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Simon-game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"122e":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"3f26":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._m(1),e._m(2),e._m(3),n("div",{staticClass:"simon"},[n("div",{staticClass:"simon__container"},[n("div",{staticClass:"blue q",attrs:{"data-name":"1"},on:{click:e.Pick}}),n("div",{staticClass:"red q",attrs:{"data-name":"2"},on:{click:e.Pick}}),n("div",{staticClass:"yellow q",attrs:{"data-name":"3"},on:{click:e.Pick}}),n("div",{staticClass:"green q",attrs:{"data-name":"4"},on:{click:e.Pick}})]),n("div",{staticClass:"simon__container"},[n("div",[n("p",[e._v("Текущий раунд: "+e._s(this.simonRaund))]),n("button",{on:{click:function(t){return e.newGame("off")}}},[e._v("Начать игру")]),this.gameOver?e._e():n("p",[e._v("Вы проиграли")])]),n("div",{staticClass:"options-game"},[n("div",{staticClass:"options-game__elem"},[n("p",[e._v("Легкая игра")]),n("input",{attrs:{type:"radio",name:"cspeed",checked:"","data-checked":"1"},on:{click:e.Check}})]),n("div",{staticClass:"options-game__elem"},[n("p",[e._v("Средняя игра")]),n("input",{attrs:{type:"radio",name:"cspeed","data-checked":"2"},on:{click:e.Check}})]),n("div",{staticClass:"options-game__elem"},[n("p",[e._v("Сложная игра")]),n("input",{attrs:{type:"radio",name:"cspeed","data-checked":"3"},on:{click:e.Check}})])])])])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("audio",[o("source",{attrs:{src:n("fdf0"),type:"audio/mpeg"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("audio",[o("source",{attrs:{src:n("122e"),type:"audio/mpeg"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("audio",[o("source",{attrs:{src:n("aedf"),type:"audio/mpeg"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("audio",[o("source",{attrs:{src:n("3f26"),type:"audio/mpeg"}})])}],i=(n("b0c0"),{name:"App",data:function(){return{sequenceMoves:[],simonColors:["1","2","3","4"],simonCount:0,simonRaund:1,con:0,gameOver:!0,gameSpeed:1500}},methods:{newGame:function(e){for(var t=this,n=0;n<4;n++)document.querySelectorAll(".q")[n].classList.add("active");var o=this.simonColors[Math.floor(Math.random()*this.simonColors.length)],a=function(){function e(e){var t=e.b[e.a],n=document.querySelectorAll(".q")[t-1],o=document.getElementsByTagName("audio")[t-1];return function(){setTimeout((function(){o.pause(),o.currentTime=0,o.play(),n.classList.add("__white")}),100),setTimeout((function(){n.classList.remove("__white")}),e.c)}}for(t.sequenceMoves.push(o),t.con=0;t.con<t.simonRaund;t.con++)setTimeout(e({a:t.con,b:t.sequenceMoves,c:t.gameSpeed}),t.con*t.gameSpeed)};"off"===e?(this.simonCount=0,this.simonRaund=1,this.con=0,this.sequenceMoves=[],this.gameOver=!0,a()):"on"===e&&(this.con=0,a())},Pick:function(e){var t=this;if(this.sequenceMoves.length>0){var n=document.getElementsByTagName("audio")[e.path[0].dataset.name-1];if(n.pause(),n.currentTime=0,n.play(),e.path[0].dataset.name===this.sequenceMoves[this.simonCount])this.simonCount++;else if(e.path[0].className!==this.sequenceMoves[this.simonCount]){this.simonCount=0,this.simonRaund=1,this.sequenceMoves=[],this.gameOver=!1;for(var o=0;o<4;o++)document.querySelectorAll(".q")[o].classList.remove("active")}this.simonCount===this.simonRaund&&(this.simonCount=0,this.simonRaund++,setTimeout((function(){t.newGame("on")}),750))}},Check:function(e){"1"===e.path[0].dataset.checked?this.gameSpeed=1500:"2"===e.path[0].dataset.checked?this.gameSpeed=1e3:"3"===e.path[0].dataset.checked&&(this.gameSpeed=400)}}}),c=i,r=(n("034f"),n("2877")),u=Object(r["a"])(c,a,s,!1,null,null,null),d=u.exports;o["a"].config.devtools=!0,o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){},aedf:function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},fdf0:function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"}});
//# sourceMappingURL=app.682a0164.js.map