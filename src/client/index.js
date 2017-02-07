import React from 'react';
import { render } from 'react-dom';
import { Renderer } from 'm3.intl.react-markdown';

import {
  TestPlugin,
} from '../mdplugins';

const MDPlugins = [
  TestPlugin,
];

const markdown = '# blah [#replace]';

render((
  <Renderer plugins={MDPlugins} markdown={markdown} />
), document.getElementById('md-placeholder'));
