"use strict";(self.webpackChunkthetreeoflife=self.webpackChunkthetreeoflife||[]).push([[678],{2740:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var r=t(7294),l=t(7462),s=t(3366),n=t(5900),o=t.n(n),c=t(9541),m=["bsPrefix","className","noGutters","as"],i=["xl","lg","md","sm","xs"],d=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.noGutters,f=e.as,u=void 0===f?"div":f,v=(0,s.Z)(e,m),p=(0,c.vE)(t,"row"),b=p+"-cols",E=[];return i.forEach((function(e){var a,t=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+b+r+"-"+a)})),r.createElement(u,(0,l.Z)({ref:a},v,{className:o().apply(void 0,[n,p,d&&"no-gutters"].concat(E))}))}));d.displayName="Row",d.defaultProps={noGutters:!1};var f=d,u=["bsPrefix","className","as"],v=["xl","lg","md","sm","xs"],p=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.as,i=void 0===m?"div":m,d=(0,s.Z)(e,u),f=(0,c.vE)(t,"col"),p=[],b=[];return v.forEach((function(e){var a,t,r,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var n="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+f+n:""+f+n+"-"+a),null!=r&&b.push("order"+n+"-"+r),null!=t&&b.push("offset"+n+"-"+t)})),p.length||p.push(f),r.createElement(i,(0,l.Z)({},d,{ref:a,className:o().apply(void 0,[n].concat(p,b))}))}));p.displayName="Col";var b=p,E=t(8870),N=function(e){return r.forwardRef((function(a,t){return r.createElement("div",(0,l.Z)({},a,{ref:t,className:o()(a.className,e)}))}))},g=r.createContext(null);g.displayName="CardContext";var h=g,x=["bsPrefix","className","variant","as"],y=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.variant,i=e.as,d=void 0===i?"img":i,f=(0,s.Z)(e,x),u=(0,c.vE)(t,"card-img");return r.createElement(d,(0,l.Z)({ref:a,className:o()(m?u+"-"+m:u,n)},f))}));y.displayName="CardImg",y.defaultProps={variant:null};var Z=y,P=["bsPrefix","className","bg","text","border","body","children","as"],C=N("h5"),k=N("h6"),w=(0,E.Z)("card-body"),R=(0,E.Z)("card-title",{Component:C}),T=(0,E.Z)("card-subtitle",{Component:k}),B=(0,E.Z)("card-link",{Component:"a"}),I=(0,E.Z)("card-text",{Component:"p"}),G=(0,E.Z)("card-header"),L=(0,E.Z)("card-footer"),$=(0,E.Z)("card-img-overlay"),j=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,m=e.bg,i=e.text,d=e.border,f=e.body,u=e.children,v=e.as,p=void 0===v?"div":v,b=(0,s.Z)(e,P),E=(0,c.vE)(t,"card"),N=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return r.createElement(h.Provider,{value:N},r.createElement(p,(0,l.Z)({ref:a},b,{className:o()(n,E,m&&"bg-"+m,i&&"text-"+i,d&&"border-"+d)}),f?r.createElement(w,null,u):u))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=Z,j.Title=R,j.Subtitle=T,j.Body=w,j.Link=B,j.Text=I,j.Header=G,j.Footer=L,j.ImgOverlay=$;var F=j,H=t(5444);var q=({posts:e})=>r.createElement("div",{className:"blog-post-container"},r.createElement(f,{className:"section"},e.map((({node:e},a)=>{return r.createElement(b,{key:a,sm:12,md:{span:6},lg:{span:4},className:"mbl "+(a>=6?"hide":"")},(t=e,l=a>=6?"hide":"",r.createElement(H.Link,{className:`card-as-link mbm ${l}`,to:`/blog/${t.slug}`},r.createElement(F,{className:"cursor-pointer"},r.createElement("div",{className:"card-img",style:{backgroundImage:`url("${t.featured_image}")`}}),r.createElement(F.Body,{className:"card-section"},r.createElement(F.Title,{className:"bold"},t.title),r.createElement("p",{className:"card-description mtm small-text"},t.summary))))));var t,l})))),M=t(270),O=t(3375),S=t(5414);var _=({data:e})=>{const a=e.allButterPost.edges;return r.createElement(r.Fragment,null,r.createElement(S.q,null,r.createElement("title",null,"The Tree of Life blog"),r.createElement("meta",{name:"description",content:"Check out blog posts from the tree of life."}),r.createElement("link",{rel:"icon",href:"/images/favicon-tab.png"})),r.createElement(M.Z,null),r.createElement("div",{className:"blog"},r.createElement(q,{posts:a})),r.createElement(O.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-65d46e094fbfd66f5186.js.map