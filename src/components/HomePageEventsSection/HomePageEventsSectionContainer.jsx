import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import HomePageEventsSection from './HomePageEventsSection';
import { extractNodes } from '../../helpers/data';

const HomePageEventsSectionContainer = () => (
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
    render={data => <HomePageEventsSection events={extractNodes(data.allEventsJson)} />}
  />
);

export default HomePageEventsSectionContainer;
