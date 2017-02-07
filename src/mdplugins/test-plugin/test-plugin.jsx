import React from 'react';
import { Plugins } from 'm3.intl.react-markdown';

const TestComponent = () => (
  <span style={{ color: 'red' }}>TEST</span>
)

export default Plugins.InlineComponentTag({
  name: 'replace',
  component: TestComponent,
});
