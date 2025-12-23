import { generateAITheme } from './features/ai-theme.js';
import { applyTheme } from './core/theme.js';

document.getElementById('generateAI').onclick=()=>{
  applyTheme(generateAITheme());
};
