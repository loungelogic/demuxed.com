import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import HeroBanner from './HeroBanner'
import HeroMeetupCard from './HeroMeetupCard'
import bannerImage from '../../images/hero-banner.jpg'
import { brandBlue, large, medLarge, medium } from '../../styles/variables'
import { fontSize, media } from '../../styles/mixins'

const Section = styled.section`
  background-color: ${brandBlue};
  text-align: center;
`

const StyledContainer = styled(Container)`
  padding: 3em 2em;
`

const H1 = styled.h1`
  ${fontSize('20px')};
  color: #fff;
  line-height: 1.4em;
  margin-bottom: 1em;
  text-align: center;
  text-transform: uppercase;
  
  ${media(medLarge)`
    ${fontSize('24px')};
  `}

  ${media(large)`
    ${fontSize('26px')};
    margin-bottom: 2em;
  `}
`

const StyledBanner = styled(HeroBanner)``
const StyledMeetupCard = styled(HeroMeetupCard)``

const ContentWrapper = styled.div`
  text-align: center;

  ${StyledBanner}, ${StyledMeetupCard} {
    list-style-type: none;
    margin-bottom: 1em;
  }
`

const LeftContent = styled.div`
  ${media(large)`
    vertical-align: top;
    display: inline-block;
    width: 32%;
    margin-right: 2%;
  `}

  ${StyledMeetupCard} {
    ${media(medium)`
      display: inline-block;
      vertical-align: top;
      width: 44%;
      margin: 0 2.5%;
      margin-bottom: 2em;
    `}

    ${media(large)`
      width: 100%;
    `}
  }
`

const RightContent = styled.div`
  ${media(large)`
    vertical-align: top;
    width: 64%;
    display: inline-block;
  `}
`

const Hero = ({ meetups }) => (
  <Section>
    <StyledContainer>
      <H1>The Community for Engineers Working with Video</H1>
      <ContentWrapper>
        <LeftContent>
          {meetups.map((meetup, i) =>
            <StyledMeetupCard key={i} {...meetup} />
          )}
        </LeftContent>
        <RightContent>
          <StyledBanner url='#' imageUrl={bannerImage} />
        </RightContent>
      </ContentWrapper>
    </StyledContainer>
  </Section>
)

export default Hero
