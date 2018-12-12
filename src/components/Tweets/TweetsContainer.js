import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Tweets from './Tweets'
import { extractNodes } from '../../helpers/data'

const TweetsContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allTweetsJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data =>
      <Tweets tweets={extractNodes(data.allTweetsJson)} />
    }
  />
)
export default TweetsContainer
