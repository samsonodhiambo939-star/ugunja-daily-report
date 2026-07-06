import"./rolldown-runtime-CNC7AqOf.js";import{n as e,t}from"./react-K5XiZLH2.js";import{t as n}from"./compiler-runtime-BbCBI_et.js";import{Ct as r,F as i,H as a,Ot as o,R as s,gt as c,kt as l}from"./dist-BJauUQVs.js";import{$r as u,Ci as d,Di as f,Ei as p,Oi as m,Qr as h,Si as g,Ti as _,Ut as v,_i as y,_o as b,gi as x,hi as S,ia as C,vi as w,xi as T}from"./sanity-BW7zNaJ6.js";var E=e(),D=n();t(),b(),p(),_(),T(),d(),w(),f(),m(),g(),C(),y(),x(),S();var O=1,k=3,A=l(s).withConfig({displayName:`RootFlex`,componentId:`sc-1y8zfkj-0`})(({theme:e})=>o`
    min-height: 100%;

    @media (max-width: ${e.sanity.media[k]}px) {
      position: relative;
    }
  `),j=l(a).withConfig({displayName:`SidebarMotionLayer`,componentId:`sc-1y8zfkj-1`})(({theme:e})=>{let t=e.sanity.media;return o`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 360px;
    border-left: 1px solid var(--card-border-color);
    box-sizing: border-box;
    overflow: hidden;

    box-shadow:
      0px 6px 8px -4px var(--card-shadow-umbra-color),
      0px 12px 17px -1px var(--card-shadow-penumbra-color);

    @media (max-width: ${t[k]}px) {
      bottom: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    @media (max-width: ${t[O]}px) {
      border-left: 0;
      min-width: 100%;
      left: 0;
    }
  `});function M(e){let t=(0,D.c)(12),n=c(),{state:a}=u(),{isOpen:o}=a,s=n<=O&&o?`hidden`:`auto`,l;t[0]===e?l=t[1]:(l=e.renderDefault(e),t[0]=e,t[1]=l);let d;t[2]!==s||t[3]!==l?(d=(0,E.jsx)(i,{flex:1,height:`fill`,overflow:s,children:l}),t[2]=s,t[3]=l,t[4]=d):d=t[4];let f;t[5]===o?f=t[6]:(f=o&&(0,E.jsx)(j,{zOffset:100,height:`fill`,children:(0,E.jsx)(v,{})}),t[5]=o,t[6]=f);let p;t[7]===f?p=t[8]:(p=(0,E.jsx)(r,{initial:!1,children:f}),t[7]=f,t[8]=p);let m;return t[9]!==d||t[10]!==p?(m=(0,E.jsxs)(A,{sizing:`border`,height:`fill`,children:[d,p]}),t[9]=d,t[10]=p,t[11]=m):m=t[11],m}function N(e){let t=(0,D.c)(4),{enabled:n}=h();if(!n){let n;return t[0]===e?n=t[1]:(n=e.renderDefault(e),t[0]=e,t[1]=n),n}let r;return t[2]===e?r=t[3]:(r=(0,E.jsx)(M,{...e}),t[2]=e,t[3]=r),r}export{N as TasksStudioActiveToolLayout};