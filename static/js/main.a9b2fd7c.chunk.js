(this["webpackJsonpunstuck-app"]=this["webpackJsonpunstuck-app"]||[]).push([[0],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),o=a.n(r),c=(a(65),a(66),a(6)),l=Object(c.a)({stuckButton:{fontSize:"min(8rem, 20vmin)",fontFamily:"Courier Prime, monospace",fontStyle:"italic",padding:"10px 20px",textDecoration:"none",textTransform:"uppercase",userSelect:"none",color:"white",textAlign:"center"}}),s=function(){var e=l();return i.a.createElement("div",{className:e.stuckButton,onClick:function(){console.log("Clicked")}},"I am ",i.a.createElement("br",null),"Stuck")},d=a(50),m=a(51),p=a(9),u=a(14),g=(a(74),Object(c.a)({wrapper:{background:"repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 0%, rgba(1, 31, 128, 1) 100%)",padding:5,borderRadius:50,width:"100vmin",marginBottom:"5vmin",minHeight:120},content:{background:"white",borderRadius:48,padding:10,minHeight:110,color:"black"}})),h=function(e){e.index;var t=e.side,a=void 0===t?0:t,n=g(),r=0===a?"#01ffdd":"#ffa801",o=0===a?"#011f80":"#fe006e";return i.a.createElement("div",{className:n.wrapper,style:{marginLeft:0===a?"10vmin":"-10vmin",background:"repeating-linear-gradient(-35deg, ".concat(o," 0%, ").concat(r," 100%)")}},i.a.createElement(u.b,{to:"/tip/diverse/1-walk-in-nature",style:{textDecoration:"none"}},i.a.createElement("div",{className:n.content,style:{paddingLeft:0===a?20:100,paddingRight:0===a?100:20}},0==a?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Divergent Thinking #1"),i.a.createElement("h2",null,"Take a Walk in Nature")):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Divergent Thinking #21"),i.a.createElement("h2",null,"Creative Writing")))))},v=Object(c.a)({tippsSection:{minHeight:"100vh",scrollSnapAlign:"start"},title:{fontSize:"calc(48px + 2vmin)",fontFamily:"Courier Prime, monospace",userSelect:"none",color:"white",margin:0,padding:0,textAlign:"left",paddingLeft:"min(2em, 2vmin)",paddingTop:"min(0.5em, 2vmin)"}}),f=function(){var e=v();return i.a.createElement("div",{className:e.tippsSection},i.a.createElement("h1",{className:e.title},"Last.Tipps"),Object(p.a)(Array(2)).map((function(e,t){return i.a.createElement(h,{key:t,side:t%2})})))},b=Object(c.a)({page:{textAlign:"center",background:"repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",fontSize:"calc(10px + 2vmin)",minHeight:"100vh",scrollSnapType:"y mandatory",overflowY:"scroll",overflowX:"hidden",scrollPaddingTop:"5vh"},buttonAligner:{minHeight:"100vh",display:"grid",justifyItems:"center",alignItems:"center",scrollSnapAlign:"center",marginBottom:"calc(10px + 2vmin)"},downwards:{color:"white",fontSize:"calc(48px + 2vmin)",position:"absolute",top:"calc(100vh - 48px - 4vmin)",left:0,right:0}}),w=function(){var e=b();return i.a.createElement("div",{className:e.page},i.a.createElement("div",{className:e.buttonAligner},i.a.createElement(u.b,{to:"/questions",style:{textDecoration:"none"}},i.a.createElement(s,null)),i.a.createElement("div",{className:e.downwards},i.a.createElement(d.a,{icon:m.a}))),i.a.createElement(f,null))},E=a(4),j=a(17),y=a(35),k=a.n(y),x=Object(c.a)({page:{background:"repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",fontSize:"1rem",minHeight:"100vh",paddingBottom:1},tipContent:{marginLeft:"auto",marginRight:"auto",width:"min(800px, 90vw)",backgroundColor:"white",borderRadius:35,paddingBottom:"1vh",paddingTop:"0.5em",paddingLeft:"1em",paddingRight:"1em",minHeight:"70vh","@global img":{width:"100%",maxWidth:"700px"},"@global span":{textAlign:"center",width:"100%",display:"inline-block"}},tipTitle:{fontSize:"2rem",fontFamily:"Courier Prime, monospace",textDecoration:"none",userSelect:"none",color:"white"},tipNumber:{fontSize:"2rem",fontFamily:"Courier Prime, monospace",textDecoration:"none",userSelect:"none",color:"white"},tipCategory:{fontSize:"1rem",fontStyle:"italic",textDecoration:"none",userSelect:"none",color:"white"},tipMeta:{padding:"0 0 10px 5vw"}}),O=function(){var e=Object(E.f)(),t=e.id,a=e.mode,n=x(),r=i.a.useState("Loading..."),o=Object(j.a)(r,2),c=o[0],l=o[1],s=i.a.useState({}),d=Object(j.a)(s,2),m=d[0],p=d[1];i.a.useEffect((function(){fetch("/unstuck-app/tips/"+a+"/"+t+".md").catch((function(e){return console.log(e)})).then((function(e){return e.text()})).then((function(e){console.log(e);var t=function(e){for(var t=e.split("\n"),a=0,n={};t[a].startsWith("--");){var i=t[a].slice(2).split(" ");n[i[0]]=i.slice(1).join(" "),a++}return{metaVars:n,content:t.slice(a).join("\n")}}(e),a=t.metaVars,n=t.content;p(a),l(n)}))}),[t,a]);var u="focused"===a?"#01ffdd":"#ffa801",g="focused"===a?"#011f80":"#fe006e";return i.a.createElement("div",{className:n.page,style:{background:"repeating-linear-gradient(-35deg, ".concat(g," 0%, ").concat(u," 100%)")}},i.a.createElement("div",{className:n.tipMeta},i.a.createElement("div",{className:n.tipNumber},i.a.createElement("span",{style:{fontSize:"0.75em"}},"#"),m.number),i.a.createElement("div",{className:n.tipTitle},m.title),i.a.createElement("div",{className:n.tipCategory},m.category)),i.a.createElement("div",{className:n.tipContent},i.a.createElement(k.a,{source:c,escapeHtml:!1})))},S=a(52),N=a(12),C=a(25),T=a(39),z=a.n(T),W=Object(c.a)({word:{position:"relative",color:"white",fontSize:"2rem",padding:"0.1em 0.5em",boxSizing:"border-box",border:"0.1em solid transparent",borderRadius:"0.1em",transition:"0.2s ease-in-out","&:hover":{backgroundColor:"rgba(200,200,200,0.2)"}},wordActive:{border:"0.1em solid white"},wordHolder:{position:"relative",width:"100%",display:"grid",gridTemplateColumns:"auto auto",gridGap:"0.25rem 0.5rem",justifyContent:"space-around"}}),A=function(e){var t=e.focusWords,a=void 0===t?[]:t,n=e.diverseWords,r=void 0===n?[]:n,o=W(),c=i.a.useState({}),l=Object(j.a)(c,2),s=l[0],d=l[1],m=function(e){s[e]?d(Object(C.a)(Object(C.a)({},s),{},Object(N.a)({},e,!1))):d(Object(C.a)(Object(C.a)({},s),{},Object(N.a)({},e,!0)))};return i.a.createElement("div",{className:o.wordHolder},a.map((function(e){return i.a.createElement("span",{className:z()(o.word,s[e]?o.wordActive:null),onClick:function(){return m(e)}},e)})),r.map((function(e){return i.a.createElement("span",{className:z()(o.word,s[e]?o.wordActive:null),onClick:function(){return m(e)}},e)})))},B=a(53),R=a(59),D=Object(c.a)({wrapper:{position:"relative",width:"100%",height:"100%"},progress:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#01ffdd",transition:"0.4s ease-in-out clip-path",clipPath:"url(#clipCountdown)"},holder:{top:5,left:5,width:"calc(100% - 10px)",height:"calc(100% - 10px)",position:"absolute",transition:"0.3s ease-in"}}),H=function(e){var t=e.progress,a=void 0===t?0:t,n=e.thickness,r=void 0===n?.05:n,o=e.children,c=i.a.useState({width:-1,height:-1}),l=Object(j.a)(c,2),s=l[0],d=l[1],m=D(),u=function(e,t,a){return[e+a*(.5-e),t+s.width/s.height*a*(.5-t)]},g=function(e,t){return"L ".concat(e," ").concat(t)},h=function(e){var t=["M 0.5 0"],a=[g.apply(void 0,Object(p.a)(u(.5,0,r)))," Z"],n=[],i=2*e*Math.PI,o=.5*Math.sin(i)+.5,c=-.5*Math.cos(i)+.5;return e<.125&&(c=0),e>=.125&&(t.push(g(1,0)),n.push(g.apply(void 0,Object(p.a)(u(1,0,r)))),e<.375&&(o=1)),e>=.375&&(t.push(g(1,1)),n.push(g.apply(void 0,Object(p.a)(u(1,1,r)))),e<.625&&(c=1)),e>=.625&&(t.push(g(0,1)),n.push(g.apply(void 0,Object(p.a)(u(0,1,r)))),e<.875&&(o=0)),e>=.875&&(t.push(g(0,0)),n.push(g.apply(void 0,Object(p.a)(u(0,0,r)))),c=0),t.push(g(o,c)),n.push(g.apply(void 0,Object(p.a)(u(o,c,r)))),(t=t.concat(n.reverse(),a)).join(" ")};return i.a.createElement(B.a,{bounds:!0,onResize:function(e){d(e.bounds)}},(function(e){var t=e.measureRef;return i.a.createElement("div",{className:m.wrapper},i.a.createElement(R.a.div,{className:m.progress,style:{clipPath:h(a)}}),i.a.createElement("svg",{width:0,height:0},i.a.createElement("clipPath",{id:"clipCountdown",clipPathUnits:"objectBoundingBox"},i.a.createElement("path",{d:h(a),fillRule:"evenodd"}))),i.a.createElement("div",{className:m.holder,ref:t},o))}))},P=Object(c.a)({page:{position:"relative",width:"100vw",background:"repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",height:"100vh"},holder:{position:"relative",padding:"5vmin",display:"flex",flexDirection:"column",alignItems:"center"},task:{fontSize:"2rem",textDecoration:"none",userSelect:"none",color:"white",marginBottom:"12vh",paddingTop:"10vh",textTransform:"capitalize"}}),L=function(){var e=P(),t=i.a.useState(S),a=Object(j.a)(t,2),n=a[0];a[1];return i.a.createElement("div",{className:e.page},i.a.createElement(H,{progress:.9,thickness:.05},i.a.createElement("div",{className:e.holder},i.a.createElement("div",{className:e.task},"Select words fitting your task:"),i.a.createElement(A,{focusWords:n.focusWords,diverseWords:n.diverseWords}))))};var M=function(){return i.a.createElement(u.a,null,i.a.createElement(E.c,null,i.a.createElement(E.a,{exact:!0,path:"/",component:w}),i.a.createElement(E.a,{path:"/tip/:mode/:id",component:O}),i.a.createElement(E.a,{path:"/questions",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(58),I=a(18),J=a(7),q=Object(I.b)("lasttips/add"),V=(Object(I.b)("lasttips/remove"),Object(I.c)([],Object(N.a)({},q,(function(e,t){var a=t.payload;e.push(a)})))),G=Object(J.c)({lastTips:V}),U=a(55),X=a.n(U),Y=a(40),Z=a(56),$=a(57),K={key:"root",stateReconciler:a.n($).a,whitelist:["lasttips"],storage:X.a},Q=Object(Y.a)(K,G),_=Object(I.a)({reducer:Q}),ee=Object(Y.b)(_);o.a.render(i.a.createElement(F.a,{store:_},i.a.createElement(Z.a,{loading:null,persistor:ee},i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e){e.exports=JSON.parse('{"focusWords":["concentrate","sequential","linear","efficient","detailed"],"diverseWords":["free","flowing","parallel","wandering","manyfold"]}')},60:function(e,t,a){e.exports=a(157)},65:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},74:function(e){e.exports=JSON.parse("{}")}},[[60,1,2]]]);
//# sourceMappingURL=main.a9b2fd7c.chunk.js.map