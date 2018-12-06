import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import menu from '../../images/menu.svg'
import { brandBlue, brandPink, defaultSerif, large, medLarge } from '../../styles/variables'
import { fontSize, mq, transitionAll } from '../../styles/mixins'

const Li = styled.li`
  ${mq(medLarge)`
    border: 0;
    display: inline-block;
    margin-left: 1em;
    
    &:first-child {
      margin-left: 0;
    }
  `}
  
  ${mq(large)`
    margin-left: 2em;
    
    &:first-child {
      margin-left: 0;
    }
  `}
`

const StyledLink = styled(Link)`
  font-family: ${defaultSerif};
  ${transitionAll};
  display: block;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  ${fontSize('18px')};
  font-weight: 400;
  padding: 1em;
        
  ${mq(medLarge)`
    ${fontSize('12px')};
    padding: 0;
    color: ${brandBlue};
  `}

  &:hover,
  &.selected {
    text-decoration: none;
    background: rgba(225,225,225,0.1);
    
    ${mq(medLarge)`
      opacity: 1;
      text-decoration: none;
      background: 0;
      color: ${brandPink};
    `}
  }
`

const NavigationItem = ({ to, children }) => (
  <Li>
    <StyledLink to={to}>
      {children}
    </StyledLink>
  </Li>
)

export default NavigationItem

