(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{6249:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userProfile",function(){return t(199)}])},4030:function(e,a,t){"use strict";var s=t(5893);t(7294);var l=t(6833),o=t.n(l);a.Z=e=>{let{data:a,loading:t}=e;return(0,s.jsx)("div",{style:{marginLeft:50},className:o().container,children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"card__skeleton card__title"}),(0,s.jsx)("div",{className:"card__skeleton card__title",style:{marginLeft:30}})]}),(0,s.jsxs)("div",{className:"row",style:{marginTop:20},children:[(0,s.jsx)("div",{className:"card__skeleton card__title"}),(0,s.jsx)("div",{className:"card__skeleton card__title",style:{marginLeft:30}})]})]}):a.map((e,t)=>e.value&&t%2==0?(0,s.jsxs)("div",{className:o().row,style:{width:500},children:[(0,s.jsxs)("div",{className:o().itemLeft,children:[e.icon&&(0,s.jsx)("span",{className:o().icon,children:e.icon}),(0,s.jsx)("span",{children:e.value})]}),a[t+1]&&a[t+1].value&&(0,s.jsxs)("div",{className:o().itemRight,style:{marginLeft:30},children:[a[t+1].icon&&(0,s.jsx)("span",{className:o().icon,children:a[t+1].icon}),(0,s.jsx)("span",{children:a[t+1].value})]})]},t):null)})}},199:function(e,a,t){"use strict";t.r(a);var s=t(5893),l=t(9896);t(3437);var o=t(7294);t(2864);var n=t(1583),c=t(2074);t(7016),t(4489);var i=t(6154),r=t(3330);t(4989);var d=t(452);t(8571);var h=t(4030),g=t(5675),m=t.n(g),u=t(8201),p=t(1649),x=t(1163);a.default=()=>{let e={axis:"y"},[a]=(0,n.Z)(e),[g]=(0,n.Z)({}),[j]=(0,n.Z)({});Array.from([,,,].keys()),(0,n.Z)(a);let[_,f]=(0,o.useState)(0),[v,S]=(0,n.Z)(e,[(0,c.Z)()]),[N,y]=(0,n.Z)({containScroll:"keepSnaps",dragFree:!0}),[w,I]=(0,o.useState)(!0),[k,T]=(0,o.useState)(""),[b,C]=(0,o.useState)(""),[E,L]=(0,o.useState)(""),[P,A]=(0,o.useState)(""),[R,Z]=(0,o.useState)(""),[F,z]=(0,o.useState)(""),[B,O]=(0,o.useState)(""),[D,U]=(0,o.useState)([]),[H,M]=(0,o.useState)([]),[q,G]=(0,o.useState)(""),[X,K]=(0,o.useState)(!1),[Y,W]=(0,o.useState)(""),[J,Q]=(0,o.useState)(!1),[V,$]=(0,o.useState)("");(0,o.useRef)(null),(0,p.v9)(e=>e.data.isSwitch),(0,x.useRouter)(),(0,o.useCallback)(e=>{S&&y&&S.scrollTo(e)},[S,y]),(0,o.useEffect)(()=>{es(),ea(),et()},[]),(0,o.useEffect)(()=>(J?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[J]);let ee=(e,a)=>{console.log("OI IM TRYING TO SWITCH PROFILE");let s=localStorage.getItem("Profile_LoggedIn");if(s){let e=localStorage.getItem("profile_access");console.log(e,"TEMP TOKEN"),$(e),console.log("Debugging Token in HeaderSignIn line 31",V)}else{let e=localStorage.getItem("access_Token");$(e),console.log("Debugging Main access Token in line 39 Switch function",e)}let l=t(7218),o=t(6230),n=new o;n.append("id",e),n.append("type",a),l.request({method:"post",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/switch-profile",headers:{"Content-Type":"application/json",Authorization:"Bearer 34|DHhs9SLHBZBi5xElsQlHTCN76Gh1GtR3r9mcHsXA78f0ceba"},data:n}).then(e=>{"main"==a?(localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("profile_loggedIn",!1),console.log("Switched To user")):(localStorage.setItem("profile_loggedIn",!0),localStorage.setItem("profile_access_token",e.data.access_token),console.log("Switched to Place/Supplier"),toast.success("Switch Success ")),console.log("Response of switching",e.data)}).catch(e=>{console.log(e)})},ea=async()=>{let e=localStorage.getItem("access_Token");console.log("TOKEN GET USER PLACES",e),await i.Z.request({method:"get",url:r.NC,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then(e=>{console.log(e),U(e.data.data),console.log("Place",e.data.data)}).catch(e=>{console.log(e)})},et=async()=>{let e=t(7218),a=localStorage.getItem("access_Token");e.request({method:"get",maxBodyLength:1/0,url:"https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/get-user-suppliers",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}}).then(e=>{console.log(JSON.stringify(e.data)),M(e.data.data)}).catch(e=>{console.log(e)})},es=async()=>{console.log("[+] Getting User Data ");let e=localStorage.getItem("access_Token");console.log("[+] ACCESS TOKEN",e),await i.Z.request({method:"get",url:r.Nt,headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).then(e=>{console.log("User Data",e.data.data),T(e.data.data.email),C(e.data.data.phone),L(e.data.data.country),A(e.data.data.website),Z(e.data.data.name),z(e.data.data.types[0].name),e.data.data.profile_image&&e.data.data.profile_image.url&&O(e.data.data.profile_image.url),console.log("{+++++} TYPE:",e.data.data.types[0]),console.log("{+++++++++++++PROFILE PICTURE}",e.data.data.profile_image.url),I(!1)}).catch(e=>{console.log(e),I(!1)})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{backgroundColor:"#25282d",top:0},children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)(d.Z,{}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",paddingTop:50},children:[(0,s.jsxs)("button",{className:"justAbutton",style:{zIndex:1e6},children:[" ",(0,s.jsx)("span",{children:"Profile"})," "]}),(0,s.jsxs)(u.h_.Root,{children:[(0,s.jsx)(u.h_.Trigger,{children:(0,s.jsxs)("button",{className:"justAbutton",style:{zIndex:1e6,marginLeft:250,backgroundColor:"#000"},children:[" ",(0,s.jsx)("span",{style:{marginLeft:33},children:"Suppliers"})," "]})}),Array.isArray(H)&&H.length>0?(0,s.jsx)(u.h_.Content,{children:H.map(e=>(0,s.jsx)(u.h_.Item,{onClick:()=>{ee(e.id,"supplier"),G("supplier"),K(!0),W(e),Store.dispatch(setIsSwitch(!0)),localStorage.setItem("switched",!0),localStorage.setItem("notUsername",e.name),console.log(e.name)},children:e.name},e.id))}):(0,s.jsx)(u.h_.Content,{style:{maxHeight:"80vh",overflowY:"auto"},children:(0,s.jsx)(u.h_.Item,{children:"No Suppliers"})})]}),(0,s.jsxs)(u.h_.Root,{children:[(0,s.jsx)(u.h_.Trigger,{children:(0,s.jsxs)("button",{className:"justAbutton",style:{zIndex:1e6,marginLeft:450,backgroundColor:"#000"},children:[" ",(0,s.jsx)("span",{style:{marginLeft:40},children:"Places"})," "]})}),Array.isArray(D)&&D.length>0?(0,s.jsx)(u.h_.Content,{children:D.map(e=>(0,s.jsx)(u.h_.Item,{onClick:()=>{G("place"),K(!0),W(e),Store.dispatch(setIsSwitch(!0)),localStorage.setItem("switched",!0),localStorage.setItem("notUsername",e.name)},children:e.name},e.id))}):(0,s.jsx)(u.h_.Content,{children:(0,s.jsx)(u.h_.Item,{children:"No Places"})})]})]}),(0,s.jsxs)("div",{className:"imageProfile",style:{marginLeft:50},children:[w?(0,s.jsx)("div",{style:{width:954,height:432,backgroundColor:"#FFF",marginTop:130,paddingTop:130},children:(0,s.jsx)("div",{class:"Imageloader"})}):(0,s.jsx)(m(),{src:B,alt:"Car Image",style:{paddingTop:130},width:954,height:432}),(0,s.jsx)("div",{className:"imageProfileDescription",children:(0,s.jsxs)("div",{className:"textAndIconsContainer",children:[w?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"card__skeleton card__title"}),(0,s.jsx)("div",{className:"card__skeleton card__title"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:R}),(0,s.jsx)("p",{style:{color:"#FFF"},children:F})]}),(0,s.jsxs)("div",{className:"socialIcons",children:[(0,s.jsx)("i",{className:"fab fa-twitter"}),(0,s.jsx)("i",{className:"fab fa-facebook-f"}),(0,s.jsx)("i",{className:"fab fa-google"}),(0,s.jsx)("i",{className:"fab fa-pinterest-p"}),(0,s.jsx)("i",{className:"fab fa-linkedin-in"})]})]})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)(h.Z,{loading:w,data:[{icon:(0,s.jsx)("i",{className:"fas fa-map-marker-alt"}),value:E},{icon:(0,s.jsx)("i",{className:"fas fa-phone"}),value:b},{icon:(0,s.jsx)("i",{className:"fas fa-envelope"}),value:k},{icon:(0,s.jsx)("i",{className:"fas fa-globe"}),value:P}]}),(0,s.jsxs)("button",{className:"MessageUS",children:[(0,s.jsx)("div",{className:"svg-wrapper-1",children:(0,s.jsx)("div",{className:"svg-wrapper",children:(0,s.jsxs)("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z",fill:"currentColor"})]})})}),(0,s.jsx)("span",{children:"Message Us"})]})]})]})})}},6833:function(e){e.exports={container:"ContactInfo_container__XDldp",row:"ContactInfo_row__Bo_Wt",item:"ContactInfo_item__gDRRq",icon:"ContactInfo_icon__UTk5k"}}},function(e){e.O(0,[977,675,510,109,896,82,774,888,179],function(){return e(e.s=6249)}),_N_E=e.O()}]);