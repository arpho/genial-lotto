"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7160:(D,E,a)=>{a.d(E,{c:()=>l});var w=a(2361),g=a(7683),m=a(3139);const l=(c,o)=>{let t,n;const e=(i,v,f)=>{if("undefined"==typeof document)return;const u=document.elementFromPoint(i,v);u&&o(u)?u!==t&&(d(),s(u,f)):d()},s=(i,v)=>{t=i,n||(n=t);const f=t;(0,w.c)(()=>f.classList.add("ion-activated")),v()},d=(i=!1)=>{if(!t)return;const v=t;(0,w.c)(()=>v.classList.remove("ion-activated")),i&&n!==t&&t.click(),t=void 0};return(0,m.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>e(i.currentX,i.currentY,g.a),onMove:i=>e(i.currentX,i.currentY,g.b),onEnd:()=>{d(!0),(0,g.h)(),n=void 0}})}},6683:(D,E,a)=>{a.d(E,{g:()=>w});const w=(o,t,n,e,s)=>m(o[1],t[1],n[1],e[1],s).map(d=>g(o[0],t[0],n[0],e[0],d)),g=(o,t,n,e,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*n*s+3*n+e*s))-o*Math.pow(s-1,3),m=(o,t,n,e,s)=>c((e-=s)-3*(n-=s)+3*(t-=s)-(o-=s),3*n-6*t+3*o,3*t-3*o,o).filter(i=>i>=0&&i<=1),c=(o,t,n,e)=>{if(0===o)return((o,t,n)=>{const e=t*t-4*o*n;return e<0?[]:[(-t+Math.sqrt(e))/(2*o),(-t-Math.sqrt(e))/(2*o)]})(t,n,e);const s=(3*(n/=o)-(t/=o)*t)/3,d=(2*t*t*t-9*t*n+27*(e/=o))/27;if(0===s)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-s),-Math.sqrt(-s)];const i=Math.pow(d/2,2)+Math.pow(s/3,3);if(0===i)return[Math.pow(d/2,.5)-t/3];if(i>0)return[Math.pow(-d/2+Math.sqrt(i),1/3)-Math.pow(d/2+Math.sqrt(i),1/3)-t/3];const v=Math.sqrt(Math.pow(-s/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-s/3,3)))),u=2*Math.pow(v,1/3);return[u*Math.cos(f/3)-t/3,u*Math.cos((f+2*Math.PI)/3)-t/3,u*Math.cos((f+4*Math.PI)/3)-t/3]}},5062:(D,E,a)=>{a.d(E,{i:()=>w});const w=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(D,E,a)=>{a.r(E),a.d(E,{startFocusVisible:()=>l});const w="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=c=>{let o=[],t=!0;const n=c?c.shadowRoot:document,e=c||document.body,s=h=>{o.forEach(p=>p.classList.remove(w)),h.forEach(p=>p.classList.add(w)),o=h},d=()=>{t=!1,s([])},i=h=>{t=m.includes(h.key),t||s([])},v=h=>{if(t&&h.composedPath){const p=h.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));s(p)}},f=()=>{n.activeElement===e&&s([])};return n.addEventListener("keydown",i),n.addEventListener("focusin",v),n.addEventListener("focusout",f),n.addEventListener("touchstart",d),n.addEventListener("mousedown",d),{destroy:()=>{n.removeEventListener("keydown",i),n.removeEventListener("focusin",v),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",d),n.removeEventListener("mousedown",d)},setFocus:s}}},1878:(D,E,a)=>{a.d(E,{C:()=>c,a:()=>m,d:()=>l});var w=a(5861),g=a(3756);const m=function(){var o=(0,w.Z)(function*(t,n,e,s,d,i){var v;if(t)return t.attachViewToDom(n,e,d,s);if(!(i||"string"==typeof e||e instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof e?null===(v=n.ownerDocument)||void 0===v?void 0:v.createElement(e):e;return s&&s.forEach(u=>f.classList.add(u)),d&&Object.assign(f,d),n.appendChild(f),yield new Promise(u=>(0,g.c)(f,u)),f});return function(n,e,s,d,i,v){return o.apply(this,arguments)}}(),l=(o,t)=>{if(t){if(o)return o.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},c=()=>{let o,t;return{attachViewToDom:function(){var s=(0,w.Z)(function*(d,i,v={},f=[]){var u,h;if(o=d,i){const _="string"==typeof i?null===(u=o.ownerDocument)||void 0===u?void 0:u.createElement(i):i;f.forEach(r=>_.classList.add(r)),Object.assign(_,v),o.appendChild(_),yield new Promise(r=>(0,g.c)(_,r))}else if(o.children.length>0){const _=null===(h=o.ownerDocument)||void 0===h?void 0:h.createElement("div");f.forEach(r=>_.classList.add(r)),_.append(...o.children),o.appendChild(_)}const p=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),p.appendChild(o),o});return function(i,v){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},7683:(D,E,a)=>{a.d(E,{a:()=>m,b:()=>l,c:()=>g,d:()=>o,h:()=>c});const w={getEngine(){var t;const n=window;return n.TapticEngine||(null===(t=n.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{w.selection()},m=()=>{w.selectionStart()},l=()=>{w.selectionChanged()},c=()=>{w.selectionEnd()},o=t=>{w.impact(t)}},207:(D,E,a)=>{a.d(E,{a:()=>d,b:()=>v,f:()=>s,g:()=>e,i:()=>n,p:()=>f,s:()=>i});var w=a(5861),g=a(3756),m=a(7208);const c="ion-content",o=".ion-content-scroll-host",t=`${c}, ${o}`,n=u=>u&&"ION-CONTENT"===u.tagName,e=function(){var u=(0,w.Z)(function*(h){return n(h)?(yield new Promise(p=>(0,g.c)(h,p)),h.getScrollElement()):h});return function(p){return u.apply(this,arguments)}}(),s=u=>u.querySelector(o)||u.querySelector(t),d=u=>u.closest(t),i=(u,h)=>n(u)?u.scrollToTop(h):Promise.resolve(u.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),v=(u,h,p,_)=>n(u)?u.scrollByPoint(h,p,_):Promise.resolve(u.scrollBy({top:p,left:h,behavior:_>0?"smooth":"auto"})),f=u=>(0,m.a)(u,c)},7208:(D,E,a)=>{a.d(E,{a:()=>m,b:()=>g,p:()=>w});const w=l=>console.warn(`[Ionic Warning]: ${l}`),g=(l,...c)=>console.error(`[Ionic Error]: ${l}`,...c),m=(l,...c)=>console.error(`<${l.tagName.toLowerCase()}> must be used inside ${c.join(" or ")}.`)},8439:(D,E,a)=>{a.d(E,{s:()=>w});const w=n=>{try{if(n instanceof class t{constructor(e){this.value=e}})return n.value;if(!l()||"string"!=typeof n||""===n)return n;const e=document.createDocumentFragment(),s=document.createElement("div");e.appendChild(s),s.innerHTML=n,o.forEach(f=>{const u=e.querySelectorAll(f);for(let h=u.length-1;h>=0;h--){const p=u[h];p.parentNode?p.parentNode.removeChild(p):e.removeChild(p);const _=m(p);for(let r=0;r<_.length;r++)g(_[r])}});const d=m(e);for(let f=0;f<d.length;f++)g(d[f]);const i=document.createElement("div");i.appendChild(e);const v=i.querySelector("div");return null!==v?v.innerHTML:i.innerHTML}catch(e){return console.error(e),""}},g=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let s=n.attributes.length-1;s>=0;s--){const d=n.attributes.item(s),i=d.name;if(!c.includes(i.toLowerCase())){n.removeAttribute(i);continue}const v=d.value;null!=v&&v.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}const e=m(n);for(let s=0;s<e.length;s++)g(e[s])},m=n=>null!=n.children?n.children:n.childNodes,l=()=>{var n;const e=window,s=null===(n=null==e?void 0:e.Ionic)||void 0===n?void 0:n.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},c=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},8117:(D,E,a)=>{a.d(E,{a:()=>w,b:()=>d,c:()=>o,d:()=>i,e:()=>r,f:()=>m,g:()=>g,h:()=>p,i:()=>t,j:()=>e,k:()=>v,l:()=>n,m:()=>c,n:()=>l,o:()=>s,p:()=>f,q:()=>u,r:()=>h,s:()=>_});const w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1316:(D,E,a)=>{a.r(E),a.d(E,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>w,copyVisualViewport:()=>_,keyboardDidClose:()=>f,keyboardDidOpen:()=>i,keyboardDidResize:()=>v,resetKeyboardAssist:()=>t,setKeyboardClose:()=>d,setKeyboardOpen:()=>s,startKeyboardAssist:()=>n,trackViewportChanges:()=>p});const w="ionKeyboardDidShow",g="ionKeyboardDidHide";let l={},c={},o=!1;const t=()=>{l={},c={},o=!1},n=r=>{e(r),r.visualViewport&&(c=_(r.visualViewport),r.visualViewport.onresize=()=>{p(r),i()||v(r)?s(r):f(r)&&d(r)})},e=r=>{r.addEventListener("keyboardDidShow",y=>s(r,y)),r.addEventListener("keyboardDidHide",()=>d(r))},s=(r,y)=>{u(r,y),o=!0},d=r=>{h(r),o=!1},i=()=>!o&&l.width===c.width&&(l.height-c.height)*c.scale>150,v=r=>o&&!f(r),f=r=>o&&c.height===r.innerHeight,u=(r,y)=>{const b=new CustomEvent(w,{detail:{keyboardHeight:y?y.keyboardHeight:r.innerHeight-c.height}});r.dispatchEvent(b)},h=r=>{const y=new CustomEvent(g);r.dispatchEvent(y)},p=r=>{l=Object.assign({},c),c=_(r.visualViewport)},_=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},7741:(D,E,a)=>{a.d(E,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(m,l,c)=>{const o=m*l/c-m+"ms",t=2*Math.PI*l/c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(m,l,c)=>{const o=l/c,t=m*o-m+"ms",n=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,l,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*l+(l<c/2?180:-180)}deg)`,"animation-delay":m*l/c-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,l,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*l+(l<c/2?180:-180)}deg)`,"animation-delay":m*l/c-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,l,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":m*l/c-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,l,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":m*l/c-m+"ms"}})}}},6546:(D,E,a)=>{a.r(E),a.d(E,{createSwipeBackGesture:()=>c});var w=a(3756),g=a(5062),m=a(3139);a(3509);const c=(o,t,n,e,s)=>{const d=o.ownerDocument.defaultView,i=(0,g.i)(o),f=r=>i?-r.deltaX:r.deltaX;return(0,m.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:M}=r;return i?M>=d.innerWidth-50:M<=50})(r)&&t(),onStart:n,onMove:r=>{const M=f(r)/d.innerWidth;e(M)},onEnd:r=>{const y=f(r),M=d.innerWidth,b=y/M,C=(r=>i?-r.velocityX:r.velocityX)(r),T=C>=0&&(C>.2||y>M/2),x=(T?1-b:b)*M;let O=0;if(x>5){const U=x/Math.abs(C);O=Math.min(U,540)}s(T,b<=0?.01:(0,w.l)(0,b,.9999),O)}})}},2854:(D,E,a)=>{a.d(E,{c:()=>m,g:()=>c,h:()=>g,o:()=>t});var w=a(5861);const g=(n,e)=>null!==e.closest(n),m=(n,e)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},e):e,c=n=>{const e={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(n).forEach(s=>e[s]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,t=function(){var n=(0,w.Z)(function*(e,s,d,i){if(null!=e&&"#"!==e[0]&&!o.test(e)){const v=document.querySelector("ion-router");if(v)return null!=s&&s.preventDefault(),v.push(e,d,i)}return!1});return function(s,d,i,v){return n.apply(this,arguments)}}()},8504:(D,E,a)=>{a.d(E,{t:()=>f});var w=a(783),g=a(1010);class m extends g.r{constructor(h){super(h),this.controlType="textbox",this.type=h.type||""}}class l extends g.r{constructor(h){super(h),this.controlType="switchBox",this.labelFalse=h.labelFalse||"",this.labelTrue=h.labelTrue||"",this.iconTrue=h.iconTrue||"radio-button-off",this.iconFalse=h.iconFalse||"checkmark",this.type=h.type||"boolean"}textValue(){return this.value?this.labelTrue:this.labelFalse}}class c extends g.r{constructor(h={key:"date",label:"set a date",presentation:"date"}){super(h),this.controlType="datebox"}}var o=a(573);class t extends g.r{constructor(h){super(h),this.controlType="dropdown",this.options=[],this.options=h.options||[]}}var n=a(6250),e=a(2096),s=a(501),d=a(3497),i=a(5649),v=a(4372);let f=(()=>{class u{constructor(p,_,r,y,M){this.router=p,this.route=_,this.service=r,this.navParams=y,this.modalCtrl=M}dismiss(){this.modalCtrl.dismiss()}setBirthDate(){this.currentUser.birthDate||(this.currentUser.birthDate=new o.r({year:1977,day:16,month:2}),this.currentUser.birthDate.loadFromDate(new Date))}setTitle(){this.title=this.currentUser.firstName&&this.currentUser.lastName?`${this.currentUser.firstName} ${this.currentUser.lastName}`:this.currentUser.email}ngOnInit(){this.navParams.get("item")&&(this.currentUser=new w.T(this.navParams.get("item"),this.navParams.get("item").key)),this.currentUser&&this.setBirthDate(),this.submitText="modifica",this.currentUser&&this.setTitle();const p=[new m({key:"firstName",label:"nome",value:this.currentUser?this.currentUser.firstName:"nome",order:1,required:!0}),new m({key:"lastName",label:"cognome",value:this.currentUser?this.currentUser.lastName:"cognome",order:2}),new l({key:"enabled",label:"abilitato",value:!!this.currentUser&&this.currentUser.enabled,labelTrue:"utente  abilitato",labelFalse:" utente non abilitato ",iconTrue:"happy",iconFalse:"remove-circle",order:3}),new c({key:"birthDate",label:"Data di nascita",required:!0,value:this.currentUser?new o.r(this.currentUser.birthDate).formatDate():new o.r(new Date),order:4}),new t({key:"level",label:"Ruolo utente",options:n.r.accessLevel,value:this.currentUser?this.currentUser.level:3}),new l({key:"offlineEnabled",label:"supporto offline ",value:!!this.currentUser&&this.currentUser.enabled,labelTrue:"supporto offline ok",labelFalse:" solo cloud ",iconTrue:"cloud-upload",iconFalse:"cloud",order:3})];this.questions=p}filter(p){}submit(p){p.email=this.currentUser.email;const _=new w.T(p);_.key=this.currentUser.key,_.role=n.r.accessLevel.filter(r=>{})[0],_.role=n.r.accessLevel.filter(r=>r.value==p.level)[0],this.service.updateItem(_).then(r=>{this.router.navigate(["/users"])}).catch(r=>{})}}return u.\u0275fac=function(p){return new(p||u)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(d.f),e.Y36(i.X1),e.Y36(i.IN))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-edit-user"]],decls:11,vars:3,consts:[["slot","start"],["defaultHref","/home",1,"button-clear","ion-chevron-left"],["slot","end"],[3,"click"],["name","close"],["padding",""],[3,"questions","submitText","interactiveSubmit","singleSubmit"]],template:function(p,_){1&p&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-buttons",2)(7,"ion-button",3),e.NdJ("click",function(){return _.dismiss()}),e._UZ(8,"ion-icon",4),e.qZA()()()(),e.TgZ(9,"ion-content",5)(10,"app-dynamic-form",6),e.NdJ("interactiveSubmit",function(y){return _.filter(y)})("singleSubmit",function(y){return _.submit(y)}),e.qZA()()),2&p&&(e.xp6(5),e.Oqu(_.title),e.xp6(5),e.Q6J("questions",_.questions)("submitText",_.submitText))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.YG,i.gu,i.W2,v.r],styles:["ion-title.title-md.hydrated[_ngcontent-%COMP%]{text-align:center}"]}),u})()},9955:(D,E,a)=>{a.d(E,{e:()=>o});var w=a(2916),g=a(2321),m=a(6551),l=a(783),c=a(2096);let o=(()=>{class t{constructor(){}loginUser(e,s){return this.auth=(0,g.v0)(),(0,g.e5)(this.auth,e,s)}resetPassword(e){const s=(0,g.v0)();return(0,g.LS)(s,e)}signupUser(e,s,d,i,v){return this.createUserObserver(e.email,e.password).subscribe({next:f=>{(0,g.w$)(f.user);const u=(0,m.N8)(),h=new l.T(e).load(e),p=(0,m.iH)(u,"/userProfile");console.log("new user",h.serialize()),(0,m.VF)(p,h.serialize()),d&&d(f.user)},error:f=>{console.error("errore",f),i&&i(f)},complete:()=>{console.log("ok"),v&&v()}})}createUserObserver(e,s){const d=(0,g.v0)();return new w.y(v=>{(0,g.Xb)(d,e,s).then(f=>{v.next(f),v.complete()}).catch(f=>{v.error(f),v.complete()})})}logoutUser(){return(0,g.v0)().signOut()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);