(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4006:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RegistrationUser",function(){return n(4366)}])},6591:function(e,t,n){"use strict";n(5893)},4366:function(e,t,n){"use strict";n.r(t);var a=n(5893);n(5516);var s=n(5861),o=n(7294),l=n(4242),r=n(2635),i=n.n(r);n(459),n(6591);var c=n(8498),u=n(1163),d=n(1649);n(2920);var p=n(5279),g=n(2564);t.default=()=>{let[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[m,h]=(0,o.useState)(""),[x,v]=(0,o.useState)(""),[j,f]=(0,o.useState)(""),[S,N]=(0,o.useState)(""),[y,b]=(0,o.useState)(""),[C,E]=(0,o.useState)(""),[R,T]=(0,o.useState)(""),[k,w]=(0,o.useState)(""),[_,F]=(0,o.useState)(""),[A,I]=(0,o.useState)(""),[O,L]=(0,o.useState)(""),[D,P]=(0,o.useState)(""),q=(0,o.useMemo)(()=>i()().getData(),[]),B=(0,d.v9)(e=>e.data.statusMessage),U=(0,u.useRouter)();return(0,o.useEffect)(()=>{let e=localStorage.getItem("access_Token");t(e),console.log("LOCAL STORAGE",e),L("customer"),P("email"),g.y.dispatch((0,p.km)(null))},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"login",children:[(0,a.jsx)("div",{className:"HeaderTitle",children:(0,a.jsx)("p",{className:"titleText",children:"Sign Up"})}),(0,a.jsxs)("div",{className:"SignupField",children:[(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"First Name"}),(0,a.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{r(e.currentTarget.value)}})]}),(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Last Name"}),(0,a.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{h(e.currentTarget.value)}})]})]}),(0,a.jsxs)("div",{className:"SignupField",children:[(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Email"}),(0,a.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{v(e.currentTarget.value)}})]}),(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Confirm Email"}),(0,a.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{f(e.currentTarget.value)}})]})]}),(0,a.jsxs)("div",{className:"SignupField",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{children:"Country Picker"}),(0,a.jsx)(l.ZP,{styles:{control:(e,t)=>({...e,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",fontWeight:500,fontSize:"10",color:"#fff",backgroundColor:"rgb(28,28,30)",borderRadius:"63px",border:"none",outline:"none",padding:"0.4vw",width:"380px",height:"40px",transition:".4s",marginLeft:"10px"}),valueContainer:(e,t)=>({...e,position:"absolute",marginBottom:30,marginLeft:10}),dropdownIndicator:(e,t)=>({...e,marginLeft:353,width:30,height:30,position:"absolute",marginBottom:35}),indicatorSeparator:()=>({display:"none"}),menu:(e,t)=>({...e,backgroundColor:"#333",width:380,marginLeft:20,color:"#FFF"}),option:(e,t)=>{let{data:n,isDisabled:a,isFocused:s,isSelected:o}=t;return{...e,fontFamily:"sans-serif",fontSize:13,backgroundColor:a?null:o?"#666":s?"#444":null,":active":{...e[":active"],backgroundColor:!a&&"#555"}}},singleValue:(e,t)=>({...e,color:"white"})},options:q,value:C,onChange:e=>{console.log(e.label),E(e.label),console.log(C)}})]}),(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Phone Number"}),(0,a.jsx)(s.ZP,{placeholder:"Enter phone number",value:R,onChange:T})]})]}),(0,a.jsxs)("div",{className:"SignupField",children:[(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Gender"}),(0,a.jsxs)("select",{name:"",id:"",className:"form-control",value:k,onChange:e=>{console.log("selected gender",e.target.value),w(e.target.value)},children:[(0,a.jsx)("option",{value:"",disabled:!0,defaultValue:!0,children:"Gender"}),(0,a.jsx)("option",{value:"male",children:"Male"}),(0,a.jsx)("option",{value:"female",children:"Female"}),(0,a.jsx)("option",{value:"other",children:"Rather Not Say"})]})]}),(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Date Of Birth"}),(0,a.jsx)("input",{onChange:e=>{console.log("DATE",e.target.value),F(e.target.value)},className:"input",type:"date",name:"dateofbirth",id:"dateofbirth"})]})]}),(0,a.jsxs)("div",{className:"SignupField",style:{display:"flex",flexDirection:"row"},children:[(0,a.jsxs)("div",{className:"Input",children:[(0,a.jsx)("a",{children:"Nationailty"}),(0,a.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{I(e.currentTarget.value)}})]}),(0,a.jsx)("button",{className:"loginButton",style:{marginTop:35,marginLeft:280,height:40,marginRight:20},onClick:()=>{(0,c.f)(n,m,x,k,R,C,A,_,O,D),setTimeout(()=>{200==B&&U.push("/userProfile")},1e3)},children:"Continue"})]})]})})}},8498:function(e,t,n){"use strict";n.d(t,{o:function(){return c},f:function(){return i}});var a=n(6154);let s="".concat("https://jonathana74.sg-host.com/event-buz-backend-main/api/v1","/check-email");var o=n(2920),l=n(5279),r=n(2564);let i=(e,t,s,i,c,u,d,p,g,m)=>{let h=n(6230),x=new h;x.append("name",e),x.append("family_name",t),x.append("email",s),x.append("gender",i),x.append("phone",c),x.append("country",u),x.append("nationality",d),x.append("dob",p),x.append("sign_in_type",m),x.append("role",g),console.log("EMAIL",s),a.Z.request({method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/register",headers:{"Content-Type":"application/json"},data:x}).then(e=>{console.log(e),o.Am.success("Sign Up Completed"),e.status=200,localStorage.setItem("access_Token",e.data.access_token),r.y.dispatch((0,l.km)(e.status))}).catch(e=>{e.response?(console.log("Only the error message",e.response.data.errors),o.Am.error("Email or Phone Number exist"),console.log("Data:",e.response.data),console.log("Status:",e.response.status),console.log("Headers:",e.response.headers)):e.request?(o.Am.error("Something went wrong please try again"),console.log("Request:",e.request)):(o.Am.error("Something went wrong please try again"),console.log("Error:",e.message))})},c=(e,t)=>{a.Z.request({method:"post",maxBodyLength:1/0,url:s,headers:{"Content-Type":"application/json"},data:{email:e}}).then(e=>{console.log(JSON.stringify(e.data))}).catch(e=>{e.response?(console.log("DATA-ERROR:",e.response.data.message),console.log("STATUS-ERROR",e.response.status),console.log("HEADERS-ERROR",e.response.error)):e.request?console.log("REQUEST-ERROR",e.request):console.log("ERROR-MESSAGE",e.message)})}}},function(e){e.O(0,[337,932,774,888,179],function(){return e(e.s=4006)}),_N_E=e.O()}]);