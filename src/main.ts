import { createApp } from 'vue';
import '@/style/resetcss.css';
// markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
import router from './router/index';
import { store, key } from './store';
import App from './App.vue';

VMdPreview.use(vuepressTheme, {
  Prism
});
const app = createApp(App);

app.use(router);
app.use(store, key);
app.mount('#app');
app.use(VMdPreview);
