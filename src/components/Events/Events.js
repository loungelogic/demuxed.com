import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../Container'
import EventCard from './EventCard'
import SectionHeading from '../SectionHeading'

const EventsList = styled.ul`
  text-align: center;
`

const Events = ({ events = [] }) => (
  <section>
    <Container>
      <SectionHeading>Upcoming Events &amp; Meetups</SectionHeading>
      <EventsList>
        {events.map((item, i) => <EventCard key={i} {...item} />)}
      </EventsList>
    </Container>
  </section>
)

Events.propTypes = {
  events: PropTypes.array.isRequired
}

export default Events
