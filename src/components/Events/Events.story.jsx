import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import Events from './Events';
import eventPhoto from '../../images/event.jpg';

const events = [
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
  {
    title: 'Demuxed meetup',
    location: 'San Francisco',
    date: '30.1.17',
    url: '#',
    photo: { publicURL: eventPhoto },
  },
];

storiesOf('Events', module)
  .add('Events', () => (
    <Events events={events} />
  ));

storiesOf('Events', module)
  .addDecorator(withViewport('ipad'))
  .add('Events on tablet', () => (
    <Events events={events} />
  ));

storiesOf('Events', module)
  .addDecorator(withViewport('iphone6'))
  .add('Events on mobile', () => (
    <Events events={events} />
  ));
