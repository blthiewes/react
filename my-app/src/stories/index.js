import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with even more text', () => (
    <div>
      <h2>Hello world</h2>
      <Button onClick={action('clicked')}>Brent's 1st Button</Button>
      <Button onClick={action('clicked')}>Brent's Button</Button>
    </div>
  ))
  .add('disabled', () => (
    <Button onClick={action('clicked')} disabled>
      Brent's Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
