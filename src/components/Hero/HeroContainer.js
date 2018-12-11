import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
 
import Hero from './Hero'

const HeroContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMeetupsJson {
          edges {
            node {
              title
              url
              date
              location
              logos {
                publicURL
              }
              photo {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data =>
      <Hero meetups={data.allMeetupsJson.edges.map(edge => edge.node)} />
    }
  />
)

export default HeroContainer
