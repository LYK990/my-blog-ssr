import { renderToString } from 'vue/server-renderer';
import createApp from '@/main';

// eslint-disable-next-line import/prefer-default-export
export async function render(url: string) {
  const { app, router, store } = createApp();
  await router.push(url);
  await router.isReady();

  const matchedComponents = router.currentRoute.value.matched.flatMap((record) =>
    Object.values(record.components)
  );
  await Promise.all(
    matchedComponents.map((Component: any) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute
        });
      }
    })
  );
  const html = renderToString(app);
  return html;
}
