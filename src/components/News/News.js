import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../Container'
import SectionHeading from '../SectionHeading'
import SynopsisCard from '../SynopsisCard'

const NewsList = styled.ul`
  text-align: center;
`

const News = ({ news = [] }) => (
  <section>
    <Container>
      <SectionHeading>In the news</SectionHeading>
      <NewsList>
        {news.map((item, i) => (
          <SynopsisCard
            key={i}
            heading={item.title}
            subHeading={item.date}
            text={item.description}
            url={item.url}
          />
        ))}
      </NewsList>
    </Container>
  </section>
)

News.propTypes = {
  news: PropTypes.array
}

export default News
