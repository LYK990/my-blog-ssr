import { createRouter, createWebHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; // npm i @types/nprogress类型补充
import category from './modules/category';
import archive from './modules/archive';
import share from './modules/share';
import login from './modules/login';
import register from './modules/register';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  ...category,
  ...archive,
  ...share,
  ...login,
  ...register
];

export default function createSSRRouter() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });
}

const router = createSSRRouter();

router.beforeEach(() => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});
