import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'
import Link from '../Link'
import ListItem from '../ListItem'
import { fontSize, media } from '../../styles/mixins'
import {
  brandPink,
  brandTextGrey,
  defaultSerif,
  medLarge,
  small
} from '../../styles/variables'

const StyledListItem = styled(ListItem)`
  list-style-type: none;
  text-align: left;
  background-color: #fff; 
  margin-bottom: 1em;

  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(medLarge)`
    width: 28%;
    margin-right: 2%;
    margin-left: 2%;
  `}
`

const EventDetails = styled.div`
  padding: 2em;
  position: relative;
`

const EventTitle = styled.h3`
  ${fontSize('16px')};
  line-height: 1.2em;
  margin-bottom: 0.6em;
`

const EventLocation = styled.h4`
  ${fontSize('14px')};
  font-family: ${defaultSerif};
  font-weight: 500;
  color: ${brandTextGrey};
  line-height: 1.3em;
`

const EventDate = styled.span`
  ${fontSize('13px')};
  line-height: 1.6em;
  margin-bottom: 0.8em;
  display: block;
  color: ${brandPink};
`

const StyledButton = styled(Button)`
  padding: 0.5em 3em;
`

const EventCard = ({ title, location, date, url, photo }) => (
  <StyledListItem>
    <Link to={url}>
      <img src={photo.publicURL} alt='' />
    </Link>
    <EventDetails>
      <EventTitle>{title}</EventTitle>
      <EventLocation>{location}</EventLocation>
      <EventDate>{date}</EventDate>
      <StyledButton as={Link} to={url}>
        Join
      </StyledButton>
    </EventDetails>
  </StyledListItem>
)

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    publicURL: PropTypes.string.isRequired
  }).isRequired
}

export default EventCard
