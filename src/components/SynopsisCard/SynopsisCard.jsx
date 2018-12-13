import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import Button from '../Button';
import Link from '../Link';
import ListItem from '../ListItem';
import Paragraph from '../Paragraph';
import {
  brandPink,
  brandTextGrey,
  medLarge,
  small,
} from '../../styles/variables';
import { fontSize, media } from '../../styles/mixins';

const StyledListItem = styled(ListItem)`
  list-style-type: none;
  text-align: left;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 2px solid ${lighten(0.36, brandTextGrey)};

  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(medLarge)`
    width: 35%;
    margin-right: 5%;
    margin-left: 5%;
    padding-bottom: 3em;      
    margin-bottom: 3em;
  `}
`;

const Heading = styled.h3`
  ${fontSize('16px')};
  line-height: 1.4em;
  margin-bottom: 0.5em;
`;

const SubHeading = styled.h4`
  ${fontSize('14px')};
  line-height: 1.6em;
  margin-bottom: 0.8em;
  display: block;
  color: ${brandPink};
  text-transform: uppercase;
`;

const Text = styled(Paragraph)`
  line-height: 1.6em;
  margin-bottom: 2em;
`;

const StyledButton = styled(Button)`
  padding: 0.6em 3em;
`;

const SynopsisCard = ({
  heading, subHeading, text, url,
}) => (
  <StyledListItem>
    <Heading>{heading}</Heading>
    <SubHeading>{subHeading}</SubHeading>
    <Text>{text}</Text>
    <StyledButton as={Link} to={url}>
      Learn more
    </StyledButton>
  </StyledListItem>
);

SynopsisCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SynopsisCard;
