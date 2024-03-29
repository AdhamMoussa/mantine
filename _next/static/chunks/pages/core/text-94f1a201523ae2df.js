(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17014],{78484:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/text",function(){return n(90895)}])},90895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(52322),r=n(45392),a=n(2784),Text=n(8582);let o=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`,l={type:"code",code:o,component:function(){return a.createElement(a.Fragment,null,a.createElement(Text.x,{size:"xs"},"Extra small text"),a.createElement(Text.x,{size:"sm"},"Small text"),a.createElement(Text.x,{size:"md"},"Default text"),a.createElement(Text.x,{size:"lg"},"Large text"),a.createElement(Text.x,{size:"xl"},"Extra large text"),a.createElement(Text.x,{fw:500},"Semibold"),a.createElement(Text.x,{fw:700},"Bold"),a.createElement(Text.x,{fs:"italic"},"Italic"),a.createElement(Text.x,{td:"underline"},"Underlined"),a.createElement(Text.x,{td:"line-through"},"Strikethrough"),a.createElement(Text.x,{c:"dimmed"},"Dimmed text"),a.createElement(Text.x,{c:"blue"},"Blue text"),a.createElement(Text.x,{c:"teal.4"},"Teal 4 text"),a.createElement(Text.x,{tt:"uppercase"},"Uppercase"),a.createElement(Text.x,{tt:"capitalize"},"capitalized text"),a.createElement(Text.x,{ta:"center"},"Aligned to center"),a.createElement(Text.x,{ta:"right"},"Aligned to right"))}};var s=n(63048);let c={type:"configurator",component:function(e){return a.createElement(Text.x,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient Text")},code:e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`,centered:!0,controls:s.P};var p=n(28559);let m=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`,u={type:"configurator",component:function(e){return a.createElement(p.x,{w:300},a.createElement(Text.x,{...e},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"))},code:m,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},d=`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,x={type:"configurator",component:function(e){return a.createElement(p.x,{maw:400,mx:"auto"},a.createElement(Text.x,{...e},"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."))},code:d,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var h=n(27072);let T=`
import { TypographyStylesProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
`,g={type:"code",code:T,component:function(){return a.createElement(Text.x,{lineClamp:3,component:"div"},a.createElement(h.l,null,a.createElement("h3",{style:{marginTop:0}},"Line clamp with TypographyStylesProvider"),a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.")))}};var f=n(94120);let y=`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`,b={type:"code",component:function(){return a.createElement(f.D,{order:3},"Title in which you want to"," ",a.createElement(Text.x,{span:!0,c:"blue",inherit:!0},"highlight")," ","something")},code:y};var w=n(79016),E=n(33638);let v=(0,w.A)(E.us.Text);function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n,Gradient:a,Polymorphic:o}=t;return n||S("Demo",!0),a||S("Gradient",!0),o||S("Polymorphic",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n,{data:l}),"\n",(0,i.jsx)(a,{component:"Text"}),"\n",(0,i.jsx)(n,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"truncate",children:"Truncate"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"truncate"})," prop to add ",(0,i.jsx)(t.code,{children:"text-overflow: ellipsis"})," styles:"]}),"\n",(0,i.jsx)(n,{data:u}),"\n",(0,i.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,i.jsxs)(t.p,{children:["Specify maximum number of lines with ",(0,i.jsx)(t.code,{children:"lineClamp"})," prop. This option uses ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp",children:"-webkit-line-clamp"}),"\nCSS property (",(0,i.jsx)(t.a,{href:"https://caniuse.com/css-line-clamp",children:"caniuse"}),"). Note that ",(0,i.jsx)(t.code,{children:"padding-bottom"})," cannot be set on text element:"]}),"\n",(0,i.jsx)(n,{data:x}),"\n",(0,i.jsxs)(t.p,{children:["Line clamp can also be used with any children (not only strings), for example with ",(0,i.jsx)(t.a,{href:"/core/typography-styles-provider/",children:"TypographyStylesProvider"}),":"]}),"\n",(0,i.jsx)(n,{data:g}),"\n",(0,i.jsx)(t.h2,{id:"inherit-styles",children:"Inherit styles"}),"\n",(0,i.jsxs)(t.p,{children:["Text always applies font-size, font-family and line-height styles,\nbut in some cases this is not a desired behavior. To force Text to inherit parent\nstyles set ",(0,i.jsx)(t.code,{children:"inherit"})," prop. For example, highlight part of ",(0,i.jsx)(t.a,{href:"/core/title/",children:"Title"}),":"]}),"\n",(0,i.jsx)(n,{data:b}),"\n",(0,i.jsx)(o,{defaultElement:"p",changeToElement:"a",component:"Text"}),"\n",(0,i.jsx)(t.h2,{id:"span-prop",children:"span prop"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"span"})," prop as a shorthand for ",(0,i.jsx)(t.code,{children:'component="span"'}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Text span>Same as below</Text>\n      <Text component=\"span\">Same as above</Text>\n    </>\n  );\n}\n"})})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(v,{...e,children:(0,i.jsx)(j,{...e})})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63048:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});let i=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},27072:function(e,t,n){"use strict";n.d(t,{l:function(){return p}});var i=n(2784),r=n(38483),a=n(62378),o=n(28559),l=n(82027),s={root:"m_d6493fad"};let c={},p=(0,l.d)((e,t)=>{let n=(0,r.w)("TypographyStylesProvider",c,e),{classNames:l,className:p,style:m,styles:u,unstyled:d,...x}=n,h=(0,a.y)({name:"TypographyStylesProvider",classes:s,props:n,className:p,style:m,classNames:l,styles:u,unstyled:d});return i.createElement(o.x,{ref:t,...h("root"),...x})});p.classes=s,p.displayName="@mantine/core/TypographyStylesProvider"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=78484)}),_N_E=e.O()}]);