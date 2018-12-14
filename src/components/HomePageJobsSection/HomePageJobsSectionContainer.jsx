import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import HomePageJobsSection from './HomePageJobsSection';
import { extractNodes } from '../../helpers/data';

const HomePageJobsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allJobsJson (limit: 4) {
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
    render={data => <HomePageJobsSection jobs={extractNodes(data.allJobsJson)} />}
  />
);

export default HomePageJobsSectionContainer;
