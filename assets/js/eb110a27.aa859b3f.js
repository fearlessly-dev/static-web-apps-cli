"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[796],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},c="SWA CLI Config File",l={unversionedId:"releases/0.8.3/config/swa-cli-config",id:"releases/0.8.3/config/swa-cli-config",title:"SWA CLI Config File",description:"Usage",source:"@site/docs/releases/0.8.3/04-config/03-swa-cli-config.md",sourceDirName:"releases/0.8.3/04-config",slug:"/releases/0.8.3/config/swa-cli-config",permalink:"/static-web-apps-cli/docs/releases/0.8.3/config/swa-cli-config",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/releases/0.8.3/04-config/03-swa-cli-config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration Overrides",permalink:"/static-web-apps-cli/docs/releases/0.8.3/config/overrides"},next:{title:"Local Auth Emulation",permalink:"/static-web-apps-cli/docs/releases/0.8.3/config/auth-emulation"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Validation",id:"validation",level:2}],f={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swa-cli-config-file"},"SWA CLI Config File"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The CLI can also load options from a ",(0,o.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configurations": {\n    "app": {\n      "context": "http://localhost:3000",\n      "apiLocation": "api",\n      "run": "npm run start",\n      "swaConfigLocation": "./my-app-source"\n    }\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If only a single configuration is present in the ",(0,o.kt)("inlineCode",{parentName:"li"},"swa-cli.config.json")," file, running ",(0,o.kt)("inlineCode",{parentName:"li"},"swa start")," will use it by default."),(0,o.kt)("li",{parentName:"ul"},"If options are loaded from a config file, no options passed in via command line will be respected. For example ",(0,o.kt)("inlineCode",{parentName:"li"},"swa start app --ssl=true"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"--ssl=true")," option will not be picked up by the CLI.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Suppose you have these two frequently-used commands that you use for configuring your SWA in static (standalone) or devserver (with front-end dev server) modes respectively"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# static configuration\nswa start ./my-dist --swa-config-location ./my-app-source\n\n# devserver configuration\nswa start http://localhost:3000 --swa-config-location ./my-app-source\n")),(0,o.kt)("p",null,"We can simplify these commands by putting the options into a config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configurations": {\n    "static": {\n      "context": "./my-dist",\n      "swaConfigLocation": "./my-app-source"\n    },\n    "devserver": {\n      "context": "http://localhost:3000",\n      "swaConfigLocation": "./my-app-source"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Now, the above commands get simplified as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# static configuration\nswa start static\n\n# devserver configuration\nswa start devserver\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("p",null,"You can validate your ",(0,o.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," with a JSON Schema like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://raw.githubusercontent.com/Azure/static-web-apps-cli/main/schema/swa-cli.config.schema.json",\n  "configurations": {\n    ...\n  }\n}\n')))}m.isMDXComponent=!0}}]);