import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/share',
    name: 'Share',
    component: () => import('@/views/share/Share.vue'), // 父路由组件路径不能为空
    meta: {
      title: '商品'
    }
  }
];

export default routes;
