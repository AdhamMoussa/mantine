(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17945],{35661:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},82408:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(99882).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},59937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(92641)}])},92641:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var o=n(52322),r=n(45392),i=n(10592),a=n(2784),l=n(17115);let d=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`,c={type:"code",component:function(){return a.createElement(l.z,{fullWidth:!0},"Full width button")},code:d};var s=n(82408),u=(0,n(99882).Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),m=n(4521),h=n(93010);let p=`
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`,f={type:"code",component:function(){return a.createElement(h.Z,{justify:"center"},a.createElement(l.z,{leftSection:a.createElement(s.Z,{size:14}),variant:"default"},"Gallery"),a.createElement(l.z,{rightSection:a.createElement(u,{size:14})},"Download"),a.createElement(l.z,{variant:"light",leftSection:a.createElement(s.Z,{size:14}),rightSection:a.createElement(m.Z,{size:14,className:"mantine-rotate-rtl"})},"Visit gallery"))},code:p},b={type:"configurator",component:function(e){let t=a.createElement(s.Z,{size:14});return a.createElement(a.Fragment,null,a.createElement(l.z,{fullWidth:!0,leftSection:t,rightSection:t,variant:"default",...e},"Button label"),a.createElement(l.z,{fullWidth:!0,leftSection:t,variant:"default",mt:"md",...e},"Button label"),a.createElement(l.z,{fullWidth:!0,rightSection:t,variant:"default",mt:"md",...e},"Button label"),a.createElement(l.z,{fullWidth:!0,rightSection:t,leftSection:a.createElement("span",null),variant:"default",mt:"md",...e},"Button label"))},code:e=>`
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="${e.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${e.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},g={type:"configurator",component:function(e){return a.createElement(h.Z,{justify:"center"},a.createElement(l.z,{size:e.size},"Regular ",e.size),a.createElement(l.z,{size:`compact-${e.size}`},"Compact ",e.size))},code:e=>`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]};var v=n(63048);let x={type:"configurator",component:function(e){return a.createElement(l.z,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient button")},code:e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`,centered:!0,controls:v.P},j=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`,y={type:"code",component:function(){return a.createElement(l.z,{disabled:!0},"Disabled button")},centered:!0,code:j},B=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`,w={type:"code",component:function(){return a.createElement(l.z,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled link")},centered:!0,code:B},z=`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,E=`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,D={type:"code",component:function(){return a.createElement(l.z,{className:"m_13d58bb2",disabled:!0},"Disabled with styles")},centered:!0,code:[{fileName:"Demo.module.css",code:E,language:"scss"},{fileName:"Demo.tsx",code:z,language:"tsx"}]};var k=n(893);let S=`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`,C={type:"code",component:function(){return a.createElement(k.u,{label:"Tooltip for disabled button"},a.createElement(l.z,{"data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled button with tooltip"))},centered:!0,code:S};var _=n(57914);let G=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`,T={type:"code",component:function(){return a.createElement(l.z,{loading:!0,loaderProps:{type:"dots"}},"Loading button")},centered:!0,code:G};var V=n(35661),P=n(58898),N=n(28621);let I=`
import { Button, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
`,R={type:"styles-api",data:N.B,component:function(e){return a.createElement(l.z,{leftSection:a.createElement(V.Z,{style:{width:(0,P.h)(16),height:(0,P.h)(16)}}),...e},"Your email")},code:I,centered:!0};var F=n(31408),M=n(60231),Z=n(68755);let L=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,A=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
    border-width: 0;
  }
}
`,$=(0,M.j)({components:{Button:l.z.extend({classNames:{root:"m_3abb4e8a"}})}}),W={type:"code",component:function(){return a.createElement(Z.M2,{theme:$},a.createElement(h.Z,null,a.createElement(l.z,{variant:"danger"},"Danger variant"),a.createElement(l.z,{variant:"primary"},"Primary variant")))},centered:!0,code:[{fileName:"Demo.tsx",code:L,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]};var O=n(2498);let Y=`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
`,q={type:"code",component:function(){return a.createElement(h.Z,null,a.createElement(l.z,{color:"lime.4"},"Default"),a.createElement(l.z,{color:"lime.4",autoContrast:!0},"Auto contrast"))},code:Y,centered:!0},H=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`,U={type:"configurator",component:function(e){return a.createElement(l.z.Group,{...e},a.createElement(l.z,{variant:"default"},"First"),a.createElement(l.z,{variant:"default"},"Second"),a.createElement(l.z,{variant:"default"},"Third"))},code:H,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var X=n(79016),J=n(33638);let K=(0,X.A)(J.us.Button);function Q(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{AutoContrast:n,Demo:a,GetElementRef:l,Gradient:d,Polymorphic:s,StylesApiSelectors:u}=t;return n||et("AutoContrast",!0),a||et("Demo",!0),l||et("GetElementRef",!0),d||et("Gradient",!0),s||et("Polymorphic",!0),u||et("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a,{data:i.g}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(a,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow adding icons or any other element to the left and right side of the button.\nWhen a section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change the alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:'justify="space-between"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(a,{data:b}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(a,{data:g}),"\n",(0,o.jsx)(d,{component:"Button"}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled, set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(a,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:D}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(a,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(a,{data:_.V}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(a,{data:T}),"\n",(0,o.jsx)(u,{component:"Button"}),"\n",(0,o.jsx)(a,{data:R}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(a,{data:F.C}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants, use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(a,{data:W}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(a,{data:O.D}),"\n",(0,o.jsx)(n,{component:"Button"}),"\n",(0,o.jsx)(a,{data:q}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(a,{data:U}),"\n",(0,o.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(s,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(l,{component:"Button",refType:"button"})]})}function ee(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(K,{...e,children:(0,o.jsx)(Q,{...e})})}function et(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},10592:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var o=n(2784),r=n(17115),i=n(50327);let a=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,l={type:"configurator",component:function(e){return o.createElement(r.z,{...e},"Button")},code:a,centered:!0,controls:[i.cH,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},57914:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var o=n(2784),r=n(93010),i=n(17115),a=n(950),l=n(3900);let d=`
import { Button, Group } from '@mantine/core';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`,c={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)();return o.createElement(o.Fragment,null,o.createElement(r.Z,null,o.createElement(i.z,{loading:e},"Filled button"),o.createElement(i.z,{variant:"light",loading:e},"Light button"),o.createElement(i.z,{variant:"outline",loading:e},"Outline button")),o.createElement(a.r,{checked:e,onChange:t,label:"Loading state",mt:"md"}))},centered:!0,code:d}},31408:function(e,t,n){"use strict";n.d(t,{C:function(){return m}});var o=n(2784),r=n(4521),i=n(17115),a=n(93010),l=n(58898),d={root:"m_8b35c16f",section:"m_27c75738"};let c=`
import { Button, ButtonProps, Group, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,s=`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: rem(4px);

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: rem(1px) solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: rem(1px) solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - rem(8px));

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`;function u(e){return o.createElement(i.z,{...e,radius:"md",classNames:d})}let m={type:"code",component:function(){return o.createElement(a.Z,null,o.createElement(u,{leftSection:"12",rightSection:o.createElement(r.Z,{style:{width:(0,l.h)(18)}})},"Send files"),o.createElement(u,{leftSection:"3",rightSection:o.createElement(r.Z,{style:{width:(0,l.h)(18)}}),disabled:!0},"Send files"))},centered:!0,code:[{fileName:"Demo.module.css",code:s,language:"scss"},{fileName:"Demo.tsx",code:c,language:"tsx"}]}},2498:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var o=n(2784),r=n(9197),i=n(46403),a=n(20754),l=n(58898),d=n(8943),c=n(68755),s=n(93010),u=n(17115);let m=`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`,h=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,l.h)(1)} solid ${n.value}`,color:(0,d._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},p={type:"code",component:function(){return o.createElement(c.M2,{theme:{variantColorResolver:h}},o.createElement(s.Z,null,o.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:m}},63048:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},50327:function(e,t,n){"use strict";n.d(t,{cH:function(){return o},d_:function(){return r}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var o=n(2784);function r(e=!1,t){let{onOpen:n,onClose:r}=t||{},[i,a]=(0,o.useState)(e),l=(0,o.useCallback)(()=>{a(e=>e||(n?.(),!0))},[n]),d=(0,o.useCallback)(()=>{a(e=>e?(r?.(),!1):e)},[r]),c=(0,o.useCallback)(()=>{i?d():l()},[d,l,i]);return[i,{open:l,close:d,toggle:c}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=59937)}),_N_E=e.O()}]);