(this["webpackJsonpfitness_trac.kr"]=this["webpackJsonpfitness_trac.kr"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(41),a=n.n(r),s=n(15),i=n(7),o=n(18),u=n(176),l=n(156),j="vb-token",b=function(){return localStorage.getItem(j)},d=function(e){localStorage.setItem(j,e)},h=function(){localStorage.removeItem(j)},O=n(1),p=function(e){var t=e.isLoggedIn,n=e.setToken,c=Object(l.a)(u.a)({background:"#4169e1",borderRadius:3,border:0,color:"white",height:40,padding:"0 30px",boxShadow:"black",fontSize:".9rem"});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header-tag",children:[Object(O.jsx)("h1",{children:"Fitness Trac.kr"}),t?Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),h(),n(null)},children:Object(O.jsx)(s.b,{to:"/Logout",children:"  LOGOUT "})})}):Object(O.jsxs)("div",{children:[Object(O.jsx)(s.b,{to:"/users/login",children:" Log In "}),Object(O.jsx)(s.b,{to:"/users/register",children:" Register "})]})]}),Object(O.jsx)("header",{children:Object(O.jsxs)("div",{id:"nav-bar",children:[Object(O.jsx)(c,{component:s.b,to:"/",children:"Home"}),Object(O.jsx)(c,{component:s.b,to:"/routines",children:"Routines"}),t?Object(O.jsx)(c,{component:s.b,to:"/my_routines",children:"My routines"}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(c,{component:s.b,to:"/activities",children:"Activities"})]})})]})},x=function(){return Object(O.jsx)("div",{id:"homePage",children:Object(O.jsx)("h1",{children:"Welcome to Fitness Trac.kr"})})},m=n(14),v=n.n(m),f=n(24),g=n(17),k="http://fitnesstrac-kr.herokuapp.com/api",y={makeRequest:function(){var e=Object(g.a)(v.a.mark((function e(t,n,c){var r,a,s,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b(),a={"Content-Type":"application/json"},r&&(a.authorization="Bearer ".concat(r)),s={method:n,headers:a},c&&(s.body=JSON.stringify(c)),console.log(k+t),console.log(s),e.next=9,fetch(k+t,s);case 9:return i=e.sent,e.next=12,i.json();case 12:return o=e.sent,console.log(o),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()},w=function(e){var t=e.setToken,n=Object(o.f)(),r=Object(c.useState)({username:"",password:""}),a=Object(i.a)(r,2),s=a[0],u=a[1];function l(){return(l=Object(g.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/users/login","POST",s);case 3:(c=e.sent).token?(d(c.token),console.log(c),t(c.token),n.push("/activities")):alert(c.error),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function j(e){var t=e.target.attributes.name.value,n=Object(f.a)({},s);n[t]=e.target.value,u(n)}return Object(O.jsxs)("div",{className:"conatiner",children:[Object(O.jsx)("h2",{children:"Login Here"}),Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),localStorage.setItem("username",s.username),function(){l.apply(this,arguments)}()},children:[Object(O.jsx)("input",{type:"text",required:!0,name:"username",value:s.username,onChange:j,placeholder:"username"}),Object(O.jsx)("input",{type:"password",required:!0,name:"password",value:s.password,onChange:j,placeholder:"password"}),Object(O.jsx)("button",{children:"Log In"})]})]})},N=function(){var e=Object(o.f)(),t=Object(c.useState)({username:"",password:""}),n=Object(i.a)(t,2),r=n[0],a=n[1];function s(){return(s=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.makeRequest("/users/register","POST",r);case 3:n=t.sent,console.log(n),n.token?(alert(n.message),e.push("/users/login")):alert(n.error),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function u(e){var t=e.target.attributes.name.value,n=Object(f.a)({},r);n[t]=e.target.value,a(n)}return Object(O.jsxs)("div",{className:"conatiner",children:[Object(O.jsx)("h2",{children:"Register here"}),Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),localStorage.setItem("username",r.username),function(){s.apply(this,arguments)}()},children:[Object(O.jsx)("input",{type:"text",required:!0,name:"username",value:r.username,onChange:u,placeholder:"username"}),Object(O.jsx)("input",{type:"password",required:!0,name:"password",value:r.password,onChange:u,placeholder:"password"}),Object(O.jsx)("button",{children:"Register"})]})]})},C=n(177),S=n(57),R=n.n(S),T=function(e){var t=e.name,n=e.goal,c=e.creatorName,r=e.activities,a=e.id;return Object(O.jsxs)("div",{className:"routine",children:[Object(O.jsxs)("h2",{children:["Name: ",t]}),Object(O.jsx)(C.a,{component:s.b,to:{pathname:"/edit_routine",state:{name:t,goal:n,creatorName:c,activities:r,id:a}},children:Object(O.jsx)(R.a,{})}),Object(O.jsxs)("h3",{children:["Goal: ",n]}),Object(O.jsxs)("p",{children:["User: ",c]}),Object(O.jsx)("h4",{children:"Activities"}),r.map((function(e,t){return Object(O.jsxs)("div",{className:"act",children:[Object(O.jsxs)("h5",{children:["Name: ",e.name]}),Object(O.jsxs)("p",{children:["Description: ",e.description]}),Object(O.jsxs)("h5",{children:["Count: ",e.count]}),Object(O.jsxs)("h5",{children:["Duration: ",e.duration]})]},t)}))]})},q=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)(Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("username"),e.next=4,y.makeRequest("/users/".concat(t,"/routines"),"GET");case 4:n=e.sent,r(n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);var a=n.map((function(e,t){return Object(O.jsx)(T,{name:e.name,goal:e.goal,creatorName:e.creatorName,activities:e.activities,id:e.id},t)}));return Object(O.jsxs)("div",{id:"my-routines",children:[Object(O.jsx)("div",{className:"link-to-cr",children:Object(O.jsx)(u.a,{component:s.b,to:"/create_routine",children:"Create New Routine"})}),Object(O.jsx)("div",{className:"my-routines-header",children:Object(O.jsx)("h1",{children:"My Routines"})}),Object(O.jsx)("div",{className:"my-routines-list",children:a})]})},A=n(172),I=n(174),_=n(169),P=function(){var e=Object(c.useState)({name:"",goal:"",isPublic:!1}),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(o.f)();function s(e,t){var c=Object(f.a)({},n);c[t]="isPublic"===t?!!e.target.checked:e.target.value,r(c),console.log(n)}function l(){return(l=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/routines","POST",n);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"create-routine",children:[Object(O.jsx)(A.a,{variant:"outlined",type:"text",name:"name",label:"Name",color:"primary",onChange:function(e){return s(e,"name")},required:!0}),Object(O.jsx)(A.a,{variant:"outlined",name:"goal",label:"Goal",color:"primary",onChange:function(e){return s(e,"goal")},required:!0}),Object(O.jsx)(I.a,{control:Object(O.jsx)(_.a,{color:"primary",onChange:function(e){return s(e,"isPublic")}}),label:"Public?",style:{marginLeft:"2rem",marginTop:"1rem"}}),Object(O.jsx)(u.a,{onClick:function(e){return a.push("/my_routines")},children:"Cancel"}),Object(O.jsx)(u.a,{onClick:function(e){e.preventDefault(),function(){l.apply(this,arguments)}(),a.push("/my_routines")},children:"Submit"})]})},D=n(164),E=function(){var e=Object(o.g)(),t=Object(o.f)(),n=e.state,r=n.id,a=n.name,l=n.goal,j=n.activities,b=Object(c.useState)({name:a,goal:l,isPublic:!1}),d=Object(i.a)(b,2),h=d[0],p=d[1];function x(e,t){var n=Object(f.a)({},h);n[t]="isPublic"===t?!!e.target.checked:e.target.value,p(n)}function m(){return(m=Object(g.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return event.preventDefault(),e.prev=1,e.next=4,y.makeRequest("/routines/".concat(r),"DELETE");case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),e.t0;case 9:t.push("/my_routines");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function k(){return(k=Object(g.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/routines/".concat(r),"PATCH",h);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:t.push("/my_routines");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function w(){return(w=Object(g.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/routine_activities/".concat(n),"DELETE");case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"edit-routine",children:[Object(O.jsx)("h1",{children:"Edit Routine"}),Object(O.jsx)(A.a,{defaultValue:a,label:"Name",type:"text",color:"primary",sx:{marginBottom:3},onChange:function(e){return x(e,"name")}}),Object(O.jsx)(A.a,{defaultValue:l,label:"Goal",type:"text",color:"primary",onChange:function(e){return x(e,"goal")}}),Object(O.jsx)(I.a,{control:Object(O.jsx)(_.a,{color:"primary",onChange:function(e){return x(e,"isPublic")}}),label:"Public?",style:{marginLeft:"2rem",marginTop:"1rem"}}),Object(O.jsx)("h4",{children:"Activities"}),Object(O.jsx)(u.a,{component:s.b,to:{pathname:"/add_activity",state:{routineId:r}},children:"Add New Activity"}),j.map((function(e,t){return Object(O.jsxs)("div",{className:"edit-routine-activities",children:[Object(O.jsxs)("h5",{children:["Name: ",e.name]}),Object(O.jsxs)("p",{children:["Description: ",e.description]}),Object(O.jsxs)("h5",{children:["Count: ",e.count]}),Object(O.jsxs)("h5",{children:["Duration: ",e.duration]}),Object(O.jsx)(C.a,{onClick:function(t){return function(e,t){return w.apply(this,arguments)}(t,e.routineActivityId)},children:Object(O.jsx)(D.a,{})}),Object(O.jsx)(C.a,{component:s.b,to:{pathname:"/change_activity",state:{activity:e}},children:Object(O.jsx)(R.a,{})})]},t)})),Object(O.jsx)(u.a,{onClick:function(e){return function(e){return m.apply(this,arguments)}(e)},children:"Delete"}),Object(O.jsx)(u.a,{onClick:function(e){return t.push("/my_routines")},children:"Cancel"}),Object(O.jsx)(u.a,{onClick:function(e){return function(e){return k.apply(this,arguments)}(e)},children:"Submit"})]})},L=n(181),B=n(180),F=n(173),G=n(167),V=n(170),H=function(){var e=Object(o.g)().state.routineId,t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),j=l[0],b=l[1],d=Object(o.f)(),h=Object(c.useState)({activityId:null,count:null,duration:null}),p=Object(i.a)(h,2),x=p[0],m=p[1];function k(e,t){var n=Object(f.a)({},x);n[t]=e.target.value,m(n),console.log(x)}function w(){return(w=Object(g.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.makeRequest("/routines/".concat(e,"/activities"),"POST",x);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),t.t0;case 8:d.goBack();case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}return Object(c.useEffect)(Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/activities","GET");case 3:t=e.sent,console.log(t),a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(O.jsxs)("div",{className:"new-activity",children:[Object(O.jsx)("h1",{children:"Add New Activity"}),Object(O.jsx)(L.a,{sx:{minWidth:120},children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(F.a,{id:"demo-simple-select-label",children:"Activity"}),Object(O.jsx)(G.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,sx:{width:220,marginBottom:2},label:"Activity",onChange:function(e){return function(e,t){e.target.value,b(e.target.value);var n=Object(f.a)({},x);n[t]=e.target.value.id,m(n)}(e,"activityId")},children:r.map((function(e,t){return Object(O.jsx)(V.a,{id:e,value:e,children:e.name},t)}))})]})}),Object(O.jsx)(A.a,{defaultValue:0,label:"Count",type:"number",sx:{marginBottom:2},onChange:function(e){return k(e,"count")}}),Object(O.jsx)(A.a,{defaultValue:0,label:"Duration",type:"number",sx:{marginBottom:2},onChange:function(e){return k(e,"duration")}}),Object(O.jsx)(u.a,{onClick:function(){return d.goBack()},children:"Cancel"}),Object(O.jsx)(u.a,{onClick:function(e){return function(e){return w.apply(this,arguments)}(e)},children:"Add"})]})},J=n(165),M=n(166),U=function(){var e=Object(o.f)(),t=Object(o.g)().state.activity,n=Object(c.useState)({count:"",duration:""}),r=Object(i.a)(n,2),a=r[0],s=r[1];function u(e,t){var n=Object(f.a)({},a);n[t]=e.target.value,s(n),console.log(a)}function l(){return(l=Object(g.a)(v.a.mark((function n(c){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.makeRequest("/routine_activities/".concat(t.routineActivityId),"PATCH",a);case 3:n.sent,n.next=9;break;case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:e.goBack();case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"change-activity",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsx)(A.a,{defaultValue:t.count,label:"Count",type:"number",sx:{marginBottom:3},onChange:function(e){return u(e,"count")}}),Object(O.jsx)(A.a,{defaultValue:t.duration,label:"Duration",type:"number",onChange:function(e){return u(e,"duration")}}),Object(O.jsxs)("div",{children:[Object(O.jsx)(C.a,{onClick:function(t){return e.goBack()},children:Object(O.jsx)(J.a,{})}),Object(O.jsx)(C.a,{onClick:function(e){return function(e){return l.apply(this,arguments)}(e)},children:Object(O.jsx)(M.a,{})})]})]})},z=function(){return Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h1",{children:" You are logged out!!"}),Object(O.jsx)("h2",{children:Object(O.jsx)(s.b,{to:"/users/login",children:" Please click to Login "})})]})},W=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)(Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/routines","GET");case 3:t=e.sent,console.log(t),r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);var a=n.map((function(e,t){return e.isPublic?Object(O.jsxs)("div",{className:"routine",children:[Object(O.jsxs)("h2",{children:["Name: ",e.name]}),Object(O.jsxs)("h3",{children:["Goal: ",e.goal]}),Object(O.jsxs)("p",{children:["User: ",e.creatorName]}),Object(O.jsx)("h5",{children:"Activities"}),e.activities.map((function(e,t){return Object(O.jsxs)("div",{className:"act",children:[Object(O.jsxs)("h3",{children:["Name: ",e.name]}),Object(O.jsxs)("p",{children:["Description: ",e.description]}),Object(O.jsxs)("h5",{children:["Count: ",e.count]}),Object(O.jsxs)("h5",{children:["Duration: ",e.duration]})]},t)}))]},"routine-id ".concat(t)):Object(O.jsx)(O.Fragment,{})}));return console.log(a),Object(O.jsx)("div",{id:"routines-page",children:Object(O.jsxs)("div",{className:"routine-header",children:[Object(O.jsx)("h1",{children:"Routines"}),Object(O.jsx)("div",{className:"routine-list",children:a})]})})},Y=function(e){var t=e.setRender,n=Object(c.useState)({name:"",description:""}),r=Object(i.a)(n,2),a=r[0],s=r[1];function o(){return(o=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/activities","POST",a);case 3:n=e.sent,t(n.name),console.log(n),"NotFound"===n.name&&alert(n.error),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(e){var t=e.target.attributes.name.value,n=Object(f.a)({},a);n[t]=e.target.value,s(n)}return Object(O.jsxs)("div",{className:"conatiner",children:[Object(O.jsx)("h2",{children:"Make New Activities"}),Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),function(){o.apply(this,arguments)}()},children:[Object(O.jsx)("input",{type:"text",required:!0,name:"name",value:a.title,onChange:u,placeholder:"Activity title"}),Object(O.jsx)("input",{type:"text",required:!0,name:"description",value:a.description,onChange:u,placeholder:"description"}),Object(O.jsx)("button",{children:"Submit"})]})]})},K=function(e){var t=e.isLoggedIn,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),l=u[0],j=u[1];Object(c.useEffect)(Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.makeRequest("/activities","GET");case 3:t=e.sent,console.log(t),s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l]);var b=a.map((function(e,t){return Object(O.jsxs)("div",{className:"activity-container",children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("p",{children:e.description})]},"activity-id-".concat(t))}));return Object(O.jsx)("div",{children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Y,{setRender:j}),Object(O.jsx)("h2",{className:"title",children:" All Activities"}),Object(O.jsx)("div",{className:"activities-container",children:b})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"title",children:" All Activities"}),Object(O.jsx)("div",{className:"activities-container",children:b})]})})},Q=function(){var e=Object(c.useState)(b()),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!!n),u=Object(i.a)(a,2),l=u[0],j=u[1];return Object(c.useEffect)((function(){j(!!n)}),[n]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(p,{isLoggedIn:l,setToken:r}),Object(O.jsx)("main",{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/users/register",children:Object(O.jsx)(N,{})}),Object(O.jsx)(o.a,{path:"/users/login",children:Object(O.jsx)(w,{setToken:r})}),Object(O.jsx)(o.a,{path:"/activities",children:Object(O.jsx)(K,{isLoggedIn:l})}),Object(O.jsx)(o.a,{path:"/routines",children:Object(O.jsx)(W,{})}),Object(O.jsx)(o.a,{path:"/my_routines",children:Object(O.jsx)(q,{})}),Object(O.jsx)(o.a,{path:"/create_routine",children:Object(O.jsx)(P,{})}),Object(O.jsx)(o.a,{path:"/edit_routine",children:Object(O.jsx)(E,{})}),Object(O.jsx)(o.a,{path:"/add_activity",children:Object(O.jsx)(H,{})}),Object(O.jsx)(o.a,{path:"/change_activity",children:Object(O.jsx)(U,{})}),Object(O.jsx)(o.a,{path:"/Logout",children:Object(O.jsx)(z,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(x,{})})]})})]})})};a.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(Q,{})}),document.getElementById("app"))}},[[122,1,2]]]);
//# sourceMappingURL=main.fe2871a6.chunk.js.map