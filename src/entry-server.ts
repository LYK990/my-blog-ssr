import { renderToString } from 'vue/server-renderer';
import createApp from '@/main';

// eslint-disable-next-line import/prefer-default-export
export async function render(url: string, manifest: any) {
  const { app, router, store } = createApp();
  await router.push(url);
  await router.isReady();

  const matchedComponents = router.currentRoute.value.matched.flatMap((record) =>
    Object.values(record.components)
  );
  console.log('匹配组件', matchedComponents);
  await Promise.all(
    // eslint-disable-next-line consistent-return
    matchedComponents.map((Component: any) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute
        });
      }
    })
  );
  const context: any = {};
  const apphtml = await renderToString(app, context);

  const { state } = store;

  function renderPreloadLink(file: any) {
    if (file.endWith('.js')) {
      console.log('renderPreloadLink--entry-server');
    }
  }
  // eslint-disable-next-line no-shadow
  function renderLinks(modules: any, manifest: any) {
    let links = '';
    modules.forEach((id: any) => {
      const files = manifest[id];
      if (files) {
        files.forEach((file: any) => {
          links += renderPreloadLink(file);
        });
      }
    });
    return links;
  }
  if (import.meta.env.PROD) {
    const preloadLinks = renderLinks(context.modules, manifest);
    return { apphtml, state, preloadLinks };
    // eslint-disable-next-line no-else-return
  } else {
    return { apphtml, state };
  }
}
