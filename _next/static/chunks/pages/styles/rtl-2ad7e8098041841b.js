(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33347],{61485:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/rtl",function(){return t(30226)}])},30226:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var i=t(52322),o=t(45392),r=t(2784),c=t(19297),l=t(14243),d=t(89027),s=t(54813);let a=`
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`,u={type:"code",component:function(){let{toggleDirection:e,dir:n,setDirection:t}=(0,d.gm)();return(0,r.useEffect)(()=>()=>t("ltr"),[]),r.createElement(s.A,{onClick:()=>e(),variant:"default",radius:"md",size:"lg"},"rtl"===n?r.createElement(c.Z,{stroke:1.5}):r.createElement(l.Z,{stroke:1.5}))},centered:!0,code:a},h=`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,p=`
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`,m={type:"code",component:function(){return r.createElement("div",{className:"m-7bd29d5a"},"Demo")},code:[{fileName:"Demo.module.css",code:p,language:"scss"},{fileName:"Demo.tsx",code:h,language:"tsx"}]};var x=t(79016),f=t(33638);let j=(0,x.A)(f.us.Rtl);function g(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"right-to-left-direction",children:"Right-to-left direction"}),"\n",(0,i.jsxs)(n.p,{children:["All Mantine components support right-to-left direction out of the box.\nYou can preview how components work with RTL direction by clicking direction control\nin the top right corner or pressing ",(0,i.jsx)(n.code,{children:"Ctrl + Shift + L"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"directionprovider",children:"DirectionProvider"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DirectionProvider"})," component is used to set direction for all components inside it.\nIt is required to wrap your application with ",(0,i.jsx)(n.code,{children:"DirectionProvider"})," if you are planning to\neither use RTL direction or change direction dynamically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DirectionProvider"})," supports the following props:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export interface DirectionProviderProps {\n  /** Your application */\n  children: React.ReactNode;\n\n  /** Direction set as a default value, `ltr` by default */\n  initialDirection?: Direction;\n\n  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element), `true` by default  */\n  detectDirection?: boolean;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Setup ",(0,i.jsx)(n.code,{children:"DirectionProvider"})," in your application:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { DirectionProvider, MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <DirectionProvider>\n      <MantineProvider>\n        <App />\n      </MantineProvider>\n    </DirectionProvider>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dir-attribute",children:"dir attribute"}),"\n",(0,i.jsxs)(n.p,{children:["It is required to set ",(0,i.jsx)(n.code,{children:"dir"})," attribute on the root element of your application, usually it is ",(0,i.jsx)(n.code,{children:"html"})," element.\n",(0,i.jsx)(n.code,{children:"DirectionProvider"})," will use its value to set direction on mount if ",(0,i.jsx)(n.code,{children:"detectDirection"})," prop is set to ",(0,i.jsx)(n.code,{children:"true"}),".\nNote that this guide does not cover setting ",(0,i.jsx)(n.code,{children:"dir"})," attribute for different frameworks – follow your framework\ndocumentation to learn how to do it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<!-- Set direction attribute on html element -->\n<html dir="rtl">\n  <head></head>\n  <body></body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"usedirection-hook",children:"useDirection hook"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useDirection"})," returns an object with the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dir"})," – current direction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setDirection"})," – function to set direction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"toggleDirection"})," – function to change direction to the opposite value"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can use it to create direction control in your application:"}),"\n",(0,i.jsx)(t,{data:u}),"\n",(0,i.jsx)(n.h2,{id:"rtl-mixin",children:"rtl mixin"}),"\n",(0,i.jsxs)(n.p,{children:["If you have ",(0,i.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," installed then you can use ",(0,i.jsx)(n.code,{children:"rtl"})," mixin in ",(0,i.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,i.jsx)(t,{data:m})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(j,{...e,children:(0,i.jsx)(g,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=61485)}),_N_E=e.O()}]);