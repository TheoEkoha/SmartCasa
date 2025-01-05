import{c9 as B,aH as f,a5 as n,aJ as x,a_ as L,b0 as z,aN as j,ca as I,a$ as S,cb as v,cc as b,cd as U,aY as C,ce as H,cf as P,b2 as T,cg as F,ay as O,ch as D,ci as E}from"./index-271e5b0c.js";import{E as M,L as R,O as q,P as J,S as K}from"./SocialLogin-2cfe3aec.js";import{C as N,u as V}from"./useInAppWalletLocale-fbf3c417.js";import Y from"./AllWalletsUI-c7b89757.js";import"./index-618f34e3.js";import"./passkeys-6601d7d0.js";import"./oauth-473c586c.js";function _(e){var a,u,g,m,h,i,w,k,A,y,W;const c=e.size==="compact",{initialScreen:r,screen:l}=B(),[t,o]=f.useState(!1),d=l===e.wallet&&r===e.wallet,s=d&&!e.isLinking?void 0:e.goBack;return n.jsxs(x,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[c&&(d?n.jsxs(n.Fragment,{children:[n.jsx(L,{onBack:s,leftAligned:!e.isLinking,title:n.jsxs(n.Fragment,{children:[(a=e.meta)!=null&&a.titleIconUrl?n.jsx(z,{src:(u=e.meta)==null?void 0:u.titleIconUrl,width:j.md,height:j.md,client:e.client}):null,n.jsx(I,{children:((g=e.meta)==null?void 0:g.title)??e.inAppWalletLocale.emailLoginScreen.title})]})}),n.jsx(S,{y:"lg"})]}):n.jsx(L,{onBack:s,title:e.inAppWalletLocale.signIn})),n.jsx(x,{expand:!0,flex:"column",center:"y",p:c?void 0:"lg",children:n.jsx(N,{...e,locale:e.inAppWalletLocale,disabled:((m=e.meta)==null?void 0:m.requireApproval)&&!t})}),c&&(((h=e.meta)==null?void 0:h.showThirdwebBranding)!==!1||((i=e.meta)==null?void 0:i.termsOfServiceUrl)||((w=e.meta)==null?void 0:w.privacyPolicyUrl))&&n.jsx(S,{y:"xl"}),n.jsxs(x,{flex:"column",gap:"lg",children:[n.jsx(v,{termsOfServiceUrl:(k=e.meta)==null?void 0:k.termsOfServiceUrl,privacyPolicyUrl:(A=e.meta)==null?void 0:A.privacyPolicyUrl,locale:e.connectLocale.agreement,requireApproval:(y=e.meta)==null?void 0:y.requireApproval,onApprove:()=>{o(!t)},isApproved:t}),((W=e.meta)==null?void 0:W.showThirdwebBranding)!==!1&&n.jsx(b,{})]})]})}function $(){return U("useAddConnectedWallet").handleConnection}function G(e){const{wallet:c,done:r}=e,l=$(),t=f.useRef(),[o,d]=f.useState("selecting"),[s,a]=f.useState(),[u,g]=f.useState(!1),m=()=>{d("selecting"),t.current=void 0,e.onBack()};async function h(i){d("loading"),t.current=i;try{await F(c,{strategy:"wallet",wallet:i,chain:c.getChain()||O(1)}).catch(w=>{throw a(w.message),w}),l(i),r()}catch{d("error")}}return t.current?n.jsxs(x,{animate:"fadein",fullHeight:!0,flex:"column",children:[n.jsx(x,{p:"lg",children:n.jsx(L,{title:e.inAppLocale.linkWallet,onBack:m})}),n.jsx(x,{px:e.size==="wide"?"xxl":"lg",expand:!0,flex:"column",center:"y",children:n.jsx("div",{children:o==="error"?n.jsxs(n.Fragment,{children:[n.jsx(M,{onTryAgain:()=>{if(!t.current)throw new Error("Failed to connect to unknown wallet");h(t.current)},title:s||"Failed to Login"}),n.jsx(S,{y:"lg"})]}):n.jsx(n.Fragment,{children:n.jsx(R,{title:"Sign in with your wallet",subtitle:"A pop-up prompt will appear to sign-in and verify your wallet",icon:n.jsx(T,{id:t.current.id??"",size:j.xl,client:e.client})})})})})]}):u?n.jsx(f.Suspense,{fallback:n.jsx(C,{}),children:n.jsx(Y,{onBack:()=>g(!1),onSelect:async i=>{h(i),g(!1)},client:e.client,connectLocale:e.locale,recommendedWallets:void 0,specifiedWallets:[],size:e.size,disableSelectionDataReset:!0})}):n.jsx(H,{title:e.locale.connectAWallet,wallets:P(),selectWallet:async i=>{h(i)},onShowAll:()=>{g(!0)},done:()=>{},goBack:m,setModalVisibility:()=>{},client:e.client,connectLocale:e.locale,hideHeader:!1,recommendedWallets:void 0,chain:c.getChain(),showAllWallets:!0,chains:[],size:e.size,meta:e.meta||{},walletConnect:e.walletConnect,modalHeader:{title:e.inAppLocale.linkWallet,onBack:m},walletIdsToHide:["inApp"],disableSelectionDataReset:!0})}function te(e){const c=D(),r=E(),l=c,t=e.connectLocale.id,o=V(t),{initialScreen:d}=B();if(!o)return n.jsx(C,{});const s=d===e.wallet?()=>{r({})}:e.goBack,a=()=>{e.done(),r({})},u=l!=null&&l.emailLogin?{email:l.emailLogin}:l!=null&&l.phoneLogin?{phone:l.phoneLogin}:void 0;return u?n.jsx(q,{userInfo:u,locale:o,done:a,goBack:s,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):l!=null&&l.passkeyLogin?n.jsx(J,{locale:e.connectLocale,wallet:e.wallet,done:a,onBack:s,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):l!=null&&l.walletLogin?n.jsx(G,{meta:e.meta,inAppLocale:o,walletConnect:e.walletConnect,wallet:e.wallet,client:e.client,size:e.size,done:a,onBack:s||(()=>r({})),locale:e.connectLocale}):l!=null&&l.socialLogin?n.jsx(K,{socialAuth:l.socialLogin.type,locale:o,done:a,goBack:s,wallet:e.wallet,state:l,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,isLinking:e.isLinking}):n.jsx(_,{select:()=>{},connectLocale:e.connectLocale,inAppWalletLocale:o,done:a,goBack:e.goBack,wallet:e.wallet,client:e.client,meta:e.meta,size:e.size,chain:e.chain,isLinking:e.isLinking})}export{te as default};