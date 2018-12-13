import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import News from './News';
import { extractNodes } from '../../helpers/data';

const NewsContainer = () => (
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
    render={data => <News news={extractNodes(data.allNewsJson)} />
    }
  />
);
export default NewsContainer;
