(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{104:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(78),r=a.n(l),i=(a(104),a(177)),d=a(174),c=a(91),f=a.n(c),s=a(24),p=a(90),m=a.n(p),u=a(173),g=a(172),h=a(86),C=a.n(h);const b=Object(o.createContext)();function y(e){let{children:t}=e;const[a,l]=Object(o.useState)(()=>"dark"===localStorage.getItem("theme"));Object(o.useEffect)(()=>{localStorage.setItem("theme",a?"dark":"light"),document.body.style.backgroundColor=a?"#1a1a1a":"#ffffff",document.body.style.color=a?"#ffffff":"#000000"},[a]);return n.a.createElement(b.Provider,{value:{isDarkMode:a,toggleTheme:()=>{l(!a)}}},t)}function v(){return Object(o.useContext)(b)}const x=s.a.div`
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid ${e=>e.isDarkMode?"#404040":"#dfe1e6"};
    background: ${e=>e.isDarkMode?"#2d2d2d":"#ffffff"};
    opacity: ${e=>e.isCompleted?.7:1};
    transition: all 0.3s ease;
`,k=s.a.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
`,E=s.a.span`
    flex: 1;
    text-decoration: ${e=>e.isCompleted?"line-through":"none"};
    color: ${e=>e.isDarkMode?"#ffffff":"#000000"};
`,D=s.a.div`
    display: flex;
    gap: 8px;
`,S=s.a.span`
    color: ${e=>{if(!e.deadline)return e.isDarkMode?"#999999":"#666666";const t=new Date(e.deadline),a=new Date;return t<a?"#F44336":t-a<864e5?"#FFC107":"#4CAF50"}};
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 4px;
`,M=[{label:"Th\u1ea5p",value:"low"},{label:"Trung b\xecnh",value:"medium"},{label:"Cao",value:"high"}],O=[{label:"C\xe1 nh\xe2n",value:"personal"},{label:"C\xf4ng vi\u1ec7c",value:"work"},{label:"H\u1ecdc t\u1eadp",value:"study"},{label:"Kh\xe1c",value:"other"}],j={low:"#4CAF50",medium:"#FFC107",high:"#F44336"};function w(e){let{todo:t,onDeleteBtnClick:a,onToggleComplete:l,onEditTodo:r,onUpdatePriority:c,onUpdateCategory:f,onUpdateDeadline:s}=e;const{isDarkMode:p}=v(),[h,b]=Object(o.useState)(!1),[y,w]=Object(o.useState)(t.text),[T,U]=Object(o.useState)(!1),[F,L]=Object(o.useState)(t.deadline||""),$=()=>{T&&s(t.id,F||null),U(!T)};return n.a.createElement(x,{isCompleted:t.isCompleted,isDarkMode:p},n.a.createElement(k,null,n.a.createElement(u.a,{isChecked:t.isCompleted,onChange:()=>l(t.id)}),n.a.createElement("div",{style:{flex:1}},h?n.a.createElement(i.a,{value:y,onChange:e=>w(e.target.value),style:{width:"100%"}}):n.a.createElement(E,{isCompleted:t.isCompleted,isDarkMode:p},t.text),T?n.a.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"4px"}},n.a.createElement("input",{type:"datetime-local",value:F,onChange:e=>L(e.target.value),style:{padding:"4px",borderRadius:"4px",border:"1px solid #dfe1e6",backgroundColor:p?"#333333":"#ffffff",color:p?"#ffffff":"#000000"}}),n.a.createElement(d.a,{appearance:"subtle",onClick:$},"L\u01b0u")):n.a.createElement(S,{deadline:t.deadline,isDarkMode:p},n.a.createElement(C.a,{label:"calendar"}),(e=>{if(!e)return"Kh\xf4ng c\xf3 deadline";return new Date(e).toLocaleString("vi-VN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})})(t.deadline)))),n.a.createElement(D,null,n.a.createElement(g.a,{options:M,value:M.find(e=>e.value===t.priority),onChange:e=>c(t.id,e.value),styles:{container:e=>({...e,width:"120px"}),singleValue:e=>({...e,color:j[t.priority]}),menu:e=>({...e,backgroundColor:p?"#2d2d2d":"#ffffff",color:p?"#ffffff":"#000000"}),option:(e,t)=>({...e,backgroundColor:t.isFocused?p?"#404040":"#f4f5f7":"transparent",color:p?"#ffffff":"#000000","&:hover":{backgroundColor:p?"#404040":"#f4f5f7"}})}}),n.a.createElement(g.a,{options:O,value:O.find(e=>e.value===t.category),onChange:e=>f(t.id,e.value),styles:{container:e=>({...e,width:"120px"}),menu:e=>({...e,backgroundColor:p?"#2d2d2d":"#ffffff",color:p?"#ffffff":"#000000"}),option:(e,t)=>({...e,backgroundColor:t.isFocused?p?"#404040":"#f4f5f7":"transparent",color:p?"#ffffff":"#000000","&:hover":{backgroundColor:p?"#404040":"#f4f5f7"}})}}),n.a.createElement(d.a,{appearance:"subtle",onClick:()=>{h&&r(t.id,y),b(!h)}},h?"L\u01b0u":"S\u1eeda"),n.a.createElement(d.a,{appearance:"subtle",onClick:$},T?"H\u1ee7y":"S\u1eeda deadline"),n.a.createElement(d.a,{appearance:"subtle",iconBefore:n.a.createElement(m.a,{label:"delete"}),onClick:()=>a(t.id)})))}function T(e){let{todoList:t,onDeleteBtnClick:a,onToggleComplete:o,onEditTodo:l,onUpdatePriority:r,onUpdateCategory:i,onUpdateDeadline:d}=e;return n.a.createElement(n.a.Fragment,null,t.map(e=>n.a.createElement(w,{key:e.id,todo:e,onDeleteBtnClick:a,onToggleComplete:o,onEditTodo:l,onUpdatePriority:r,onUpdateCategory:i,onUpdateDeadline:d})))}var U=a(176);const F=s.a.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: ${e=>e.isDarkMode?"#1a1a1a":"#ffffff"};
    min-height: 100vh;
    transition: background-color 0.3s ease;
`,L=s.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`,$=s.a.h3`
    color: ${e=>e.isDarkMode?"#ffffff":"#000000"};
    margin: 0;
`,B=s.a.div`
    color: ${e=>e.isDarkMode?"#999999":"#666666"};
`,I=Object(s.a)(d.a)`
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
        content: '🌙';
        font-size: 1.2em;
    }
    
    ${e=>e.isDarkMode&&"\n        &::before {\n            content: '\u2600\ufe0f';\n        }\n    "}
`;function P(){const{isDarkMode:e,toggleTheme:t}=v(),[a,l]=Object(o.useState)(()=>{const e=localStorage.getItem("todoList");return e?JSON.parse(e):[]}),[r,c]=Object(o.useState)(""),[s,p]=Object(o.useState)("all"),[m,u]=Object(o.useState)(""),[h,C]=Object(o.useState)("");Object(o.useEffect)(()=>{localStorage.setItem("todoList",JSON.stringify(a))},[a]);const b=()=>{""!==r.trim()&&(l([...a,{id:Object(U.a)(),text:r,isCompleted:!1,createdAt:(new Date).toISOString(),deadline:h||null,priority:"medium",category:"personal"}]),c(""),C(""))},y=a.filter(e=>"active"===s?!e.isCompleted:"completed"!==s||e.isCompleted).filter(e=>e.text.toLowerCase().includes(m.toLowerCase())),x=[{label:"T\u1ea5t c\u1ea3",value:"all"},{label:"Ch\u01b0a ho\xe0n th\xe0nh",value:"active"},{label:"\u0110\xe3 ho\xe0n th\xe0nh",value:"completed"}];return n.a.createElement(F,{isDarkMode:e},n.a.createElement(L,null,n.a.createElement($,{isDarkMode:e},"Danh s\xe1ch c\u1ea7n l\xe0m"),n.a.createElement(I,{appearance:"subtle",onClick:t,isDarkMode:e},e?"Ch\u1ebf \u0111\u1ed9 s\xe1ng":"Ch\u1ebf \u0111\u1ed9 t\u1ed1i")),n.a.createElement("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"}},n.a.createElement(i.a,{name:"todo",placeholder:"Nh\u1eadp c\xf4ng vi\u1ec7c c\u1ea7n l\xe0m",value:r,onChange:e=>{c(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&b()},style:{flex:1}}),n.a.createElement("input",{type:"datetime-local",value:h,onChange:e=>{C(e.target.value)},style:{padding:"8px",borderRadius:"4px",border:"1px solid #dfe1e6",backgroundColor:e?"#333333":"#ffffff",color:e?"#ffffff":"#000000"}}),n.a.createElement(d.a,{appearance:"primary",iconAfter:n.a.createElement(f.a,{label:"add"}),onClick:b},"Th\xeam")),n.a.createElement("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"}},n.a.createElement(i.a,{name:"search",placeholder:"T\xecm ki\u1ebfm...",value:m,onChange:e=>u(e.target.value),style:{flex:1}}),n.a.createElement(g.a,{options:x,value:x.find(e=>e.value===s),onChange:e=>p(e.value),placeholder:"L\u1ecdc theo tr\u1ea1ng th\xe1i",styles:{container:e=>({...e,width:"200px"})}})),n.a.createElement(T,{todoList:y,onDeleteBtnClick:e=>{l(a.filter(t=>t.id!==e))},onToggleComplete:e=>{l(a.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t))},onEditTodo:(e,t)=>{l(a.map(a=>a.id===e?{...a,text:t}:a))},onUpdatePriority:(e,t)=>{l(a.map(a=>a.id===e?{...a,priority:t}:a))},onUpdateCategory:(e,t)=>{l(a.map(a=>a.id===e?{...a,category:t}:a))},onUpdateDeadline:(e,t)=>{l(a.map(a=>a.id===e?{...a,deadline:t}:a))}}),n.a.createElement(B,{isDarkMode:e},y.length," c\xf4ng vi\u1ec7c"))}var A=function(){return n.a.createElement(y,null,n.a.createElement(P,null))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)))},97:function(e,t,a){e.exports=a(154)}},[[97,1,2]]]);
//# sourceMappingURL=main.1bd3bbcd.chunk.js.map