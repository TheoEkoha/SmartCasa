import{al as Y,ci as Z,aP as X,aH as p,aE as ee,cw as f,a5 as a,aY as te,cz as ne,aJ as H,b0 as U,a$ as ie,aN as v,cA as ae,cB as oe,cC as z,cD as _,cE as se,cF as le,cG as ce,cH as re,bg as de,b9 as ue,b1 as A,bd as he,cg as ge,cy as me,am as fe,a0 as r}from"./index-271e5b0c.js";import{g as pe,l as we}from"./oauth-473c586c.js";function ye(e){switch(e){case"google":return"Sign In - Google Accounts";default:return`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`}}function xe(e){switch(e){case"facebook":return{width:715,height:555};default:return{width:350,height:500}}}function _e(e,t,n){switch(e){case"apple":case"facebook":case"google":case"farcaster":case"telegram":case"discord":return pe({authOption:e,client:t,ecosystem:n});default:return""}}function be({authOption:e,themeObj:t,client:n,ecosystem:l}){const{height:w,width:c}=xe(e),b=(window.innerHeight-w)/2,E=(window.innerWidth-c)/2,s=window.open(_e(e,n,l),void 0,`width=${c}, height=${w}, top=${b}, left=${E}`);if(s){const u=ye(e);s.document.title=u,s.document.body.innerHTML=Ee,s.document.body.style.background=t.colors.modalBg,s.document.body.style.color=t.colors.accentText}return s&&window.addEventListener("beforeunload",()=>{s==null||s.close()}),s}const Ee=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`;async function Le(e){const n=await(await fetch(`${Y("inAppWallet")}/api/2024-05-05/ecosystem-wallet`,{headers:{"x-ecosystem-id":e}})).json();if(!n||n.code==="UNAUTHORIZED")throw new Error(n.message||`Could not find ecosystem wallet with id ${e}, please check your ecosystem wallet configuration.`);return n.authOptions??void 0}function ke(e){return/^\S+@\S+\.\S+$/.test(e.replace(/\+/g,""))}const q=["email","phone","google","apple","facebook","passkey"],ve=e=>{var $,D,F;const t=e.locale,{wallet:n}=e,l=Z(),w=X(),c=p.useMemo(()=>{var i,o;return e.wallet.id==="inApp"?(o=(i=e.wallet.getConfig())==null?void 0:i.metadata)==null?void 0:o.image:void 0},[e.wallet]),b={google:t.signInWithGoogle,facebook:t.signInWithFacebook,apple:t.signInWithApple,discord:t.signInWithDiscord,farcaster:"Farcaster",telegram:"Telegram"},{data:E,isLoading:s}=ee({queryKey:["auth-options",n.id],queryFn:async()=>f(n)?Le(n.id):null,enabled:f(n),retry:!1}),u=f(n)?E??q:((D=($=n.getConfig())==null?void 0:$.auth)==null?void 0:D.options)??q,L=u.indexOf("email"),m=L!==-1,k=u.indexOf("phone"),h=k!==-1,[I,W]=p.useState(null),g=p.useMemo(()=>I||(m&&h?L<k?"email":"phone":m?"email":h?"phone":"none"),[m,h,L,k,I]);if(f(n)&&s)return a.jsx(te,{});const G=u.includes("passkey"),O=g==="email"?t.emailPlaceholder:t.phonePlaceholder,T=g==="email"?t.emailRequired:t.phoneRequired;let y="text";g==="email"?y="email":g==="phone"&&(y="tel");const d=u.filter(i=>ne.includes(i)),C=d.length>0,R=f(n)?{id:n.id,partnerId:(F=n.getConfig())==null?void 0:F.partnerId}:void 0,K=async i=>{var M,V;const o=n.getConfig(),S=((M=o==null?void 0:o.auth)==null?void 0:M.mode)??"popup";if(o&&"auth"in o&&S!=="popup"&&!e.isLinking)return we({authOption:i,client:e.client,ecosystem:R,redirectUrl:(V=o==null?void 0:o.auth)==null?void 0:V.redirectUrl,mode:S});try{const x=be({authOption:i,themeObj:w,client:e.client,ecosystem:R});if(!x)throw new Error("Failed to open login window");const B={chain:e.chain,client:e.client,strategy:i,openedWindow:x,closeOpenedWindow:j=>{j.close()}},Q=(()=>{if(e.isLinking){if(n.id!=="inApp")throw new Error("Only in-app wallets support multi-auth");return ge(n,B)}else{const j=n.connect(B);return me(i,fe),j}})();l({socialLogin:{type:i,connectionPromise:Q}}),e.select()}catch(x){console.error(`Error signing in with ${i}`,x)}};function N(){l({passkeyLogin:!0}),e.select()}function J(){l({walletLogin:!0}),e.select()}const P=d.length>2;return a.jsxs(H,{flex:"column",gap:"md",style:{position:"relative"},children:[c&&a.jsxs(a.Fragment,{children:[a.jsx(U,{client:e.client,src:c.src,alt:c.alt,width:`${c.width}`,height:`${c.height}`,style:{margin:"auto"}}),a.jsx(ie,{y:"xxs"})]}),C&&a.jsx(H,{flex:"row",center:"x",gap:d.length>4?"xs":"sm",style:{justifyContent:"space-between",display:"grid",gridTemplateColumns:`repeat(${d.length}, 1fr)`},children:d.map(i=>{const o=(()=>P?d.length>4?v.md:v.lg:v.md)();return a.jsxs(Ie,{"aria-label":`Login with ${i}`,"data-variant":P?"icon":"full",variant:"outline",disabled:e.disabled,onClick:()=>{K(i)},children:[a.jsx(U,{src:ae[i],width:o,height:o,client:e.client}),!P&&`${d.length===1?"Continue with ":""}${b[i]}`]},i)})}),e.size==="wide"&&C&&(m||h)&&a.jsx(oe,{text:t.or}),m&&a.jsx(a.Fragment,{children:g==="email"?a.jsx(z,{type:y,onSelect:i=>{l({emailLogin:i}),e.select()},placeholder:O,name:"email",errorMessage:i=>{if(!ke(i.toLowerCase()))return t.invalidEmail},disabled:e.disabled,emptyErrorMessage:T,submitButtonText:t.submitEmail}):a.jsx(_,{client:e.client,icon:se,onClick:()=>{W("email")},title:t.emailPlaceholder,disabled:e.disabled})}),h&&a.jsx(a.Fragment,{children:g==="phone"?a.jsx(z,{format:"phone",type:y,onSelect:i=>{l({phoneLogin:i.replace(/[-\(\) ]/g,"")}),e.select()},placeholder:O,name:"phone",errorMessage:i=>{const o=i.replace(/[-\(\) ]/g,"");if(!/^[0-9]+$/.test(o)&&h)return t.invalidPhone},disabled:e.disabled,emptyErrorMessage:T,submitButtonText:t.submitEmail}):a.jsx(_,{client:e.client,icon:le,onClick:()=>{W("phone")},title:t.phonePlaceholder,disabled:e.disabled})}),G&&a.jsx(a.Fragment,{children:a.jsx(_,{client:e.client,icon:ce,onClick:()=>{N()},title:t.passkey,disabled:e.disabled})}),e.isLinking&&a.jsx(a.Fragment,{children:a.jsx(_,{client:e.client,icon:re(""),onClick:()=>{J()},title:t.linkWallet})})]})},Ie=de(ue)({flexGrow:1,"&[data-variant='full']":{display:"flex",justifyContent:"flex-start",padding:A.md,gap:A.sm,fontSize:he.md,fontWeight:500,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:A.sm}});async function Pe(e){switch(e){case"es_ES":return(await r(()=>import("./es-8ed540ca.js"),[])).default;case"ja_JP":return(await r(()=>import("./ja-784cfb0f.js"),[])).default;case"tl_PH":return(await r(()=>import("./tl-49c56ddc.js"),[])).default;case"vi_VN":return(await r(()=>import("./vi-af39dc37.js"),[])).default;case"de_DE":return(await r(()=>import("./de-5c5d98af.js"),[])).default;case"ko_KR":return(await r(()=>import("./kr-30bb4ef7.js"),[])).default;case"fr_FR":return(await r(()=>import("./fr-364dacb2.js"),[])).default;default:return(await r(()=>import("./en-4ed007fd.js"),[])).default}}function Ae(e){const[t,n]=p.useState(void 0);return p.useEffect(()=>{Pe(e).then(l=>{n(l)})},[e]),t}export{ve as C,be as o,Ae as u};
