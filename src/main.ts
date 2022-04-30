import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { store, key } from './store';
import '@/style/resetcss.css';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount('#app');
