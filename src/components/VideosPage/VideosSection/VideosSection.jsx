import React from 'react';
import PropTypes from 'prop-types';

import PageSection from '../../common/PageSection';
import VideosList from '../../common/VideosList';

const VideosSection = ({ videos }) => (
  <PageSection>
    <PageSection.Heading>Featured Video</PageSection.Heading>
    <VideosList videos={videos} />
  </PageSection>
);

VideosSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideosSection;
