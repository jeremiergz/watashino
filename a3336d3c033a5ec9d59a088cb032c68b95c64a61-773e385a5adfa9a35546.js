"use strict";(self.webpackChunkwatashino=self.webpackChunkwatashino||[]).push([[452],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8032:function(e,t,a){a.d(t,{G:function(){return z},L:function(){return y},M:function(){return x},P:function(){return k},S:function(){return H},_:function(){return o},a:function(){return i},b:function(){return g},c:function(){return c},d:function(){return u},g:function(){return m},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=e=>{var t,a,r;return null==(t=c(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function g(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],h=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(h,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,b);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(w,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var C;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(C=v.propTypes)?void 0:C.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const j=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],S=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:T},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],_=new Set;let q,A;const P=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:g,onStartLoad:m,onLoad:p,onError:h}=e,y=o(e,N);const{width:f,height:b,layout:w}=n,v=d(f,b,w),{style:C,className:E}=v,k=o(v,O),x=(0,r.useRef)(),j=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(u=g);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,b);return(0,r.useEffect)((()=>{q||(q=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(j);if(A&&_.has(j))return;let t,r;return q.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(j),image:n},y)),_.has(j)||(t=requestAnimationFrame((()=>{x.current&&(r=o(x.current,j,_,s,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(j)&&A&&(x.current.innerHTML=A(i({isLoading:_.has(j),isLoaded:_.has(j),image:n},y)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},C,s,{backgroundColor:c}),className:E+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(P,e):null}));z.propTypes=I,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:n,__error:s}=t,l=o(t,R);return s&&console.warn(s),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const W=M((function(e){let{as:t="div",className:a,class:n,style:s,image:l,loading:c="lazy",imgClassName:u,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:b}=e,w=o(e,j);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:f,objectPosition:b,backgroundColor:h},p);const{width:v,height:C,layout:E,images:T,placeholder:I,backgroundColor:N}=l,O=d(v,C,E),{style:_,className:q}=O,A=o(O,L),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},A,{style:i({},_,s,{backgroundColor:h}),className:q+(a?" "+a:"")}),r.createElement(y,{layout:E,width:v,height:C},r.createElement(k,i({},m(I,!1,E,v,C,N,f,b))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:u},w,g("eager"===c,!1,P,c,p)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),D={src:s().string.isRequired,alt:T,width:F,height:F,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=D;const H=M(z);H.displayName="StaticImage",H.propTypes=D},2330:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(1883);var n=function(){return(0,r.useStaticQuery)("4245139257")},s=a(9731),i=a(8032),o=a(5893);var l=function(e){let{description:t="",keywords:a=[],path:r="",title:l=""}=e;const{banner:c}=n(),{authorName:u,authorTwitterUsername:d,description:g,siteUrl:m}=(0,s.Z)(),p=(0,i.d)(c),h=l||u,y=t||g,f=""+m+r;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:h}),(0,o.jsx)("link",{rel:"canonical",href:f}),(0,o.jsx)("meta",{name:"description",content:y}),(0,o.jsx)("meta",{name:"image",content:p}),(0,o.jsx)("meta",{name:"keywords",content:a.join(", ")}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:d}),(0,o.jsx)("meta",{name:"twitter:description",content:y}),(0,o.jsx)("meta",{name:"twitter:image",content:p}),(0,o.jsx)("meta",{name:"twitter:title",content:h}),(0,o.jsx)("meta",{property:"og:description",content:y}),(0,o.jsx)("meta",{property:"og:image",content:p}),(0,o.jsx)("meta",{property:"og:title",content:h}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:f})]})}},9731:function(e,t,a){var r=a(1883);t.Z=function(){return(0,r.useStaticQuery)("397820318").site.siteMetadata}}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-773e385a5adfa9a35546.js.map