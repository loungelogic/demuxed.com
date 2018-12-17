import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import EventsList from './EventsList';
import eventPhoto from '../../../images/event.jpg';

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

storiesOf('EventsList', module)
  .add('EventsList', () => (
    <EventsList events={events} />
  ));

storiesOf('EventsList', module)
  .addDecorator(withViewport('ipad'))
  .add('EventsList on tablet', () => (
    <EventsList events={events} />
  ));

storiesOf('EventsList', module)
  .addDecorator(withViewport('iphone6'))
  .add('EventsList on mobile', () => (
    <EventsList events={events} />
  ));
