import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'

import PageHeader from './PageHeader'

storiesOf('PageHeader', module)
  .add('PageHeader', () => (
    <PageHeader />
  ))
  .addDecorator(withViewport('iphone6'))
  .add('PageHeader on mobile', () => (
    <PageHeader />
  ))
