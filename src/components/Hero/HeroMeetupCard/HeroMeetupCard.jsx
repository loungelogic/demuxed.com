/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MeetupPhotoLink from './MeetupPhotoLink';
import MeetupTitle from './MeetupTitle';
import { fontSize, media } from '../../../styles/mixins';
import { brandPink, brandTextGrey, xlLarge } from '../../../styles/variables';

const ContentWrapper = styled.div`
  background-color: #fff; 
  padding: 0;

  ${media(xlLarge)`
    min-height: 11.8em;
  `}
`;

const LeftContent = styled.div`
  padding: 1.5em;
      
  ${media(xlLarge)`
    width: 49%;
    display: inline-block;
    vertical-align: top;
    padding: 2em;
  `}
`;

const RightContent = styled.div`
  display: none;
  min-height: 160px;
  position: relative;
  background-color: ${brandPink};
      
  ${media(xlLarge)`
    min-height: 11.8em;
    display: inline-block;
    width: 51%;
    vertical-align: top;
  `}
`;

const MeetupDate = styled.h4`
  ${fontSize('12px')};
  color: ${brandPink};
`;

const MeetupLocation = styled.p`
  ${fontSize('12px')};
  color: ${brandTextGrey};
  margin-bottom: 1em;
`;

const MeetupLogo = styled.img`
  max-width: 60px;
`;

const HeroMeetupCard = ({
  className,
  title,
  url,
  date,
  location,
  photo,
  logos,
}) => (
  <ContentWrapper className={className}>
    <LeftContent>
      <MeetupTitle url={url}>{title}</MeetupTitle>
      <MeetupDate>{date}</MeetupDate>
      <MeetupLocation>{location}</MeetupLocation>
      {logos.map((logo, i) => <MeetupLogo key={i} src={logo.publicURL} />)}
    </LeftContent>
    <RightContent>
      <MeetupPhotoLink url={url} photoUrl={photo.publicURL} />
    </RightContent>
  </ContentWrapper>
);

HeroMeetupCard.defaultProps = {
  className: '',
  logos: [],
};

HeroMeetupCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  logos: PropTypes.arrayOf(PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  })),
  className: PropTypes.string,
};

export default HeroMeetupCard;
