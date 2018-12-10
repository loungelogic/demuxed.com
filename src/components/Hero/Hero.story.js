import React from 'react'
import { storiesOf } from '@storybook/react'
import { withViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Hero from './Hero'

storiesOf('Hero', module)
  .add('Hero', () => (
    <Hero />
  ))

storiesOf('Hero', module)
  .addDecorator(withViewport('ipad'))
  .add('Hero on tablet', () => (
    <Hero />
  ))

storiesOf('Hero', module)
  .addDecorator(withViewport('iphone6'))
  .add('Hero on mobile', () => (
    <Hero />
  ))
