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
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/404.vue')
  },
  ...category,
  ...archive,
  ...share,
  ...login,
  ...register,
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];
// 常量路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  ...login,
  ...register
];
// 异步路由
export const allAsyncRoutes: Array<RouteRecordRaw> = [...archive, ...share, ...category];
// 任意路由
export const anyRoute: Array<RouteRecordRaw> = [{ path: '*', redirect: '/404' }];

export default function createSSRRouter() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });
}

export const router = createSSRRouter();

router.beforeEach(() => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});
