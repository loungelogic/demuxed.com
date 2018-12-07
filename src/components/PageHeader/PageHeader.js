import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import { medLarge, large } from '../../styles/variables'
import { clearfix, media } from '../../styles/mixins'

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

const StyledContainer = styled(Container)`
  ${clearfix}
  ${media(medLarge)`
    padding: 2em;
  `}
  ${media(large)`
    padding: 2.8em 2em;
  `}
`

const PageHeader = () => (
  <Header>
    <StyledContainer>
      <HeaderLogo />
      <HeaderNav items={navItems} />
    </StyledContainer>
  </Header>
)

export default PageHeader
