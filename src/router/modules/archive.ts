import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('@/views/archive/Archive.vue'), // 父路由组件路径不能为空
    meta: {
      title: '归档'
    }
  }
];

export default routes;
