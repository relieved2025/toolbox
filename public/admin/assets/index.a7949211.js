var j=Object.defineProperty;var I=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var L=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,g=(s,e)=>{for(var t in e||(e={}))W.call(e,t)&&L(s,t,e[t]);if(I)for(var t of I(e))Y.call(e,t)&&L(s,t,e[t]);return s};var T=(s,e,t)=>new Promise((c,u)=>{var a=r=>{try{f(t.next(r))}catch(m){u(m)}},i=r=>{try{f(t.throw(r))}catch(m){u(m)}},f=r=>r.done?c(r.value):Promise.resolve(r.value).then(a,i);f((t=t.apply(s,e)).next())});import{b as G,s as J,u as K}from"./useModal.3e989bb9.js";import{d as S,b9 as Q,r as B,a4 as H,i as d,e as O,x as X,aA as Z,w as n,h as o,j as y,t as C,az as P,g as q,av as ee,aY as te,l as V,D as z,E as ne,aN as oe,a2 as U,aW as E,aq as se,_ as ae,ba as ue,s as le,v as N,N as D,f as ce,p as ie,q as re,bb as _e,n as de}from"./index.7a33fce5.js";import"./index.esm.3252faac.js";const pe={class:"w-full cursor-move",id:"basic-modal-bar"},fe=y("\u53D6\u6D88"),me=S({__name:"BasicModal",props:g({},G),emits:["on-close","on-ok","register"],setup(s,{emit:e}){const t=s,c=Q(),u=B(null),a=B(!1),i=B(!1),f=H(()=>g(g({},t),d(u))),r=H(()=>{const{subBtuText:l}=u.value;return l||t.subBtuText});function m(l){return T(this,null,function*(){u.value=oe(d(u)||{},l)})}const F=H(()=>g(g(g({},c),d(f)),d(u)));function x(l){i.value=l}function w(){a.value=!0,U(()=>{const l=document.getElementById("basic-modal"),b=document.getElementById("basic-modal-bar");J(b,l)})}function M(){a.value=!1,i.value=!1,e("on-close")}function k(){a.value=!1,e("on-close")}function _(){i.value=!0,console.log(i.value),e("on-ok")}const v={setProps:m,openModal:w,closeModal:M,setSubLoading:x};return te()&&e("register",v),(l,b)=>{const h=V,A=z,$=ne;return O(),X($,ee({id:"basic-modal"},d(F),{show:a.value,"onUpdate:show":b[0]||(b[0]=R=>a.value=R),onClose:k}),Z({header:n(()=>[q("div",pe,C(d(F).title),1)]),default:n(()=>[P(l.$slots,"default")]),_:2},[l.$slots.action?{name:"action",fn:n(()=>[P(l.$slots,"action")])}:{name:"action",fn:n(()=>[o(A,null,{default:n(()=>[o(h,{onClick:M},{default:n(()=>[fe]),_:1}),o(h,{type:"primary",loading:i.value,onClick:_},{default:n(()=>[y(C(d(r)),1)]),_:1},8,["loading"])]),_:1})])}]),1040,["show"])}}});function ve(){return E.request({url:"/master/ota/check",method:"get"})}function ge(){return E.request({url:"/master/ota/update",method:"get"},{isTransformResponse:!1})}function Be(){return E.request({url:"/master/ota/database",method:"get"},{isTransformResponse:!1})}function ye(){return E.request({url:"/master/ota/script",method:"get"},{isTransformResponse:!1})}const be="yyyy-MM-dd HH:mm:ss";function he(s,e=be){return se(s,e)}const Ce=["innerHTML"],Fe=y(" \u68C0\u67E5\u66F4\u65B0 "),ke=y(" \u7ACB\u5373\u66F4\u65B0 "),xe=["textContent"],Me=S({__name:"index",setup(s){const e=B(),t=ue(),c=le({current_version:"",version:"",message:""}),u=B(!1),a=B(!1),i=B(""),[f,{openModal:r,closeModal:m}]=K({title:"\u5728\u7EBF\u66F4\u65B0",closeOnEsc:!1,showIcon:!1});F();function F(){u.value=!0,ve().then(_=>{for(const v in _)c[v]=_[v];c.current_version!==c.version&&t.info({title:"\u53D1\u73B0\u65B0\u7248",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",content:()=>N("div",{},["\u5F53\u524D\u7248\u672C: ",N(D,{type:"info"},c.current_version),"\uFF0C\u6700\u65B0\u7248\u672C: ",N(D,{type:"info"},c.version),"\uFF0C\u662F\u5426\u8FDB\u884C\u66F4\u65B0\uFF1F"]),onPositiveClick:()=>{x()}})}).finally(()=>u.value=!1)}function x(){return T(this,null,function*(){r(),a.value=!0;const _=[ge,Be,ye];try{for(let v of _){const p=yield v();if(console.log(p),k(p.message),p.status!=="ok"){k("\u7EC8\u6B62\u66F4\u65B0~");break}}k("\u66F4\u65B0\u5B8C\u6BD5~")}finally{a.value=!1}})}function w(){t.info({title:"\u6E29\u99A8\u63D0\u9192",content:"\u60A8\u786E\u5B9A\u66F4\u65B0\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{x()},onNegativeClick:()=>{}})}function M(){return T(this,null,function*(){m(),a.value=!1})}function k(_){_=`
[${he(new Date,"yyyy-MM-dd HH:mm:ss")}] ${_}`,i.value=(i.value.trim()+_).trim(),U(()=>{e.value.scrollTop=e.value.scrollHeight})}return(_,v)=>{const p=ie,l=re,b=_e,h=V,A=z,$=de,R=me;return O(),ce("div",null,[o($,{bordered:!1,title:"\u5728\u7EBF\u5347\u7EA7",class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:n(()=>[o(b,{show:u.value},{default:n(()=>[o(l,{bordered:"","label-placement":"left",class:"py-2",column:2},{default:n(()=>[o(p,{label:"\u5F53\u524D\u7248\u672C"},{default:n(()=>[o(d(D),{type:"info"},{default:n(()=>[y(C(c.current_version),1)]),_:1})]),_:1}),o(p,{label:"\u6700\u65B0\u7248\u672C"},{default:n(()=>[o(d(D),{type:"info"},{default:n(()=>[y(C(c.version),1)]),_:1})]),_:1}),o(p,{label:"\u65B0\u7248\u7279\u6027"},{default:n(()=>[q("div",{class:"news",innerHTML:c.message},null,8,Ce)]),_:1})]),_:1})]),_:1},8,["show"]),o(A,{size:"large",class:"mt-4"},{default:n(()=>[o(h,{strong:"",type:"primary",onClick:F,loading:u.value},{default:n(()=>[Fe]),_:1},8,["loading"]),o(h,{strong:"",type:"primary",onClick:w,loading:a.value},{default:n(()=>[ke]),_:1},8,["loading"])]),_:1})]),_:1}),o(R,{onRegister:d(f),ref:"modalRef",class:"console-modal"},{default:n(()=>[q("div",{ref_key:"consoleEl",ref:e,class:"console",textContent:C(i.value)},null,8,xe)]),action:n(()=>[o(h,{type:"primary",loading:a.value,onClick:M},{default:n(()=>[y(C(a.value?"\u6B63\u5728\u66F4\u65B0":"\u5B8C\u6210\u66F4\u65B0"),1)]),_:1},8,["loading"])]),_:1},8,["onRegister"])])}}});var Ae=ae(Me,[["__scopeId","data-v-336b5663"]]);export{Ae as default};
