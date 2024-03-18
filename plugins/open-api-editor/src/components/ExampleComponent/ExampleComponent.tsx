import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Page,
  Content,
} from '@backstage/core-components';
import SwaggerEditor from 'swagger-editor';
import 'swagger-editor/dist/swagger-editor.css';

const url = "https://raw.githubusercontent.com/asyncapi/spec/v2.2.0/examples/streetlights-kafka.yml";

export const ExampleComponent = () => (  
  <Page themeId="tool">
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <div>
            <h1>SwaggerEditor Integration</h1>
            <div id="swagger-editor-container"></div>
          </div>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
