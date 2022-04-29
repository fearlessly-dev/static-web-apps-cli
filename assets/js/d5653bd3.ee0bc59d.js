"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[115],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},s="Install the CLI",c={unversionedId:"releases/0.8.3/quickstart/install",id:"releases/0.8.3/quickstart/install",title:"Install the CLI",description:"On dev Device, globally",source:"@site/docs/releases/0.8.3/01-quickstart/01-install.md",sourceDirName:"releases/0.8.3/01-quickstart",slug:"/releases/0.8.3/quickstart/install",permalink:"/static-web-apps-cli/docs/releases/0.8.3/quickstart/install",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/releases/0.8.3/01-quickstart/01-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributors \ud83c\udf1f",permalink:"/static-web-apps-cli/docs/contribute/contributors"},next:{title:"Start the Emulator",permalink:"/static-web-apps-cli/docs/releases/0.8.3/quickstart/start"}},u={},p=[{value:"On dev Device, globally",id:"on-dev-device-globally",level:2},{value:"As devDependency",id:"as-devdependency",level:2},{value:"Validate the install",id:"validate-the-install",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-the-cli"},"Install the CLI"),(0,l.kt)("h2",{id:"on-dev-device-globally"},"On dev Device, globally"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install globally using ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @azure/static-web-apps-cli\n")))),(0,l.kt)("h2",{id:"as-devdependency"},"As devDependency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install for development-use only (not for production)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -D @azure/static-web-apps-cli\n")),(0,l.kt)("h2",{id:"validate-the-install"},"Validate the install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Try checking the SWA CLI version to validate install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ swa --version\n0.8.3\n")))}f.isMDXComponent=!0}}]);