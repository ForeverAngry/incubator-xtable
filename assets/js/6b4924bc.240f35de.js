"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[389],{5203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const i={sidebar_position:1,title:"Features and Limitations"},l="Features and Limitations",s={id:"features-and-limitations",title:"Features and Limitations",description:"Features",source:"@site/docs/features-and-limitations.md",sourceDirName:".",slug:"/features-and-limitations",permalink:"/docs/features-and-limitations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Features and Limitations"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/setup"},next:{title:"Creating your first interoperable table",permalink:"/docs/how-to"}},o={},u=[{value:"Features",id:"features",level:2},{value:"Limitations and Compatibility Notes",id:"limitations-and-compatibility-notes",level:2},{value:"General",id:"general",level:3},{value:"Hudi",id:"hudi",level:3},{value:"Delta",id:"delta",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"features-and-limitations",children:"Features and Limitations"}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(t.p,{children:"OneTable provides users with the ability to translate metadata from one table format to another."}),"\n",(0,a.jsx)(t.p,{children:'OneTable provides two sync modes, "incremental" and "full." The incremental mode is more lightweight and has better performance, especially on large tables. If there is anything that prevents the incremental mode from working properly, the tool will fall back to the full sync mode.'}),"\n",(0,a.jsx)(t.p,{children:"This sync provides users with the following:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Syncing of data files along with their column level statistics and partition metadata"}),"\n",(0,a.jsx)(t.li,{children:"Schema updates in the source are reflected in the target table metadata"}),"\n",(0,a.jsxs)(t.li,{children:["Metadata maintenance for the target table formats.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["For Hudi, unreferenced files will be marked as ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/hoodie_cleaner/",children:"cleaned"})," to control the size of the metadata table."]}),"\n",(0,a.jsxs)(t.li,{children:["For Iceberg, snapshots will be ",(0,a.jsx)(t.a,{href:"https://iceberg.apache.org/docs/latest/maintenance/#expire-snapshots",children:"expired"})," after a configured amount of time."]}),"\n",(0,a.jsxs)(t.li,{children:["For Delta, the transaction log will be ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/en/sql/language-manual/delta-vacuum.html",children:"retained"})," for a configured amount of time."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"limitations-and-compatibility-notes",children:"Limitations and Compatibility Notes"}),"\n",(0,a.jsx)(t.h3,{id:"general",children:"General"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Only Copy-on-Write or Read-Optimized views of tables are currently supported. This means that only the underlying parquet files are synced but log files from Hudi and ",(0,a.jsx)(t.a,{href:"https://docs.delta.io/latest/delta-deletion-vectors.html#:~:text=Deletion%20vectors%20indicate%20changes%20to,is%20run%20on%20the%20table.",children:"delete vectors"})," from Delta and Iceberg are not captured by the sync."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"hudi",children:"Hudi"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Hudi 0.14.0 is required when reading a Hudi target table. Users will also need to enable the metadata table (",(0,a.jsx)(t.code,{children:"hoodie.metadata.enable=true"}),") when reading the data."]}),"\n",(0,a.jsxs)(t.li,{children:["Be sure to enable ",(0,a.jsx)(t.code,{children:"parquet.avro.write-old-list-structure=false"})," for proper compatibility with lists when syncing from Hudi to Iceberg."]}),"\n",(0,a.jsxs)(t.li,{children:["When using Hudi as the source for an Iceberg target, you may require field IDs set in the parquet schema. To enable that, follow the instructions ",(0,a.jsx)(t.a,{href:"https://github.com/onetable-io/onetable/tree/main/hudi-support/extensions",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"delta",children:"Delta"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["When using Delta as the source for an Iceberg target, you may require field IDs set in the parquet schema. To enable that, follow the instructions for enabling column mapping ",(0,a.jsx)(t.a,{href:"https://docs.delta.io/latest/delta-column-mapping.html",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["When Delta is the source, Generated Columns are not synced to the target schema. For tables that are partitioned on Generated Columns, there is limited support. For example, we support date functions like transforming a timestamp to ",(0,a.jsx)(t.code,{children:"yyyy-MM-dd"})," format. Please file a GitHub issue or pull-request for any cases that you think should be supported."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(6010);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var a=n(7294);const r={},i=a.createContext(r);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);