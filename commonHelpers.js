import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as n}from"./assets/vendor-2b44ac2e.js";const r=document.querySelector("#datetime-picker"),t={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}};n(r,t);t.onClose(selectedDates[0]);const c=document.querySelector("[data-start]");c.addEventListener("click",()=>{const e=Date.now();setInterval(()=>{const o=Date.now()-e;console.log(o)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
