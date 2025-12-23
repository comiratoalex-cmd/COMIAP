import { state } from './state.js';
export function applyTheme(t){
  Object.entries(t).forEach(([k,v])=>{
    if(k.startsWith('c'))
      document.documentElement.style.setProperty('--'+k,v);
  });
  state.theme = t;
}
