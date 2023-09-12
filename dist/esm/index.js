let t=0;function e(e,o){const n="atom"+ ++t,r={toString:()=>n};return"function"==typeof e?r.read=e:(r.init=e,r.read=t=>t(r),r.write=(t,e,o)=>e(r,"function"==typeof o?o(t(r)):o)),o&&(r.write=o),r}const o=t=>"init"in t,n=t=>!!t.write,r=new WeakMap,i=(t,e)=>{const o=r.get(t);o&&(r.delete(t),o(e))},a=(t,e)=>{t.status="fulfilled",t.value=e},s=(t,e)=>{t.status="rejected",t.reason=e},d=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),c=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),u=t=>"v"in t&&t.v instanceof Promise,l=t=>{if("e"in t)throw t.e;return t.v},v=()=>{const t=new WeakMap,e=new WeakMap,v=new Map;let m,p;"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&(m=new Set,p=new Set);const f=e=>t.get(e),h=(e,o)=>{"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&Object.freeze(o);const n=t.get(e);if(t.set(e,o),v.has(e)||v.set(e,n),n&&u(n)){const t="v"in o?o.v instanceof Promise?o.v:Promise.resolve(o.v):Promise.reject(o.e);i(n.v,t)}},E=(t,e,o)=>{const n=new Map;let r=!1;o.forEach(((o,i)=>{o||i!==t||(o=e),o?(n.set(i,o),e.d.get(i)!==o&&(r=!0)):"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&console.warn("[Bug] atom state not found")})),(r||e.d.size!==n.size)&&(e.d=n)},g=(t,e,o)=>{const n=f(t),r={d:(null==n?void 0:n.d)||new Map,v:e};if(o&&E(t,r,o),n&&d(n,r)&&n.d===r.d)return n;if(n&&u(n)&&u(r)&&(a=r,"v"in(i=n)&&"v"in a&&i.v.orig&&i.v.orig===a.v.orig)){if(n.d===r.d)return n;r.v=n.v}var i,a;return h(t,r),r},w=(t,o,n,i)=>{if("function"==typeof(null==(d=o)?void 0:d.then)){let d;const c=new Promise(((r,i)=>{let u=!1;o.then((o=>{if(!u){u=!0;const i=f(t),s=g(t,c,n);a(c,o),r(o),e.has(t)&&(null==i?void 0:i.d)!==s.d&&T(t,s,null==i?void 0:i.d)}}),(o=>{if(!u){u=!0;const r=f(t),a=g(t,c,n);s(c,o),i(o),e.has(t)&&(null==r?void 0:r.d)!==a.d&&T(t,a,null==r?void 0:r.d)}})),d=t=>{u||(u=!0,t.then((t=>a(c,t)),(t=>s(c,t))),r(t))}}));return c.orig=o,c.status="pending",((t,e)=>{r.set(t,e),t.catch((()=>{})).finally((()=>r.delete(t)))})(c,(t=>{t&&d(t),null==i||i()})),g(t,c,n)}var d;return g(t,o,n)},_=(t,r)=>{const i=f(t);if(!r&&i){if(e.has(t))return i;if(Array.from(i.d).every((([e,o])=>e===t||_(e)===o)))return i}const a=new Map;let s=!0;const d=e=>{if(e===t){const t=f(e);if(t)return a.set(e,t),l(t);if(o(e))return a.set(e,void 0),e.init;throw new Error("no atom init")}const n=_(e);return a.set(e,n),l(n)};let u,v;const m={get signal(){return u||(u=new AbortController),u.signal},get setSelf(){return"production"===(import.meta.env?import.meta.env.MODE:void 0)||n(t)||console.warn("setSelf function cannot be used with read-only atom"),!v&&n(t)&&(v=(...e)=>{if("production"!==(import.meta.env?import.meta.env.MODE:void 0)&&s&&console.warn("setSelf function cannot be called in sync"),!s)return D(t,...e)}),v}};try{const e=t.read(d,m);return w(t,e,a,(()=>null==u?void 0:u.abort()))}catch(e){return((t,e,o)=>{const n=f(t),r={d:(null==n?void 0:n.d)||new Map,e:e};return o&&E(t,r,o),n&&c(n,r)&&n.d===r.d?n:(h(t,r),r)})(t,e,a)}finally{s=!1}},M=t=>l(_(t)),O=(t,e)=>!e.l.size&&(!e.t.size||1===e.t.size&&e.t.has(t)),b=t=>{const o=new Map,n=new WeakMap,r=t=>{var o;const n=new Set(null==(o=e.get(t))?void 0:o.t);return v.forEach(((e,o)=>{var r;(null==(r=f(o))?void 0:r.d.has(t))&&n.add(o)})),n},i=t=>{r(t).forEach((e=>{e!==t&&(o.set(e,(o.get(e)||new Set).add(t)),n.set(e,(n.get(e)||0)+1),i(e))}))};i(t);const a=t=>{r(t).forEach((e=>{var r;if(e!==t){let t=n.get(e);if(t&&n.set(e,--t),!t){let t=!!(null==(r=o.get(e))?void 0:r.size);if(t){const o=f(e),n=_(e,!0);t=!o||!d(o,n)}t||o.forEach((t=>t.delete(e)))}a(e)}}))};a(t)},y=(t,...e)=>{let n=!0;const r=t.write((t=>l(_(t))),((e,...r)=>{let i;if(e===t){if(!o(e))throw new Error("atom not writable");const t=f(e),n=w(e,r[0]);t&&d(t,n)||b(e)}else i=y(e,...r);if(!n){const t=N();"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&m.forEach((e=>e({type:"async-write",flushed:t})))}return i}),...e);return n=!1,r},D=(t,...e)=>{const o=y(t,...e),n=N();return"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&m.forEach((t=>t({type:"write",flushed:n}))),o},S=(t,o,r)=>{var i;const a=r||[];null==(i=f(t))||i.d.forEach(((o,n)=>{const r=e.get(n);r?r.t.add(t):n!==t&&S(n,t,a)})),_(t);const s={t:new Set(o&&[o]),l:new Set};if(e.set(t,s),"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&p.add(t),n(t)&&t.onMount){const{onMount:e}=t;a.push((()=>{const o=e(((...e)=>D(t,...e)));o&&(s.u=o)}))}return r||a.forEach((t=>t())),s},A=t=>{var o;const n=null==(o=e.get(t))?void 0:o.u;n&&n(),e.delete(t),"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&p.delete(t);const r=f(t);r?(u(r)&&i(r.v),r.d.forEach(((o,n)=>{if(n!==t){const o=e.get(n);o&&(o.t.delete(t),O(n,o)&&A(n))}}))):"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&console.warn("[Bug] could not find atom state to unmount",t)},T=(t,o,n)=>{const r=new Set(o.d.keys());null==n||n.forEach(((o,n)=>{if(r.has(n))return void r.delete(n);const i=e.get(n);i&&(i.t.delete(t),O(n,i)&&A(n))})),r.forEach((o=>{const n=e.get(o);n?n.t.add(t):e.has(t)&&S(o,t)}))},N=()=>{let t;for("production"!==(import.meta.env?import.meta.env.MODE:void 0)&&(t=new Set);v.size;){const o=Array.from(v);v.clear(),o.forEach((([o,n])=>{const r=f(o);if(r){const i=e.get(o);i&&r.d!==(null==n?void 0:n.d)&&T(o,r,null==n?void 0:n.d),!i||n&&!u(n)&&(d(n,r)||c(n,r))||(i.l.forEach((t=>t())),"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&t.add(o))}else"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&console.warn("[Bug] no atom state to flush")}))}if("production"!==(import.meta.env?import.meta.env.MODE:void 0))return t},I=(t,o)=>{const n=(t=>{let o=e.get(t);return o||(o=S(t)),o})(t),r=N(),i=n.l;return i.add(o),"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&m.forEach((t=>t({type:"sub",flushed:r}))),()=>{i.delete(o),(t=>{const o=e.get(t);o&&O(t,o)&&A(t)})(t),"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&m.forEach((t=>t({type:"unsub"})))}};return"production"!==(import.meta.env?import.meta.env.MODE:void 0)?{get:M,set:D,sub:I,dev_subscribe_store:(t,e)=>{if(2!==e)throw new Error("The current StoreListener revision is 2.");return m.add(t),()=>{m.delete(t)}},dev_get_mounted_atoms:()=>p.values(),dev_get_atom_state:e=>t.get(e),dev_get_mounted:t=>e.get(t),dev_restore_atoms:t=>{for(const[e,n]of t)o(e)&&(w(e,n),b(e));const e=N();m.forEach((t=>t({type:"restore",flushed:e})))}}:{get:M,set:D,sub:I}};let m;"production"!==(import.meta.env?import.meta.env.MODE:void 0)&&("number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1);const p=()=>(m||("production"!==(import.meta.env?import.meta.env.MODE:void 0)&&1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),m=v()),m);function f(t){var e;return null!==(e=null==t?void 0:t.store)&&void 0!==e?e:p()}function h(t,e){var o=f(e);return{subscribe:function(e){return e(o.get(t)),o.sub(t,(function(){var n=o.get(t);e(n)}))},update:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(import.meta.env.DEV&&!("write"in t))throw new Error("not writable atom");return o.set.apply(o,function(t,e,o){if(o||2===arguments.length)for(var n,r=0,i=e.length;r<i;r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return t.concat(n||Array.prototype.slice.call(e))}([t],e,!1))}}}export{e as atom,v as createStore,h as useAtom,f as useStore};
//# sourceMappingURL=index.js.map
