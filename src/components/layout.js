import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Normalize from './Normalize'
import GlobalStyles from './GlobalStyles'
import PageHeader from './PageHeader'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          link={[
            { rel: 'stylesheet', href: 'https://use.typekit.net/uis3gee.css' }
          ]}
          title={data.site.siteMetadata.title}
          meta={[
            { charset: 'utf-8' },
            { content: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
            { name: 'description', content: 'Demuxed, the conference for video engineers.' },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'MobileOptimized', content: '320' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Normalize />
        <GlobalStyles />
        <PageHeader />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
