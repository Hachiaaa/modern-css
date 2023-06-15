import{ao as d,ap as _,aq as p,ar as u,as as h,at as m,au as f,av as n,aw as t,ax as s,ay as o,az as v,aA as g,aB as x,aC as y,aD as r,aE as b,aF as N,aG as k,aH as w,aI as P,aJ as C}from"./index-2dfa9daf.js";import{N as D}from"./NoteDisplay-872bf5ec.js";const S={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},H={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},j={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},A=d({__name:"PresenterPrint",setup(E){_(p),u(`
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
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:x(o(P))},[t("div",S,[t("div",V,[t("h1",B,s(o(m).title),1),t("div",H,s(new Date().toLocaleString()),1)]),(r(!0),n(v,null,g(o(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",j,s(e==null?void 0:e.no)+"/"+s(o(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),z])]),k(D,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(i).length-1?(r(),n("hr",q)):w("v-if",!0)]))),128))])],4))}}),G=C(A,[["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{G as default};
