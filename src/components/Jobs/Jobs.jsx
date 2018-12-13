/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import Link from '../Link';
import SectionHeading from '../SectionHeading';
import SectionSubHeading from '../SectionSubHeading';
import SynopsisCard from '../SynopsisCard';

const JobsList = styled.ul`
  text-align: center;
`;

const Jobs = ({ jobs }) => (
  <section>
    <Container>
      <SectionHeading>Featured Jobs</SectionHeading>
      <SectionSubHeading>
        Want to see more?&nbsp;
        <Link to="/jobs">View all jobs!</Link>
      </SectionSubHeading>

      <JobsList>
        {jobs.map((item, i) => (
          <SynopsisCard
            key={i}
            heading={item.position}
            subHeading={item.company}
            text={item.description}
            url={item.url}
          />
        ))}
      </JobsList>
    </Container>
  </section>
);

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Jobs;
