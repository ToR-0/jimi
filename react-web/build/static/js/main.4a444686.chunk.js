(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"url":"http://127.0.0.1:5002/","uri":"api/1.0/"}')},,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(25),i=n.n(s),o=(n(32),n(33),n(10)),r=n(3),u=n(63),l=function(){return sessionStorage.getItem("active")||!0},d=function(){return sessionStorage.getItem("CSRF")||null},h=function(){(new u.a).remove("jimiAuth"),sessionStorage.setItem("active",!1),sessionStorage.removeItem("CSRF")},m=function(e){sessionStorage.setItem("active",!0),sessionStorage.setItem("CSRF",e)},j=n(17),b=n(20),f=n(13),p=n(4),O=n(5),g=n(8),x=n(7),v=n(6),N=n(2);n(16),n(34);function C(e){var t={method:"GET",mode:N.cosMode,credentials:"include"};fetch(N.url+N.uri+"auth/logout/",t),h();var n=Object(r.g)();return setTimeout((function(){n.push("/login")}),2500),Object(a.jsxs)("div",{className:"fullscreen",children:[Object(a.jsx)("h1",{children:"jimi"}),Object(a.jsx)("div",{className:"outer",children:Object(a.jsx)("div",{className:"inner",children:Object(a.jsx)("h3",{children:"Successfully logged out"})})})]})}var k=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={username:null,password:null,otpRequired:!1,otp:null,failedLogin:!1},a.submit=a.submit.bind(Object(g.a)(a)),a.change=a.change.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.setState({failedLogin:!1}),this.state.otpRequired){var n={method:"POST",mode:N.cosMode,body:JSON.stringify({username:this.state.username,password:this.state.password,otp:this.state.otp})};fetch(N.url+N.uri+"auth/",n).then((function(e){if(e.ok)return e;throw e})).then((function(e){t.props.history.push("/index")})).catch((function(e){t.setState({otpRequired:!1}),t.setState({failedLogin:!0})}))}else{var a={method:"POST",mode:N.cosMode,body:JSON.stringify({username:this.state.username,password:this.state.password})};fetch(N.url+N.uri+"auth/",a).then((function(e){if(e.ok)return console.log(e),e.json();throw e})).then((function(e){m(e.CSRF),t.props.history.push("/")})).catch((function(e){t.setState({otpRequired:!0})}))}}},{key:"change",value:function(e){var t=e.target,n=t.value,a=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},a,n))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"fullscreen",children:[Object(a.jsx)("h1",{children:"jimi"}),Object(a.jsx)("div",{className:"outer",children:Object(a.jsx)("div",{className:"inner ".concat(this.state.failedLogin?"shake":""),children:Object(a.jsxs)("form",{onSubmit:this.submit,children:[Object(a.jsx)("h3",{children:"Login"}),this.state.failedLogin?Object(a.jsx)("p",{className:"failedLoginAlert",children:Object(a.jsx)("b",{children:"Login details appear to be invalid!"})}):Object(a.jsx)("p",{className:"failedLoginAlert",children:Object(a.jsx)("b",{children:"\xa0"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"username",className:"form-control textbox",placeholder:"Username",autoComplete:"off",onChange:this.change})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",name:"password",className:"form-control textbox",placeholder:"password",autoComplete:"off",onChange:this.change})}),this.state.otpRequired&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"otp",className:"form-control textbox",placeholder:"One Time Password",autoComplete:"off",onChange:this.change})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button",children:"Login"})]})})})]})}}]),n}(c.Component);var S=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return Object(a.jsx)(r.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return Object(a.jsx)(t,Object(j.a)({},e))}}))};var y=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return function(e){var t=Object(r.g)(),n={method:"GET",credentials:"include",mode:N.cosMode};fetch(N.url+N.uri+"auth/poll/",n).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){m(e.CSRF)})).catch((function(e){h(),t.push("/login")}))}(),Object(a.jsx)(r.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return l()?Object(a.jsx)(t,Object(j.a)({},e)):Object(a.jsx)(r.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};n(43);var w=function(e){var t,n=new Date(0);return n.setUTCSeconds(e.lastUpdateTime),Object(a.jsx)("div",{className:"conductItemContainer",children:Object(a.jsxs)("div",{className:"conductItem",children:[Object(a.jsx)("a",{className:"conductTitle",href:"/conduct/?conductID="+e.id,title:e.name.length>30?e.name:"",children:(t=e.name,t.length>30?t.substring(0,30)+"...":t)}),Object(a.jsxs)("div",{className:"conductRight",children:[Object(a.jsxs)("p",{className:"conductLastEdit",children:["Last Edit: ",n.toLocaleString()]}),Object(a.jsx)("a",{className:"conductDeleteLink",onClick:function(t){return e.deleteConductClickHandler(t,e.id,e.name)},children:"Delete"}),Object(a.jsx)("p",{className:"conductRightOptions",children:"/"}),Object(a.jsx)("a",{className:"conductEditLink",href:"/conductSettings/?conductID="+e.id+"&edit=True",children:"Edit"})]}),Object(a.jsxs)("p",{className:"conductState",children:["State: ",e.state]})]})})};n(44);function T(e){var t=Date.now();return Object(a.jsx)("div",{className:"statusItemContainer",children:Object(a.jsx)("div",{className:"statusItem ".concat(e.enabled?"statusItemEnabled":""," ").concat(e.startCheck>0?"statusItemRunning":""," ").concat(e.enabled&&e.startCheck>0&&e.startCheck+e.maxDuration<t?"statusItemCrashed":""," "),title:e.name})})}var L=function(e){return Object(a.jsx)("div",{children:e.triggers.map((function(e){return Object(a.jsx)(T,{name:e.name,enabled:e.enabled,startCheck:e.startCheck,maxDuration:e.maxDuration},e._id)}))})};n(45);function D(){var e={method:"GET",credentials:"include",mode:N.cosMode};return fetch(N.url+N.uri+"models/trigger/all/",e).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.results}))}var E=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={triggers:[]},a.updateTriggers=a.updateTriggers.bind(Object(g.a)(a)),D().then((function(e){a.setState({triggers:e}),a.updateTriggers()})),a}return Object(O.a)(n,[{key:"updateTriggers",value:function(){var e=this;setTimeout((function(){D().then((function(t){e.setState({triggers:t}),e.updateTriggers()}))}),1e3)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"pageContent1",children:[Object(a.jsx)("h1",{children:"Trigger Status:"}),Object(a.jsx)("br",{}),Object(a.jsx)(L,{triggers:this.state.triggers})]})}}]),n}(c.Component),R=(n(46),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={username:null,name:null,password:"",password1:"",password2:"",updated:!1,updateFailed:!1,msg:"",loading:!0},a.change=a.change.bind(Object(g.a)(a)),a.submit=a.submit.bind(Object(g.a)(a));var c={method:"GET",credentials:"include",mode:N.cosMode};return fetch(N.url+N.uri+"auth/myAccount/",c).then((function(e){if(e.ok)return e.json()})).then((function(e){a.setState({username:e.username,name:e.name,loading:!1})})),a}return Object(O.a)(n,[{key:"submit",value:function(e){var t=this;if(e.preventDefault(),this.state.password1!==this.state.password2)return this.setState({msg:"Passwords do not match"}),this.setState({updateFailed:!0}),void setTimeout((function(){t.setState({updateFailed:!1})}),1e3);var n={CSRF:d(),name:this.state.name};""!==this.state.password1&&(n.password=this.state.password,n.password1=this.state.password1);var a={method:"POST",credentials:"include",mode:N.cosMode,body:JSON.stringify(n)};fetch(N.url+N.uri+"auth/myAccount/",a).then((function(e){if(e.ok)return e;throw e})).then((function(e){t.setState({msg:"Saved"}),t.setState({updated:!0}),setTimeout((function(){t.setState({updated:!1})}),1e3)})).catch((function(e){t.setState({msg:"Error: Could not save data"}),t.setState({updateFailed:!0})}))}},{key:"change",value:function(e){this.setState({updateFailed:!1,msg:""});var t=e.target,n=t.value,a=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},a,n))}},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("span",{children:"Loading page..."}):Object(a.jsx)("div",{className:"pageContent1",children:Object(a.jsxs)("form",{onSubmit:this.submit,children:[Object(a.jsx)("h3",{children:"Your Details"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"form-group",children:["General Details",Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"form-group",children:["Username:",Object(a.jsx)("input",{type:"text",name:"username",className:"form-control textbox",autoComplete:"off",value:this.state.username,disabled:"true",onChange:this.change})]}),Object(a.jsxs)("div",{className:"form-group",children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",className:"form-control textbox",autoComplete:"off",value:this.state.name,onChange:this.change})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"form-group",children:["Change Password",Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"form-group",children:["Current Password:",Object(a.jsx)("input",{type:"password",name:"password",className:"form-control textbox",autoComplete:"off",onChange:this.change})]}),Object(a.jsxs)("div",{className:"form-group",children:["New Password:",Object(a.jsx)("input",{type:"password",name:"password1",className:"form-control textbox ".concat("Passwords do not match"==this.state.msg?"alertErrorBorder":""),autoComplete:"off",onChange:this.change})]}),Object(a.jsxs)("div",{className:"form-group",children:["Confirm New Password:",Object(a.jsx)("input",{type:"password",name:"password2",className:"form-control textbox ".concat("Passwords do not match"==this.state.msg?"alertErrorBorder":""),autoComplete:"off",onChange:this.change})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button small ".concat(this.state.updated?"saved":""," ").concat(this.state.updateFailed?"error":""),children:"Update"}),Object(a.jsx)("p",{className:"resultMessage ".concat(this.state.updateFailed?"alertError":"alert"," ").concat(this.state.updated||this.state.updateFailed?"":"hide"),children:Object(a.jsx)("b",{children:this.state.msg})})]})})}}]),n}(c.Component));n(47);var P=function(e){return Object(a.jsx)("div",{children:e.conducts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(t){return Object(a.jsx)(w,{id:t._id,name:t.name,lastUpdateTime:t.lastUpdateTime,state:t.enabled?"Enabled":"Disabled",deleteConductClickHandler:e.deleteConductClickHandler},t._id)}))})},I=(n(48),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={conducts:[],filter:""};var c={method:"GET",credentials:"include",mode:N.cosMode};return fetch(N.url+N.uri+"conducts/",c).then((function(e){if(e.ok)return e.json()})).then((function(e){a.setState({conducts:e.results})})),a.change=a.change.bind(Object(g.a)(a)),a.DeleteConduct=a.DeleteConduct.bind(Object(g.a)(a)),a.NewConduct=a.NewConduct.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"NewConduct",value:function(){this.props.history.push("/conductSettings/")}},{key:"DeleteConduct",value:function(e,t,n){var a=this;if(window.confirm("Please confirm removal of conduct named "+n)){var c={method:"DELETE",credentials:"include",mode:N.cosMode};fetch(N.url+N.uri+"models/conduct/"+t+"/",c).then((function(e){throw e.ok&&a.setState({conducts:a.state.conducts.filter((function(e){return e._id!==t}))}),e})).catch((function(e){console.log("Could not delete conduct: "+t)}))}}},{key:"change",value:function(e){var t=e.target,n=t.value,a=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},a,n))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"pageContent1",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",name:"filter",className:"form-control textbox conductSearch",placeholder:"Search conducts",onChange:this.change}),Object(a.jsx)("button",{className:"btn btn-primary btn-block button conductNew",onClick:this.NewConduct,children:"+ Create New"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)(P,{conducts:this.state.conducts,filter:this.state.filter,deleteConductClickHandler:this.DeleteConduct})})]})}}]),n}(c.Component)),F=(n(49),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={location:""};var c=e.location.search,s=new URLSearchParams(c).get("conductID");return/^[A-Za-z0-9]+$/.test(s)&&(a.state.location=s),a}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"pageContent0",children:Object(a.jsx)("iframe",{className:"conductFrame",src:N.url+"conductEditor/?conductID="+this.state.location})})}}]),n}(c.Component)),M=(n(50),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={type:"New",name:"",status:!1,comment:"",loading:!0,updateStatus:{id:null,msg:""}},a.change=a.change.bind(Object(g.a)(a)),a.submit=a.submit.bind(Object(g.a)(a));var c=e.location.search,s=new URLSearchParams(c).get("conductID");if("True"===new URLSearchParams(c).get("edit")){var i={method:"GET",credentials:"include",mode:N.cosMode};fetch(N.url+N.uri+"models/conduct/"+s+"/",i).then((function(e){if(e.ok)return e.json()})).then((function(e){a.setState({name:e.name,status:e.status,comment:e.comment,type:"Update",loading:!1})}))}else a.state.loading=!1;return a}return Object(O.a)(n,[{key:"submit",value:function(e){e.preventDefault();var t=this.props.location.search,n=new URLSearchParams(t).get("conductID"),a=new URLSearchParams(t).get("edit"),c={CSRF:d(),name:this.state.name,comment:this.state.comment,enabled:this.state.enabled};if("True"===a){var s={method:"POST",credentials:"include",mode:N.cosMode,body:JSON.stringify(c)};fetch(N.url+N.uri+"models/conduct/"+n+"/",s).then((function(e){if(e.ok)return e;throw e})).then((function(e){})).catch((function(e){}))}else{var i={method:"PUT",credentials:"include",mode:N.cosMode};fetch(N.url+N.uri+"models/conduct/",i).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){i.method="POST",i.body=JSON.stringify(c),fetch(N.url+N.uri+"models/conduct/"+e._id+"/",i).then((function(e){if(e.ok)return e;throw e})).then((function(e){})).catch((function(e){}))})).catch((function(e){}))}}},{key:"change",value:function(e){this.setState({updateFailed:!1,msg:""});var t=e.target,n=t.value,a=t.name;"checkbox"===t.type?t.checked?this.state.hobbies[n]=n:this.state.hobbies.splice(n,1):this.setState(Object(f.a)({},a,n))}},{key:"render",value:function(){return this.state.loading?Object(a.jsx)("span",{children:"Loading page..."}):Object(a.jsx)("div",{className:"pageContent1",children:Object(a.jsxs)("form",{onSubmit:this.submit,children:[Object(a.jsx)("h3",{children:"Conduct Details"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"form-group",children:["General Details",Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"form-group",children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",className:"form-control textbox",autoComplete:"off",value:this.state.name,onChange:this.change})]}),Object(a.jsxs)("div",{className:"form-group",children:["Comment:",Object(a.jsx)("input",{type:"text",name:"comment",className:"form-control textbox",autoComplete:"off",value:this.state.comment,onChange:this.change})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block button small",children:this.state.type})]})})}}]),n}(c.Component));n(51);var U=function(e){return Object(a.jsx)("div",{className:"pluginItemContainer",children:Object(a.jsx)("a",{className:"pluginLink",href:"plugin/?pluginName="+e.name,children:Object(a.jsx)("div",{className:"pluginItem",children:Object(a.jsx)("span",{className:"pluginTitle",children:e.name})})})})};n(52);var A=function(e){return Object(a.jsx)("div",{children:e.plugins.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(e){return Object(a.jsx)(U,{name:e.name},e._id)}))})},G=(n(53),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={plugins:[],filter:""};var c={method:"GET",credentials:"include",mode:N.cosMode};return fetch(N.url+N.uri+"plugins/",c).then((function(e){if(e.ok)return e.json()})).then((function(e){a.setState({plugins:e.results})})),a.change=a.change.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"change",value:function(e){var t=e.target,n=t.value,a=t.name;"checkbox"===t.type||this.setState(Object(f.a)({},a,n))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"pageContent1",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"filter",className:"form-control textbox pluginSearch",placeholder:"Search Plugins",onChange:this.change})}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)(A,{plugins:this.state.plugins,filter:this.state.filter})})]})}}]),n}(c.Component)),J=(n(54),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(p.a)(this,n),(a=t.call(this,e)).state={location:""};var c=e.location.search,s=new URLSearchParams(c).get("pluginName");return/^[A-Za-z]+$/.test(s)&&(a.state.location=s),a}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"pageContent0",children:Object(a.jsx)("iframe",{className:"pluginFrame",src:N.url+"plugin/"+this.state.location+"/"})})}}]),n}(c.Component)),_=(n(55),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"pageContent0",children:Object(a.jsx)("iframe",{className:"modelEditorFrame",src:N.url+"model/"})})}}]),n}(c.Component)),q=(n(56),function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"pageContent0",children:Object(a.jsx)("iframe",{className:"codifyFrame",src:N.url+"codify/"})})}}]),n}(c.Component));n(57);var H=function(e){return Object(a.jsxs)(o.a,{children:[Object(a.jsxs)("div",{class:"container",id:"topbar",children:[Object(a.jsx)(o.b,{exact:!0,className:"home",activeClassName:"homeActive",to:"/",children:"jimi"}),Object(a.jsx)(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/status",children:"Status"}),Object(a.jsx)(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/conducts",children:"Conducts"}),Object(a.jsx)(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/plugins",children:"Plugins"}),Object(a.jsx)(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/codify",children:"Codify"}),Object(a.jsx)(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/modelEditor",children:"Model Editor"}),Object(a.jsxs)("div",{class:"container",id:"topbar-right",children:[l?Object(a.jsx)(o.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/logout",children:"Logout"}):null,l?Object(a.jsx)(o.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/myAccount",children:"My Account"}):null,l?Object(a.jsx)(o.b,{exact:!0,className:"link linkRight",activeClassName:"active",to:"/administration",children:"Administration"}):null]})]}),Object(a.jsxs)(r.d,{children:[Object(a.jsx)(S,{path:"/login",component:k}),Object(a.jsx)(y,{path:"/logout",component:C}),Object(a.jsx)(y,{path:"/status",component:E}),Object(a.jsx)(y,{path:"/conducts",component:I}),Object(a.jsx)(y,{path:"/conduct",component:F}),Object(a.jsx)(y,{path:"/conductSettings",component:M}),Object(a.jsx)(y,{path:"/plugins",component:G}),Object(a.jsx)(y,{path:"/plugin",component:J}),Object(a.jsx)(y,{path:"/codify",component:q}),Object(a.jsx)(y,{path:"/modelEditor",component:_}),Object(a.jsx)(y,{path:"/myAccount",component:R}),Object(a.jsx)(y,{path:"/administration",component:E}),Object(a.jsx)(y,{path:"/",component:E})]})]})};n(58);n(59);var B=function(){return Object(a.jsx)("div",{id:"pageContent-wrapper",children:Object(a.jsx)(H,{})})};i.a.render(Object(a.jsx)(B,{}),document.getElementById("root"))}],[[60,1,2]]]);
//# sourceMappingURL=main.4a444686.chunk.js.map