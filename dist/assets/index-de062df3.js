import{a6 as y,$ as h,a7 as w,a3 as m,y as l,a8 as T,a9 as I,Q as q,u as E,a1 as _,n as D,v as A,aa as P}from"./index-271e5b0c.js";function j(n){return!!y(n.id)}function C(n){const e=y(n);if(!e)throw new Error(`No injected provider found for wallet: "${n}"`);return e}async function b(n,e,c){const a=C(n),r=(await a.request({method:"eth_requestAccounts"}))[0];if(!r)throw new Error("no accounts available");const t=h(r),s=await a.request({method:"eth_chainId"}).then(w);let i=e.chain&&e.chain.id===s?e.chain:m(s);return e.chain&&e.chain.id!==s&&(await p(a,e.chain),i=e.chain),g(a,t,i,c)}async function H(n,e,c){const a=C(n),r=(await a.request({method:"eth_accounts"}))[0];if(!r)throw new Error("no accounts available");const t=h(r),s=await a.request({method:"eth_chainId"}).then(w),i=c&&c.id===s?c:m(s);return g(a,t,i,e)}function f(n,e){const c={address:h(e),async sendTransaction(a){return{transactionHash:await n.request({method:"eth_sendTransaction",params:[{accessList:a.accessList,value:a.value?l(a.value):void 0,gas:a.gas?l(a.gas):void 0,from:this.address,to:a.to,data:a.data}]})}},async signMessage({message:a}){if(!c.address)throw new Error("Provider not setup");const o=(()=>typeof a=="string"?q(a):a.raw instanceof Uint8Array?E(a.raw):a.raw)();return await n.request({method:"personal_sign",params:[o,c.address]})},async signTypedData(a){if(!n||!c.address)throw new Error("Provider not setup");const o=_(a),{domain:r,message:t,primaryType:s}=o,i={EIP712Domain:D({domain:r}),...o.types};A({domain:r,message:t,primaryType:s,types:i});const d=P({domain:r??{},message:t,primaryType:s,types:i});return await n.request({method:"eth_signTypedData_v4",params:[c.address,d]})},async watchAsset(a){return await n.request({method:"wallet_watchAsset",params:a},{retryCount:0})}};return c}async function g(n,e,c,a){const o=f(n,e);async function r(){n.removeListener("accountsChanged",s),n.removeListener("chainChanged",i),n.removeListener("disconnect",t)}async function t(){r(),a.emit("disconnect",void 0)}function s(d){if(d[0]){const u=f(n,h(d[0]));a.emit("accountChanged",u),a.emit("accountsChanged",d)}else t()}function i(d){const u=m(w(d));a.emit("chainChanged",u)}return n.on&&(n.on("accountsChanged",s),n.on("chainChanged",i),n.on("disconnect",t)),[o,c,t,d=>p(n,d)]}async function p(n,e){var a,o,r;const c=l(e.id);try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:c}]})}catch(t){if((t==null?void 0:t.code)===4902||((o=(a=t==null?void 0:t.data)==null?void 0:a.originalError)==null?void 0:o.code)===4902){const s=await T(e);await n.request({method:"wallet_addEthereumChain",params:[{chainId:c,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:I(s),blockExplorerUrls:(r=s.explorers)==null?void 0:r.map(i=>i.url)}]})}else throw t}}export{H as autoConnectInjectedWallet,b as connectInjectedWallet,C as getInjectedProvider,j as isInjectedWallet};