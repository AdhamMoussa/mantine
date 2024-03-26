(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12971],{82407:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-counter",function(){return t(75330)}])},75330:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(52322),o=t(45392),u=t(2784),Text=t(8582),i=t(93010),c=t(17115),s=t(43647);let m=`
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <Text>Count: {count}</Text>
      <Group justify="center">
        <Button onClick={handlers.increment}>Increment</Button>
        <Button onClick={handlers.decrement}>Decrement</Button>
        <Button onClick={handlers.reset}>Reset</Button>
        <Button onClick={() => handlers.set(5)}>Set 5</Button>
      </Group>
    </>
  );
}
`,l={type:"code",code:m,component:function(){let[e,n]=(0,s.C)(0,{min:0,max:10});return u.createElement(u.Fragment,null,u.createElement(Text.x,{size:"md",ta:"center",py:"xs"},"Count: ",e),u.createElement(i.Z,{justify:"center"},u.createElement(c.z,{size:"xs",onClick:n.increment},"Increment"),u.createElement(c.z,{size:"xs",onClick:n.decrement},"Decrement"),u.createElement(c.z,{size:"xs",onClick:n.reset},"Reset"),u.createElement(c.z,{size:"xs",onClick:()=>n.set(5)},"Set 5")))}};var a=t(79016),d=t(33638);let f=(0,a.A)(d.us.useCounter);function h(e){let n={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:l}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useCounter(\n  initialValue?: number,\n  options?: Partial<{\n    min: number;\n    max: number;\n  }>\n): [\n  number,\n  {\n    increment: () => void;\n    decrement: () => void;\n    set: (value: number) => void;\n    reset: () => void;\n  },\n];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(f,{...e,children:(0,r.jsx)(h,{...e})})}},43647:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(2784),o=t(82692);let u={min:-1/0,max:1/0};function i(e=0,n){let{min:t,max:i}={...u,...n},[c,s]=(0,r.useState)((0,o.u)(e,t,i));return[c,{increment:()=>s(e=>(0,o.u)(e+1,t,i)),decrement:()=>s(e=>(0,o.u)(e-1,t,i)),set:e=>s((0,o.u)(e,t,i)),reset:()=>s((0,o.u)(e,t,i))}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=82407)}),_N_E=e.O()}]);