import{ao as c,ap as d,aq as u,av as n,aU as s,aw as a,ax as r,aD as l,aJ as m}from"./index-2dfa9daf.js";const v=["innerHTML"],k=["textContent"],f=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(u),(e,t)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,v)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[a("p",{textContent:r(e.note)},null,8,k)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[a("p",{textContent:r(o.placeholder||"No notes.")},null,8,f)],2))}}),g=m(y,[["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};