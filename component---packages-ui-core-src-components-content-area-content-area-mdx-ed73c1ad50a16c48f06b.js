(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{zSbj:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return C}));t("5hJT"),t("2Tod"),t("ABKx"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var r=t("/FXl"),o=t("TjRS"),a=t("ZFoC"),i=t("Hkk1"),c=t("aN0S");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-core/src/components/ContentArea/ContentArea.mdx"}});var y={_frontmatter:b},u=o.a;function C(e){var n,t,p,d,C=e.components,O=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(u,l({},y,O,{components:C,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"contentarea"},"ContentArea"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(a.d,{of:i.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(a.c,{__position:1,__code:"<ContentArea>Some content</ContentArea>",__scope:(n={props:O,DefaultLayout:o.a,Playground:a.c,Props:a.d,ContentArea:i.a,wrapperStyles:c.a},n.DefaultLayout=o.a,n._frontmatter=b,n),mdxType:"Playground"},Object(r.b)(i.a,{mdxType:"ContentArea"},"Some content")),Object(r.b)("h2",{id:"mobile-inner-padding"},"Mobile inner padding"),Object(r.b)(a.c,{__position:2,__code:'<ContentArea outerBackgroundColor="spbSky0" mobileInnerPadding="none">\n  It disable paddings for internal block on viewport width smaller than 768px.\n  This can be seen on screens width less than 768 pixels.\n</ContentArea>',__scope:(t={props:O,DefaultLayout:o.a,Playground:a.c,Props:a.d,ContentArea:i.a,wrapperStyles:c.a},t.DefaultLayout=o.a,t._frontmatter=b,t),mdxType:"Playground"},Object(r.b)(i.a,{outerBackgroundColor:"spbSky0",mobileInnerPadding:"none",mdxType:"ContentArea"},"It disable paddings for internal block on viewport width smaller than 768px. This can be seen on screens width less than 768 pixels.")),Object(r.b)("h2",{id:"none-padding-usage"},"None-padding usage"),Object(r.b)(a.c,{__position:3,__code:'<ContentArea innerPadding="none" innerBackgroundColor="white">\n  Some content\n</ContentArea>',__scope:(p={props:O,DefaultLayout:o.a,Playground:a.c,Props:a.d,ContentArea:i.a,wrapperStyles:c.a},p.DefaultLayout=o.a,p._frontmatter=b,p),mdxType:"Playground"},Object(r.b)(i.a,{innerPadding:"none",innerBackgroundColor:"white",mdxType:"ContentArea"},"Some content")),Object(r.b)("h2",{id:"you-can-choose-the-background-color-for-an-external-or-internal-block"},"You can choose the background color for an external or internal block"),Object(r.b)(a.c,{__position:4,__code:'<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="green">green</ContentArea>\n</div>\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="purple">\n    <div style={{ color: \'white\' }}>purple</div>\n  </ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="transparent">transparent</ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="white">white</ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="spbSky0">spbSky0</ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="spbSky1">spbSky1</ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="spbSky2">spbSky2</ContentArea>\n</div>\n\n<div style={wrapperStyles}>\n  <ContentArea innerBackgroundColor="freshAsphalt">\n    <div style={{ color: \'white\' }}>freshAsphalt</div>\n  </ContentArea>\n</div>\n\n<div style={{ ...wrapperStyles, marginBottom: 0 }}>\n  <ContentArea innerBackgroundColor="fullBlack">\n    <div style={{ color: \'white\' }}>fullBlack</div>\n  </ContentArea>\n</div>',__scope:(d={props:O,DefaultLayout:o.a,Playground:a.c,Props:a.d,ContentArea:i.a,wrapperStyles:c.a},d.DefaultLayout=o.a,d._frontmatter=b,d),mdxType:"Playground"},Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"green",mdxType:"ContentArea"},"green")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"purple",mdxType:"ContentArea"},Object(r.b)("div",{style:{color:"white"}},"purple"))),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"transparent",mdxType:"ContentArea"},"transparent")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"white",mdxType:"ContentArea"},"white")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"spbSky0",mdxType:"ContentArea"},"spbSky0")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"spbSky1",mdxType:"ContentArea"},"spbSky1")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"spbSky2",mdxType:"ContentArea"},"spbSky2")),Object(r.b)("div",{style:c.a},Object(r.b)(i.a,{innerBackgroundColor:"freshAsphalt",mdxType:"ContentArea"},Object(r.b)("div",{style:{color:"white"}},"freshAsphalt"))),Object(r.b)("div",{style:s({},c.a,{marginBottom:0})},Object(r.b)(i.a,{innerBackgroundColor:"fullBlack",mdxType:"ContentArea"},Object(r.b)("div",{style:{color:"white"}},"fullBlack")))))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-core/src/components/ContentArea/ContentArea.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-core-src-components-content-area-content-area-mdx-ed73c1ad50a16c48f06b.js.map