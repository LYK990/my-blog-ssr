import { createRouter, createWebHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; // npm i @types/nprogress类型补充
import category from './modules/category';
import archive from './modules/archive';
import share from './modules/share';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  ...category,
  ...archive,
  ...share
];

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes
});

router.beforeEach(() => {
  // nprogress.start();
});

router.afterEach(() => {
  // nprogress.done();
});

export default router;
