import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'

import Navigation from './Navigation'

const navItems = [
  { caption: 'Page1', path: '/page1' },
  { caption: 'Page2', path: '/page2' },
  { caption: 'Page3', path: '/page3' },
  { caption: 'Page4', path: '/page4' },
]

storiesOf('Navigation', module)
  .add('Navigation', () => (
    <Navigation items={navItems} />
  ))
  .addDecorator(withViewport('iphone6'))
  .add('Navigation on mobile', () => (
    <Navigation items={navItems} />
  ))
