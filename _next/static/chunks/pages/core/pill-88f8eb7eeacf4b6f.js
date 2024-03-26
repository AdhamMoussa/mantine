(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72551],{69743:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pill",function(){return n(24869)}])},24869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(52322),l=n(45392),i=n(2784),r=n(45855),a={demoWrapper:"m-6874fea5"};let s=`
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`,c={type:"configurator",component:function(e){return i.createElement("div",{className:a.demoWrapper},i.createElement(r.D,{...e},"React"))},code:s,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"withRemoveButton",initialValue:!1,libraryValue:!1}]};var p=n(73063);let u=`
import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
`,m={type:"code",component:function(){let e=Array(10).fill(0).map((e,t)=>i.createElement(r.D,{key:t,withRemoveButton:!0},"Item ",t));return i.createElement(p.M,{component:"div",multiline:!0},i.createElement(r.D.Group,null,e))},code:u,centered:!0,maxWidth:340};var d=n(77117);let f=`
import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
`,v={type:"styles-api",data:d.K,component:function(e){return i.createElement("div",{className:a.demoWrapper},i.createElement(r.D,{...e,withRemoveButton:!0,style:{flex:0}},"Test pill"))},code:f,centered:!0,maxWidth:200};var h=n(79016),P=n(33638);let y=(0,h.A)(P.us.Pill);function x(e){let t={code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components},{Demo:n,StylesApiSelectors:i}=t;return n||E("Demo",!0),i||E("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"inside-inputs",children:"Inside inputs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Pill"})," component is designed to be used inside inputs. It can be used to create custom\nmulti select or tag inputs."]}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(i,{component:"Pill"}),"\n",(0,o.jsx)(n,{data:v})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(y,{...e,children:(0,o.jsx)(x,{...e})})}function E(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45855:function(e,t,n){"use strict";n.d(t,{D:function(){return E}});var o=n(2784),l=n(91482),i=n(11200),r=n(38483),a=n(62378),s=n(28559),c=n(82027),p=n(2670),u=n(7450),m=n(75336);let[d,f]=(0,m.V)();var v={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let h={},P=(0,i.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,l.ap)(t):(0,l.ap)(n,"pg-gap")}})),y=(0,c.d)((e,t)=>{let n=(0,r.w)("PillGroup",h,e),{classNames:l,className:i,style:c,styles:p,unstyled:m,vars:f,size:y,disabled:x,...g}=n,E=(0,u.D)(),w=E?.size||y||void 0,b=(0,a.y)({name:"PillGroup",classes:v,props:n,className:i,style:c,classNames:l,styles:p,unstyled:m,vars:f,varsResolver:P,stylesCtx:{size:w},rootSelector:"group"});return o.createElement(d,{value:{size:w,disabled:x}},o.createElement(s.x,{ref:t,size:w,...b("group"),...g}))});y.classes=v,y.displayName="@mantine/core/PillGroup";let x={variant:"default"},g=(0,i.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,l.ap)(n,"pill-fz"),"--pill-height":(0,l.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,l.H5)(t)}})),E=(0,c.d)((e,t)=>{let n=(0,r.w)("Pill",x,e),{classNames:l,className:i,style:c,styles:m,unstyled:d,vars:h,variant:P,children:y,withRemoveButton:E,onRemove:w,removeButtonProps:b,radius:D,size:_,disabled:j,mod:z,...N}=n,k=f(),B=(0,u.D)(),I=_||k?.size||void 0,R=B?.variant==="filled"?"contrast":P||"default",G=(0,a.y)({name:"Pill",classes:v,props:n,className:i,style:c,classNames:l,styles:m,unstyled:d,vars:h,varsResolver:g,stylesCtx:{size:I}});return o.createElement(s.x,{component:"span",ref:t,variant:R,size:I,...G("root",{variant:R}),mod:[{"with-remove":E,disabled:j||k?.disabled},z],...N},o.createElement("span",{...G("label")},y),E&&o.createElement(p.P,{variant:"transparent",radius:D,tabIndex:-1,"aria-hidden":!0,unstyled:d,...b,...G("remove",{className:b?.className,style:b?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),b?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),w?.(),b?.onClick?.(e)}}))});E.classes=v,E.displayName="@mantine/core/Pill",E.Group=y},7450:function(e,t,n){"use strict";n.d(t,{D:function(){return i},H:function(){return l}}),n(2784);var o=n(75336);let[l,i]=(0,o.V)()}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=69743)}),_N_E=e.O()}]);