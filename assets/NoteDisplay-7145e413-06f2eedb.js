import{P as p,e as u,d,D as n,G as l,c as i,l as r,h as c,m}from"./index-2dfa9daf.js";const k=["innerHTML"],v=["textContent"],y=["textContent"],C=p({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(a){const o=a;return u(d),(e,t)=>e.noteHtml?(n(),l("div",{key:0,class:i(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=s=>e.$emit("click")),innerHTML:e.noteHtml},null,10,k)):e.note?(n(),l("div",{key:1,class:i(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=s=>e.$emit("click"))},[r("p",{textContent:c(e.note)},null,8,v)],2)):(n(),l("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=s=>e.$emit("click"))},[r("p",{textContent:c(o.placeholder||"No notes.")},null,8,y)],2))}}),g=m(C,[["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g};