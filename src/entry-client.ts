/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import createApp from '@/main';

const { app, router, store } = createApp();
router.isReady().then(() => {
  router.beforeResolve((to, from, next) => {
    const toComponents = router
      .resolve(to)
      .matched.flatMap((record) => Object.values(record.components));
    const fromComponents = router
      .resolve(to)
      .matched.flatMap((record) => Object.values(record.components));
    const actived = toComponents.filter((c, i) => {
      return fromComponents[i] !== c;
    });
    if (!actived.length) {
      return next();
    }
    Promise.all(
      actived.map((Component: any) => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          });
        }
      })
    ).then(() => {
      next();
    });
  });

  app.mount('#app');
});

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
// router.beforeEach(() => {
//   // nprogress.start();
// });

// router.afterEach(() => {
//   // nprogress.done();
// });
