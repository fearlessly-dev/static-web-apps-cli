"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[875],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="SWA Config File",l={unversionedId:"releases/0.8.3/config/use-config",id:"releases/0.8.3/config/use-config",title:"SWA Config File",description:"Azure Static Web Apps can be configured with an optional staticwebapp.config.json file. See Configure Static Web Apps documentation to learn more.",source:"@site/docs/releases/0.8.3/04-config/01-use-config.md",sourceDirName:"releases/0.8.3/04-config",slug:"/releases/0.8.3/config/use-config",permalink:"/static-web-apps-cli/docs/releases/0.8.3/config/use-config",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/releases/0.8.3/04-config/01-use-config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Use Existing Dev Server",permalink:"/static-web-apps-cli/docs/releases/0.8.3/emulator/serve-from-devserver"},next:{title:"Configuration Overrides",permalink:"/static-web-apps-cli/docs/releases/0.8.3/config/overrides"}},p={},u=[{value:"Using Default Locations",id:"using-default-locations",level:2},{value:"Specify Custom Location",id:"specify-custom-location",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swa-config-file"},"SWA Config File"),(0,a.kt)("p",null,"Azure Static Web Apps can be configured with an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json")," file. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration"},"Configure Static Web Apps documentation")," to learn more."),(0,a.kt)("h2",{id:"using-default-locations"},"Using Default Locations"),(0,a.kt)("p",null,"If you serve your static files from a specific folder, the SWA CLI will automatically search that folder for ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# searches ./my-dist for staticwebapp.config.json\nswa start ./my-dist\n")),(0,a.kt)("p",null,"If you use a front-end dev server, the CLI will search the ",(0,a.kt)("em",{parentName:"p"},"current directory")," for your ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# searches current directory for staticwebapp.config.json\nswa start http://localhost:3000\n")),(0,a.kt)("h2",{id:"specify-custom-location"},"Specify Custom Location"),(0,a.kt)("p",null,"To control where the CLI searches for ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"--swa-config-location"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# static files\nswa start ./my-dist --swa-config-location ./my-app-source\n\n# frontend dev server\nswa start http://localhost:3000 --swa-config-location ./my-app-source\n")))}d.isMDXComponent=!0}}]);