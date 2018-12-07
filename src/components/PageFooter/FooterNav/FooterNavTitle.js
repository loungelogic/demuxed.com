import React from 'react'
import styled from 'styled-components'

import FooterNavItem from './FooterNavItem'

const H4 = styled.h4`
  font-weight: 500;
`

const FooterNavLink = ({ children }) => (
  <FooterNavItem>
    <H4>{children}</H4>
  </FooterNavItem>
)

export default FooterNavLink
