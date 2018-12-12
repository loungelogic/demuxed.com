import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Jobs from './Jobs'
import { extractNodes } from '../../helpers/data'

const JobsContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allJobsJson {
          edges {
            node {
              position
              company
              description
              url
            }
          }
        }
      }
    `}
    render={data =>
      <Jobs jobs={extractNodes(data.allJobsJson)} />
    }
  />
)
export default JobsContainer
