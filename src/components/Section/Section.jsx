import React from 'react';

import Container from '../Container';
import SectionHeading from './SectionHeading';
import SectionSubHeading from './SectionSubHeading';

const Section = ({ children }) => (
  <section>
    <Container>
      {children}
    </Container>
  </section>
);

Section.Heading = SectionHeading;
Section.SubHeading = SectionSubHeading;

export default Section;
