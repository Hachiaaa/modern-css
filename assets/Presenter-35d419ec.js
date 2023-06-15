import{aD as d,av as S,aw as e,aR as w,aS as P,aL as h,ao as M,ap as B,aq as D,aT as y,aN as m,aU as z,aJ as H,aV as q,aW as I,at as C,as as R,aX as $,aY as U,aZ as A,a_ as E,a$ as L,b0 as W,b1 as Z,b2 as j,b3 as F,ay as i,aG as u,ax as G,aB as x,b4 as N,b5 as V,aH as O,b6 as J,b7 as b,b8 as X,az as Y,b9 as K,ba as Q,aM as ee,bb as te,bc as se,aI as T,bd as ae,be as oe,bf as le,bg as ne,aE as ie,bh as re,bi as ce}from"./index-2dfa9daf.js";import{N as ue}from"./NoteDisplay-872bf5ec.js";import de from"./DrawingControls-2ffd9886.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[ve];function me(a,l){return d(),S("svg",_e,pe)}const he={name:"carbon-renew",render:me},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),be=[ge,xe];function we(a,l){return d(),S("svg",fe,be)}const ye={name:"carbon-time",render:we},Se="/modern-css/assets/logo-title-horizontal-96c3c915.png";function ke(){const a=w(Date.now()),l=P({interval:1e3}),_=h(()=>{const t=(l.value-a.value)/1e3,o=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${o}`});function v(){a.value=l.value}return{timer:_,resetTimer:v}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;B(D);const _=h(()=>{var t,o,s;return(s=(o=(t=y.value)==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:s.note}),v=h(()=>{var t,o,s;return(s=(o=(t=y.value)==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:s.noteHTML});return(t,o)=>(d(),m(ue,{class:z(l.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),$e=H(Ce,[["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(K("data-v-574fd206"),a=a(),Q(),a),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:Se,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),De={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ze=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},qe={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=M({__name:"Presenter",setup(a){B(D);const l=w();q(),I(l);const _=C.titleTemplate.replace("%s",C.title||"Slidev");R({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=ke(),o=w([]),s=h(()=>$.value<U.value?{route:y.value,clicks:$.value+1}:A.value?{route:E.value,clicks:0}:null);return L(()=>{const k=l.value.querySelector("#slide-content"),r=W(Z()),g=j();F(()=>{if(!g.value||te.value||!se.value)return;const c=k.getBoundingClientRect(),n=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(n<0||n>100||p<0||p>100))return{x:n,y:p}},c=>{ee.cursor=c})}),(k,r)=>{const g=ye,c=he;return d(),S(Y,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...n)=>i(t)&&i(t)(...n))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",De,G(i(v)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(ae,{context:"presenter"})]),_:1}),ze],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(T))},[s.value?(d(),m(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var n;return[u(i(le),{is:(n=s.value.route)==null?void 0:n.component,"clicks-elements":o.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>o.value=p),clicks:s.value.clicks,"clicks-disabled":!1,class:z(i(oe)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):O("v-if",!0),He],4),e("div",Pe,[(d(),m($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",qe,[u(re,{persist:!0})]),(d(),m(de,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(ne)-1)/(i(ie)-1)*100}%`})},null,4)])]),u(ce),u(X,{modelValue:i(b),"onUpdate:modelValue":r[2]||(r[2]=n=>J(b)?b.value=n:null)},null,8,["modelValue"])],64)}}});const Le=H(Re,[["__scopeId","data-v-574fd206"],["__file","C:/Users/guoqi/Desktop/dev/slidev/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
