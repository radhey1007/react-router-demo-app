(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{41:function(e,t,c){e.exports={item:"QuoteItem_item__9HAOG"}},42:function(e,t,c){e.exports={list:"QuoteList_list__2afcH",sorting:"QuoteList_sorting__23rMy"}},44:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__2kOWo"}},51:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(41),o=c.n(i),r=c(8),u=c(1),a=function(e){return Object(u.jsxs)("li",{className:o.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(r.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(42),j=c.n(d),l=function(e){var t=Object(n.h)(),c=Object(n.i)(),i=new URL(document.URL),o="asc"===encodeURI(i.searchParams.get("sort")),r=function(e,t){return e.sort((function(e,c){return t?e.id>c.id?1:-1:e.id<c.id?1:-1}))}(e.quotes,o);return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:j.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){t.push({pathname:c.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:j.a.list,children:r.map((function(e){return Object(u.jsx)(a,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(35),h=c(36),x=c(14),O=(c(44),function(){return Object(u.jsxs)("div",{className:"centered",children:[Object(u.jsx)("p",{children:"No quotes found!   "}),Object(u.jsx)(r.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})});t.default=function(){var e=Object(b.a)(h.b,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(x.a,{})}):i?Object(u.jsxs)("p",{className:"centered focused",children:[" ",i]}):"completed"!==c||n&&0!=n.length?Object(u.jsxs)("div",{children:[" All Quotes",Object(u.jsx)(l,{quotes:n})]}):Object(u.jsx)(O,{})}}}]);
//# sourceMappingURL=4.9e372c35.chunk.js.map