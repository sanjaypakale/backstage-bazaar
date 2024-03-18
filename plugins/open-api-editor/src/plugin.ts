import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const openApiEditorPlugin = createPlugin({
  id: 'open-api-editor',
  routes: {
    root: rootRouteRef,
  },
});

export const OpenApiEditorPage = openApiEditorPlugin.provide(
  createRoutableExtension({
    name: 'OpenApiEditorPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
