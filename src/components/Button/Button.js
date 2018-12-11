import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  brandPink,
  brandPurple,
  brandPurpleLight,
  buttonFont
} from '../../styles/variables'
import { fontSize } from '../../styles/mixins'

const Button = ({ className, as: ElementType = 'button', ...restProps }) => (
  <ElementType className={className} {...restProps} />
)

Button.propTypes = {
  className: PropTypes.string,
  as: PropTypes.oneOf([PropTypes.string, PropTypes.func])
}

const StyledButton = styled(Button)`
  ${fontSize('11px')};
  font-family: ${buttonFont};
  font-weight: 600;
  color: ${brandPurple};
  letter-spacing: 0.2em;
  background-color: ${brandPink};
  display: inline-block;
  padding: 0 1em;
  text-transform: uppercase;
  text-align: center;
  
  &:hover {
    background-color: ${brandPurpleLight};
    color: ${brandPink};
  }
`

export default StyledButton
