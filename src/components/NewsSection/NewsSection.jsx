import React from 'react';
import PropTypes from 'prop-types';

import NewsList from '../NewsList';
import Section from '../Section';

const NewsSection = ({ news }) => (
  <Section>
    <Section.Heading>In the news</Section.Heading>
    <NewsList news={news} />
  </Section>
);

NewsSection.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsSection;
