import{r as d,i as E,N as a,e as p,c as y,a as M,E as l}from"./@vue-BpmQINlQ.js";/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const m=new WeakMap;d(function(n,s){if(!E(n)){if(!n.nodeType)return a;n=n.innerHTML}const r=n,c=function(t){let e=m.get(t??l);return e||(e=Object.create(null),m.set(t??l,e)),e}(s),u=c[r];if(u)return u;if(n[0]==="#"){const t=document.querySelector(n);n=t?t.innerHTML:""}const o=p({hoistStatic:!0,onError:void 0,onWarn:a},s);o.isCustomElement||typeof customElements>"u"||(o.isCustomElement=t=>!!customElements.get(t));const{code:f}=y(n,o),i=new Function("Vue",f)(M);return i._rc=!0,c[r]=i});
