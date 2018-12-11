import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Events from './Events'

const EventsContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allEventsJson {
          edges {
            node {
              title
              location
              date
              url
              photo {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data =>
      <Events events={data.allEventsJson.edges.map(edge => edge.node)} />
    }
  />
)
export default EventsContainer
