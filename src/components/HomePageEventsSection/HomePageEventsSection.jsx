import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../EventsList';
import Section from '../Section';

const HomePageEventsSection = ({ events }) => (
  <Section>
    <Section.Heading>Upcoming Events &amp; Meetups</Section.Heading>
    <EventsList events={events} />
  </Section>
);

HomePageEventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePageEventsSection;
