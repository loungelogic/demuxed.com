import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Events from './Events'
import { extractNodes } from '../../helpers/data'

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
      <Events events={extractNodes(data.allEventsJson)} />
    }
  />
)
export default EventsContainer
