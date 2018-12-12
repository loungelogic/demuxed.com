import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import FeaturedVideo from './FeaturedVideo'

const FeaturedVideoContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allFeaturedVideoJson {
          edges {
            node {
              description
              url
              fullVideoUrl
              viewMoreUrl
            }
          }
        }
      }
    `}
    render={(data) => {
      const featuredVideoData = data.allFeaturedVideoJson.edges[0].node
      return <FeaturedVideo {...featuredVideoData} />
    }}
  />
)

export default FeaturedVideoContainer
