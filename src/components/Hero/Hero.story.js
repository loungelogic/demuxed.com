import React from 'react'
import { storiesOf } from '@storybook/react'
import { withViewport } from '@storybook/addon-viewport'

import Hero from './Hero'
import muxIcon from '../../images/mux.svg'
import vimeoIcon from '../../images/vimeo.svg'
import speakersPhoto from '../../images/speakers-photo2.jpg'

const meetups = [
  {
    title: 'Demuxed meetup',
    url: '#',
    date: 'June 19, 2018',
    location: 'San Francisco',
    logos: [
      { publicURL: muxIcon },
      { publicURL: vimeoIcon }
    ],
    photo: { publicURL: speakersPhoto }
  },
  {
    title: 'Demuxed meetup',
    url: '#',
    date: 'June 19, 2018',
    location: 'San Francisco',
    logos: [
      { publicURL: muxIcon },
      { publicURL: vimeoIcon }
    ],
    photo: { publicURL: speakersPhoto }
  }
]

storiesOf('Hero', module)
  .add('Hero', () => (
    <Hero meetups={meetups} />
  ))

storiesOf('Hero', module)
  .addDecorator(withViewport('ipad'))
  .add('Hero on tablet', () => (
    <Hero meetups={meetups} />
  ))

storiesOf('Hero', module)
  .addDecorator(withViewport('iphone6'))
  .add('Hero on mobile', () => (
    <Hero meetups={meetups} />
  ))
