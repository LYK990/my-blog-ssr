import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'), // 父路由组件路径不能为空
    meta: {
      title: '商品'
    }
  }
];

export default routes;
