import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; // npm i @types/nprogress类型补充

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/Vuex.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(() => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
