(this["webpackJsonpchloe-web"]=this["webpackJsonpchloe-web"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(99),a(34)),c=a(35),s=a(38),m=a(37),u=a(84),p=a(146),d=a(13),h=a(137),b=a(33),f=a(3),v=a(143),g=a(144),E=a(58),y=a(150),k=a(147),O=a(60),x=a(4),w=a(149),j=a(142),N=a(140),C=a(138),M=a(151),D=a(141),S=a(71),W=a.n(S),z=a(10),I=a(70),H=a.n(I),R=Object(h.a)((function(e){return{list:{width:"100vw"},fullList:{width:"auto"},ham:Object(f.a)({display:"block"},e.breakpoints.up("sm"),{display:"none"}),content:{alignItems:"center",justifyContent:"center",padding:"1vh 0"}}})),L=Object(z.f)((function(e){var t,a=R(),n=e.history,r=[{text:"Home",onClick:function(){return n.push("/")}},{text:"Connect",onClick:function(){return n.push("/connect")}},{text:"Portfolio",onClick:function(){return n.push("/portfolio")}}],i=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),l=Object(b.a)(i,2),c=l[0],s=l[1],m=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(Object(O.a)(Object(O.a)({},c),{},Object(f.a)({},e,t)))}};return o.a.createElement(o.a.Fragment,{key:"right"},o.a.createElement(j.a,{className:a.ham,onClick:m("right",!0)},o.a.createElement(H.a,null)),o.a.createElement(w.a,{anchor:"right",open:c.right,onClose:m("right",!1)},o.a.createElement(j.a,{onClick:m("right",!1),className:a.content},o.a.createElement(W.a,null)),(t="right",o.a.createElement("div",{className:Object(x.a)(a.list,Object(f.a)({},a.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:m(t,!1),onKeyDown:m(t,!1)},o.a.createElement("div",{style:{padding:"2vw"}}),o.a.createElement(C.a,null),o.a.createElement(N.a,null,r.map((function(e,t){var a=e.text,n=e.onClick;return o.a.createElement(M.a,{button:!0,key:a,onClick:n},o.a.createElement(D.a,{primary:a}))})))))))})),T=Object(h.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),link:{textDecoration:"none",color:"black"},sectionDesktop:Object(f.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(f.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),B=Object(z.f)((function(e){var t=T(),a=o.a.useState(null),n=Object(b.a)(a,2),r=n[0],i=n[1],l=o.a.useState(null),c=Object(b.a)(l,2),s=c[0],m=c[1],u=Boolean(r),p=Boolean(s),h=function(){m(null)},f=o.a.createElement(y.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){i(null),h()}}),O=o.a.createElement(y.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:h}),x=function(e){e.target.style.color="cyan"},w=function(e){e.target.style.color=""};return o.a.createElement("div",{className:t.grow},o.a.createElement(v.a,{position:"fixed",color:"white"},o.a.createElement(g.a,{id:"back-to-top-anchor"},o.a.createElement(k.a,{display:"flex",flexGrow:1},o.a.createElement(d.b,{to:"/",onMouseOver:x,onMouseOut:w,className:t.link},o.a.createElement(E.a,{variant:"h6",noWrap:!0},"Chloe"))),o.a.createElement(d.b,{to:"/portfolio",onMouseOver:x,onMouseOut:w,className:t.link},o.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0,style:{padding:"0 1vw"}},"Portfolio")),o.a.createElement(d.b,{to:"/connect",onMouseOver:x,onMouseOut:w,className:t.link},o.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0,style:{padding:"0 1vw"}},"Connect")),o.a.createElement(L,null))),O,f)})),_=Object(h.a)({root:{}}),A=function(){_();return o.a.createElement("div",null,o.a.createElement(B,null))},F=a(72),G=a.n(F),P=Object(h.a)((function(e){return{root:{position:"fixed",width:50,height:10,borderRadius:"50%",bottom:e.spacing(2),right:e.spacing(2),animation:"fadeIn 0.3s",transition:"opacity 0.4s",opacity:.5,"&:hover":{opacity:1}}}})),J=function(){var e=P(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],i=a[1];return window.addEventListener("scroll",(function(){!r&&window.pageYOffset>400?i(!0):r&&window.pageYOffset<=400&&i(!1)})),o.a.createElement(G.a,{className:e.root,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:r?"flex":"none"}})},K=a(145),V=a(73),Y=a.n(V),q=a(63),U=a.n(q),X=a(74),$=a.n(X),Q=a(57),Z=a.n(Q),ee=Object(h.a)((function(e){var t,a,n,o,r;return{root:{position:"relative"},img:(t={borderRadius:"50%",width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",zIndex:1},Object(f.a)(t,e.breakpoints.up("sm"),{width:"50%"}),Object(f.a)(t,e.breakpoints.up("md"),{width:"40%"}),t),layout:Object(f.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row-reverse"}),leftName:(a={width:"100%",height:"auto",display:"none",position:"relative"},Object(f.a)(a,e.breakpoints.up("sm"),{display:"block",left:"7vw"}),Object(f.a)(a,e.breakpoints.up("lg"),{left:"10vw"}),a),rightName:Object(f.a)({position:"relative",bottom:"17vh",zIndex:2,marginLeft:"auto",marginRight:"auto",display:"block"},e.breakpoints.up("sm"),{display:"none"}),text:(n={position:"relative",bottom:"11vh",left:"25vw"},Object(f.a)(n,e.breakpoints.up("sm"),{top:"1vh",left:"16vw"}),Object(f.a)(n,e.breakpoints.up("md"),{fontSize:"3vw"}),Object(f.a)(n,e.breakpoints.up("lg"),{fontSize:"3vw",left:"18vw"}),n),button:(o={marginLeft:"auto",marginRight:"auto",width:"50%",position:"relative",bottom:"8vh"},Object(f.a)(o,e.breakpoints.up("sm"),{top:"2vh",left:"16vw",marginLeft:"0"}),Object(f.a)(o,e.breakpoints.up("md"),{left:"20vw"}),o),dashed:(r={borderTop:"3px dashed #bbb",position:"relative",bottom:"10vh"},Object(f.a)(r,e.breakpoints.up("sm"),{top:"2vh"}),Object(f.a)(r,e.breakpoints.up("md"),{top:"4vh"}),r)}})),te=function(e){var t=ee();return o.a.createElement("div",{className:t.root},o.a.createElement(K.a,{container:!0,className:t.layout},o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:6,lg:6},o.a.createElement("img",{src:Y.a,className:t.img,alt:"profilepic"}),o.a.createElement("img",{className:t.rightName,src:U.a,alt:"myname"})),o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:6,lg:6,style:{display:"flex",flexDirection:"column"}},o.a.createElement("img",{className:t.leftName,alt:"myname",src:U.a}),o.a.createElement(Z.a,{text:[" innovator"," passionate learner"," tech-lover"],speed:70,eraseSpeed:10,typingDelay:10,eraseDelay:2e3,cursorRenderer:function(e){return o.a.createElement(E.a,{variant:"h5",className:t.text},e)},displayTextRenderer:function(e,a){return o.a.createElement(E.a,{variant:"h5",className:t.text},"A 17-year-old",e.split("").map((function(e,t){var a="".concat(t);return o.a.createElement("span",{key:a},e)})))}}),o.a.createElement(j.a,{className:t.button,variant:"outlined",size:"large",color:"primary"},o.a.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:$.a,download:"Chloe_Lam_Resume_December_2020"},"My resume")))),o.a.createElement("hr",{className:t.dashed}))},ae=a(75),ne=a.n(ae),oe=a(76),re=a.n(oe),ie=a(78),le=a.n(ie),ce=a(79),se=a.n(ce),me=a(77),ue=a.n(me),pe=a(80),de=a.n(pe),he=Object(h.a)((function(e){var t;return{logo:(t={maxWidth:"5vw",maxHeight:"5vw"},Object(f.a)(t,e.breakpoints.up("sm"),{maxWidth:"3vw",maxHeight:"3vw"}),Object(f.a)(t,e.breakpoints.up("md"),{maxWidth:"2vw",maxHeight:"2vw"}),Object(f.a)(t,e.breakpoints.up("lg"),{maxWidth:"1.2vw",maxHeight:"1.2vw"}),t),link:{textDecoration:"none",color:"inherit"}}})),be=function(e){var t=he(),a=function(e){e.target.style.color="cyan"},n=function(e){e.target.style.color=""};return o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement(j.a,{onMouseOver:a,onMouseOut:n},o.a.createElement("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/chloe-lam-2407/"},o.a.createElement(re.a,null))),o.a.createElement(j.a,{onMouseOver:a,onMouseOut:n},o.a.createElement("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@chloelam2407"},o.a.createElement(ue.a,null))),o.a.createElement(j.a,{onMouseOver:a,onMouseOut:n},o.a.createElement("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"mailto:chloelam2407@gmail.com"},o.a.createElement(le.a,null))),o.a.createElement(j.a,{onMouseOver:a,onMouseOut:n},o.a.createElement("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://tks.life/profile/chloe.lam#about"},o.a.createElement(se.a,null))),o.a.createElement(j.a,{onMouseOver:a,onMouseOut:n},o.a.createElement("a",{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/chloe2407"},o.a.createElement(de.a,null))))},fe=Object(h.a)((function(e){var t;return{root:Object(f.a)({},e.breakpoints.up("lg"),{maxHeight:"90vh",overflow:"hidden"}),text:(t={position:"relative",bottom:"10vh"},Object(f.a)(t,e.breakpoints.up("sm"),{top:"2vh",lineHeight:"160%"}),Object(f.a)(t,e.breakpoints.up("md"),{top:"10vh",lineHeight:"200%"}),Object(f.a)(t,e.breakpoints.up("lg"),{top:"14vh",left:"2vw",maxWidth:"50%",lineHeight:"200%"}),t),img:Object(f.a)({display:"none",width:"auto",height:"auto"},e.breakpoints.up("lg"),{display:"block",maxWidth:"50%",maxHeight:"auto"})}})),ve=function(e){var t=fe();return o.a.createElement("div",{className:t.root},o.a.createElement(K.a,{container:!0},o.a.createElement(K.a,{item:!0,xs:!0}),o.a.createElement(K.a,{item:!0,xs:10,sm:8,style:{display:"flex",flexDirection:"row"}},o.a.createElement("img",{className:t.img,src:ne.a,alt:"mefull"}),o.a.createElement("div",{className:t.text},o.a.createElement(E.a,{variant:"h5"},"About Me"),o.a.createElement(E.a,{variant:"p"},"Hi! I'm Chloe, a hardworking and dedicated 17-year-old who strives to constantly improve my technical skills, based in Vancouver, BC, Canada. "),o.a.createElement("br",null),o.a.createElement(E.a,{variant:"p"},"I have extensive experience volunteering at Geering Up as a Junior Instructor, related to coding and engineering, and internship work experiences at technology-related startup companies, like CodeCa and ELIX. As a current Innovator at The Knowledge Society, I learn about numerous emerging technologies and learn essential life skills, such as leadership and networking. One way I develop these skills is through various hackathons hosted by TKS, like the AI Hackathon and City Challenge."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(E.a,{variant:"p"},"I am always curious to learn new things! Let's chat!"),o.a.createElement(be,null))),o.a.createElement(K.a,{item:!0,xs:!0})))},ge=Object(h.a)((function(e){return{space:Object(f.a)({},e.breakpoints.up("md"),{height:"10vh"})}})),Ee=function(e){var t=ge();return o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(te,null),o.a.createElement(ve,null),o.a.createElement("div",{className:t.space}))},ye=a(6),ke=a(81),Oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("here");ke.makeWidget(e,"https://m2ul1eb9fw4.typeform.com/to/qIG8spxa",{hideHeaders:!1,hideFooter:!1,opacity:75,buttonText:"Take the survey!",onSubmit:function(){console.log("Typeform successfully submitted")}})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(E.a,{variant:"h1",style:{textAlign:"center",padding:"2vw"}},"Contact Me!"),o.a.createElement(K.a,{container:!0},o.a.createElement(K.a,{item:!0,xs:!0}),o.a.createElement(K.a,{item:!0,xs:12,sm:10},o.a.createElement("div",{id:"here",className:e.typeform})),o.a.createElement(K.a,{item:!0,xs:!0})))}}]),a}(n.Component),xe=Object(ye.a)((function(e,t){return{typeform:{height:500,paddingBottom:"5vh"}}}))(Oe),we=Object(h.a)((function(e){return{}})),je=function(e){we();return o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(xe,null))},Ne=a(82),Ce=a.n(Ne),Me=Object(h.a)((function(e){var t,a,n;return{root:{position:"relative"},img:Object(f.a)({width:"60%",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto"},e.breakpoints.up("md"),{width:"50%"}),layout:Object(f.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row"}),text:(t={display:"none",position:"relative"},Object(f.a)(t,e.breakpoints.up("sm"),{display:"block",top:"3vh",fontSize:"6vw"}),Object(f.a)(t,e.breakpoints.up("md"),{top:"5vh",right:"2vw"}),t),button:(a={marginLeft:"auto",marginRight:"auto",width:"80%",position:"relative",top:"2.4rem"},Object(f.a)(a,e.breakpoints.up("sm"),{top:"5vh",right:"4vw"}),Object(f.a)(a,e.breakpoints.up("md"),{width:"100%",top:"6vh",right:"2vw"}),a),dashed:(n={borderTop:"3px dashed #bbb",position:"relative",bottom:"10vh"},Object(f.a)(n,e.breakpoints.up("sm"),{top:"2vh"}),Object(f.a)(n,e.breakpoints.up("md"),{top:"4vh"}),n),link:{textDecoration:"none",color:"inherit"}}})),De=function(e){var t=Me();return o.a.createElement("div",{className:t.root},o.a.createElement(K.a,{container:!0,className:t.layout},o.a.createElement(K.a,{item:!0,xs:12,sm:7,md:6},o.a.createElement("img",{src:Ce.a,className:t.img,alt:"avatar"})),o.a.createElement(K.a,{item:!0,xs:12,sm:5,md:6,style:{display:"flex",flexDirection:"column"}},o.a.createElement(Z.a,{text:"Learn more about me here!",speed:70,eraseSpeed:0,typingDelay:1,eraseDelay:4e3,cursorRenderer:function(e){return o.a.createElement(E.a,{variant:"h1",className:t.text},e)},displayTextRenderer:function(e,a){return o.a.createElement(E.a,{variant:"h1",className:t.text},e.split("").map((function(e,t){var a="".concat(t);return o.a.createElement("span",{key:a},e)})))}}),o.a.createElement(j.a,{className:t.button,variant:"outlined",size:"large",color:"primary"},o.a.createElement(d.b,{to:"/timeline",className:t.link},"Explore my timeline")))),o.a.createElement("hr",{className:t.dashed}))},Se=Object(h.a)((function(e){return{}})),We=function(e){Se();return o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(De,null))},ze=Object(h.a)((function(e){return{}})),Ie=function(e){ze();return o.a.createElement("div",null,o.a.createElement(J,null))},He=a(83),Re=a.n(He),Le=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}})),Te=function(e){var t=Le();return o.a.createElement("div",{className:t.root},o.a.createElement(J,null),o.a.createElement(E.a,{variant:"h1"},"404 (Error)"),o.a.createElement("img",{src:Re.a,alt:"penguin",style:{width:"20%",padding:"2vh 0"}}),o.a.createElement(d.b,{to:"/",style:{textDecoration:"none",color:"black"},onMouseOver:function(e){e.target.style.color="cyan"},onMouseOut:function(e){e.target.style.color=""}},o.a.createElement(E.a,{variant:"h6"},"Go back to HomePage")))},Be=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{minHeight:70}}),o.a.createElement(z.c,null,o.a.createElement(z.a,{path:"/",exact:!0,component:Ee}),o.a.createElement(z.a,{path:"/connect",exact:!0,component:je}),o.a.createElement(z.a,{path:"/portfolio",exact:!0,component:We}),o.a.createElement(z.a,{path:"/timeline",exact:!0,component:Ie}),o.a.createElement(z.a,{component:Te})))}}]),a}(n.Component),_e=Object(h.a)((function(e){var t;return{everything:{maxWidth:"100%",backgroundColor:"gray",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},root:Object(f.a)({maxWidth:"100%",display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row"}),title:(t={fontSize:"6vw",paddingBottom:"2vh"},Object(f.a)(t,e.breakpoints.up("md"),{fontSize:"5vw"}),Object(f.a)(t,e.breakpoints.up("lg"),{fontSize:"4vw"}),t),links:{textDecoration:"none",color:"white",padding:"0 2vw"},subscribe:Object(f.a)({},e.breakpoints.up("md"),{flexDirection:"column",minWidth:"60%",width:"50vw"}),condrow:Object(f.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.breakpoints.up("md"),{paddingTop:"3vh"}),hidden:Object(f.a)({display:"none"},e.breakpoints.up("md"),{display:"block"}),show:Object(f.a)({display:"block"},e.breakpoints.up("md"),{display:"none"})}})),Ae=function(){var e=_e(),t=function(e){e.target.style.color="cyan"},a=function(e){e.target.style.color=""};return o.a.createElement("div",{className:e.everything},o.a.createElement("hr",null),o.a.createElement(E.a,{variant:"h1",className:e.title},"Stay up to date with me"),o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.subscribe},o.a.createElement("iframe",{src:"https://chloelam.substack.com/embed",width:"100%",height:"200",className:e.subscribe,frameborder:"0",scrolling:"no"})),o.a.createElement("div",{className:e.condrow},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement(d.b,{to:"/",onMouseOver:t,onMouseOut:a,className:e.links},o.a.createElement(E.a,{variant:"h6",noWrap:!0},"Home")),o.a.createElement(d.b,{to:"/portfolio",onMouseOver:t,onMouseOut:a,className:e.links},o.a.createElement(E.a,{variant:"h6",noWrap:!0},"Portfolio")),o.a.createElement(d.b,{to:"/connect",onMouseOver:t,onMouseOut:a,className:e.links},o.a.createElement(E.a,{variant:"h6",noWrap:!0},"Connect"))),o.a.createElement("div",{className:e.hidden},o.a.createElement(be,null)))),o.a.createElement("div",null,o.a.createElement(E.a,{variant:"h6",style:{width:"100%",padding:"2vw"}},"\xa92020 Copyright ChloeLam. All Rights Reserved."),o.a.createElement("div",{className:e.show},o.a.createElement(be,null))))},Fe=Object(u.a)({typography:{fontFamily:["Nunito","sans-serif"].join(","),fontSize:12,h2:{fontWeight:800,fontSize:40,lineHeight:1.2,"text-transform":"uppercase"},h4:{fontWeight:700,"text-transform":"uppercase"},body1:{fontSize:18,margin:"10px 0"},body2:{fontSize:18,margin:"20px 0"},caption:{fontSize:16,color:"#FC5185",display:"inline",fontWeight:"900"},useNextVariants:!0},palette:{primary:{main:"#11D3BC",contrastText:"#fff"},secondary:{main:"#FC5185"}},overrides:{MuiButton:{root:{fontWeight:700,"text-transform":"capitalize",fontSize:16}}}}),Ge=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,{theme:Fe},o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(A,null),o.a.createElement(Be,null),o.a.createElement(Ae,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a.p+"static/media/name.d4b6f90a.png"},73:function(e,t,a){e.exports=a.p+"static/media/pic.57b60c1e.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/resume.a5fa64d3.pdf"},75:function(e,t,a){e.exports=a.p+"static/media/aboutme.0f892553.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/myicon.1250fb3a.png"},83:function(e,t,a){e.exports=a.p+"static/media/penguin.d972746d.png"},94:function(e,t,a){e.exports=a(106)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.99671159.chunk.js.map