import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import Container from '../Container'
import ListItem from '../ListItem'
import SectionHeading from '../SectionHeading'
import { media } from '../../styles/mixins'
import { medLarge, small } from '../../styles/variables'

const TweetsList = styled.ul`
  text-align: center;
`

const TweetCard = styled(ListItem)`
  list-style-type: none;
  text-align: left;
  margin-bottom: 1em;
  
  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}
  
  ${media(medLarge)`
    width: 28%;
    margin-right: 2%;
    margin-left: 2%;
  `}

  .twitter-tweet {
    max-height: 12em;
    overflow: auto;
  }
`

const Tweets = ({ tweets = [] }) => (
  <section>
    <Container>
      <SectionHeading>From Twitter</SectionHeading>
      <TweetsList>
        {tweets.map(({ id }, i) => (
          <TweetCard key={i}>
            <TwitterTweetEmbed tweetId={id} />
          </TweetCard>
        ))}
      </TweetsList>
    </Container>
  </section>
)

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
}

export default Tweets
