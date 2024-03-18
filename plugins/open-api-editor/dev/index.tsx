import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { openApiEditorPlugin, OpenApiEditorPage } from '../src/plugin';

createDevApp()
  .registerPlugin(openApiEditorPlugin)
  .addPage({
    element: <OpenApiEditorPage />,
    title: 'Root Page',
    path: '/open-api-editor'
  })
  .render();
