import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../EventsList';
import Link from '../Link';
import Section from '../Section';

const EventsSection = ({ events }) => (
  <Section>
    <Section.Heading>Upcoming Events</Section.Heading>
    <Section.SubHeading>
      Run an event or interested in running one?&nbsp;
      <Link to="mailto:info@demuxed.com">Get in touch!</Link>
    </Section.SubHeading>
    <EventsList events={events} />
  </Section>
);

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsSection;
