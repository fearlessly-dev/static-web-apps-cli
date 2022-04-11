"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[506],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=n,b=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5151:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"welcome",title:"Hello Static Web Apps CLI!",authors:["manekinekko","anthonychu"],tags:["static-web-apps","devtools","swa-cli"]},l=void 0,p={permalink:"/static-web-apps-cli/blog/welcome",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/blog/2022-04-05-welcome.md",source:"@site/blog/2022-04-05-welcome.md",title:"Hello Static Web Apps CLI!",description:"Welcome to the Static Web Apps CLI blog. We'll use this blog to share usage tips, best practices and release announcements as the project evolves.",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"static-web-apps",permalink:"/static-web-apps-cli/blog/tags/static-web-apps"},{label:"devtools",permalink:"/static-web-apps-cli/blog/tags/devtools"},{label:"swa-cli",permalink:"/static-web-apps-cli/blog/tags/swa-cli"}],readingTime:1.385,truncated:!1,authors:[{name:"Wassim Chegham",title:"Senior Cloud Advocate, MSFT",url:"https://wassim.dev",imageURL:"https://github.com/manekinekko.png",key:"manekinekko"},{name:"Anthony Chu",title:"Senior Program Manager @Microsoft",url:"https://anthonychu.ca",imageURL:"https://github.com/anthonychu.png",key:"anthonychu"}],frontMatter:{slug:"welcome",title:"Hello Static Web Apps CLI!",authors:["manekinekko","anthonychu"],tags:["static-web-apps","devtools","swa-cli"]}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"What is the SWA CLI?",id:"what-is-the-swa-cli",level:2},{value:"Project History",id:"project-history",level:2},{value:"Thank you!",id:"thank-you",level:2}],h={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Static Web Apps CLI blog. We'll use this blog to share usage tips, best practices and release announcements as the project evolves."),(0,o.kt)("h2",{id:"what-is-the-swa-cli"},"What is the SWA CLI?"),(0,o.kt)("p",null,"The Static Web Apps CLI, also known as SWA CLI, serves as a local development tool for Azure Static Web Apps. It can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Serve static app assets, or proxy to your app dev server"),(0,o.kt)("li",{parentName:"ul"},"Serve API requests, or proxy to APIs running in Azure Functions Core Tools"),(0,o.kt)("li",{parentName:"ul"},"Emulate authentication and authorization"),(0,o.kt)("li",{parentName:"ul"},"Emulate Static Web Apps configuration, including routing")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Static Web Apps CLI Architecture",src:r(9570).Z,width:"1000",height:"654"})),(0,o.kt)("p",null,"The Static Web Apps CLI is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli"},"open-source")," project currently ",(0,o.kt)("em",{parentName:"p"},"in preview"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli"},"the repo")," and explore the source"),(0,o.kt)("li",{parentName:"ul"},"Learn how  ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli#want-to-help-"},"you can contribute")," to its growth."),(0,o.kt)("li",{parentName:"ul"},"View ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli/releases"},"release notes")," for past and present releases."),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli#quickstart"},"quickstart")," to try it out. ")),(0,o.kt)("h2",{id:"project-history"},"Project History"),(0,o.kt)("p",null,"We released the first version (v0.5) of the Static Web Apps CLI in Jun 2021 - see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli/releases/tag/v0.5.0"},"release notes")," to learn more about the initial set of features supported in the tool."),(0,o.kt)("p",null,"Since then, the project has grown to support richer local development and automation support, simplifying the developer experience and workflow for Static Web Apps."),(0,o.kt)("p",null,"The most recent version is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli#quickstart"},"pre-release v0.8.3")," published in Mar 2022. Subscribe to ",(0,o.kt)("a",{parentName:"p",href:"/blog/rss.xml"},"this blog feed")," to be notified of new release announcements, usage tips and more."),(0,o.kt)("h2",{id:"thank-you"},"Thank you!"),(0,o.kt)("p",null,"This is a labor of love from numerous teams within Microsoft Developer Relations, Product Groups and Community. We value your support and feedback!"),(0,o.kt)("p",null,"Have a question, bug report, or feature request? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli/issues/new/choose"},"Drop us an issue")," and help make this tool better for everyone."))}m.isMDXComponent=!0},9570:function(e,t,r){t.Z=r.p+"assets/images/swa-cli-arch-ccaf1b58acff282d6d98ef5df5b5d609.png"}}]);