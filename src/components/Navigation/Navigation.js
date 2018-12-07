import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavigationToggle from './NavigationToggle'
import NavigationItem from './NavigationItem'
import { brandPurpleLight, medLarge } from '../../styles/variables'
import { media } from '../../styles/mixins'

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

  ${media(medLarge)`
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
        <NavigationToggle
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

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Navigation

