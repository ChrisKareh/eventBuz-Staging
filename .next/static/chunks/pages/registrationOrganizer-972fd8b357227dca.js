(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{3555:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registrationOrganizer",function(){return n(468)}])},6591:function(e,t,n){"use strict";n(5893)},604:function(e,t,n){"use strict";n.d(t,{A:function(){return f},YW:function(){return p},fv:function(){return l},hh:function(){return u},i0:function(){return m},le:function(){return g},lm:function(){return d},oP:function(){return c},tO:function(){return x},yM:function(){return h}});var a=n(6154),o=n(3330),s=n(2920),r=n(5279),i=n(2564);n(9332),n(1649);let l=(e,t,o,l,c,u,d,p,g,h)=>{let m=n(6230),x=new m;x.append("name",e),x.append("family_name",t),x.append("email",o),x.append("gender",l),x.append("phone",c),x.append("country",u),x.append("nationality",d),x.append("dob",p),x.append("sign_in_type",h),x.append("role",g),console.log("EMAIL",o),a.Z.request({method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/register",headers:{"Content-Type":"application/json"},data:x}).then(e=>{console.log(e),s.Am.success("Sign Up Completed"),e.status=200,localStorage.setItem("access_Token",e.data.access_token),i.y.dispatch((0,r.km)(e.status))}).catch(e=>{e.response?(console.log("Only the error message",e.response.data.errors),s.Am.error("Email or Phone Number exist"),console.log("Data:",e.response.data),console.log("Status:",e.response.status),console.log("Headers:",e.response.headers)):e.request?(s.Am.error("Something went wrong please try again"),console.log("Request:",e.request)):(s.Am.error("Something went wrong please try again"),console.log("Error:",e.message))})},c=async(e,t)=>{await a.Z.request({method:"post",maxBodyLength:1/0,url:o.ab,headers:{"Content-Type":"application/json"},data:{email:e}}).then(e=>{if(console.log("CHECK EMAIL",e.data.access_token),console.log("Check Email Response",e),200==e.status){i.y.dispatch((0,r.km)(e.status)),console.log(e.data.phoneVerified);let n=!e.data.phoneVerified||!e.data.emailVerified;i.y.dispatch((0,r.s0)(e.data.phoneVerified)),i.y.dispatch((0,r.Fu)(e.data.emailVerified)),localStorage.setItem("access_Token",e.data.access_token),t(e.status,n?"Your account isn't verified":"")}else t(e.status,"Something went wrong.")}).catch(e=>{e.response?(console.log("DATA-ERROR:",e.response.data.message),console.log("STATUS-ERROR",e.response.status),console.log("HEADERS-ERROR",e.response.error),t(e.response.status,e.response.data.message)):e.request?(console.log("REQUEST-ERROR",e.request),t(500,"Server did not respond")):(t(500,e.message),console.log("ERROR-MESSAGE",e.message))})},u=()=>{let e=localStorage.getItem("access_Token");console.log("TOKEN IN resendVerificationCode",e),a.Z.request({method:"post",maxBodyLength:1/0,url:o.xw,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})},d=e=>{let t=localStorage.getItem("access_Token");console.log("TOKEN in verifyEmail Function",t),console.log(e),a.Z.request({method:"post",maxBodyLength:1/0,url:o.yT,headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},data:{verification_code:e}}).then(e=>{console.log(e),200==e.status&&i.y.dispatch((0,r.km)(e.status))}).catch(e=>{console.log(e)})},p=e=>{a.Z.request({method:"post",maxBodyLength:1/0,url:o.X,headers:{"Content-Type":"application/json"},data:{phone:e,message:"ayo put dat numba"}}).then(e=>{console.log(e),200==e.status&&i.y.dispatch((0,r.km)(e.status))}).catch(e=>{console.log(e)})},g=async()=>{await a.Z.request({method:"get",maxBodyLength:1/0,url:o.It,headers:{"Content-Type":"application/json"}}).then(e=>{let t=e.data.data.map(e=>({label:e.name,value:e.id}));i.y.dispatch((0,r.yg)(t))}).catch(e=>{console.log(e)})},h=async(e,t)=>{console.log(typeof e),console.log("Data passed to API",e);let a=n(7218),o=localStorage.getItem("access_Token");console.log("TOKEN in verifyEmail Function",o),a.request({method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+o},data:e}).then(e=>{console.log(JSON.stringify(e.data)),localStorage.setItem("createEvent_ID",e.data.data.id),s.Am.success("General Information Saved")}).catch(e=>{console.log(e),s.Am.error("Error occured, try again"),t()})},m=async(e,t)=>{let a=n(7218),o=localStorage.getItem("access_Token"),r=localStorage.getItem("createEvent_ID"),i={method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event-contact",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+o},data:{...e,event_id:r}};a.request(i).then(e=>{console.log(JSON.stringify(e.data))}).catch(e=>{console.log(e),s.Am.error("Error occured, please try again"),t()})},x=async(e,t)=>{let a=n(7218),o=localStorage.getItem("access_Token"),r=localStorage.getItem("createEvent_ID");console.log(e);let i={method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event-social-media/",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+o},data:{...e,event_id:r}};a.request(i).then(e=>{console.log(JSON.stringify(e.data))}).catch(e=>{console.log(e),s.Am.error("Error Occured, Please Try Again"),t()})},f=async()=>{let e=n(7218);e.request({method:"get",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/currency/all",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>{console.log(e.data.data);let t=e.data.data.map(e=>({label:e.name,value:e.id}));i.y.dispatch((0,r.BI)(t))}).catch(e=>{console.log(e)})}},3330:function(e,t,n){"use strict";n.d(t,{It:function(){return l},NC:function(){return d},Nt:function(){return u},Tj:function(){return c},X:function(){return i},ab:function(){return o},xw:function(){return s},yT:function(){return r}});let a="https://jonathana74.sg-host.com/event-buz-backend-main/api/v1",o="".concat(a,"/check-email"),s="".concat(a,"/resend-email-verification-code"),r="".concat(a,"/verify-email"),i="".concat(a,"/send-sms"),l="".concat(a,"/organiser/type"),c="".concat(a,"/packages/all"),u="".concat(a,"/show-profile"),d="".concat(a,"/get-user-places")},468:function(e,t,n){"use strict";n.r(t);var a=n(2729),o=n(5893);n(5516);var s=n(6308),r=n(7294),i=n(3157),l=n(2635),c=n.n(l);n(459),n(6591);var u=n(604),d=n(1163),p=n(1649),g=n(5437);function h(){let e=(0,a._)(["\n  .css-1p3m7a8-multiValue {\n    background-color: #B62872;\n    color: #FFF;\n    border-radius: 120px !important;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n  }\n  .css-wsp0cs-MultiValueGeneric {\n    margin: 0; \n    padding-left: 5; \n    font-size: 12px;\n  }\n  .css-tj5bde-Svg {\n    margin-bottom: 10px;\n  }\n  .css-12a83d4-MultiValueRemove:hover {\n    background-color: rgba(0,0,0,0);\n    color: #FFF;\n}\n\n"]);return h=function(){return e},e}t.default=()=>{let[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(""),[l,m]=(0,r.useState)(""),[x,f]=(0,r.useState)(""),[v,y]=(0,r.useState)(""),[j,S]=(0,r.useState)(""),[N,b]=(0,r.useState)(""),[T,C]=(0,r.useState)(""),[E,k]=(0,r.useState)(""),[I,_]=(0,r.useState)(""),[A,w]=(0,r.useState)(""),[R,F]=(0,r.useState)(""),[B,O]=(0,r.useState)(""),z=(0,r.useMemo)(()=>c()().getData(),[]),[L,q]=(0,r.useState)(""),[D,M]=(0,r.useState)([]),P=(0,d.useRouter)(),V=(0,p.v9)(e=>e.data.organizationList);(0,r.useEffect)(()=>{(0,u.le)()},[]);let Z=e=>{console.log("Selected value of organization type",e),M(e)},U={control:(e,t)=>({...e,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",fontWeight:500,fontSize:"10",color:"#fff",backgroundColor:"rgb(28,28,30)",borderRadius:"63px",border:"none",outline:"none",padding:"0.4vw",width:"380px",height:"40px",transition:".4s",marginLeft:"10px"}),valueContainer:(e,t)=>({...e,position:"absolute",marginBottom:30,marginLeft:10}),dropdownIndicator:(e,t)=>({...e,marginLeft:353,width:30,height:30,position:"absolute",marginBottom:35}),indicatorSeparator:()=>({display:"none"}),menu:(e,t)=>({...e,backgroundColor:"#333",width:380,marginLeft:20,color:"#FFF"}),option:(e,t)=>{let{data:n,isDisabled:a,isFocused:o,isSelected:s}=t;return{...e,fontFamily:"sans-serif",fontSize:13,backgroundColor:a?null:s?"#666":o?"#444":null,":active":{...e[":active"],backgroundColor:!a&&"#555"}}},singleValue:(e,t)=>({...e,color:"white"})},G=g.ZP.div(h());return console.log("organizationREDUX",V),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"login",children:[(0,o.jsx)("div",{className:"HeaderTitle",children:(0,o.jsx)("p",{className:"titleText",children:"Sign Up"})}),(0,o.jsxs)("div",{className:"SignupField",children:[(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"First Name"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{t(e.currentTarget.value)}})]}),(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Last Name"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{a(e.currentTarget.value)}})]})]}),(0,o.jsxs)("div",{className:"SignupField",children:[(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Organization Name"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{q(e.currentTarget.value)}})]}),(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Organization Type"}),(0,o.jsx)(G,{children:(0,o.jsx)(i.ZP,{isMulti:!0,styles:U,options:V,value:D,onChange:Z})})]})]}),(0,o.jsxs)("div",{className:"SignupField",children:[(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Email"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{m(e.currentTarget.value)}})]}),(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Confirm Email"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{f(e.currentTarget.value)}})]})]}),(0,o.jsxs)("div",{className:"SignupField",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{children:"Country Picker"}),(0,o.jsx)(i.ZP,{isMulti:!0,styles:U,options:z,value:N,onChange:Z})]}),(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Phone Number"}),(0,o.jsx)(s.ZP,{placeholder:"Enter phone number",value:T,onChange:C})]})]}),(0,o.jsxs)("div",{className:"SignupField",children:[(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Gender"}),(0,o.jsxs)("select",{name:"",id:"",className:"form-control",value:E,onChange:e=>{console.log("selected gender",e.target.value),k(e.target.value)},children:[(0,o.jsx)("option",{value:"",disabled:!0,defaultValue:!0,children:"Gender"}),(0,o.jsx)("option",{value:"male",children:"Male"}),(0,o.jsx)("option",{value:"female",children:"Female"}),(0,o.jsx)("option",{value:"other",children:"Rather Not Say"})]})]}),(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Date Of Birth"}),(0,o.jsx)("input",{onChange:e=>{console.log("DATE",e.target.value),_(e.target.value)},className:"input",type:"date",name:"dateofbirth",id:"dateofbirth"})]})]}),(0,o.jsxs)("div",{className:"SignupField",style:{display:"flex",flexDirection:"row"},children:[(0,o.jsxs)("div",{className:"Input",children:[(0,o.jsx)("a",{children:"Nationailty"}),(0,o.jsx)("input",{type:"text",name:"text",className:"input",onChange:e=>{w(e.currentTarget.value)}})]}),(0,o.jsx)("button",{className:"loginButton",style:{marginTop:35,marginLeft:280,height:40,marginRight:20},onClick:()=>{(0,u.fv)(e,n,l,E,T,N,A,I,R,B),setTimeout(()=>{200==statusMessage&&P.push("/Verify")},1e3)},children:"Continue"})]})]})})}}},function(e){e.O(0,[977,155,999,755,774,888,179],function(){return e(e.s=3555)}),_N_E=e.O()}]);