import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import VideosSection from './VideosSection';
import { extractNodes } from '../../helpers/data';

const VideosSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allVideosJson {
          edges {
            node {
              title
              author
              date
              description
              url
            }
          }
        }
      }
    `}
    render={data => <VideosSection videos={extractNodes(data.allVideosJson)} />}
  />
);

export default VideosSectionContainer;
