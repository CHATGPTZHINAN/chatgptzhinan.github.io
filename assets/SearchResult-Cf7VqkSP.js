import{u as _,f as $,g as ee,h as G,i as te,j as ae,t as se,k as le,l as S,m as b,n as re,w as M,p as a,q as j,s as I,R as O,v as oe,x as ue,y as ne,z as ie,O as ce,P as he,A as pe,B as ve,C as ge,D as q,E as ye,F as de,G as me,H as Ee}from"./app-BvV6fWaw.js";const fe=["/","/chatgpt/ChatGPT-Plus-Subscription-Tutorial.html","/chatgpt/chapter-4.0-plugin.html","/chatgpt/chatgpt-image.html","/chatgpt/chatgpt-teacher.html","/chatgpt/chatgpt-unable-send-messages.html","/chatgpt/comparison-of-Intelligence-in-AI-Large-Models.html","/chatgpt/how-regist-AppleID.html","/chatgpt/how-to-register-chatgpt.html","/chatgpt/how-to-register-claude3.html","/chatgpt/how-to-upgrade-ChatGPT4.0.html","/chatgpt/how-to-use-GPT-4o.html","/chatgpt/how-to-use-chatgpt-without-restrictions.html","/chatgpt/how-to-use-chatgpt4o-infinitely.html","/chatgpt/how-to-use-sora.html","/chatgpt/openAI-live-highlights-one.html","/contact/","/midjourney/how-to-subscribe-Midjournal.html","/onlyfans/how-to-subscribe-onlyfans.html","/investment/how-to-apply-hong-kong-card.html","/investment/how-to-apply-ocbc.html","/investment/how-to-deposit-money.html","/investment/how-to-open-Longbridge.html","/investment/how-to-open-huasheng.html","/investment/open-hongkong-bankcard-online.html","/404.html","/chatgpt/","/midjourney/","/onlyfans/","/investment/","/category/","/category/chatgpt/","/category/claude3/","/category/midjourney/","/category/onlyfans/","/category/%E5%BC%80%E9%80%9A%E5%A4%96%E8%B5%84%E5%8D%A1/","/category/%E6%B5%B7%E5%A4%96%E5%88%B8%E5%95%86/","/tag/","/tag/chatgpt-plus/","/tag/chatgpt-4.0%E6%8F%92%E4%BB%B6/","/tag/chatgpt%E6%8C%87%E4%BB%A4/","/tag/chatgpt/","/tag/%E5%9B%BD%E5%86%85%E5%A4%96ai%E5%A4%A7%E6%A8%A1%E5%9E%8B/","/tag/apple-id/","/tag/chatgpt%E6%B3%A8%E5%86%8C/","/tag/claude3/","/tag/chatgpt4/","/tag/gpt-4o/","/tag/gpt%E9%9A%8F%E5%BF%83%E7%94%A8/","/tag/sora/","/tag/openai/","/tag/midjourney/","/tag/onlyfans/","/tag/%E6%B8%AF%E5%8D%A1/","/tag/ocbc/","/tag/%E9%95%BF%E6%A1%A5/","/tag/%E5%8D%8E%E7%9B%9B/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",v=_(we,[]),Ae=()=>{const{queryHistoryCount:s}=q,l=s>0;return{enabled:l,queryHistory:v,addQueryHistory:r=>{l&&(v.value.length<s?v.value=Array.from(new Set([r,...v.value])):v.value=Array.from(new Set([r,...v.value.slice(0,s-1)])))},removeQueryHistory:r=>{v.value=[...v.value.slice(0,r),...v.value.slice(r+1)]}}},D=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:x}=q,g=_(He,[]),ke=()=>{const s=x>0;return{enabled:s,resultHistory:g,addResultHistory:l=>{if(s){const r={link:D(l),display:l.display};"header"in l&&(r.header=l.header),g.value.length<x?g.value=[r,...g.value]:g.value=[r,...g.value.slice(0,x-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Re=s=>{const l=ce(),r=G(),{search:H,terminate:h}=he(),d=S(!1),m=pe([]);return ve(()=>{const y=()=>{m.value=[],d.value=!1},k=ge(E=>{d.value=!0,E?H({type:"search",query:E,locale:r.value,options:l.value}).then(p=>{m.value=p,d.value=!1}).catch(p=>{console.error(p),y()}):y()},q.searchDelay);M([s,r],()=>k(s.value),{immediate:!0}),ye(()=>{h()})}),{searching:d,results:m}};var Qe=$({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ee(),H=G(),h=te(ae),{enabled:d,addQueryHistory:m,queryHistory:y,removeQueryHistory:k}=Ae(),{enabled:E,resultHistory:p,addResultHistory:P,removeResultHistory:U}=ke(),T=d||E,R=se(s,"query"),{results:f,searching:Y}=Re(R),o=le({isQuery:!0,index:0}),i=S(0),c=S(0),F=b(()=>T&&(y.value.length>0||p.value.length>0)),B=b(()=>f.value.length>0),Q=b(()=>f.value[i.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?p.value.length-1:y.value.length-1):o.index=t-1},V=()=>{const{isQuery:e,index:t}=o;t===(e?y.value.length-1:p.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{i.value=i.value>0?i.value-1:f.value.length-1,c.value=Q.value.contents.length-1},K=()=>{i.value=i.value<f.value.length-1?i.value+1:0,c.value=0},N=()=>{c.value<Q.value.contents.length-1?c.value+=1:K()},W=()=>{c.value>0?c.value-=1:J()},C=e=>e.map(t=>de(t)?t:a(t[0],t[1])),X=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[u,A=""]=Ee(t)?t[H.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",C([u,...n,A])))}return e.display.map(t=>a("div",C(t)))},w=()=>{i.value=0,c.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(s.isFocusing){if(B.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=Q.value.contents[c.value];m(s.query),P(t),r.push(D(t)),w()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(p.value[t].link),w())}}}}),M([i,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:R.value?!B.value:!F.value}],id:"search-pro-results"},R.value===""?T?F.value?[d?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},h.value.queryHistory),y.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:u=>{u.preventDefault(),u.stopPropagation(),k(t)}})]))])):null,E?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},h.value.resultHistory),p.value.map((e,t)=>a(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{w()}},()=>[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(u=>C(u)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:u=>{u.preventDefault(),u.stopPropagation(),U(t)}})]))])):null]:h.value.emptyHistory:h.value.emptyResult:Y.value?a(oe,{hint:h.value.searching}):B.value?a("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:t},u)=>{const A=i.value===u;return a("li",{class:["search-pro-result-list-item",{active:A}]},[a("div",{class:"search-pro-result-title"},e||h.value.defaultTitle),t.map((n,Z)=>{const L=A&&c.value===Z;return a(O,{to:D(n),class:["search-pro-result-item",{active:L,"aria-selected":L}],onClick:()=>{m(s.query),P(n),w()}},()=>[n.type==="text"?null:a(n.type==="title"?ue:n.type==="heading"?ne:ie,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",X(n))])])})])})):h.value.emptyResult)}});export{Qe as default};