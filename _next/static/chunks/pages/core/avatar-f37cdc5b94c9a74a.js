(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97966],{51417:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var r=(0,a(99882).Z)("star","IconStar",[["path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",key:"svg-0"}]])},97249:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/avatar",function(){return a(44017)}])},44017:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var r=a(52322),n=a(45392),o=a(2784),i=a(51417),l=a(93010),c=a(47100);let s=`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`,u={type:"code",code:s,component:function(){return o.createElement(l.Z,{justify:"center"},o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"}),o.createElement(c.q,{radius:"xl"}),o.createElement(c.q,{color:"cyan",radius:"xl"},"MK"),o.createElement(c.q,{color:"blue",radius:"sm"},o.createElement(i.Z,{size:"1.5rem"})))}},m=`
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

`,d={type:"code",code:m,component:function(){return o.createElement(l.Z,{justify:"center"},o.createElement(c.q,{src:null,alt:"no image here"}),o.createElement(c.q,{src:null,alt:"no image here",color:"indigo"}),o.createElement(c.q,{src:null,alt:"no image here",color:"red"},"VR"),o.createElement(c.q,{color:"blue",radius:"xl"},o.createElement(i.Z,{size:"1.5rem"})))}};var p=a(50327);let v=`
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`,h={type:"configurator",component:c.q,centered:!0,code:v,controls:[p.d_,{prop:"radius",type:"size",initialValue:"sm",libraryValue:"100%"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"gray",libraryValue:"gray"},{prop:"src",type:"string",initialValue:"",libraryValue:null}]},g=`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
`,f={type:"code",centered:!0,code:g,component:function(){return o.createElement(c.q.Group,null,o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"}),o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}),o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"}),o.createElement(c.q,null,"+5"))}};var A=a(893);let x=`
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`,b={type:"code",centered:!0,code:x,component:function(){return o.createElement(A.u.Group,{openDelay:300,closeDelay:100},o.createElement(c.q.Group,{spacing:"sm"},o.createElement(A.u,{label:"Salazar Troop",withArrow:!0},o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",radius:"xl"})),o.createElement(A.u,{label:"Bandit Crimes",withArrow:!0},o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",radius:"xl"})),o.createElement(A.u,{label:"Jane Rata",withArrow:!0},o.createElement(c.q,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",radius:"xl"})),o.createElement(A.u,{withArrow:!0,label:o.createElement(o.Fragment,null,o.createElement("div",null,"John Outcast"),o.createElement("div",null,"Levi Capitan"))},o.createElement(c.q,{radius:"xl"},"+2"))))}},w=`
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`,E={type:"code",centered:!0,code:w,component:function(){return o.createElement(c.q,{component:"a",href:"https://github.com/rtivital",target:"_blank",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",alt:"it's me"})}};var y=a(79016),j=a(33638);let C=(0,y.A)(j.us.Avatar);function _(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Demo:a,Polymorphic:o}=t;return a||T("Demo",!0),o||T("Polymorphic",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,r.jsxs)(t.p,{children:["If the image cannot be loaded or not provided, ",(0,r.jsx)(t.code,{children:"Avatar"})," will display a placeholder instead. By default,\nplaceholder is an icon, but it can be changed to any React node:"]}),"\n",(0,r.jsx)(a,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(a,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"avatargroup",children:"Avatar.Group"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Avatar.Group"})," component combines multiple avatars into a stack:"]}),"\n",(0,r.jsx)(a,{data:f}),"\n",(0,r.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,r.jsx)(t.code,{children:"Avatar"})," components with any additional elements,\nbut you can use wrap ",(0,r.jsx)(t.code,{children:"Avatar"})," with components that do not render any HTML elements\nin the current tree, for example ",(0,r.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <Avatar.Group spacing="sm">\n      <div>\n        <Avatar src="image.png" radius="xl" />\n      </div>\n      <Avatar src="image.png" radius="xl" />\n      <Avatar src="image.png" radius="xl" />\n      <Avatar radius="xl">+5</Avatar>\n    </Avatar.Group>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Example of usage with ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"}),":"]}),"\n",(0,r.jsx)(a,{data:b}),"\n",(0,r.jsx)(o,{defaultElement:"div",changeToElement:"button",component:"Avatar",withNext:!0}),"\n",(0,r.jsx)(a,{data:E}),"\n",(0,r.jsxs)(t.p,{children:["You can combine it with ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," or ",(0,r.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," to show additional information on hover"]}),"\n",(0,r.jsx)(a,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["Avatar renders ",(0,r.jsx)(t.code,{children:"<img />"})," HTML element. Set ",(0,r.jsx)(t.code,{children:"alt"})," prop to describe image,\nit is also used as ",(0,r.jsx)(t.code,{children:"title"})," attribute for avatar placeholder when the image cannot be loaded."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Avatar } from \'@mantine/core\';\n\nfunction NotOk() {\n  // Not ok, no alt for image\n  return <Avatar src="./image.png" />;\n}\n\nfunction Ok() {\n  // Ok, alt is set on <img /> tag\n  return <Avatar src="./image.png" alt="Rob Johnson" />;\n}\n\nfunction Ehh() {\n  // Ehh, title is not required, but still recommended\n  return <Avatar>RJ</Avatar>;\n}\n\nfunction OkPlaceholder() {\n  // Ok, title is set on placeholder\n  return <Avatar alt="Rob Johnson">RJ</Avatar>;\n}\n'})})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(C,{...e,children:(0,r.jsx)(_,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50327:function(e,t,a){"use strict";a.d(t,{cH:function(){return r},d_:function(){return n}});let r={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},n={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},47100:function(e,t,a){"use strict";a.d(t,{q:function(){return b}});var r=a(2784),n=a(91482),o=a(11200),i=a(38483),l=a(62378),c=a(28559),s=a(33502),u=a(82027);let m=(0,r.createContext)(null),d=m.Provider;var p={group:"m-11def92b",root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f"};let v={},h=(0,o.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,n.bG)(t)}})),g=(0,u.d)((e,t)=>{let a=(0,i.w)("AvatarGroup",v,e),{classNames:n,className:o,style:s,styles:u,unstyled:m,vars:g,spacing:f,...A}=a,x=(0,l.y)({name:"AvatarGroup",classes:p,props:a,className:o,style:s,classNames:n,styles:u,unstyled:m,vars:g,varsResolver:h,rootSelector:"group"});return r.createElement(d,{value:!0},r.createElement(c.x,{ref:t,...x("group"),...A}))});function f(e){return r.createElement("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}g.classes=p,g.displayName="@mantine/core/AvatarGroup";let A={},x=(0,o.Z)((e,{size:t,radius:a,variant:r,gradient:o,color:i,autoContrast:l})=>{let c=e.variantColorResolver({color:i||"gray",theme:e,gradient:o,variant:r||"light",autoContrast:l});return{root:{"--avatar-size":(0,n.ap)(t,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,n.H5)(a),"--avatar-bg":i||r?c.background:void 0,"--avatar-color":i||r?c.color:void 0,"--avatar-bd":i||r?c.border:void 0}}}),b=(0,s.b)((e,t)=>{let a=(0,i.w)("Avatar",A,e),{classNames:n,className:o,style:s,styles:u,unstyled:d,vars:v,src:h,alt:g,radius:b,color:w,gradient:E,imageProps:y,children:j,autoContrast:C,mod:_,...q}=a,T=function(){let e=(0,r.useContext)(m);return{withinGroup:!!e}}(),[G,k]=(0,r.useState)(!h),V=(0,l.y)({name:"Avatar",props:a,classes:p,className:o,style:s,classNames:n,styles:u,unstyled:d,vars:v,varsResolver:x});return(0,r.useEffect)(()=>k(!h),[h]),r.createElement(c.x,{...V("root"),mod:[{"within-group":T.withinGroup},_],ref:t,...q},G?r.createElement("span",{...V("placeholder"),title:g},j||r.createElement(f,null)):r.createElement("img",{...y,...V("image"),src:h,alt:g,onError:e=>{k(!0),y?.onError?.(e)}}))});b.classes=p,b.displayName="@mantine/core/Avatar",b.Group=g}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=97249)}),_N_E=e.O()}]);