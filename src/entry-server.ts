/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import { renderToString } from '@vue/server-renderer';
import createApp from '@/main';

// eslint-disable-next-line import/prefer-default-export
export async function render(url: string, manifest: any) {
  const { app, router, store } = createApp();
  await router.push(url);
  await router.isReady();

  const matchedComponents = router.currentRoute.value.matched.flatMap((record) =>
    Object.values(record.components)
  );
  await Promise.all(
    // eslint-disable-next-line consistent-return
    // eslint-disable-next-line array-callback-return
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
  const appHtml = await renderToString(app, context);

  const { state } = store;

  function renderPreloadLink(file: any) {
    if (file.endsWith(".js")) {
      return `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith(".css")) {
      return `<link rel="stylesheet" href="${file}">`;
    } else if (file.endsWith(".woff")) {
      return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
    } else if (file.endsWith(".woff2")) {
      return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
    } else if (file.endsWith(".gif")) {
      return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
    } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
    } else if (file.endsWith(".png")) {
      return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
    } else {
      // TODO
      // eslint-disable-next-line prettier/prettier
      return "";
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
    return { appHtml, state, preloadLinks };
    // eslint-disable-next-line no-else-return
  } else {
    return { appHtml, state };
  }
}
