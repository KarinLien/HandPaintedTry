(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),l=(a(36),a(2)),o=a(3),s=a(5),m=a(4),u=a(6),p=a(16),d=a(17);function h(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 100vw;\n  bottom: 0;\n  width: 95%;\n  max-width: 500px;\n  transform: ",";\n  background: #fff;\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n"]);return h=function(){return e},e}function b(){var e=Object(p.a)(["\n  position: fixed;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 100vw;\n  bottom:0\n  transition: transform 0s ease 0.5s, -webkit-transform 0s ease 0.5s;\n  transform: ",";\n  transition-delay: ",";\n  z-index: 100;\n"]);return b=function(){return e},e}var E=d.a.div(b(),function(e){return e.open?"translate3d(-100%, 0, 0);":"translate3d(0, 0, 0)"},function(e){return e.open?"0s;":""}),f=d.a.div(h(),function(e){return e.open?"translate3d(-100%, 0, 0);":"translate3d(0, 0, 0)"}),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.open;document.body.style.overflow=e?"hidden":""}},{key:"render",value:function(){return r.a.createElement(E,{open:this.props.open},r.a.createElement(f,{open:this.props.open},this.props.content))}}]),t}(n.Component),v=a(14),w=function(){return r.a.createElement("span",null,"MENU")},k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"bar-content-title",style:{display:"flex",borderBottom:"1px solid black"}},r.a.createElement("div",{onClick:function(){return e.closeClick()},style:{width:"45px",height:"45px"}},r.a.createElement("span",{style:{width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},"X")),r.a.createElement("h2",{style:{margin:"10px auto"}},"MENU")),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.closeClick()}},r.a.createElement(v.b,{to:"/list"},"List")),r.a.createElement("li",{onClick:function(){return e.closeClick()}},r.a.createElement(v.b,{to:"/member"},"Member")))))},g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{style:{margin:"1% 10px",display:"inline-block"},onClick:function(){e.setState({open:!0})}},r.a.createElement(w,null)),r.a.createElement(y,{open:t,content:r.a.createElement(k,{closeClick:function(){e.setState({open:!1})}})}),r.a.createElement("div",{className:"right-side"},r.a.createElement("wired-icon-button",{className:"pinkbg wired-rendered"},"favorite"),r.a.createElement("wired-icon-button",{className:"pinkbg wired-rendered"},"close"),r.a.createElement("wired-icon-button",{className:"pinkbg wired-rendered"},"star")),r.a.createElement("div",{className:"clear"}))}}]),t}(r.a.Component),N=(a(42),r.a.Component,a(43),r.a.Component,a(44),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"check-product-list"},r.a.createElement("div",{className:"check-product-title"},r.a.createElement("p",{style:{width:"60%"}},"\u5df2\u9078\u8cfc\u8ca8\u54c1"),r.a.createElement("p",{style:{width:"20%"}},"\u6298\u6263"),r.a.createElement("p",{style:{width:"20%"},className:"text-align-right"},"\u55ae\u50f9")),r.a.createElement("div",{className:"big-product-check-list"},r.a.createElement("div",{className:"product-check-list-content"},r.a.createElement("div",{className:"product-img"},r.a.createElement("div",null,"IMG")),r.a.createElement("div",{className:"product-data"},r.a.createElement("p",{className:"product-text-fontsize-16"},"\u300c\u9f8d\u9cf3\u7bc7\u300d999.9\u9ec3\u91d1\u624b\u9432"),r.a.createElement("p",{className:"product-text-fontsize-12"},"\u6b3e\u865f #: 58864K-24KG"),r.a.createElement("p",{className:"product-text-fontsize-12"},"\u5c3a\u78bc: 07"),r.a.createElement("p",{className:"product-text-fontsize-12"},"\u91cd\u91cf: 17.94 \u9322"),r.a.createElement("p",{className:"product-text-fontsize-12"},"\u6578\u91cf: 1"),r.a.createElement("div",{className:"product-metrial"},r.a.createElement("p",{className:"nowrap"},"\u624b\u7e69:"),r.a.createElement("div",null,"\u7c89\u85cdX\u7c89\u7d05(\u7e96\u7dad\u6750\u8cea),15\u516c\u5206",r.a.createElement("br",null),r.a.createElement("span",{className:"cursor"},r.a.createElement("u",null,"\u4fee\u6539")),r.a.createElement("span",{className:"cursor"},r.a.createElement("u",null,"\u79fb\u9664")),r.a.createElement("span",{className:"product-metrial-price"},"NT$400"))),r.a.createElement("p",{className:"product-text-fontsize-12"},"7\u5929\u7121\u7406\u7531\u9000\u63db\u8ca8"))),r.a.createElement("div",{className:"member-count  margin-top-60"},r.a.createElement("p",{className:"product-text-fontsize-12 "},"\u5c0a\u5c1a\u6703\u54e1\u512a\u60e0")),r.a.createElement("div",{className:"total-price"},r.a.createElement("p",{className:"text-align-right"},"X"),r.a.createElement("p",{className:"text-align-right"},"NT$1,4000"))))}}]),t}(r.a.Component)),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={buyWhat:!1},a.openBuyWhat=function(){a.setState({buyWhat:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=this.state.buyWhat;return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",borderBottom:"1px solid gray",flexWrap:"wrap"}},r.a.createElement("p",{style:{width:"5%"}},t.id),r.a.createElement("p",{style:{width:"12%"}},t.name),r.a.createElement("p",{style:{width:"10%"}},t.birth),r.a.createElement("p",{style:{width:"15%"}},t.phone),r.a.createElement("p",{style:{width:"20%"}},t.address),r.a.createElement("p",{style:{border:"1px solid black",color:"white",background:"black",width:"10%",textAlign:"center",padding:"10px",cursor:"pointer"},onClick:this.openBuyWhat},"\u67e5\u770b\u660e\u7d30"),r.a.createElement("div",{style:{width:"100%",display:"block",position:"relative",maxHeight:a?"200px":"0",transition:a?"max-height 0.15s ease-out":"max-height 0.25s ease-in",overflow:"hidden"}},r.a.createElement("p",{style:{position:"absolute",right:"0",width:"25px",height:"25px",cursor:"pointer"},onClick:function(){e.setState({buyWhat:!1})}},"X"),t.buy.map(function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},key:e.productnumber},r.a.createElement("p",null,"\u7de8\u865f:",e.productnumber),r.a.createElement("p",null,"\u50f9\u9322:",e.productprice))})))}}]),t}(r.a.Component),j=(a(45),[{id:"001",name:"001",birth:"1991.06.06",phone:"0919-111-222",address:"taipei",buy:[{productnumber:"80202222-5",productprice:"590"},{productnumber:"802022444-5",productprice:"390"},{productnumber:"55411128-5",productprice:"590"}]},{id:"002",name:"002",birth:"1997.06.04",phone:"0989-555-666",address:"tainan",buy:[{productnumber:"789456123-7",productprice:"190"},{productnumber:"451216458-0",productprice:"290"},{productnumber:"55411128-5",productprice:"590"}]}]),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"member-list"},r.a.createElement("div",{className:"list-title"},r.a.createElement("p",{style:{width:"5%"}}),r.a.createElement("p",{style:{width:"12%"}},"\u59d3\u540d"),r.a.createElement("p",{style:{width:"10%"}},"\u751f\u65e5"),r.a.createElement("p",{style:{width:"15%"}},"\u96fb\u8a71"),r.a.createElement("p",{style:{width:"20%"}},"\u5730\u5740"),r.a.createElement("p",{style:{width:"10%"}},"\u8cfc\u8cb7\u660e\u7d30")),j.map(function(e){return r.a.createElement(x,{data:e,key:e.id})}))}}]),t}(r.a.Component),C=(a(46),a(10)),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuItem:""},a.clickMenuItem=function(e){a.setState({menuItem:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.state.menuItem;return r.a.createElement(v.a,null,r.a.createElement("div",{className:"main-app"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"})),r.a.createElement(C.a,{path:"/list",component:N}),r.a.createElement(C.a,{path:"/member",component:O}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2d507c68.chunk.js.map