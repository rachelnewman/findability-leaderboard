(this["webpackJsonpfindability-leaderboard"]=this["webpackJsonpfindability-leaderboard"]||[]).push([[0],{14:function(n,e,t){n.exports=t(22)},19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(9),u=t.n(c),o=(t(19),t(1)),i=t(2);function l(){var n=Object(o.a)(["\n\tpadding: 30px;\n\tbackground-color: aliceblue;\n"]);return l=function(){return n},n}var f=i.b.header(l()),s=t(13),b=t(6);function m(){var n=Object(o.a)(["\n\ttext-align: center;\n"]);return m=function(){return n},n}function d(){var n=Object(o.a)(["\n\t",":nth-child(even) {\n\t\tbackground-color: #e4e4e4;\n\t}\n\t",":nth-child(odd) {\n\t\tbackground-color: #c3c3c3;\n\t}\n"]);return d=function(){return n},n}function h(){var n=Object(o.a)(["\n\tborder-top: 1px solid black;\n"]);return h=function(){return n},n}function p(){var n=Object(o.a)(["\n\tbackground-color: aliceblue;\n"]);return p=function(){return n},n}function v(){var n=Object(o.a)(["\n\t\topacity: 0.5;\n\t\t"]);return v=function(){return n},n}function g(){var n=Object(o.a)(["\n\t\t\tbackground-color: purple;\n\t\t\tcolor: white;\n\t\t\ttext-transform: uppercase;\n\t"]);return g=function(){return n},n}function E(){var n=Object(o.a)(["\n\tpadding: 5px 10px;\n\tcolor: inherit;\n\tbackground-color: inherit;\n\ttext-align: center;\n\t","\n\n\t","\n\n"]);return E=function(){return n},n}function z(){var n=Object(o.a)(["\nmargin: 20px auto;\nborder-collapse: collapse;\n"]);return z=function(){return n},n}var O=i.b.table(z()),j=i.b.td(E(),(function(n){return n.host&&Object(i.a)(g())}),(function(n){return n.NA&&Object(i.a)(v())})),y=i.b.tr(p()),Q=i.b.tr(h()),k=i.b.tbody(d(),Q,Q),w=i.b.h1(m()),x="host",N="na",A=[["Name","Quiz1","Quiz2","Quiz3","Quiz4","Quiz5","Quiz6","Quiz7","Quiz8","Quiz9","Quiz10","Quiz12","Quiz13"],["Ben A",N,10,14.5,13,N,12,x,N,N,16,19,N,N],["Ben M",N,12,x,21,13,20,22.5,N,21.5,15,N,N,N],["Bianca",11,10,12,14,14,17,17,N,24,13,x,N,7],["Chris",13,7,9,x,17,N,17.5,N,17,12,23,N,16],["John",N,9,N,N,N,N,N,N,N,N,N,N,N],["Leigh",N,10,9,N,N,14,17,99,x,16,N,N,6],["Lewis",10,x,11,14,15,9,18.5,N,14,11,26,N,8],["Lilly",N,12,16.5,19,N,N,N,N,N,x,N,N,14],["Manu",11,8,N,16,12,N,N,N,N,N,N,N,N],["Ollie",15,N,N,11,N,10,N,N,N,13,N,N,x],["Rachel",N,13,13,16,15,x,13,N,17.5,15,21.5,N,11],["Razvan",N,N,N,N,N,N,16,N,N,N,8,N,N],["Richard",N,N,N,N,N,N,N,N,14,11,N,N,9],["Rosie",x,11,10,17,15.5,15,N,N,N,N,N,N,N],["Sean",8,N,N,12,12,15,N,N,N,N,N,N,N],["Steve",8,6,11,11,5,7,17,x,N,N,12,N,N],["Thomas",8.5,7,9,N,N,13,N,N,12.5,N,N,x,12],["Vicent",11,12,17.5,20,x,15,23,N,18.5,19,36,99,16]],B=function(){var n=Object(r.useState)([]),e=Object(b.a)(n,2),t=e[0],c=e[1],u=Object(r.useState)([]),o=Object(b.a)(u,2),i=o[0],l=o[1];Object(r.useEffect)((function(){var n;n=A.map((function(n){var e={};return A[0].forEach((function(t,r){return e[t]=n[r]})),e})),c(n),l(A[0].map((function(n,e){if(0!==e){var t,r,a=0,c=Object(s.a)(A.slice(1));try{for(c.s();!(r=c.n()).done;){var u=r.value;"number"===typeof u[e]&&u[e]>a&&(t=u[0],a=u[e])}}catch(o){c.e(o)}finally{c.f()}return t}})))}),[]);return a.a.createElement("div",null,t.length>0&&a.a.createElement(O,null,a.a.createElement("thead",null,a.a.createElement(y,null,Object.keys(t[0]).map((function(n){return a.a.createElement(j,null,n)})),a.a.createElement(j,null,"Quizzes played*"),a.a.createElement(j,null,"Quizzes won"))),a.a.createElement(k,null,t.slice(1).map((function(n){return a.a.createElement(Q,null,Object.keys(n).map((function(e,t){var r=i[t]===n.Name;return a.a.createElement(j,{host:n[e]===x,NA:n[e]===N,winner:r},r?"\ud83c\udfc6".concat(n[e],"\ud83c\udfc6"):n[e])})),a.a.createElement(j,null,Object.keys(n).filter((function(e){return"number"===typeof n[e]||n[e]===x})).length),a.a.createElement(j,null,i.filter((function(e){return n.Name===e})).length))})))),a.a.createElement(w,null,"\ud83c\udf8a\ud83c\udfc6 Winning most times: ",function(n){var e,t=0;return n.forEach((function(r){r&&n.filter((function(n){return r===n})).length>t&&(e=r,t=n.filter((function(n){return r===n})).length)})),e}(i)," \ud83c\udfc6\ud83c\udf8a"),a.a.createElement("small",null,"* Quizzes played only includes those that I have full result sets for. I am missing at least one (Quiz8)"))};var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,{className:"App-header"},a.a.createElement("h2",null,"Findability Quiz Leaderboard")),a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e4777a5b.chunk.js.map