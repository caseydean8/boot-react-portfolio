(this["webpackJsonpboot-react-portfolio"]=this["webpackJsonpboot-react-portfolio"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(9),o=a.n(i),r=(a(24),a(5)),c=a(2),l=a(4),d=(a(25),a(0)),b=function(){var e=Object(s.useState)(window.innerWidth>768),t=Object(l.a)(e,2),a=t[0],n=t[1],i=function(){n(window.innerWidth>768)};Object(s.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}));var o=Object(c.f)(),b={color:"#00b4e2"},h=[];return[["/","home"],["/about","about"],["/contact","contact"]].forEach((function(e,t){a?h.push(Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link",to:e[0],style:function(e){return e.isActive?b:null},children:e[1]})},t)):h.push(Object(d.jsx)("li",{className:"nav-item","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent",onClick:function(){return o(e[0])},children:Object(d.jsx)(r.b,{className:"nav-link",to:e[0],style:function(e){return e.isActive?b:null},children:e[1]})},t))})),Object(d.jsx)("nav",{className:"navbar navbar-expand-md fixed-top navbar-light",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{id:"cdc",children:"Casey Dean Carroll"}),Object(d.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",children:Object(d.jsx)("ul",{className:"navbar-nav ml-auto",children:h})})]})})},h=a(10),m=a.n(h),u=function(){return Object(d.jsxs)("div",{className:"container main",children:[Object(d.jsx)("h1",{className:"heading",children:"let's go"}),Object(d.jsx)("div",{className:"typed-container",children:Object(d.jsx)(m.a,{className:"typed-text",strings:["React","Node","Mongo","MySQL","Express","jQuery"],typeSpeed:100,backSpeed:60,backDelay:2100,showCursor:!1,loop:!0})}),Object(d.jsx)("h5",{className:"subheading",children:"Welcome to the Portfolio of Casey Dean Carroll, Full Stack Developer"})]})},p=a(15),j=(a(27),a(28),function(e){return Object(d.jsx)("div",{className:"modal fade",id:"modal-".concat(e.id),tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h1",{className:"modal-title",id:"exampleModalLabel",children:e.title?e.title:"title here"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:e.text?e.text:"Does not wisdom call out?\n\t\tDoes not understanding raise her voice?"}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("a",{className:"btn modal-link",target:"_blank",rel:"noopener noreferrer",href:e.link,children:"website"}),Object(d.jsx)("a",{className:"btn modal-link",target:"_blank",rel:"noopener noreferrer",href:e.repo,children:"github"})]})]})})})});var g=function(e){return Object(d.jsxs)("div",{id:e.id,className:"project col-md-6 col-lg-4 p-0",children:[Object(d.jsx)("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#modal-".concat(e.id),children:Object(d.jsx)("img",{className:"project-image",src:e.image,alt:e.alt,width:"600",height:"338"})}),Object(d.jsx)(j,Object(p.a)({},e))]})},f=(a(29),a.p+"static/media/Submarine.f39af7ba.webp"),x=a.p+"static/media/shopity.1f787bc4.webp",v=a.p+"static/media/burgertime.54bdbde4.webp",O=[{id:"submarine",image:f,link:"https://blooming-peak-13476.herokuapp.com/",title:"Submarine",repo:"https://github.com/caseydean8/submarine",text:"Submarine is a subscription tracking app built with the react, node, mongo, express, and bootstrap. \n You can take a look around with username 'guest' and password 'guest'."},{id:"shopping-app",image:x,link:"https://shopity.herokuapp.com/",title:"Shopity",repo:"https://github.com/caseydean8/shopity-app",text:"Shopity is helpful shopping assistant that allows users to login and create a list of pantry items, which can then moved onto a shopping list and then into a virtual cart. Shopity was created with the Pug template engine, an SQL database with the sequelize.js ORM, and express"},{id:"book-safe",image:a.p+"static/media/library.2a585af1.webp",link:"https://book-safe-react.herokuapp.com/",title:"Book Safe",repo:"https://github.com/caseydean8/book-safe",text:"Book Safe is an full stack MERN application that allows the user to search for a book title and receive information, including the books author or authors, a thumbnail of the book cover, and a link to the book on google books. The user can then save the book information on a remote database for future reference, and delete the book from that database if desired.\n \n The application utilizes the following technologies: \n React \n Node \n Express \n MongoDB \n Heroku \n axios \n bootstrap"},{id:"burger-time",image:v,link:" https://obscure-lake-72708.herokuapp.com/",title:"burger time",repo:"https://github.com/caseydean8/burger",text:"Burger time is an application using the MVC design pattern and object relational mapping to allow a user to enter a burger and 'eat' it with a button click. User data is stored in a mysql database. \n \n This project is built with: \n Node.js \n Express framework for routing \n Handlebars template engine \n mysql for database management"},{id:"crystal-vibes",image:a.p+"static/media/crystal-vibes.28c33c22.webp",link:"https://caseydean8.github.io/crystal-vibes/",title:"Crystal Vibes",repo:"https://github.com/caseydean8/crystal-vibes",text:"This project uses javascript and jQuery to render a number guessing game. \n A random number between 19 and 120 is displayed, and a random number between 1 and 12 is assigned to each of four crystal buttons but is not displayed. \n When a player clicks on a button, the value is added to a score below the buttons and if the player can match the random number displayed, a win is recorded. If the player goes over a loss is recorded. \n Button values are displayed in the console for testing."},{id:"react-ahoy",image:a.p+"static/media/ahoy.d1a2601c.webp",link:"https://caseydean8.github.io/ahoy/",title:"Ahoy",repo:"https://github.com/caseydean8/ahoy",text:"Ahoy is image based guessing game built with react. \n The game contains twelve images and the user is challenged with clicking on them without clicking on the same image twice."}],y=function(){return Object(d.jsx)("div",{className:"project-container row",children:O.map((function(e,t){return Object(d.jsx)(g,{id:e.id,image:e.image,alt:"".concat(e.id," image"),title:e.title,text:e.text,link:e.link,repo:e.repo},t)}))})},k=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(y,{})]})};function w(){return Object(d.jsxs)("div",{className:"form-container container",children:[Object(d.jsx)("h1",{className:"contact-header",children:"about"}),Object(d.jsx)("p",{children:"I build dynamic user experiences and robust applications for any of your web development needs, utilizing the most cutting edge technologies and frameworks as well as classic web architectures when necessary to bring your project to life. From div to database to deployed, I've got you covered."})]})}var N=a(6),S=a(11),C=a(14),E=a(13),M=a(12),D=function(e){Object(C.a)(a,e);var t=Object(E.a)(a);function a(e){var s;return Object(N.a)(this,a),(s=t.call(this,e)).validateEmail=function(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},s.state={fields:{},errors:{},submitted:!1},s}return Object(S.a)(a,[{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;return e.name||(a=!1,t.name="Please enter a name"),e.email&&this.validateEmail(e.email)||(a=!1,t.email="Please enter a valid email"),e.message||(a=!1,t.message="Please enter a message"),this.setState({errors:t}),a}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleValidation()?this.handleSend():console.log("Form has errors")}},{key:"handleSend",value:function(){var e=this,t=this.state.fields,a={from_name:t.name,reply_to:t.email,message:t.message};M.a("service_h46c297","template_k7cyyjf",a,"1LSQsDOeO9NCaf389").then((function(t){e.setState({submitted:!0}),console.log(t),console.log(t.text)}),(function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"form-container container",children:this.state.submitted?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"contact-header",children:"Thanks!"}),Object(d.jsx)("p",{children:"I'll be in touch with you asap"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"contact-header",children:"contact"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("input",{className:"form-control",type:"name",name:"from_name",onChange:this.handleChange.bind(this,"name"),placeholder:"Name"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.name})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("input",{className:"form-control",type:"email",name:"reply_to",onChange:this.handleChange.bind(this,"email"),placeholder:"Email"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.email})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("textarea",{className:"form-control",type:"message",name:"message",onChange:this.handleChange.bind(this,"message"),placeholder:"Message"}),Object(d.jsx)("span",{className:"error-msg",children:this.state.errors.message})]}),Object(d.jsx)("div",{className:"d-grid -2 d-sm-block",children:Object(d.jsx)("button",{className:"btn submit-button",type:"submit",value:"Send",disabled:this.state.submitted,children:"submit"})})]})]})})}}]),a}(n.a.Component);var _=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",element:Object(d.jsx)(k,{})}),Object(d.jsx)(c.a,{path:"about",element:Object(d.jsx)(w,{})}),Object(d.jsx)(c.a,{path:"contact",element:Object(d.jsx)(D,{})})]})]})})};o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}))}},[[30,1,2]]]);
//# sourceMappingURL=main.0f31f0fc.chunk.js.map