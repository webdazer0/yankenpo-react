(this.webpackJsonpyankenpo=this.webpackJsonpyankenpo||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=(t(12),t(1));t(13),t(14),t(15);var i=function(){var e=Object(n.useContext)(k).score;return r.a.createElement("div",{className:"score"},r.a.createElement("small",null,"score"),r.a.createElement("p",null,e))};var o=function(){return r.a.createElement("header",{className:""},r.a.createElement("h1",null,"Rock ",r.a.createElement("br",null),"Paper ",r.a.createElement("br",null),"Scissors"),r.a.createElement(i,null))},u=t(6);t(16);var m=function(e){var a=e.children,t=Object(u.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:"button"},t),a)};t(17);var v=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=function(){c(!t)};return r.a.createElement("div",{className:"rules"},t&&r.a.createElement("div",{className:"rules-overlay"},r.a.createElement("div",{className:"rules-modal"},r.a.createElement("h2",null,"Rules"),r.a.createElement("img",{src:"./images/image-rules.svg",alt:""}),r.a.createElement("img",{onClick:l,src:"./images/icon-close.svg",className:"close-modal",alt:""}))),r.a.createElement(m,{onClick:l},"Rules"))},E=t(2),f=t.n(E),d=t(5);t(19),t(20);var p=function(e){var a=e.name,t=e.onClick,n=e.playing,c=e.isAnimated,l=n?"default":a;return r.a.createElement("div",{className:"token ".concat(a||l," ").concat(c&&"isAnimated")},r.a.createElement("div",{className:"token-box"},r.a.createElement("img",{src:"./images/icon-".concat(a,".svg"),alt:l,title:l,onClick:function(){return t&&t(a)}})))},h=["paper","scissors","rock"];var b=function(){var e=Object(n.useContext)(k),a=e.score,t=e.setScore,c=Object(n.useState)(""),l=Object(s.a)(c,2),i=l[0],o=l[1],u=Object(n.useState)(!1),v=Object(s.a)(u,2),E=v[0],b=v[1],g=Object(n.useState)(""),w=Object(s.a)(g,2),j=w[0],O=w[1],N=Object(n.useState)(""),C=Object(s.a)(N,2),y=C[0],S=C[1],x=function(){var e=Object(d.a)(f.a.mark((function e(n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!E),S(n),e.next=4,A();case 4:r=e.sent,c=F(n,r),o(c),"win"===c&&t(a+1);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=function(){return new Promise((function(e,a){var t,n=setInterval((function(){t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return h[Math.floor(Math.random()*(e-a+1))+a]}(),O(t)}),75);setTimeout((function(){clearInterval(n),e(t)}),3e3)}))},F=function(e,a){if(e===a)return"draw";if("rock"===e){if("scissors"===a)return"win";if("paper"===a)return"lose"}if("paper"===e){if("rock"===a)return"win";if("scissors"===a)return"lose"}if("scissors"===e){if("paper"===a)return"win";if("rock"===a)return"lose"}};return r.a.createElement("div",{className:"table ".concat(i&&"winner")},E?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"player-choice"},r.a.createElement(p,{name:y,isAnimated:"win"===i}),r.a.createElement("p",null,"You picked")),r.a.createElement("div",{className:"house-choice"},r.a.createElement(p,{name:j,playing:E,isAnimated:"lose"===i}),r.a.createElement("p",null,"The house picked")),i&&r.a.createElement("div",{className:"results"},r.a.createElement("h2",null,"You ",i," "),r.a.createElement(m,{onClick:function(){b(!E),O(""),o("")}},"Try Again",r.a.createElement("span",{role:"img","aria-label":"face"}),"win"===i?r.a.createElement(r.a.Fragment,null," \ud83d\ude03"):r.a.createElement(r.a.Fragment,null," \ud83d\ude25")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{name:"paper",onClick:x}),r.a.createElement(p,{name:"scissors",onClick:x}),r.a.createElement(p,{name:"rock",onClick:x}),r.a.createElement("span",{className:"line"})))};t(21);var g=function(e){var a=e.children;return r.a.createElement("div",{className:"wrap"},a)},k=Object(n.createContext)();var w=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement(k.Provider,{value:{score:t,setScore:c}},r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement("div",{className:"app-content"},r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5fea2130.chunk.js.map