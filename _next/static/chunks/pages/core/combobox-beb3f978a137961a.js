(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{72580:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return t(82921)}])},82921:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return os}});var n=t(52322),r=t(45392),l=t(89237),a=t(2784),i=t(56237),s=t(61324),c=t(74770);let p=`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],m={type:"code",component:function(){let o=(0,i.K)(),[e,t]=(0,a.useState)(""),n=!u.some(o=>o===e),r=n?u.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):u,l=r.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},a.createElement(s.h.Target,null,a.createElement(c.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown(),o.updateSelectedOptionIndex()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,0===l.length?a.createElement(s.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:p};var d=t(28559),Text=t(8582),b=t(17115);let h=`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,x=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],C={type:"code",component:function(){let[o,e]=(0,a.useState)(null),t=(0,i.K)({onDropdownClose:()=>t.resetSelectedOption()}),n=x.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(a.Fragment,null,a.createElement(d.x,{mb:"xs"},a.createElement(Text.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),a.createElement(Text.x,{span:!0,size:"sm"},o||"Nothing selected")),a.createElement(s.h,{store:t,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{e(o),t.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(b.z,{onClick:()=>t.toggleDropdown()},"Pick item")),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:h};var g=t(83355),v=t(73063);let w=`
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,f=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],O={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(""),l=f.every(o=>o!==n),c=l?f.filter(o=>o.toLowerCase().includes(n.toLowerCase().trim())):f,p=c.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{store:o,onOptionSubmit:e=>{t(e),r(e),o.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(v.M,{rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>{o.closeDropdown(),r(e||"")},placeholder:"Search value",value:n,onChange:e=>{o.updateSelectedOptionIndex(),r(e.currentTarget.value)}})),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,p.length>0?p:a.createElement(s.h.Empty,null,"Nothing found"))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:w},E=`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,S=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],D={type:"code",component:function(){let[o,e]=(0,a.useState)(""),[t,n]=(0,a.useState)(null),r=(0,i.K)({onDropdownClose:()=>{r.resetSelectedOption(),r.focusTarget(),e("")},onDropdownOpen:()=>{r.focusSearchInput()}}),l=S.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(a.Fragment,null,a.createElement(d.x,{mb:"xs"},a.createElement(Text.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),a.createElement(Text.x,{span:!0,size:"sm"},t||"Nothing selected")),a.createElement(s.h,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{n(o),r.closeDropdown()}},a.createElement(s.h.Target,{withAriaAttributes:!1},a.createElement(b.z,{onClick:()=>r.toggleDropdown()},"Pick item")),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Search,{value:o,onChange:o=>e(o.currentTarget.value),placeholder:"Search groceries"}),a.createElement(s.h.Options,null,l.length>0?l:a.createElement(s.h.Empty,null,"Nothing found")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:E},F=`
import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],j={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(""),n=!y.some(o=>o===e),r=n?y.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):y,l=r.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return(0,a.useEffect)(()=>{o.selectFirstOption()},[e]),a.createElement(s.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},a.createElement(s.h.Target,null,a.createElement(c.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,0===l.length?a.createElement(s.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:F};var k=t(93010),B=t(40284),T=t(6941);let I=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === 'keyboard') {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex('active');
      }
    },
  });

  const [value, setValue] = useState<string | null>('\u{1F966} Broccoli');

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.updateSelectedOptionIndex('active');
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,P=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],A={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:e=>{"keyboard"===e?o.selectActiveOption():o.updateSelectedOptionIndex("active")}}),[e,t]=(0,a.useState)("\uD83E\uDD66 Broccoli"),n=P.map(o=>a.createElement(s.h.Option,{value:o,key:o,active:o===e},a.createElement(k.Z,{gap:"xs"},o===e&&a.createElement(B.n,{size:12}),a.createElement("span",null,o))));return a.createElement(s.h,{store:o,resetSelectionOnOptionHover:!0,onOptionSubmit:e=>{t(e),o.updateSelectedOptionIndex("active")}},a.createElement(s.h.Target,{targetType:"button"},a.createElement(v.M,{component:"button",type:"button",pointer:!0,rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||a.createElement(T.I.Placeholder,null,"Pick value"))),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:I},V=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="\u{1F34E} Apples">\u{1F34E} Apples</Combobox.Option>
            <Combobox.Option value="\u{1F34C} Bananas">\u{1F34C} Bananas</Combobox.Option>
            <Combobox.Option value="\u{1F347} Grape">\u{1F347} Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="\u{1F966} Broccoli">\u{1F966} Broccoli</Combobox.Option>
            <Combobox.Option value="\u{1F955} Carrots">\u{1F955} Carrots</Combobox.Option>
            <Combobox.Option value="\u{1F96C} Lettuce">\u{1F96C} Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,L={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(null);return a.createElement(s.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(v.M,{component:"button",type:"button",pointer:!0,rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||a.createElement(T.I.Placeholder,null,"Pick value"))),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,a.createElement(s.h.Group,{label:"Fruits"},a.createElement(s.h.Option,{value:"\uD83C\uDF4E Apples"},"\uD83C\uDF4E Apples"),a.createElement(s.h.Option,{value:"\uD83C\uDF4C Bananas"},"\uD83C\uDF4C Bananas"),a.createElement(s.h.Option,{value:"\uD83C\uDF47 Grape"},"\uD83C\uDF47 Grape")),a.createElement(s.h.Group,{label:"Vegetables"},a.createElement(s.h.Option,{value:"\uD83E\uDD66 Broccoli"},"\uD83E\uDD66 Broccoli"),a.createElement(s.h.Option,{value:"\uD83E\uDD55 Carrots"},"\uD83E\uDD55 Carrots"),a.createElement(s.h.Option,{value:"\uD83E\uDD6C Lettuce"},"\uD83E\uDD6C Lettuce")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:V},G=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,z=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],N={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(null),n=z.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(v.M,{component:"button",type:"button",pointer:!0,rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||a.createElement(T.I.Placeholder,null,"Pick value"))),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,{mah:200,style:{overflowY:"auto"}},n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:G};var M=t(40200);let R=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,K=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],H={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(null),n=K.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(v.M,{component:"button",type:"button",pointer:!0,rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||a.createElement(T.I.Placeholder,null,"Pick value"))),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,a.createElement(M.x.Autosize,{type:"scroll",mah:200},n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:R},Y=`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,W=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],_={type:"code",component:function(){let o=(0,i.K)(),[e,t]=(0,a.useState)(""),n=!W.some(o=>o===e),r=n?W.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):W,l=r.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},a.createElement(s.h.Target,null,a.createElement(c.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),a.createElement(s.h.Dropdown,{hidden:0===l.length},a.createElement(s.h.Options,null,l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:Y},U=`
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,q=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],Z={type:"code",component:function(){let[o,e]=(0,a.useState)(!1),t=(0,i.K)({opened:o}),n=q.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(a.Fragment,null,a.createElement(b.z,{mb:"md",onClick:()=>e(o=>!o)},"Toggle dropdown"),a.createElement(s.h,{store:t},a.createElement(s.h.Target,null,a.createElement(c.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,n))))},code:U,maxWidth:340,centered:!0,defaultExpanded:!1},X=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      position="bottom"
      middlewares={{ flip: false, shift: false }}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,$=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],J={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,a.useState)(null),n=$.map(o=>a.createElement(s.h.Option,{value:o,key:o},o));return a.createElement(s.h,{store:o,position:"bottom",middlewares:{flip:!1,shift:!1},onOptionSubmit:e=>{t(e),o.closeDropdown()}},a.createElement(s.h.Target,null,a.createElement(v.M,{component:"button",type:"button",pointer:!0,rightSection:a.createElement(s.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||a.createElement(T.I.Placeholder,null,"Pick value"))),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:X},Q=`
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
`,oo={type:"code",component:function(){let[o,e]=(0,a.useState)("");return a.createElement(s.h,{onOptionSubmit:e},a.createElement(s.h.EventsTarget,null,a.createElement(c.o,{placeholder:"Pick value",value:o,onChange:o=>e(o.currentTarget.value)})),a.createElement(s.h.Options,{mt:"sm"},a.createElement(s.h.Option,{value:"First"},"First"),a.createElement(s.h.Option,{value:"Second"},"Second"),a.createElement(s.h.Option,{value:"Third"},"Third")))},code:Q,centered:!0,maxWidth:340,defaultExpanded:!1};var oe=t(43814);let ot=`
import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}{{props}}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,on={type:"styles-api",data:oe.$,component:function(o){let e=(0,i.K)({opened:!0});return a.createElement(s.h,{store:e,...o,middlewares:{flip:!1,shift:!1}},a.createElement(s.h.Target,null,a.createElement(c.o,{placeholder:"Pick value"})),a.createElement(s.h.Dropdown,null,a.createElement(s.h.Header,null,"Combobox header"),a.createElement(s.h.Search,{placeholder:"Search input"}),a.createElement(s.h.Options,null,a.createElement(s.h.Group,{label:"First group"},a.createElement(s.h.Option,{value:"1"},"First"),a.createElement(s.h.Option,{value:"2"},"Second")),a.createElement(s.h.Group,{label:"Second group"},a.createElement(s.h.Option,{value:"3"},"Third"),a.createElement(s.h.Option,{value:"4"},"Fourth")),a.createElement(s.h.Group,{label:"Third group"},a.createElement(s.h.Empty,null,"Nothing found in this group..."))),a.createElement(s.h.Footer,null,"Combobox footer")))},code:ot};var or=t(79016),ol=t(33638);let oa=(0,or.A)(ol.us.Combobox);function oi(o){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...o.components},{Demo:t,ExamplesButton:a,StylesApiSelectors:i}=e;return t||oc("Demo",!0),a||oc("ExamplesButton",!0),i||oc("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(e.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,n.jsx)(e.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,n.jsx)(a,{link:"/combobox?e=BasicSelect",label:"Open Combobox examples page"}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control of the rendering and logic."]}),"\n",(0,n.jsx)(t,{data:l.Y}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"useCombobox"})," hook provides combobox store. The store contains the current state of the component\nand handlers to update it. Created store must be passed to the ",(0,n.jsx)(e.code,{children:"store"})," prop of ",(0,n.jsx)(e.code,{children:"Combobox"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can import ",(0,n.jsx)(e.code,{children:"UseComboboxOptions"})," type from ",(0,n.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(e.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,n.jsx)(e.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(\n    eventSource?: 'keyboard' | 'mouse' | 'unknown'\n  ): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can import ",(0,n.jsx)(e.code,{children:"ComboboxStore"})," type from ",(0,n.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,n.jsxs)(e.p,{children:["Combobox store handlers can be used to control ",(0,n.jsx)(e.code,{children:"Combobox"})," state.\nFor example, to open the dropdown, call ",(0,n.jsx)(e.code,{children:"openDropdown"})," handler:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Button, Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>\n          Open dropdown\n        </Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can use store handlers in ",(0,n.jsx)(e.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,n.jsx)(e.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,n.jsx)(e.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,n.jsx)(e.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,n.jsx)(e.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,n.jsx)(e.code,{children:"ref"})," and ",(0,n.jsx)(e.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,n.jsx)(e.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,n.jsx)(e.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(e.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,n.jsx)(t,{data:C}),"\n",(0,n.jsx)(e.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,n.jsxs)(e.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," to add ",(0,n.jsx)(e.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"})," to position the dropdown relative to the target."]}),"\n",(0,n.jsxs)(e.p,{children:["You can have as many ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,n.jsx)(e.code,{children:"Combobox"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," and ",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"})," with ",(0,n.jsx)(e.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create a searchable multiselect component:"]}),"\n",(0,n.jsx)(t,{data:g.R}),"\n",(0,n.jsx)(e.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," in ",(0,n.jsx)(e.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,n.jsx)(t,{data:O}),"\n",(0,n.jsx)(e.h2,{id:"search-input",children:"Search input"}),"\n",(0,n.jsxs)(e.p,{children:["If you prefer search input inside the dropdown, use ",(0,n.jsx)(e.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,n.jsx)(e.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,n.jsx)(e.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,n.jsx)(t,{data:D}),"\n",(0,n.jsx)(e.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"combobox.selectFirstOption"})," function to select the first option. It is useful\nif you want to select the first option when user searching for options in the list.\nIf there are no options available, it will do nothing."]}),"\n",(0,n.jsx)(t,{data:j}),"\n",(0,n.jsx)(e.h2,{id:"active-option",children:"Active option"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"active"})," prop on ",(0,n.jsx)(e.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, an active option does not have any styles, you can use ",(0,n.jsx)(e.code,{children:"data-combobox-active"}),"\n",(0,n.jsx)(e.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(e.h2,{id:"options-groups",children:"Options groups"}),"\n",(0,n.jsxs)(e.p,{children:["Render ",(0,n.jsx)(e.code,{children:"Combobox.Option"})," components inside ",(0,n.jsx)(e.code,{children:"Combobox.Group"})," to create options group.\n",(0,n.jsx)(e.code,{children:"Combobox.Group"})," label will be automatically hidden if the group does not have any\nchildren."]}),"\n",(0,n.jsx)(t,{data:L}),"\n",(0,n.jsx)(e.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"max-height"})," style on either ",(0,n.jsx)(e.code,{children:"Combobox.Dropdown"})," or ",(0,n.jsx)(e.code,{children:"Combobox.Options"})," to make the\noptions list scrollable. You can use ",(0,n.jsx)(e.code,{children:"mah"})," ",(0,n.jsx)(e.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,n.jsx)(e.code,{children:"max-height"}),"."]}),"\n",(0,n.jsx)(t,{data:N}),"\n",(0,n.jsx)(e.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,n.jsxs)(e.p,{children:["You can also use ",(0,n.jsx)(e.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,n.jsx)(t,{data:H}),"\n",(0,n.jsx)(e.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"hidden"})," prop on ",(0,n.jsx)(e.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,n.jsx)(t,{data:_}),"\n",(0,n.jsx)(e.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(e.p,{children:["To control the dropdown opened state, pass ",(0,n.jsx)(e.code,{children:"opened"})," to ",(0,n.jsx)(e.code,{children:"useCombobox"})," hook:"]}),"\n",(0,n.jsx)(t,{data:Z}),"\n",(0,n.jsx)(e.h2,{id:"popover-props",children:"Popover props"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox"})," supports most of ",(0,n.jsx)(e.a,{href:"/core/popover",children:"Popover"})," props. For example,\nyou can control dropdown position with ",(0,n.jsx)(e.code,{children:"position"})," prop and disable Floating UI\nmiddlewares with ",(0,n.jsx)(e.code,{children:"middlewares"})," prop:"]}),"\n",(0,n.jsx)(t,{data:J}),"\n",(0,n.jsx)(e.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,n.jsxs)(e.p,{children:["You can use ",(0,n.jsx)(e.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,n.jsx)(e.code,{children:"Combobox.Target"}),":"]}),"\n",(0,n.jsx)(t,{data:oo}),"\n",(0,n.jsx)(i,{component:"Combobox"}),"\n",(0,n.jsx)(t,{data:on})]})}function os(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(oa,{...o,children:(0,n.jsx)(oi,{...o})})}function oc(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},83355:function(o,e,t){"use strict";t.d(e,{R:function(){return m}});var n=t(2784),r=t(56237),l=t(45855),a=t(61324),i=t(93010),s=t(40284),c=t(92258);let p=`
import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],m={type:"code",component:function(){let o=(0,r.K)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:()=>o.updateSelectedOptionIndex("active")}),[e,t]=(0,n.useState)(""),[p,m]=(0,n.useState)([]),d=o=>m(e=>e.filter(e=>e!==o)),b=p.map(o=>n.createElement(l.D,{key:o,withRemoveButton:!0,onRemove:()=>d(o)},o)),h=u.filter(o=>o.toLowerCase().includes(e.trim().toLowerCase())).map(o=>n.createElement(a.h.Option,{value:o,key:o,active:p.includes(o)},n.createElement(i.Z,{gap:"sm"},p.includes(o)?n.createElement(s.n,{size:12}):null,n.createElement("span",null,o))));return n.createElement(a.h,{store:o,onOptionSubmit:o=>m(e=>e.includes(o)?e.filter(e=>e!==o):[...e,o])},n.createElement(a.h.DropdownTarget,null,n.createElement(c.d,{onClick:()=>o.openDropdown()},n.createElement(l.D.Group,null,b,n.createElement(a.h.EventsTarget,null,n.createElement(c.d.Field,{onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown(),value:e,placeholder:"Search values",onChange:e=>{o.updateSelectedOptionIndex(),t(e.currentTarget.value)},onKeyDown:o=>{"Backspace"===o.key&&0===e.length&&(o.preventDefault(),d(p[p.length-1]))}}))))),n.createElement(a.h.Dropdown,null,n.createElement(a.h.Options,null,h.length>0?h:n.createElement(a.h.Empty,null,"Nothing found..."))))},code:p,centered:!0,defaultExpanded:!1,maxWidth:340}},89237:function(o,e,t){"use strict";t.d(e,{Y:function(){return p}});var n=t(2784),r=t(56237),l=t(61324),a=t(73063),i=t(6941);let s=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],p={type:"code",component:function(){let o=(0,r.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,n.useState)(null),s=c.map(o=>n.createElement(l.h.Option,{value:o,key:o},o));return n.createElement(l.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},n.createElement(l.h.Target,null,n.createElement(a.M,{component:"button",type:"button",pointer:!0,rightSection:n.createElement(l.h.Chevron,null),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown()},e||n.createElement(i.I.Placeholder,null,"Pick value"))),n.createElement(l.h.Dropdown,null,n.createElement(l.h.Options,null,s)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:s}},45855:function(o,e,t){"use strict";t.d(e,{D:function(){return f}});var n=t(2784),r=t(91482),l=t(11200),a=t(38483),i=t(62378),s=t(28559),c=t(82027),p=t(2670),u=t(7450),m=t(75336);let[d,b]=(0,m.V)();var h={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let x={},C=(0,l.Z)((o,{gap:e},{size:t})=>({group:{"--pg-gap":void 0!==e?(0,r.ap)(e):(0,r.ap)(t,"pg-gap")}})),g=(0,c.d)((o,e)=>{let t=(0,a.w)("PillGroup",x,o),{classNames:r,className:l,style:c,styles:p,unstyled:m,vars:b,size:g,disabled:v,...w}=t,f=(0,u.D)(),O=f?.size||g||void 0,E=(0,i.y)({name:"PillGroup",classes:h,props:t,className:l,style:c,classNames:r,styles:p,unstyled:m,vars:b,varsResolver:C,stylesCtx:{size:O},rootSelector:"group"});return n.createElement(d,{value:{size:O,disabled:v}},n.createElement(s.x,{ref:e,size:O,...E("group"),...w}))});g.classes=h,g.displayName="@mantine/core/PillGroup";let v={variant:"default"},w=(0,l.Z)((o,{radius:e},{size:t})=>({root:{"--pill-fz":(0,r.ap)(t,"pill-fz"),"--pill-height":(0,r.ap)(t,"pill-height"),"--pill-radius":void 0===e?void 0:(0,r.H5)(e)}})),f=(0,c.d)((o,e)=>{let t=(0,a.w)("Pill",v,o),{classNames:r,className:l,style:c,styles:m,unstyled:d,vars:x,variant:C,children:g,withRemoveButton:f,onRemove:O,removeButtonProps:E,radius:S,size:D,disabled:F,mod:y,...j}=t,k=b(),B=(0,u.D)(),T=D||k?.size||void 0,I=B?.variant==="filled"?"contrast":C||"default",P=(0,i.y)({name:"Pill",classes:h,props:t,className:l,style:c,classNames:r,styles:m,unstyled:d,vars:x,varsResolver:w,stylesCtx:{size:T}});return n.createElement(s.x,{component:"span",ref:e,variant:I,size:T,...P("root",{variant:I}),mod:[{"with-remove":f,disabled:F||k?.disabled},y],...j},n.createElement("span",{...P("label")},g),f&&n.createElement(p.P,{variant:"transparent",radius:S,tabIndex:-1,"aria-hidden":!0,unstyled:d,...E,...P("remove",{className:E?.className,style:E?.style}),onMouseDown:o=>{o.preventDefault(),o.stopPropagation(),E?.onMouseDown?.(o)},onClick:o=>{o.stopPropagation(),O?.(),E?.onClick?.(o)}}))});f.classes=h,f.displayName="@mantine/core/Pill",f.Group=g},7450:function(o,e,t){"use strict";t.d(e,{D:function(){return l},H:function(){return r}}),t(2784);var n=t(75336);let[r,l]=(0,n.V)()},92258:function(o,e,t){"use strict";t.d(e,{d:function(){return x}});var n=t(2784),r=t(38483),l=t(82027),a=t(73063),i=t(7450),s=t(70837),c=t(62378),p=t(28559),u=t(69349),m={field:"m-45c4369d"};let d={type:"visible"},b=(0,l.d)((o,e)=>{let t=(0,r.w)("PillsInputField",d,o),{classNames:l,className:a,style:b,styles:h,unstyled:x,vars:C,type:g,disabled:v,id:w,pointer:f,mod:O,...E}=t,S=(0,i.D)(),D=(0,u.D)(),F=(0,c.y)({name:"PillsInputField",classes:m,props:t,className:a,style:b,classNames:l,styles:h,unstyled:x,rootSelector:"field"}),y=v||S?.disabled;return n.createElement(p.x,{component:"input",ref:(0,s.Yx)(e,S?.fieldRef),"data-type":g,disabled:y,mod:[{disabled:y,pointer:f},O],...F("field"),...E,id:D?.inputId||w,"aria-invalid":S?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:o=>!f&&o.stopPropagation()})});b.classes=m,b.displayName="@mantine/core/PillsInputField";let h={},x=(0,l.d)((o,e)=>{let t=(0,r.w)("PillsInput",h,o),{children:l,onMouseDown:s,onClick:c,size:p,disabled:u,__staticSelector:m,error:d,variant:b,...x}=t,C=(0,n.useRef)();return n.createElement(i.H,{value:{fieldRef:C,size:p,disabled:u,hasError:!!d,variant:b}},n.createElement(a.M,{size:p,error:d,variant:b,component:"div",ref:e,onMouseDown:o=>{o.preventDefault(),s?.(o),C.current?.focus()},onClick:o=>{o.preventDefault(),c?.(o),C.current?.focus()},...x,multiline:!0,disabled:u,__staticSelector:m||"PillsInput",withAria:!1},l))});x.displayName="@mantine/core/PillsInput",x.Field=b}},function(o){o.O(0,[57938,17454,47747,61324,49774,92888,40179],function(){return o(o.s=72580)}),_N_E=o.O()}]);