import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../Container'
import NewsCard from './NewsCard'
import SectionHeading from '../SectionHeading'

const NewsList = styled.ul`
  text-align: center;
`

const News = ({ news = [] }) => (
  <section>
    <Container>
      <SectionHeading>In the news</SectionHeading>
      <NewsList>
        {news.map((item, i) => <NewsCard key={i} {...item} />)}
      </NewsList>
    </Container>
  </section>
)

News.propTypes = {
  news: PropTypes.array
}

export default News
