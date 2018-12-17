import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import NewsSection from './NewsSection';
import { extractNodes } from '../../../helpers/data';

const NewsSectionContainer = () => (
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
    render={data => <NewsSection news={extractNodes(data.allNewsJson)} />}
  />
);

export default NewsSectionContainer;
