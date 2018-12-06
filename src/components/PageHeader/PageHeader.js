import React from 'react'
import styled, { css } from 'styled-components'

import Logo from './Logo'
import Navigation from './Navigation'
import { medLarge, large } from '../../styles/variables'
import { clearfix, mq } from '../../styles/mixins'

const navItems = [
  { caption: 'Home', path: '/' },
  { caption: 'Events', path: '/events' },
  { caption: 'Jobs', path: '/jobs' },
  { caption: 'Videos', path: '/videos' },
  { caption: 'About', path: '/about' }
]

const Header = styled.header`
  width: 100%;
  z-index: 10;
`

const Container = styled.div`
  ${clearfix}
  ${mq(medLarge)`
    padding: 2em;
  `}
  ${mq(large)`
    padding: 2.8em 2em;
  `}
`

const PageHeader = () => (
  <Header>
    <Container>
      <Logo />
      <Navigation items={navItems} />
    </Container>
  </Header>
)

export default PageHeader
