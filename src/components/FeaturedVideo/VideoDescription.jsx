import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import Link from '../Link';
import Paragraph from '../Paragraph';
import Section from '../Section';
import { media } from '../../styles/mixins';
import {
  brandPink,
  brandPurpleLight,
  brandPurple,
  medium,
  xlLarge,
} from '../../styles/variables';

const VideoDescriptionWrapper = styled.div`
  text-align: left;
  margin-bottom: 3em;
  
  ${media(medium)`
    max-width: 36em;
    margin: 0 auto 4em auto;
  `}

  ${media(xlLarge)`
    float: right;
    max-width: 30em;
    margin-bottom: 0;
  `}
`;

const StyledSectionHeading = styled(Section.Heading)`
  ${media(xlLarge)`
    text-align: left;

    &:after {
      margin: 0.3em 0;
    }
  `}
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 1.6em;
`;

const StyledButton = styled(Button)`
  padding: 0.5em 2em;
  margin: 0 1.5em 1em 0;
`;

const MoreButton = styled(StyledButton)`
  background-color: ${brandPurpleLight};
  color: ${brandPink};
  
  &:hover {
    background-color: ${brandPink};
    color: ${brandPurple};
  }
`;

const VideoDescription = ({ description, fullVideoUrl, viewMoreUrl }) => (
  <VideoDescriptionWrapper>
    <StyledSectionHeading>Featured video</StyledSectionHeading>
    <StyledParagraph>{description}</StyledParagraph>
    <StyledButton as={Link} to={fullVideoUrl}>
      View full video
    </StyledButton>
    <MoreButton as={Link} to={viewMoreUrl}>
      See more like this
    </MoreButton>
  </VideoDescriptionWrapper>
);

VideoDescription.propTypes = {
  description: PropTypes.string.isRequired,
  fullVideoUrl: PropTypes.string.isRequired,
  viewMoreUrl: PropTypes.string.isRequired,
};

export default VideoDescription;
