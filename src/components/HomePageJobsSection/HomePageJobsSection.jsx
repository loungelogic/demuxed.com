import React from 'react';
import PropTypes from 'prop-types';

import JobsList from '../JobsList';
import Link from '../Link';
import Section from '../Section';

const HomePageJobsSection = ({ jobs }) => (
  <Section>
    <Section.Heading>Featured Jobs</Section.Heading>
    <Section.SubHeading>
      Want to see more?&nbsp;
      <Link to="/jobs">View all jobs!</Link>
    </Section.SubHeading>
    <JobsList jobs={jobs} />
  </Section>
);

HomePageJobsSection.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePageJobsSection;
