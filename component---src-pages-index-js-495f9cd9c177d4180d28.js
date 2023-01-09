"use strict";(self.webpackChunkthetreeoflife=self.webpackChunkthetreeoflife||[]).push([[678],{2740:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var r=t(7294),l=t(7462),s=t(3366),n=t(5900),c=t.n(n),o=t(9541),m=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],i=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.noGutters,u=e.as,f=void 0===u?"div":u,v=(0,s.Z)(e,m),p=(0,o.vE)(t,"row"),b=p+"-cols",E=[];return d.forEach((function(e){var a,t=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+b+r+"-"+a)})),r.createElement(f,(0,l.Z)({ref:a},v,{className:c().apply(void 0,[n,p,i&&"no-gutters"].concat(E))}))}));i.displayName="Row",i.defaultProps={noGutters:!1};var u=i,f=["bsPrefix","className","as"],v=["xl","lg","md","sm","xs"],p=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.as,d=void 0===m?"div":m,i=(0,s.Z)(e,f),u=(0,o.vE)(t,"col"),p=[],b=[];return v.forEach((function(e){var a,t,r,l=i[e];if(delete i[e],"object"==typeof l&&null!=l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var n="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+u+n:""+u+n+"-"+a),null!=r&&b.push("order"+n+"-"+r),null!=t&&b.push("offset"+n+"-"+t)})),p.length||p.push(u),r.createElement(d,(0,l.Z)({},i,{ref:a,className:c().apply(void 0,[n].concat(p,b))}))}));p.displayName="Col";var b=p,E=t(8870),N=function(e){return r.forwardRef((function(a,t){return r.createElement("div",(0,l.Z)({},a,{ref:t,className:c()(a.className,e)}))}))},g=r.createContext(null);g.displayName="CardContext";var h=g,x=["bsPrefix","className","variant","as"],y=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.variant,d=e.as,i=void 0===d?"img":d,u=(0,s.Z)(e,x),f=(0,o.vE)(t,"card-img");return r.createElement(i,(0,l.Z)({ref:a,className:c()(m?f+"-"+m:f,n)},u))}));y.displayName="CardImg",y.defaultProps={variant:null};var Z=y,P=["bsPrefix","className","bg","text","border","body","children","as"],C=N("h5"),k=N("h6"),w=(0,E.Z)("card-body"),R=(0,E.Z)("card-title",{Component:C}),B=(0,E.Z)("card-subtitle",{Component:k}),I=(0,E.Z)("card-link",{Component:"a"}),G=(0,E.Z)("card-text",{Component:"p"}),T=(0,E.Z)("card-header"),$=(0,E.Z)("card-footer"),j=(0,E.Z)("card-img-overlay"),F=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,d=e.text,i=e.border,u=e.body,f=e.children,v=e.as,p=void 0===v?"div":v,b=(0,s.Z)(e,P),E=(0,o.vE)(t,"card"),N=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return r.createElement(h.Provider,{value:N},r.createElement(p,(0,l.Z)({ref:a},b,{className:c()(n,E,m&&"bg-"+m,d&&"text-"+d,i&&"border-"+i)}),u?r.createElement(w,null,f):f))}));F.displayName="Card",F.defaultProps={body:!1},F.Img=Z,F.Title=R,F.Subtitle=B,F.Body=w,F.Link=I,F.Text=G,F.Header=T,F.Footer=$,F.ImgOverlay=j;var H=F,L=t(5444);var q=({posts:e})=>r.createElement("div",{className:"blog-post-container"},r.createElement(u,{className:"section"},e.map((({node:e},a)=>{return r.createElement(b,{key:a,sm:12,md:{span:6},lg:{span:4},className:"mbl "+(a>=6?"hide":"")},(t=e,l=a>=6?"hide":"",r.createElement(L.Link,{className:`card-as-link mbm ${l}`,to:`/blog/${t.slug}`},r.createElement(H,{className:"cursor-pointer"},r.createElement("div",{className:"card-img",style:{backgroundImage:`url("${t.featured_image}")`}}),r.createElement(H.Body,{className:"card-section"},r.createElement(H.Title,{className:"bold"},t.title),r.createElement("p",{className:"card-description mtm small-text"},t.summary))))));var t,l})))),M=t(270),O=t(3375),S=t(5414);var _=({data:e})=>{const a=e.allButterPost.edges;return r.createElement(r.Fragment,null,r.createElement(S.q,null,r.createElement("title",null,"Blog"),r.createElement("meta",{name:"description",content:"Check out blog posts."}),r.createElement("link",{rel:"icon",href:"/images/favicon-tab.png"})),r.createElement(M.Z,null),r.createElement("div",{className:"blog"},r.createElement(q,{posts:a})),r.createElement(O.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-495f9cd9c177d4180d28.js.map