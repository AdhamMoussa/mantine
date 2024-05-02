(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68781],{62727:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/ring-progress",function(){return n(44711)}])},44711:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return V}});var r=n(52322),t=n(45392),s=n(2784),l=n(58898),i=n(11200),c=n(38483),a=n(46690),u=n(28559),d=n(82027),p=n(13588),h=n(68755),x=n(893);function m({size:e,value:o,offset:n,sum:t,thickness:s,root:l,color:i,lineRoundCaps:c,tooltip:a,getStyles:d,display:m,...v}){let g=(0,h.rZ)();return(0,r.jsx)(x.u.Floating,{disabled:!a,label:a,children:(0,r.jsx)(u.x,{component:"circle",...v,...d("curve"),__vars:{"--curve-color":i?(0,p.p)(i,g):void 0},fill:"none",strokeLinecap:c?"round":"butt",...function({size:e,thickness:o,sum:n,value:r,root:t,offset:s}){let l=(.9*e-2*o)/2,i=Math.PI*l*2/100,c=t||void 0===r?`${(100-n)*i}, ${n*i}`:`${r*i}, ${(100-r)*i}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:l||0,transform:t?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:c,strokeDashoffset:t?0:s||0}}({sum:t,size:e,thickness:s,value:o,offset:n,root:l})})})}m.displayName="@mantine/core/Curve";var v={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"};let g={size:120,thickness:12},f=(0,i.Z)((e,{size:o,thickness:n})=>({root:{"--rp-size":(0,l.h)(o),"--rp-label-offset":(0,l.h)(2*n)}})),j=(0,d.d)((e,o)=>{let n=(0,c.w)("RingProgress",g,e),{classNames:t,className:l,style:i,styles:d,unstyled:p,vars:h,label:x,sections:j,size:b,thickness:y,roundCaps:R,rootColor:C,..._}=n,P=(0,a.y)({name:"RingProgress",classes:v,props:n,className:l,style:i,classNames:t,styles:d,unstyled:p,vars:h,varsResolver:f}),k=Math.min(y||12,(b||120)/4),z=(function({size:e,thickness:o,sections:n,renderRoundedLineCaps:r,rootColor:t}){let s=n.reduce((e,o)=>e+o.value,0),l=Math.PI*((.9*e-2*o)/2)*2,i=l,c=[],a=[];for(let e=0;e<n.length;e+=1)c.push({sum:s,offset:i,data:n[e],root:!1}),i-=n[e].value/100*l;if(c.push({sum:s,offset:i,data:{color:t},root:!0}),a.push({...c[c.length-1],lineRoundCaps:!1}),c.length>2){a.push({...c[0],lineRoundCaps:r}),a.push({...c[c.length-2],lineRoundCaps:r});for(let e=1;e<=c.length-3;e+=1)a.push({...c[e],lineRoundCaps:!1})}else a.push({...c[0],lineRoundCaps:r});return a})({size:b,thickness:k,sections:j,renderRoundedLineCaps:R,rootColor:C}).map(({data:e,sum:o,root:n,lineRoundCaps:r,offset:t},l)=>(0,s.createElement)(m,{...e,key:l,size:b,thickness:k,sum:o,offset:t,color:e?.color,root:n,lineRoundCaps:r,getStyles:P}));return(0,r.jsxs)(u.x,{...P("root"),size:b,ref:o,..._,children:[(0,r.jsx)("svg",{...P("svg"),children:z}),x&&(0,r.jsx)("div",{...P("label"),children:x})]})});j.classes=v,j.displayName="@mantine/core/RingProgress";var Text=n(8582);let b=`
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
`,y={type:"code",code:b,centered:!0,component:function(){return(0,r.jsx)(j,{label:(0,r.jsx)(Text.x,{size:"xs",ta:"center",children:"Application data usage"}),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},R=`
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      {{props}}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
`,C={type:"configurator",component:function(e){return(0,r.jsx)(j,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:R,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]},_=`
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents \u2013 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps \u2013 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other \u2013 15 Gb' },
      ]}
    />
  );
}
`,P={type:"code",code:_,centered:!0,component:function(){return(0,r.jsx)(j,{size:170,thickness:16,label:(0,r.jsx)(Text.x,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"},children:"Hover sections to see tooltips"}),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}},k=`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,z={type:"code",code:k,centered:!0,component:function(){return(0,r.jsx)(j,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}},M=`
import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
`,w={type:"code",component:function(){let[e,o]=(0,s.useState)(-1),n=()=>o(-1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{onMouseLeave:()=>o(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>o(0),onMouseLeave:n},{value:20,color:"blue",onMouseEnter:()=>o(1),onMouseLeave:n},{value:15,color:"indigo",onMouseEnter:()=>o(2),onMouseLeave:n}]}),(0,r.jsxs)(Text.x,{children:["Hovered section: ",-1===e?"none":e]})]})},code:M};var T=n(92856),E=n(93010),N=n(16438),A=n(54813);let D=`
import { ActionIcon, RingProgress, Text, Center, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`,H={type:"code",code:D,component:function(){return(0,r.jsxs)(E.Z,{justify:"center",children:[(0,r.jsx)(j,{sections:[{value:40,color:"blue"}],label:(0,r.jsx)(Text.x,{c:"blue",fw:700,ta:"center",size:"xl",children:"40%"})}),(0,r.jsx)(j,{sections:[{value:100,color:"teal"}],label:(0,r.jsx)(N.M,{children:(0,r.jsx)(A.A,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,r.jsx)(T.Z,{style:{width:(0,l.h)(22),height:(0,l.h)(22)}})})})})]})}};var L=n(79016),I=n(33638);let S=(0,L.A)(I.us.RingProgress);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"sections"})," prop to an array of:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"value"})," – number between 0 and 100 – amount of space filled by segment"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"color"})," – segment color from theme or any other css color value"]}),"\n"]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(o.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,r.jsxs)(o.p,{children:["Use ",(0,r.jsx)(o.code,{children:"size"}),", ",(0,r.jsx)(o.code,{children:"thickness"})," & ",(0,r.jsx)(o.code,{children:"roundCaps"})," props to configure RingProgress, size and thickness values:"]}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(o.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,r.jsxs)(o.p,{children:["Add ",(0,r.jsx)(o.code,{children:"tooltip"})," property to section to display floating ",(0,r.jsx)(o.a,{href:"/core/tooltip/",children:"Tooltip"})," when user hovers over it:"]}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(o.h2,{id:"root-color",children:"Root color"}),"\n",(0,r.jsxs)(o.p,{children:["Use ",(0,r.jsx)(o.code,{children:"rootColor"})," property to change the root color:"]}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(o.h2,{id:"sections-props",children:"Sections props"}),"\n",(0,r.jsx)(o.p,{children:"You can add any additional props to sections:"}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(o.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,r.jsxs)(o.p,{children:["You can add any React node as label, e.g. ",(0,r.jsx)(o.a,{href:"/core/text/",children:"Text"})," component with some additional styles\nor ",(0,r.jsx)(o.a,{href:"/core/theme-icon/",children:"ThemeIcon"}),":"]}),"\n",(0,r.jsx)(n,{data:H})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,{...e,children:(0,r.jsx)(G,{...e})})}},16438:function(e,o,n){"use strict";n.d(o,{M:function(){return u}});var r=n(52322);n(2784);var t=n(38483),s=n(46690),l=n(28559),i=n(33502),c={root:"m_4451eb3a"};let a={},u=(0,i.b)((e,o)=>{let n=(0,t.w)("Center",a,e),{classNames:i,className:u,style:d,styles:p,unstyled:h,vars:x,inline:m,mod:v,...g}=n,f=(0,s.y)({name:"Center",props:n,classes:c,className:u,style:d,classNames:i,styles:p,unstyled:h,vars:x});return(0,r.jsx)(l.x,{ref:o,mod:[{inline:m},v],...f("root"),...g})});u.classes=c,u.displayName="@mantine/core/Center"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=62727)}),_N_E=e.O()}]);