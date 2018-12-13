import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import News from './News';

const news = [
  {
    title: 'Article title',
    date: 'June 19, 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#',
  },
  {
    title: 'Article title',
    date: 'June 19, 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#',
  },
  {
    title: 'Article title',
    date: 'June 19, 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#',
  },
  {
    title: 'Article title',
    date: 'June 19, 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#',
  },
];

storiesOf('News', module)
  .add('News', () => (
    <News news={news} />
  ));

storiesOf('News', module)
  .addDecorator(withViewport('iphone6'))
  .add('News on mobile', () => (
    <News news={news} />
  ));
