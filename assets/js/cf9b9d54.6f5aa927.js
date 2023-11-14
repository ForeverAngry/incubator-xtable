"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[376],{1341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=i(5893),o=i(1151);const a={sidebar_position:4,title:"Google BigQuery"},n="Querying from Google BigQuery",s={id:"bigquery",title:"Google BigQuery",description:"Iceberg tables",source:"@site/docs/bigquery.md",sourceDirName:".",slug:"/bigquery",permalink:"/docs/bigquery",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Google BigQuery"},sidebar:"docs",previous:{title:"Apache Spark",permalink:"/docs/spark"},next:{title:"Presto",permalink:"/docs/presto"}},l={},d=[{value:"Iceberg tables",id:"iceberg-tables",level:3},{value:"Using Iceberg JSON metadata file to create the Iceberg BigLake tables:",id:"using-iceberg-json-metadata-file-to-create-the-iceberg-biglake-tables",level:4},{value:"Steps to add additional configurations to the Hudi writers:",id:"steps-to-add-additional-configurations-to-the-hudi-writers",level:4},{value:"Using BigLake Metastore to create the Iceberg BigLake tables:",id:"using-biglake-metastore-to-create-the-iceberg-biglake-tables",level:4},{value:"Hudi and Delta tables",id:"hudi-and-delta-tables",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"querying-from-google-bigquery",children:"Querying from Google BigQuery"}),"\n",(0,r.jsx)(t.h3,{id:"iceberg-tables",children:"Iceberg tables"}),"\n",(0,r.jsxs)(t.p,{children:["To read a OneTable synced ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/iceberg-tables",children:"Iceberg table from BigQuery"}),",\nyou have two options:"]}),"\n",(0,r.jsxs)(t.h4,{id:"using-iceberg-json-metadata-file-to-create-the-iceberg-biglake-tables",children:[(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-metadata-file",children:"Using Iceberg JSON metadata file to create the Iceberg BigLake tables"}),":"]}),"\n",(0,r.jsx)(t.p,{children:"OneTable outputs metadata files for Iceberg target format syncs which can be used by BigQuery\nto read the BigLake tables."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",metastring:'md title="sql"',children:"CREATE EXTERNAL TABLE onetable_synced_iceberg_table\nWITH CONNECTION `myproject.mylocation.myconnection`\nOPTIONS (\n     format = 'ICEBERG',\n     uris = [\"gs://mybucket/mydata/mytable/metadata/iceberg.metadata.json\"]\n )\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Note:",type:"danger",children:(0,r.jsxs)(t.p,{children:["This method requires you to manually update the latest metadata when there are table updates and hence ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-biglake-metastore",children:"Google\nrecommends using BigLake Metastore"}),"\nfor creating Iceberg BigLake tables. Follow the guide on ",(0,r.jsx)(t.a,{href:"/docs/biglake-metastore",children:"Syncing to BigLake Metastore"})," for the steps."]})}),"\n",(0,r.jsx)(t.admonition,{title:"Important: For Hudi source format to Iceberg target format use cases",type:"danger",children:(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The Hudi extensions provide the ability to add field IDs to the parquet schema when writing with Hudi.\nThis is a requirement for some engines, like BigQuery and Snowflake, when reading an Iceberg table.\nIf you are not planning on using Iceberg, then you do not need to add these to your Hudi writers."}),"\n",(0,r.jsx)(t.li,{children:"To avoid inserts going through row writer, we need to disable it manually. Support for row writer will be added soon."}),"\n"]})}),"\n",(0,r.jsx)(t.h4,{id:"steps-to-add-additional-configurations-to-the-hudi-writers",children:"Steps to add additional configurations to the Hudi writers:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add the extensions jar (",(0,r.jsx)(t.code,{children:"hudi-extensions-0.1.0-SNAPSHOT-bundled.jar"}),") to your class path",(0,r.jsx)(t.br,{}),"\n","For example, if you're using the Hudi ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/quick-start-guide#spark-shellsql",children:"quick-start guide"}),"\nfor spark you can just add ",(0,r.jsx)(t.code,{children:"--jars hudi-extensions-0.1.0-SNAPSHOT-bundled.jar"})," to the end of the command."]}),"\n",(0,r.jsxs)(t.li,{children:["Set the following configurations in your writer options:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'md title="shell"',children:"hoodie.avro.write.support.class: io.onetable.hudi.extensions.HoodieAvroWriteSupportWithFieldIds\nhoodie.client.init.callback.classes: io.onetable.hudi.extensions.AddFieldIdsClientInitCallback\nhoodie.datasource.write.row.writer.enable : false\n"})}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Run your existing code that use Hudi writers"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"using-biglake-metastore-to-create-the-iceberg-biglake-tables",children:[(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/iceberg-tables#create-using-biglake-metastore",children:"Using BigLake Metastore to create the Iceberg BigLake tables"}),":"]}),"\n",(0,r.jsx)(t.p,{children:"You can use two options to register OneTable synced Iceberg tables to BigLake Metastore:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["To directly register the OneTable synced Iceberg table to BigLake Metastore,\nfollow the ",(0,r.jsx)(t.a,{href:"/docs/biglake-metastore",children:"OneTable guide to integrate with BigLake Metastore"})]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/spark-procedures",children:"stored procedures for Spark"}),"\non BigQuery to register the table in BigLake Metastore and query the tables from BigQuery."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"hudi-and-delta-tables",children:"Hudi and Delta tables"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/query-open-table-format-using-manifest-files",children:"This document"}),"\nexplains how to query Hudi and Delta table formats through the use of manifest files."]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>n});var r=i(7294);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);