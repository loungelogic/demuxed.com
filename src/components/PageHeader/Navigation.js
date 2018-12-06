import React from 'react'
import styled from 'styled-components'

import NavToggle from './NavToggle'
import NavigationItem from './NavigationItem'
import menu from '../../images/menu.svg'
import { brandPurpleLight, medLarge } from '../../styles/variables'
import { mq } from '../../styles/mixins'

const Nav = styled.nav`
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: absolute;
  top: 0;
  z-index: 20;
  clear: both;
  width: 100%;
  background-color: ${brandPurpleLight};
  text-align: center;
  padding: 2em 0;
  

  ${mq(medLarge)`
    display: inline-block;
    position: static;
    clear: right;
    float: right;
    background: none;
    width: auto;
    padding: 0;
    border: 0;
  `}
`

class Navigation extends React.Component {
  state = {
    isMobileNavVisible: false
  }

  _toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavVisible: !prevState.isMobileNavVisible
    }))
  }
  
  render () {
    const { items } = this.props
    const { isMobileNavVisible } = this.state

    return (
      <>
        <NavToggle
          isNavVisible={isMobileNavVisible}
          onClick={this._toggleMobileNav}
        />
        <Nav isVisible={isMobileNavVisible}>
          <ul>
            {items.map(({ caption, path }, i) => (
              <NavigationItem key={i} to={path}>
                {caption}
              </NavigationItem>
            ))}
          </ul>
        </Nav>
      </>
    )
  }
}

export default Navigation

