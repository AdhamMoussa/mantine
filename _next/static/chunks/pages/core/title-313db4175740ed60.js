(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1206],{48166:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/title",function(){return i(61017)}])},61017:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(52322),r=i(45392),o=i(89885),l=i(2784),s=i(94120);let a=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
    </>
  );
}
`,c={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(s.D,{order:3,size:"h1"},"H3 heading with h1 font-size"),l.createElement(s.D,{size:"h4"},"H1 heading with h4 font-size"),l.createElement(s.D,{size:"1rem"},"H1 heading with 1rem size"))},code:a};var d=i(22611),h=i(14296),u=i(79016),m=i(33638);let p=(0,u.A)(m.us.Title);function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Use Title component to render h1-h6 headings with Mantine ",(0,n.jsx)(t.a,{href:"/theming/theme-object",children:"theme"})," styles.\nBy default, ",(0,n.jsx)(t.code,{children:"Title"})," has no margins and paddings.\nYou can change ",(0,n.jsx)(t.code,{children:"font-size"}),", ",(0,n.jsx)(t.code,{children:"font-weight"})," and ",(0,n.jsx)(t.code,{children:"line-height"})," per heading with ",(0,n.jsx)(t.a,{href:"/theming/typography",children:"theme.headings"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"order"})," prop to render a specific element (h1-h6), default order is ",(0,n.jsx)(t.code,{children:"1"}),":"]}),"\n",(0,n.jsx)(i,{data:o.j}),"\n",(0,n.jsx)(t.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(t.p,{children:["You can change Title ",(0,n.jsx)(t.code,{children:"size"})," independent of its ",(0,n.jsx)(t.code,{children:"order"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you set size to ",(0,n.jsx)(t.code,{children:"h1"}),"-",(0,n.jsx)(t.code,{children:"h6"}),", then component will add corresponding ",(0,n.jsx)(t.code,{children:"font-size"})," and ",(0,n.jsx)(t.code,{children:"line-height"})," from the ",(0,n.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})]}),"\n",(0,n.jsxs)(t.li,{children:["If you set size to any other value, then ",(0,n.jsx)(t.code,{children:"line-height"})," will be calculated based on ",(0,n.jsx)(t.code,{children:"order"})," – ",(0,n.jsx)(t.code,{children:"size"})," will impact only ",(0,n.jsx)(t.code,{children:"font-size"})]}),"\n"]}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"text-wrap",children:"Text wrap"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"textWrap"})," prop to control ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,n.jsx)(i,{data:d.V}),"\n",(0,n.jsxs)(t.p,{children:["You can also set ",(0,n.jsx)(t.code,{children:"textWrap"})," on ",(0,n.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"lineClamp"})," prop to truncate text after specified number of lines:"]}),"\n",(0,n.jsx)(i,{data:h.S})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(x,{...e})})}},14296:function(e,t,i){"use strict";i.d(t,{S:function(){return s}});var n=i(2784),r=i(28559),o=i(94120);let l=`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,s={type:"configurator",component:function(e){return n.createElement(r.x,{maw:400},n.createElement(o.D,{order:2,...e},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"))},code:l,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]}},22611:function(e,t,i){"use strict";i.d(t,{V:function(){return l}});var n=i(2784),r=i(94120);let o=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,l={type:"configurator",component:function(e){return n.createElement(r.D,{order:3,...e},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!")},code:o,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},89885:function(e,t,i){"use strict";i.d(t,{j:function(){return l}});var n=i(2784),r=i(94120);let o=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,l={type:"code",code:o,component:function(){return n.createElement(n.Fragment,null,n.createElement(r.D,{order:1},"This is h1 title"),n.createElement(r.D,{order:2},"This is h2 title"),n.createElement(r.D,{order:3},"This is h3 title"),n.createElement(r.D,{order:4},"This is h4 title"),n.createElement(r.D,{order:5},"This is h5 title"),n.createElement(r.D,{order:6},"This is h6 title"))}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=48166)}),_N_E=e.O()}]);