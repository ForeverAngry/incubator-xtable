"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[439],{9856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(5893),r=a(1151);const o={sidebar_position:6,title:"Snowflake"},s="Querying from Snowflake",l={id:"snowflake",title:"Snowflake",description:"Currently, Snowflake supports Iceberg tables through External Tables",source:"@site/docs/snowflake.md",sourceDirName:".",slug:"/snowflake",permalink:"/docs/snowflake",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Snowflake"},sidebar:"docs",previous:{title:"Presto",permalink:"/docs/presto"},next:{title:"Trino",permalink:"/docs/trino"}},i={},c=[{value:"Steps:",id:"steps",level:2},{value:"Create an external volume",id:"create-an-external-volume",level:3},{value:"Create a catalog integration for Iceberg files in object storage",id:"create-a-catalog-integration-for-iceberg-files-in-object-storage",level:3},{value:"Create an Iceberg table from Iceberg metadata in object storage",id:"create-an-iceberg-table-from-iceberg-metadata-in-object-storage",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"querying-from-snowflake",children:"Querying from Snowflake"}),"\n",(0,n.jsxs)(t.p,{children:["Currently, Snowflake supports ",(0,n.jsx)(t.a,{href:"https://www.snowflake.com/blog/expanding-the-data-cloud-with-apache-iceberg/",children:"Iceberg tables through External Tables"}),"\nand also ",(0,n.jsx)(t.a,{href:"https://www.snowflake.com/blog/iceberg-tables-powering-open-standards-with-snowflake-innovations/",children:"Native Iceberg Tables"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"LIMITATION:",type:"danger",children:(0,n.jsxs)(t.p,{children:["Iceberg on Snowflake is currently supported in\n",(0,n.jsx)(t.a,{href:"https://www.snowflake.com/guides/what-are-apache-iceberg-tables/#:~:text=Apache%20Iceberg%20is%20currently%20supported,with%20customer%2Dmanaged%20cloud%20storage",children:"private preview"})]})}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps:"}),"\n",(0,n.jsxs)(t.p,{children:["These are high level steps to help you integrate OneTable synced Iceberg tables on Snowflake. For more additional information\nrefer to the ",(0,n.jsx)(t.a,{href:"https://docs.snowflake.com/LIMITEDACCESS/iceberg-2023/tables-iceberg-getting-started",children:"Getting started with Iceberg tables"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"create-an-external-volume",children:"Create an external volume"}),"\n",(0,n.jsxs)(t.p,{children:["Iceberg tables on Snowflake uses user-supplied storage. The first step to create an Iceberg table is by ",(0,n.jsx)(t.a,{href:"https://docs.snowflake.com/LIMITEDACCESS/iceberg-2023/tables-external-volume-s3#step-4-creating-an-external-volume-in-snowflake",children:"creating an\nexternal volume in Snowflake"}),"\nto hold the Iceberg table data and metadata"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"-- Create an External Volume to hold Parquet and Iceberg data\nCREATE OR REPLACE EXTERNAL VOLUME <volume_name>\nSTORAGE_LOCATIONS = \n(\n  (\n    NAME = <'my-s3-us-west-2'>\n    STORAGE_PROVIDER = 'S3'\n    STORAGE_BASE_URL = 's3://<bucket_name>/'\n    STORAGE_AWS_ROLE_ARN = 'arn:aws:iam::<accountId>:role/<roleName>'\n  )\n);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-catalog-integration-for-iceberg-files-in-object-storage",children:"Create a catalog integration for Iceberg files in object storage"}),"\n",(0,n.jsxs)(t.p,{children:["You can skip this step if you are using Snowflake as the catalog.\nYou can also use ",(0,n.jsx)(t.a,{href:"https://docs.snowflake.com/LIMITEDACCESS/iceberg-2023/create-catalog-integration#examples",children:"AWS Glue as the catalog source"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"CREATE OR REPLACE CATALOG INTEGRATION <catalog_name>\nCATALOG_SOURCE=OBJECT_STORE\nTABLE_FORMAT=ICEBERG\nENABLED=TRUE;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-an-iceberg-table-from-iceberg-metadata-in-object-storage",children:"Create an Iceberg table from Iceberg metadata in object storage"}),"\n",(0,n.jsxs)(t.p,{children:["Refer to additional ",(0,n.jsx)(t.a,{href:"https://docs.snowflake.com/LIMITEDACCESS/iceberg-2023/create-iceberg-table#examples",children:"examples"}),"\nin the Snowflake Create Iceberg Table guide for more information."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"CREATE ICEBERG TABLE myIcebergTable\nEXTERNAL_VOLUME='<volume_name>'\nCATALOG=<catalog_name>\nMETADATA_FILE_PATH='path/to/metadata/<VERSION>.metadata.json';\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once the table creation succeeds you can start using the Iceberg table as any other table in Snowflake."})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var n=a(7294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);