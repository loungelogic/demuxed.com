import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageSection from '../../common/PageSection';
import VideoDescription from './VideoDescription';
import { media } from '../../../styles/mixins';
import { xlLarge } from '../../../styles/variables';

const Iframe = styled.iframe`
  height: 360px;
  width: 100%;
  max-width: 706px;
  display: inline-block;
  
  ${media(xlLarge)`
    float: left;
  `}
`;

const FeaturedVideo = ({
  description, url, fullVideoUrl, viewMoreUrl,
}) => (
  <PageSection clearfix>
    <VideoDescription
      description={description}
      url={url}
      fullVideoUrl={fullVideoUrl}
      viewMoreUrl={viewMoreUrl}
    />
    <Iframe frameBorder="0" src={url} />
  </PageSection>
);

FeaturedVideo.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fullVideoUrl: PropTypes.string.isRequired,
  viewMoreUrl: PropTypes.string.isRequired,
};

export default FeaturedVideo;
