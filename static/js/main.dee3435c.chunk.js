(this.webpackJsonpchat_application=this.webpackJsonpchat_application||[]).push([[0],{91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(16),r=a.n(c),i=a(13),l=a(10),o=a(23),u=a.n(o),d=a(42),j=a(7),m=a(4),b=a.n(m),h=a(1),p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(j.a)(c,2),i=r[0],l=r[1],o=Object(s.useState)(""),m=Object(j.a)(o,2),p=m[0],g=m[1],v=function(){var e=Object(d.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"e78b3fc4-b46a-4518-8814-dc5384123473","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,b.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g("Oops, wrong credentials, try again");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("h1",{className:"title",children:"Chat Application"}),Object(h.jsxs)("form",{onSubmit:v,children:[Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(h.jsx)("input",{type:"password",value:i,onChange:function(e){return l(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(h.jsx)("div",{align:"center",children:Object(h.jsx)("button",{type:"submit",className:"button",children:Object(h.jsx)("span",{children:"Start  Chatting"})})}),Object(h.jsx)("div",{align:"center",style:{marginTop:"2em",color:"red"},children:Object(h.jsx)("h2",{children:p})})]})]})})},g=a(94),v=a(95),O=function(e){var t=Object(s.useState)(""),a=Object(j.a)(t,2),n=a[0],c=a[1],r=e.chatId,i=e.creds,o=(e.userName,function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(l.i)(i,r,{text:t}),c(" ")});return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e.status}),Object(h.jsxs)("form",{className:"message-form",onSubmit:o,children:[Object(h.jsx)("input",{className:"message-input",placeholder:"send a message",value:n,onChange:function(t){c(t.target.value),Object(l.f)(e,r)},onSubmit:o}),Object(h.jsx)("label",{htmlFor:"upload-button",children:Object(h.jsx)("span",{className:"image-button",children:Object(h.jsx)(g.a,{className:"picture-icon"})})}),Object(h.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.i)(i,r,{files:e.target.files,text:""})}}),Object(h.jsx)("button",{type:"submit",className:"send-button",children:Object(h.jsx)(v.a,{className:"send-icon"})})]})]})},x=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(h.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(h.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},f=function(e){var t,a,s=e.lastMessage,n=e.message,c=!s||s.sender.username!==n.sender.username;return Object(h.jsxs)("div",{className:"message-row",children:[c&&Object(h.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===n||void 0===n||null===(t=n.sender)||void 0===t?void 0:t.avatar,")")}}),(null===n||void 0===n||null===(a=n.attachments)||void 0===a?void 0:a.length)>0?Object(h.jsx)("img",{src:n.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:c?"4px":"48px"}}):Object(h.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:c?"4px":"48px"},children:n.text})]})},N=function(e){var t=e.chats,a=e.activeChat,n=e.userName,c=e.messages,r=t&&t[a],l=Object(s.useState)(""),o=Object(j.a)(l,2),u=o[0],d=o[1],m=function(e,t){return r.people.map((function(a,s){var n;return a.last_read===e.id&&Object(h.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(n=a.person)||void 0===n?void 0:n.avatar,")")}},"read_".concat(s))}))},b=function(){var e=Object.keys(c);return e.map((function(t,a){var s=c[t],r=0===a?null:e[a-1],i=n===s.sender.username;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"message-block",children:i?Object(h.jsx)(x,{message:s}):Object(h.jsx)(f,{message:s,lastMessage:c[r]})}),Object(h.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0",marginLeft:i?"0":"68px"},children:m(s,i)})]},"msg_".concat(a," style={{width: '100%'}}"))}))};if(b(),!r)return"Loading... ";var p=function(t){var a=e.userName;console.log("".concat(a," is typing ...")),d("".concat(a," is typing ..."))};return window.addEventListener("keypress",p),window.addEventListener("keyup",(function(e){setTimeout((function(){d("")}),1e4)})),Object(h.jsxs)("div",{className:"chat-feed",children:[Object(h.jsxs)("div",{className:"chat-title-container",children:[Object(h.jsx)("div",{className:"chat-title",children:null===r||void 0===r?void 0:r.title}),Object(h.jsx)("div",{className:"chat-subtitle",children:r.people.map((function(e){return" ".concat(e.person.username)}))})]}),b(),Object(h.jsx)("div",{style:{height:"100px"}}),Object(h.jsxs)("div",{className:"message-form-container",children:[Object(h.jsx)("p",{children:u}),Object(h.jsx)(O,Object(i.a)(Object(i.a)({},e),{},{chatId:a,onStatus:p,status:u}))]})]})},y=(a(91),function(){return localStorage.getItem("username")?Object(h.jsx)(l.a,{height:"100vh",projectID:"e78b3fc4-b46a-4518-8814-dc5384123473",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(h.jsx)(N,Object(i.a)({},e))}}):Object(h.jsx)(p,{})});r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.dee3435c.chunk.js.map