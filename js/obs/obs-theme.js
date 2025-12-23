import { applyTheme } from '../core/theme.js';
const p=new URLSearchParams(location.search);
if(p.has('theme')){
  applyTheme(JSON.parse(p.get('theme')));
}
