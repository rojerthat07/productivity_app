(function(e){function t(t){for(var r,a,s=t[0],i=t[1],d=t[2],l=0,b=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,s=1;s<o.length;s++){var i=o[s];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4f3e":function(e,t,o){e.exports=o.p+"media/click.200de8e8.mp3"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n={class:"app"};function c(e,t,o,c,a,s){var i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",n,[Object(r["g"])(i)])}var a={name:"App"};a.render=c;var s=a,i=o("6c02"),d=Object(r["E"])("data-v-7f21fcd6");Object(r["s"])("data-v-7f21fcd6");var u={class:"todos-container"},l={class:"todos__header"},b={class:"todos__header-one"},p={class:"todos__date todos__date--date"},O={class:"todos__date todos__date--month"},f={class:"todos__date todos__date--year"},j={class:"todos__header-two"},m={class:"todos__date todos__date--day"},g={class:"todos"},h={class:"todos__item-container"};Object(r["q"])();var v=d((function(e,t,o,n,c,a){var s=Object(r["w"])("Header"),i=Object(r["w"])("add-todo");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(s),Object(r["g"])("div",u,[Object(r["g"])("div",l,[Object(r["g"])("div",b,[Object(r["g"])("div",p,Object(r["y"])(c.date.getDate()),1),Object(r["g"])("div",O,Object(r["y"])(c.months[c.date.getMonth()]),1),Object(r["g"])("div",f,Object(r["y"])(c.date.getFullYear()),1)]),Object(r["g"])("div",j,[Object(r["g"])("div",m,Object(r["y"])(c.days[c.date.getDay()]),1)])]),Object(r["g"])("div",g,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.allTodos,(function(t){return Object(r["p"])(),Object(r["d"])("div",{key:t.id,class:"todos__item"},[Object(r["g"])("label",h,[Object(r["g"])("i",{class:"fas fa-check-circle todos__checkbox",onClick:function(o){return e.deleteTodo(t.id)}},null,8,["onClick"]),Object(r["f"])(" "+Object(r["y"])(t.title),1)])])})),128)),Object(r["g"])(i)])])],64)})),_=o("5530"),k=o("5502"),y={class:"add"};function w(e,t,o,n,c,a){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",y,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)})},[Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.title=e}),placeholder:"Add Todo"},null,512),[[r["A"],c.title]])],32)])])}var S={data:function(){return{title:""}},name:"AddTodo",methods:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["addTodo"])),{},{onSubmit:function(e){e.preventDefault(),console.log(this.title),this.addTodo(this.title),this.title=""}})};S.render=w;var x=S,A=o("cf05"),T=o.n(A),C={class:"header"},D=Object(r["g"])("div",{class:"header__brand"},[Object(r["g"])("img",{alt:"Vue logo",src:T.a}),Object(r["g"])("div",{class:"header__title"},"Productivity App")],-1),B={class:"header__nav"},P=Object(r["f"])("Pomodoro"),R=Object(r["f"])("Todos"),U=Object(r["f"])("Logout");function Y(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",C,[D,Object(r["g"])("div",B,[Object(r["g"])(s,{to:"/pomodoro"},{default:Object(r["C"])((function(){return[P]})),_:1}),Object(r["g"])(s,{to:"/todos"},{default:Object(r["C"])((function(){return[R]})),_:1}),Object(r["g"])(s,{onClick:a.onLogout,to:"/"},{default:Object(r["C"])((function(){return[U]})),_:1},8,["onClick"])])])}var E={name:"Header",methods:{onLogout:function(){localStorage.setItem("token","")}}};E.render=Y;var I=E,M=o("bc3a"),L=o.n(M),V={name:"Todos",components:{AddTodo:x,Header:I},data:function(){return{date:new Date,months:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],days:["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]}},methods:Object(_["a"])({},Object(k["b"])(["fetchTodos","deleteTodo"])),computed:Object(_["a"])({},Object(k["c"])(["allTodos"])),created:function(){var e=this;this.fetchTodos();var t=localStorage.getItem("token");L.a.get("/api/todos",{headers:{"x-auth-token":"".concat(t)}}).then((function(e){return e})).catch((function(){return e.$router.push("token-error")}))}};o("f6f2");V.render=v,V.__scopeId="data-v-7f21fcd6";var N=V,$={class:"pomodoro"};function H(e,t,o,n,c,a){var s=Object(r["w"])("Header"),i=Object(r["w"])("PomodoroBox");return Object(r["p"])(),Object(r["d"])("div",$,[Object(r["g"])(s),Object(r["g"])(i,{pomodoro:c.pomodoro,shortBreak:c.shortBreak,longBreak:c.longBreak},null,8,["pomodoro","shortBreak","longBreak"])])}var G={class:"pomodoro-box"},J={class:"pomodoro-box__selection"},F={class:"pomodoro-box__time"},z={key:0},q={key:1},W={key:0},K={key:1};function Q(e,t,o,n,c,a){return Object(r["p"])(),Object(r["d"])("div",G,[Object(r["g"])("div",J,[Object(r["g"])("div",{class:["pomodoro-box__option",{"pomodoro-box__option--selected":e.checked[0]}],onClick:t[1]||(t[1]=function(t){return a.onOptionSelect(e.event,o.pomodoro,"pomodoroChecked"),a.onSelectSound()})}," Pomodoro ",2),Object(r["g"])("div",{class:["pomodoro-box__option",{"pomodoro-box__option--selected":e.checked[1]}],onClick:t[2]||(t[2]=function(t){return a.onOptionSelect(e.event,o.shortBreak,"shortBreakChecked"),a.onSelectSound()})}," Short Break ",2),Object(r["g"])("div",{class:["pomodoro-box__option",{"pomodoro-box__option--selected":e.checked[2]}],onClick:t[3]||(t[3]=function(t){return a.onOptionSelect(e.event,o.longBreak,"longBreakChecked"),a.onSelectSound()})}," Long Break ",2)]),Object(r["g"])("div",F,[e.minutes<10?(Object(r["p"])(),Object(r["d"])("span",z,"0")):Object(r["e"])("",!0),Object(r["f"])(Object(r["y"])(e.minutes)+":",1),e.seconds<10?(Object(r["p"])(),Object(r["d"])("span",q,"0")):Object(r["e"])("",!0),Object(r["f"])(Object(r["y"])(e.seconds),1)]),Object(r["g"])("button",{disabled:e.isDisabled,onClick:t[4]||(t[4]=function(t){return a.onButtonClick(e.event,e.isStop),a.playSound()}),class:["pomodoro-box__button",{"pomodoro-box__button--disabled":e.isDisabled}]},[e.isStop?(Object(r["p"])(),Object(r["d"])("span",W,"Start")):(Object(r["p"])(),Object(r["d"])("span",K,"Stop"))],10,["disabled"])])}o("d81d"),o("a9e3");var X=o("4f3e"),Z=o.n(X),ee=o("97d1"),te=o.n(ee),oe={name:"PomodoroBox",data:function(){return{time:1500,minutes:0,seconds:0,isStop:!0,isDisabled:!1,checked:[!0,!1,!1]}},props:{pomodoro:{type:Number},shortBreak:{type:Number},longBreak:{type:Number}},mounted:function(){this.minutes=Math.floor(this.time/60),this.seconds=this.time-60*this.minutes,this.isStop=!0},methods:{onSelectSound:function(){var e=new Audio(Z.a);e.play()},playSound:function(){var e=new Audio(te.a);e.play()},onOptionSelect:function(e,t,o){var r=this;this.time=t,this.minutes=Math.floor(this.time/60),this.seconds=this.time-60*this.minutes,this.isStop=!0;var n=["pomodoroChecked","shortBreakChecked","longBreakChecked"];n.map((function(e,t){r.checked[t]=o===e}))},onButtonClick:function(e,t){var o=this;this.isStop=!t,this.isDisabled=!0;var r=new Audio(te.a),n=setInterval((function(){if(!0===o.isStop)clearInterval(n);else{if(0==o.time)return console.log("time is up"),void r.play();o.time--}o.minutes=Math.floor(o.time/60),o.seconds=o.time-60*o.minutes,o.isDisabled=!1}),1e3);this.isStop&&clearInterval(n)}}};oe.render=Q;var re=oe,ne={name:"PomodoroApp",components:{PomodoroBox:re,Header:I},data:function(){return{pomodoro:1500,shortBreak:300,longBreak:900}},created:function(){var e=this,t=localStorage.getItem("token");L.a.get("/api/todos",{headers:{"x-auth-token":"".concat(t)}}).then((function(e){return e})).catch((function(){return e.$router.push("token-error")}))}};ne.render=H;var ce=ne,ae={class:"header"},se=Object(r["g"])("div",{class:"header__brand"},[Object(r["g"])("img",{alt:"Vue logo",src:T.a}),Object(r["g"])("div",{class:"header__title"},"Productivity App")],-1),ie={class:"header__nav"},de=Object(r["f"])("Login"),ue=Object(r["f"])("Register"),le={class:"register"},be=Object(r["g"])("div",{class:"register__heading"},"Create Account",-1),pe={class:"register__form"};function Oe(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",ae,[se,Object(r["g"])("div",ie,[Object(r["g"])(s,{to:"/"},{default:Object(r["C"])((function(){return[de]})),_:1}),Object(r["g"])(s,{to:"/register"},{default:Object(r["C"])((function(){return[ue]})),_:1})])]),Object(r["g"])("div",le,[be,Object(r["g"])("form",pe,[Object(r["D"])(Object(r["g"])("input",{class:"register__input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),placeholder:"Username"},null,512),[[r["A"],c.username]]),Object(r["D"])(Object(r["g"])("input",{class:"register__input",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Password"},null,512),[[r["A"],c.password]]),Object(r["g"])("input",{onClick:t[3]||(t[3]=function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),class:"register__submit",type:"submit",value:"Register"})])])],64)}var fe={name:"Register",data:function(){return{formValues:{},username:"",password:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),L.a.post("/api/users/register",{username:this.username,password:this.password}).then((function(){t.$router.push("/success")})).catch((function(){t.$router.push("error-register")}))}}};fe.render=Oe;var je=fe,me={class:"header"},ge=Object(r["g"])("div",{class:"header__brand"},[Object(r["g"])("img",{alt:"Vue logo",src:T.a}),Object(r["g"])("div",{class:"header__title"},"Productivity App")],-1),he={class:"header__nav"},ve=Object(r["f"])("Login"),_e=Object(r["f"])("Register"),ke={class:"login"},ye=Object(r["g"])("div",{class:"login__heading"},"Productivity App",-1),we={class:"login__form"};function Se(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",me,[ge,Object(r["g"])("div",he,[Object(r["g"])(s,{to:"/"},{default:Object(r["C"])((function(){return[ve]})),_:1}),Object(r["g"])(s,{to:"/register"},{default:Object(r["C"])((function(){return[_e]})),_:1})])]),Object(r["g"])("div",ke,[ye,Object(r["g"])("form",we,[Object(r["D"])(Object(r["g"])("input",{class:"login__input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.username=e}),placeholder:"Username"},null,512),[[r["A"],c.username]]),Object(r["D"])(Object(r["g"])("input",{class:"login__input",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Password"},null,512),[[r["A"],c.password]]),Object(r["g"])("input",{class:"login__submit",onClick:t[3]||(t[3]=function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),type:"submit",value:"Login"})])])],64)}var xe={name:"Login",data:function(){return{username:"",password:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),L.a.post("/api/users/login",{username:this.username,password:this.password}).then((function(e){localStorage.setItem("token",e.data.token),t.$router.push("todos")})).catch((function(){t.$router.push("error")}))}}};xe.render=Se;var Ae=xe,Te={class:"error"},Ce=Object(r["g"])("div",{class:"error__message"}," You enter a invalid Account please try again ",-1),De=Object(r["f"])("Go back to login page");function Be(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",Te,[Ce,Object(r["g"])(s,{to:"/",class:"error__link"},{default:Object(r["C"])((function(){return[De]})),_:1})])}var Pe={};Pe.render=Be;var Re=Pe,Ue={class:"error"},Ye=Object(r["g"])("div",{class:"error__message"}," Authorization failed, You don't have Authorization to view this page ",-1),Ee=Object(r["f"])("Go back to login page");function Ie(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",Ue,[Ye,Object(r["g"])(s,{to:"/",class:"error__link"},{default:Object(r["C"])((function(){return[Ee]})),_:1})])}var Me={name:"TokenError"};Me.render=Ie;var Le=Me,Ve={class:"success"},Ne=Object(r["g"])("div",{class:"success__message"}," You have been Successfully Registered, You can log in now ",-1),$e=Object(r["f"])("Go back to login page");function He(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",Ve,[Ne,Object(r["g"])(s,{to:"/",class:"success__link"},{default:Object(r["C"])((function(){return[$e]})),_:1})])}var Ge={name:"SuccessRegister"};Ge.render=He;var Je=Ge,Fe={class:"error"},ze=Object(r["g"])("div",{class:"error__message"},[Object(r["g"])("h3",null,"There is a problem in registration"),Object(r["f"])(" It's either your username is already taken or your fields is blank ")],-1),qe=Object(r["f"])("Go back to registration page");function We(e,t,o,n,c,a){var s=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",Fe,[ze,Object(r["g"])(s,{to:"/register",class:"error__link"},{default:Object(r["C"])((function(){return[qe]})),_:1})])}var Ke={name:"ErrorRegister"};Ke.render=We;var Qe=Ke,Xe=[{path:"/pomodoro",name:"PomodoroApp",component:ce},{path:"/error",name:"Error",component:Re},{path:"/error-register",name:"ErrorRegister",component:Qe},{path:"/token-error",name:"TokenError",component:Le},{path:"/success",name:"SuccessRegister",component:Je},{path:"/todos",name:"Todos",component:N},{path:"/",name:"Login",component:Ae},{path:"/register",name:"Register",component:je}],Ze=Object(i["a"])({history:Object(i["b"])(),routes:Xe}),et=Ze,tt=(o("abe2"),o("4de4"),o("96cf"),o("1da1")),ot=o("ec26"),rt={todos:[]},nt={allTodos:function(e){return e.todos}},ct={fetchTodos:function(e){var t=this;return Object(tt["a"])(regeneratorRuntime.mark((function o(){var r,n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.commit,n=localStorage.getItem("token"),o.next=4,L.a.get("/api/todos",{headers:{"x-auth-token":"".concat(n)}}).then((function(e){return e})).catch((function(){return t.$router.push("token-error")}));case 4:c=o.sent,r("setTodos",c.data);case 6:case"end":return o.stop()}}),o)})))()},addTodo:function(e,t){var o=this;return Object(tt["a"])(regeneratorRuntime.mark((function r(){var n,c,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,c=localStorage.getItem("token"),r.next=4,L.a.post("/api/todos",{id:Object(ot["a"])(),title:t,completed:!1},{headers:{"x-auth-token":"".concat(c)}}).catch((function(){return o.$router.push("token-error")}));case 4:a=r.sent,n("newTodo",a.data);case 6:case"end":return r.stop()}}),r)})))()},deleteTodo:function(e,t){return Object(tt["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.commit,o.next=3,L.a.delete("api/todos/".concat(t));case 3:r("removeTodo",t);case 4:case"end":return o.stop()}}),o)})))()}},at={setTodos:function(e,t){return e.todos=t},newTodo:function(e,t){return e.todos.unshift(t)},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))}},st={state:rt,getters:nt,actions:ct,mutations:at},it=Object(k["a"])({state:{},mutations:{},actions:{},modules:{todos:st}});Object(r["c"])(s).use(it).use(et).use(it).mount("#app")},"97d1":function(e,t,o){e.exports=o.p+"media/elevator.78d61314.wav"},abe2:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},f6f2:function(e,t,o){"use strict";o("fdc6")},fdc6:function(e,t,o){}});
//# sourceMappingURL=app.772bd30a.js.map