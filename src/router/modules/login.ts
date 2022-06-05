import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'), // 父路由组件路径不能为空
    meta: {
      title: '商品'
    }
  }
];

export default routes;
