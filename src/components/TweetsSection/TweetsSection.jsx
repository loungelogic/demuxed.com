import React from 'react';

import TweetsList from '../TweetsList';
import Section from '../Section';

const TweetsSection = ({ tweets }) => (
  <Section>
    <Section.Heading>From Twitter</Section.Heading>
    <TweetsList tweets={tweets} />
  </Section>
);

export default TweetsSection;
