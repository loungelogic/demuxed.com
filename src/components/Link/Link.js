import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const isExternalUrl = url => /^(?:(?:https?)|(?:mailto)):/.test(url)

const Link = ({ children, to, activeClassName, ...restProps }) => {
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

export default Link
