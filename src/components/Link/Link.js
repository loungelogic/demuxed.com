import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const isExternalUrl = url => /^(?:(?:https?)|(?:mailto)):/.test(url)

const Link = ({ children, to, activeClassName, icon, ...restProps }) => {
  const isExternal = isExternalUrl(to)
  
  if (isExternal) {
    return (
      <a href={to} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...restProps}>
        {children}
      </GatsbyLink>
    )
  }
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

export default Link
