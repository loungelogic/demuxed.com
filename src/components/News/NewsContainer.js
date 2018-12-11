import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import News from './News'

const NewsContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allNewsJson {
          edges {
            node {
              title
              date
              description
              url
            }
          }
        }
      }
    `}
    render={data =>
      <News news={data.allNewsJson.edges.map(edge => edge.node)} />
    }
  />
)
export default NewsContainer
