import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import logoBlack from '../../images/logo-black.svg'

const StyledLogo = styled(Logo)`
  background-image: url(${logoBlack});
`

const HeaderLogo = () => (
  <StyledLogo url='/' />
)

export default HeaderLogo
