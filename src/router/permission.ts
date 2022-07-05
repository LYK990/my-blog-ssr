import { allAsyncRoutes, constantRoutes, anyRoute, router } from '@/router/index';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useStore } from '@/store';
import { ElMessage } from 'element-plus';

router.beforeEach(async (to, from, next) => {
  console.log(to);
  nprogress.start();
  const allRoutes = [...allAsyncRoutes, ...anyRoute];
  allRoutes.forEach((item) => {
    router.addRoute(item as unknown as RouteRecordRaw);
  });
  console.log(router.getRoutes());
  console.log(11111);
  next();
});

router.afterEach(() => {
  console.log(11111)
});
