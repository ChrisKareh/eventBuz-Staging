(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{4998:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myEvents",function(){return a(4919)}])},4919:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return z}});var t=a(5893),r=a(9896);a(3437);var s=a(7294),n=a(2864),d=a(1583),i=a(2074),o=a(7016);a(4489);var c=a(6154),u=a(3330);a(4989);var m=a(452);a(8571);var p=a(4184),f=a.n(p);let h={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["surface","ghost"],default:"ghost"}},v={align:{type:"enum",values:["start","center","end","baseline"],default:void 0,responsive:!0}},x={justify:{type:"enum",values:["start","center","end"],default:void 0,responsive:!0},width:{type:"string | number",default:void 0}};var j=a(3843),b=a(6776);let C=["0","1","2","3","4","5","6","7","8","9"],g={p:{type:"enum",values:C,default:void 0,responsive:!0},px:{type:"enum",values:C,default:void 0,responsive:!0},py:{type:"enum",values:C,default:void 0,responsive:!0},pt:{type:"enum",values:C,default:void 0,responsive:!0},pr:{type:"enum",values:C,default:void 0,responsive:!0},pb:{type:"enum",values:C,default:void 0,responsive:!0},pl:{type:"enum",values:C,default:void 0,responsive:!0}};var y=a(9248);let N=s.forwardRef((e,l)=>{let{rest:a,...t}=(0,j.FY)(e),{className:r,children:n,size:d=h.size.default,variant:i=h.variant.default,...o}=a;return s.createElement("div",{ref:l,className:f()("rt-TableRoot",r,`rt-variant-${i}`,(0,b.g)(d,"rt-r-size"),(0,j.we)(t)),...o},s.createElement(y.x,null,s.createElement("table",{className:"rt-TableRootTable"},n)))});N.displayName="Table";let w=s.forwardRef((e,l)=>s.createElement("thead",{...e,ref:l,className:f()("rt-TableHeader",e.className)}));w.displayName="TableHeader";let _=s.forwardRef((e,l)=>s.createElement("tbody",{...e,ref:l,className:f()("rt-TableBody",e.className)}));_.displayName="TableBody";let T=s.forwardRef((e,l)=>{let{className:a,align:t=v.align.default,...r}=e;return s.createElement("tr",{...r,ref:l,className:f()("rt-TableRow",a,(0,b.g)(t,"rt-r-va",{baseline:"baseline",start:"top",center:"middle",end:"bottom"}))})});T.displayName="TableRow";let E=s.forwardRef((e,l)=>{let{rest:a,...t}=function(e){let{p:l=g.p.default,px:a=g.px.default,py:t=g.py.default,pt:r=g.pt.default,pr:s=g.pr.default,pb:n=g.pb.default,pl:d=g.pl.default,...i}=e;return{p:l,px:a,py:t,pt:r,pr:s,pb:n,pl:d,rest:i}}(e),{tag:r="td",className:n,style:d,justify:i=x.justify.default,width:o=x.width.default,...c}=a;return s.createElement(r,{...c,ref:l,className:f()("rt-TableCell",n,[(0,b.g)(t.p,"rt-r-p"),(0,b.g)(t.px,"rt-r-px"),(0,b.g)(t.py,"rt-r-py"),(0,b.g)(t.pt,"rt-r-pt"),(0,b.g)(t.pr,"rt-r-pr"),(0,b.g)(t.pb,"rt-r-pb"),(0,b.g)(t.pl,"rt-r-pl")].filter(Boolean).join(" "),(0,b.g)(i,"rt-r-ta",{start:"left",center:"center",end:"right"})),style:{width:o,...d}})});E.displayName="TableCellImpl";let H=s.forwardRef((e,l)=>s.createElement(E,{...e,tag:"td",ref:l}));H.displayName="TableCell";let R=s.forwardRef((e,l)=>s.createElement(E,{scope:"col",...e,tag:"th",ref:l,className:f()("rt-TableColumnHeaderCell",e.className)}));R.displayName="TableColumnHeaderCell";let S=s.forwardRef((e,l)=>s.createElement(E,{scope:"row",...e,tag:"th",ref:l,className:f()("rt-TableRowHeaderCell",e.className)}));S.displayName="TableRowHeaderCell";let k=Object.assign({},{Root:N,Header:w,Body:_,Row:T,Cell:H,ColumnHeaderCell:R,RowHeaderCell:S});var Z=a(1163),z=()=>{let e={axis:"y"},[l]=(0,d.Z)(e),[a]=(0,d.Z)({}),[p]=(0,d.Z)({}),f=Array.from([,,,].keys());(0,d.Z)(l);let[h,v]=(0,s.useState)(0),[x,j]=(0,d.Z)(e,[(0,i.Z)()]),[b,C]=(0,d.Z)({containScroll:"keepSnaps",dragFree:!0}),[g,y]=(0,s.useState)(""),[N,w]=(0,s.useState)(""),_=(0,Z.useRouter)(),T=(0,s.useCallback)(e=>{j&&C&&j.scrollTo(e)},[j,C]);(0,s.useEffect)(()=>{E()},[]);let E=async()=>{let e=localStorage.getItem("profile_loggedIn");var l="";console.log("[+] ACCESS TOKEN",l=e?localStorage.getItem("profile_access_Token"):localStorage.getItem("access_Token")),await c.Z.request({method:"get",url:u.Nt,headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then(e=>{console.log("User Data",e.data.data),y(e.data.data.email),w(e.data.data.phone)}).catch(e=>{console.log(e)})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{}),(0,t.jsx)(m.Z,{}),(0,t.jsxs)("div",{className:"Home",children:[(0,t.jsxs)("div",{className:"top-left-Profile",children:[(0,t.jsxs)("button",{onClick:()=>{_.push("/createEvent")},className:"justAbutton",style:{zIndex:1e6,marginTop:90},children:[" ",(0,t.jsx)("span",{style:{marginLeft:18},children:"Create Event"})," "]}),(0,t.jsx)("eventsHeader",{}),(0,t.jsxs)(k.Root,{style:{zindex:-1,marginTop:"15%",width:1100,marginLeft:20},children:[(0,t.jsx)(k.Header,{children:(0,t.jsxs)(k.Row,{children:[(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"#"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Preview"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Name"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Date"})}),(0,t.jsx)(k.ColumnHeaderCell,{style:{background:"#2e3136",color:"#999999",fontSize:11},children:(0,t.jsx)("a",{children:"Venue"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Sold"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Available"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Status"})}),(0,t.jsx)(k.ColumnHeaderCell,{children:(0,t.jsx)("a",{children:"Actions"})})]})}),(0,t.jsx)(k.Body,{children:(0,t.jsxs)(k.Row,{children:[(0,t.jsx)(k.RowHeaderCell,{children:"1"}),(0,t.jsx)(k.Cell,{children:"SHOW IMAGE"}),(0,t.jsx)(k.Cell,{children:"Chris Kareh"}),(0,t.jsx)(k.Cell,{children:"19/09/2000"}),(0,t.jsx)(k.Cell,{style:{background:"#25282d"},children:"3ammo Plaza"}),(0,t.jsx)(k.Cell,{children:"26"}),(0,t.jsx)(k.Cell,{children:"12"}),(0,t.jsx)(k.Cell,{children:"Published"}),(0,t.jsx)(k.Cell,{children:"Edit"})]})})]})]}),(0,t.jsxs)("div",{className:"top-right-profile",style:{flexDirection:"column"},children:[(0,t.jsx)("div",{className:"emblaV",style:{marginTop:40,width:"100%"},children:(0,t.jsx)("div",{className:"embla__viewportV",ref:x,children:(0,t.jsx)("div",{className:"embla__containerV",children:f.map(e=>(0,t.jsxs)("div",{className:"embla__slideV",children:[(0,t.jsx)("div",{className:"embla__slide__numberV",children:(0,t.jsx)("span",{children:e+1})}),(0,t.jsx)("img",{className:"embla__slide__imgV",src:(0,n.Z)(e),alt:"Your alt text"})]},e))})})}),(0,t.jsx)("div",{className:"embla-thumbs",style:{width:"25%",height:"25%",marginLeft:30},children:(0,t.jsx)("div",{className:"embla-thumbs__viewport",ref:b,children:(0,t.jsx)("div",{className:"embla-thumbs__container",children:f.map(e=>(0,t.jsx)(o.b,{onClick:()=>T(e),selected:e===h,index:e,imgSrc:(0,n.Z)(e)},e))})})})]})]})]})}}},function(e){e.O(0,[977,675,510,109,896,82,774,888,179],function(){return e(e.s=4998)}),_N_E=e.O()}]);