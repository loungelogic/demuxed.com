/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import SynopsisCard from '../SynopsisCard';

const NewsList = ({ news }) => (
  <List>
    {news.map((item, i) => (
      <SynopsisCard
        key={i}
        heading={item.title}
        subHeading={item.date}
        text={item.description}
        url={item.url}
      />
    ))}
  </List>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
