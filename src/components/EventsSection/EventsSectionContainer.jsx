import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import EventsSection from './EventsSection';
import { extractNodes } from '../../helpers/data';

const EventsSectionContainer = () => (
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
    render={data => <EventsSection events={extractNodes(data.allEventsJson)} />}
  />
);

export default EventsSectionContainer;
