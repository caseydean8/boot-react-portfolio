(this["webpackJsonpboot-react-portfolio"]=this["webpackJsonpboot-react-portfolio"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(9),c=a.n(i),o=(a(24),a(5)),r=a(2),l=a(4),d=(a(25),a(0)),h=function(){var e=Object(s.useState)(window.innerWidth>768),t=Object(l.a)(e,2),a=t[0],n=t[1],i=function(){n(window.innerWidth>768)};Object(s.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}));var c=Object(r.f)(),h={color:"#00b4e2"},m=[];return[["/","home"],["/about","about"],["/contact","contact"]].forEach((function(e,t){a?m.push(Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",to:e[0],style:function(e){return e.isActive?h:null},children:e[1]})},t)):m.push(Object(d.jsx)("li",{className:"nav-item","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent",onClick:function(){return c(e[0])},children:Object(d.jsx)(o.b,{className:"nav-link",to:e[0],style:function(e){return e.isActive?h:null},children:e[1]})},t))})),Object(d.jsx)("nav",{className:"navbar navbar-expand-md fixed-top navbar-light",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{id:"cdc",children:"Casey Carroll"}),Object(d.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",children:Object(d.jsx)("ul",{className:"navbar-nav ml-auto",children:m})})]})})},m=a(10),b=a.n(m),u=function(){return Object(d.jsxs)("div",{className:"container p-3 mx-auto mt-5 mb-4",children:[Object(d.jsx)("h1",{className:"heading",children:"let's go"}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)(b.a,{className:"typed-text",strings:["React","Node","Mongo","MySQL","Express","jQuery"],typeSpeed:100,backSpeed:60,backDelay:2100,showCursor:!1,loop:!0})}),Object(d.jsx)("h5",{className:"subheading",children:"Welcome to the Portfolio of Casey Carroll, Full Stack Developer"})]})},p=a(15),j=(a(27),a(28),function(e){return Object(d.jsx)("div",{className:"modal fade",id:"modal-".concat(e.id),tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h1",{className:"modal-title",id:"exampleModalLabel",children:e.title?e.title:"title here"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:e.text?e.text:"Does not wisdom call out?\n\t\tDoes not understanding raise her voice?"}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("a",{className:"btn modal-link",target:"_blank",rel:"noopener noreferrer",href:e.link,children:"website"}),Object(d.jsx)("a",{className:"btn modal-link",target:"_blank",rel:"noopener noreferrer",href:e.repo,children:"github"})]})]})})})});var g=function(e){return Object(d.jsxs)("div",{id:e.id,className:"project col-sm-6 col-lg-4 p-0",children:[Object(d.jsx)("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#modal-".concat(e.id),children:Object(d.jsx)("img",{className:"project-image",src:e.image,alt:e.alt,width:"600",height:"338"})}),Object(d.jsx)(j,Object(p.a)({},e))]})},x=(a(29),a.p+"static/media/Submarine.f39af7ba.webp"),f=a.p+"static/media/shopity.aa48e98a.webp",O=a.p+"static/media/book-safe.48789192.webp",v=a.p+"static/media/crystal-vibes.28c33c22.webp",y=a.p+"static/media/projectMgmt.842fb421.webp",k=[{id:"submarine",image:x,link:"https://blooming-peak-13476.herokuapp.com/",title:"Submarine",repo:"https://github.com/caseydean8/submarine",text:"Submarine is a subscription tracking app built with the react, node, mongo, express, and bootstrap. \n You can take a look around with username 'guest' and password 'guest'."},{id:"honesdale-cc",image:a.p+"static/media/honesdale-cc-portfolio.98d6bdaa.webp",link:"https://honesdale-cc-next.vercel.app/",title:"Honesdale Community Church",repo:"https://github.com/caseydean8/honesdale-cc-next",text:"Website of the Honesdale Community Church that utilizes Hygraph's CMS to allow church admins to update the event page. Built with Next.js and Bootstrap."},{id:"shopping-app",image:f,link:"https://shopity.herokuapp.com/",title:"Shopity",repo:"https://github.com/caseydean8/shopity-app",text:"Shopity is helpful shopping assistant that allows users to login and create a list of pantry items, which can then be added to an active shopping list and finally a virtual cart. Shopity was created with the Pug, SQL, and express."},{id:"graphql-mgmt",image:y,link:"https://graphql-mgmt.herokuapp.com/",title:"GraphQL MGMT",repo:"https://github.com/caseydean8/GraphQL-MGMT-App",text:"GraphQL MGMT is a full stack application using the GraphQL query management system. Users can create, update, and delete clients as well as their related projects. Built with React, Express, MongoDB, Apollo, and Bootstrap 5. "},{id:"book-safe",image:O,link:"https://book-safe-react.herokuapp.com/",title:"Book Safe",repo:"https://github.com/caseydean8/book-safe",text:"Book Safe is a full stack MERN application that allows the user to search for a book title and retrieve information including the author, a thumbnail of the cover, and a link to google books. The user can then save that information for future reference.\n \n The application utilizes the following technologies: \n React \n Node \n Express \n MongoDB \n Heroku \n axios \n bootstrap"},{id:"crystal-vibes",image:v,link:"https://caseydean8.github.io/crystal-vibes/",title:"Crystal Vibes",repo:"https://github.com/caseydean8/crystal-vibes",text:"This app utilizes jQuery to render a number guessing game. \n A random number is displayed, and each of four crystal buttons is assigned a secret value. \n Click a button and that value is added to your score. If you can match the target number, praise an adulation commence. If not . .  ."}],N=function(){return Object(d.jsx)("div",{className:"project-container row",children:k.map((function(e,t){return Object(d.jsx)(g,{id:e.id,image:e.image,alt:"".concat(e.id," image"),title:e.title,text:e.text,link:e.link,repo:e.repo},t)}))})},w=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(N,{})]})};function S(){return Object(d.jsxs)("div",{className:"form-container container",children:[Object(d.jsx)("h1",{className:"contact-header",children:"about"}),Object(d.jsx)("p",{children:"I build dynamic user experiences and robust applications utilizing cutting edge technologies and frameworks as well as classic web architecture to bring software ideas to life. Solving problems is my passion but in my free time I enjoy gardening and hiking with my family in Northeast PA."})]})}var C=a(6),M=a(11),E=a(14),L=a(13),B=a(12),Q=function(e){Object(E.a)(a,e);var t=Object(L.a)(a);function a(e){var s;return Object(C.a)(this,a),(s=t.call(this,e)).validateEmail=function(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},s.state={fields:{},errors:{},submitted:!1},s}return Object(M.a)(a,[{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;return e.name||(a=!1,t.name="Please enter a name"),e.email&&this.validateEmail(e.email)||(a=!1,t.email="Please enter a valid email"),e.message||(a=!1,t.message="Please enter a message"),this.setState({errors:t}),a}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleValidation()?this.handleSend():console.log("Form has errors")}},{key:"handleSend",value:function(){var e=this,t=this.state.fields,a={from_name:t.name,reply_to:t.email,message:t.message};B.a("service_h46c297","template_k7cyyjf",a,"1LSQsDOeO9NCaf389").then((function(t){e.setState({submitted:!0}),console.log(t),console.log(t.text)}),(function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"form-container container",children:this.state.submitted?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"contact-header contact",children:"Thanks!"}),Object(d.jsx)("p",{className:"contact",children:"I'll be in touch with you asap"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"contact-header",children:"contact"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("input",{className:"form-control",type:"name",name:"from_name",onChange:this.handleChange.bind(this,"name"),placeholder:"Name"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.name})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("input",{className:"form-control",type:"email",name:"reply_to",onChange:this.handleChange.bind(this,"email"),placeholder:"Email"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.email})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("textarea",{className:"form-control",type:"message",name:"message",onChange:this.handleChange.bind(this,"message"),placeholder:"Message"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.message})]}),Object(d.jsx)("div",{className:"d-grid -2 d-sm-block",children:Object(d.jsx)("button",{className:"btn submit-button",type:"submit",value:"Send",disabled:this.state.submitted,children:"submit"})})]})]})})}}]),a}(n.a.Component);var z=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(w,{})}),Object(d.jsx)(r.a,{path:"about",element:Object(d.jsx)(S,{})}),Object(d.jsx)(r.a,{path:"contact",element:Object(d.jsx)(Q,{})})]})]})})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(z,{})}))}},[[30,1,2]]]);
//# sourceMappingURL=main.25783200.chunk.js.map