import React from 'react';
import PropTypes from 'prop-types';

import JobsList from '../JobsList';
import Section from '../Section';

const JobsSection = ({ jobs }) => (
  <Section>
    <Section.Heading>Featured Jobs</Section.Heading>
    <JobsList jobs={jobs} />
  </Section>
);

JobsSection.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobsSection;
