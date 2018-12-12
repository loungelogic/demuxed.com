import React from 'react'
import { storiesOf } from '@storybook/react'
import { withViewport } from '@storybook/addon-viewport'

import Jobs from './Jobs'

const jobs = [
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#'
  },
  {
    position: 'SVoIP Audio Engineer',
    company: 'Netflix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#'
  },
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#'
  },
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    url: '#'
  }
]

storiesOf('Jobs', module)
  .add('Jobs', () => (
    <Jobs jobs={jobs} />
  ))

storiesOf('Jobs', module)
  .addDecorator(withViewport('iphone6'))
  .add('Jobs on mobile', () => (
    <Jobs jobs={jobs} />
  ))
