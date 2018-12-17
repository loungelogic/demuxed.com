import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import TweetsSection from './TweetsSection';
import { extractNodes } from '../../../helpers/data';

const TweetsSectionContainer = () => (
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
    render={data => <TweetsSection tweets={extractNodes(data.allTweetsJson)} />
    }
  />
);

export default TweetsSectionContainer;
