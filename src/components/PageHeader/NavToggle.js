import React from 'react'
import styled from 'styled-components'

import showMenuIcon from '../../images/menu.svg'
import hideMenuIcon from '../../images/x.svg'
import { medLarge } from '../../styles/variables'
import { mq } from '../../styles/mixins'

const Anchor = styled.a`
  background-image: url(${props => props.icon});
  width: 70px;
  height: 65px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 66%;
  display: block;
  position: absolute;
  top: 6px;
  right: 0px;
  z-index: 100;
  
  ${mq(medLarge)`
    display: none;
  `}
`

const NavToggle = ({ isNavVisible, onClick }) => (
  <Anchor
    icon={isNavVisible ? hideMenuIcon : showMenuIcon}
    onClick={onClick}
  />
)

export default NavToggle
