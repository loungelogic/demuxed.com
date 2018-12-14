import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section';
import VideosList from '../VideosList';

const VideosSection = ({ videos }) => (
  <Section>
    <Section.Heading>Featured Video</Section.Heading>
    <VideosList videos={videos} />
  </Section>
);

VideosSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideosSection;
