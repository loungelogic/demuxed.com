import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import logo from '../../images/logo-white.svg'

const StyledLogo = styled(Logo)`
  background-image: url(${logo});
  display: block;
  float: none;
  margin: 0 0 2em 0;
`

const FooterLogo = () => (
  <StyledLogo url='/' />
)

export default FooterLogo
