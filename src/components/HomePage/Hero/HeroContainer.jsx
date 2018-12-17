import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Hero from './Hero';
import { extractNodes } from '../../../helpers/data';

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
    render={data => <Hero meetups={extractNodes(data.allMeetupsJson)} />
    }
  />
);

export default HeroContainer;
