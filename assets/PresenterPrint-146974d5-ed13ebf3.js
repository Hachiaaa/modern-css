import{l as e,P as c,e as v,d as p,K as u,g,C as m,U as f,W as h,D as o,G as i,h as l,T as s,A as b,R as x,i as k,k as y,Q as P,_,n as D,o as T,m as w}from"./index-2dfa9daf.js";import{g as C}from"./NoteDisplay-7145e413-06f2eedb.js";const L={class:"m-4"},j={class:"mb-10"},A={class:"text-4xl font-bold mt-2"},H={class:"opacity-50"},M={class:"text-lg"},R={class:"font-bold flex gap-2"},U={class:"opacity-50"},$=e("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},z=c({__name:"PresenterPrint",setup(K){v(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),g({title:`Notes - ${m.title}`});const r=f(()=>h.map(t=>{var n;return(n=t.meta)==null?void 0:n.slide}).filter(t=>t!==void 0&&t.noteHTML!==""));return(t,n)=>(o(),i("div",{id:"page-root",style:D(s(T))},[e("div",L,[e("div",j,[e("h1",A,l(s(m).title),1),e("div",H,l(new Date().toLocaleString()),1)]),(o(!0),i(b,null,x(s(r),(a,d)=>(o(),i("div",{key:d,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",M,[e("div",R,[e("div",U,l(a==null?void 0:a.no)+"/"+l(s(k)),1),y(" "+l(a==null?void 0:a.title)+" ",1),$])]),P(C,{"note-html":a.noteHTML,class:"max-w-full"},null,8,["note-html"])]),d<s(r).length-1?(o(),i("hr",q)):_("v-if",!0)]))),128))])],4))}}),F=w(z,[["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{F as default};
