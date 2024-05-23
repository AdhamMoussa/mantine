(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44076],{96166:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/nprogress",function(){return r(22775)}])},22775:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(52322),s=r(45392),o=r(93010),i=r(17115),a=r(2784),l=r(97263),c=r(71517),u=r(45757),p=r(82692),d=r(86769);function m(e){let t=.5;return e>=0&&e<=20?t=10:e>=20&&e<=50?t=4:e>=50&&e<=80?t=2:e>=80&&e<=99?t=1:e>=99&&e<=100&&(t=0),e+t}let g=()=>(0,d.M)({mounted:!1,progress:0,interval:0,step:1,stepInterval:100,timeouts:[]}),v=e=>(0,d.o)(e);function f(e,t){let r=t.getState();t.setState({...r,...e(t.getState())})}function h(e){f(e=>(window.clearInterval(e.interval),e.timeouts.forEach(e=>window.clearTimeout(e)),{timeouts:[]}),e)}function x(e){f(e=>(window.clearInterval(e.interval),{interval:-1}),e)}function j(e){h(e),x(e),f(()=>({progress:0,mounted:!1}),e)}let[w,P]=function(){let e=g();return[e,{start:()=>{f(e=>({progress:m(e.progress),mounted:!0}),e),f(t=>(window.clearInterval(t.interval),{interval:window.setInterval(()=>{f(e=>({progress:m(e.progress),mounted:!0}),e)},t.stepInterval),mounted:!0}),e)},stop:()=>x(e),reset:()=>j(e),set:t=>{f(()=>({progress:(0,p.u)(t,0,100),mounted:!0}),e)},increment:()=>{var t;f(e=>{let r=Math.min(e.progress+e.step,100),n=100!==r&&0!==r;if(!n){let s=window.setTimeout(()=>j(t),e.stepInterval+50);return{progress:r,mounted:n,timeouts:[...e.timeouts,s]}}return{progress:r,mounted:n}},t=e)},decrement:()=>{f(e=>({progress:Math.max(e.progress-e.step,0)}),e)},complete:()=>{h(e),f(t=>({progress:100,timeouts:[window.setTimeout(()=>{f(()=>({mounted:!1}),e)},50),window.setTimeout(()=>{f(()=>({progress:0}),e)},t.stepInterval+50)]}),e)},cleanup:()=>h(e)}]}(),{start:N,stop:_,reset:k,set:C,increment:y,decrement:b,complete:S,cleanup:B}=P;var I={root:"m_8f2832ae",section:"m_7a0fe999"};function z({initialProgress:e=0,color:t,size:r=3,stepInterval:s=500,withinPortal:o=!0,portalProps:i,zIndex:p=(0,l.w)("max"),store:d=w,...m}){d.initialize({mounted:!1,progress:e,interval:-1,step:1,stepInterval:s,timeouts:[]});let g=v(d);return(0,a.useEffect)(()=>()=>j(d),[d]),(0,n.jsx)(c.q,{...i,withinPortal:o,children:(0,n.jsx)(u.E,{radius:0,value:g.progress,size:r,color:t,classNames:I,"data-mounted":g.mounted||void 0,__vars:{"--nprogress-z-index":p?.toString()},...m})})}z.displayName="@mantine/nprogress/NavigationProgress";let E={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{}),(0,n.jsxs)(o.Z,{justify:"center",children:[(0,n.jsx)(i.z,{onClick:()=>P.start(),variant:"default",children:"Start"}),(0,n.jsx)(i.z,{onClick:()=>P.stop(),variant:"default",children:"Stop"}),(0,n.jsx)(i.z,{onClick:()=>P.increment(),variant:"default",children:"Increment"}),(0,n.jsx)(i.z,{onClick:()=>P.decrement(),variant:"default",children:"Decrement"}),(0,n.jsx)(i.z,{onClick:()=>P.set(50),variant:"default",children:"Set 50%"}),(0,n.jsx)(i.z,{onClick:()=>P.reset(),variant:"default",children:"Reset"}),(0,n.jsx)(i.z,{onClick:()=>P.complete(),variant:"default",children:"Complete"})]})]})},code:`
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
`};var R=r(25071),M=r(15019);let T=(0,R.A)(M.us.Nprogress);function D(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:r,InstallScript:o}=t;return r||G("Demo",!0),o||G("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(o,{packages:"@mantine/nprogress"}),"\n",(0,n.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/nprogress/styles.css';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"setup-navigationprogress",children:"Setup NavigationProgress"}),"\n",(0,n.jsxs)(t.p,{children:["Render ",(0,n.jsx)(t.code,{children:"NavigationProgress"})," anywhere in your app within ",(0,n.jsx)(t.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { NavigationProgress } from '@mantine/nprogress';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <NavigationProgress />\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:E})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(T,{...e,children:(0,n.jsx)(D,{...e})})}function G(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45757:function(e,t,r){"use strict";r.d(t,{E:function(){return y}});var n=r(52322);r(2784);var s=r(51477),o=r(38483),i=r(82027),a=r(28559);let[l,c]=(0,r(89106).R)("Progress.Root component was not found in tree");var u={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let p={},d=(0,i.d)((e,t)=>{let{classNames:r,className:s,style:i,styles:l,vars:u,...d}=(0,o.w)("ProgressLabel",p,e),m=c();return(0,n.jsx)(a.x,{ref:t,...m.getStyles("label",{className:s,style:i,classNames:r,styles:l}),...d})});d.classes=u,d.displayName="@mantine/core/ProgressLabel";var m=r(91482),g=r(11200),v=r(46690);let f={},h=(0,g.Z)((e,{size:t,radius:r,transitionDuration:n})=>({root:{"--progress-size":(0,m.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,m.H5)(r),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),x=(0,i.d)((e,t)=>{let r=(0,o.w)("ProgressRoot",f,e),{classNames:s,className:i,style:c,styles:p,unstyled:d,vars:m,autoContrast:g,transitionDuration:x,...j}=r,w=(0,v.y)({name:"Progress",classes:u,props:r,className:i,style:c,classNames:s,styles:p,unstyled:d,vars:m,varsResolver:h});return(0,n.jsx)(l,{value:{getStyles:w,autoContrast:g},children:(0,n.jsx)(a.x,{ref:t,...w("root"),...j})})});x.classes=u,x.displayName="@mantine/core/ProgressRoot";var j=r(13588),w=r(39568),P=r(90006),N=r(68755);let _={withAria:!0},k=(0,i.d)((e,t)=>{let{classNames:r,className:s,style:i,styles:l,vars:u,value:p,withAria:d,color:m,striped:g,animated:v,mod:f,...h}=(0,o.w)("ProgressSection",_,e),x=c(),k=(0,N.rZ)(),C=d?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,"aria-valuetext":`${p}%`}:{};return(0,n.jsx)(a.x,{ref:t,...x.getStyles("section",{className:s,classNames:r,styles:l,style:i}),...h,...C,mod:[{striped:g||v,animated:v},f],__vars:{"--progress-section-width":`${p}%`,"--progress-section-color":(0,j.p)(m,k),"--progress-label-color":(0,P.o)(x.autoContrast,k)?(0,w.R)({color:m,theme:k,autoContrast:x.autoContrast}):void 0}})});k.classes=u,k.displayName="@mantine/core/ProgressSection";let C={},y=(0,i.d)((e,t)=>{let r=(0,o.w)("Progress",C,e),{value:i,classNames:a,styles:l,vars:c,color:u,striped:p,animated:d,"aria-label":m,...g}=r,{resolvedClassNames:v,resolvedStyles:f}=(0,s.h)({classNames:a,styles:l,props:r});return(0,n.jsx)(x,{ref:t,classNames:v,styles:f,vars:c,...g,children:(0,n.jsx)(k,{value:i,color:u,striped:p,animated:d,"aria-label":m})})});y.classes=u,y.displayName="@mantine/core/Progress",y.Section=k,y.Root=x,y.Label=d}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=96166)}),_N_E=e.O()}]);