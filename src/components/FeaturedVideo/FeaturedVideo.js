import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../Container'
import VideoDescription from './VideoDescription'
import { clearfix, media } from '../../styles/mixins'
import { large, xlLarge } from '../../styles/variables'

const Section = styled.section`
  text-align: center;
`

const StyledContainer = styled(Container)`
  ${clearfix}
  position: relative;

  ${media(large)`
    padding: 4em 2em;
  `}
`

const Iframe = styled.iframe`
  height: 360px;
  width: 100%;
  max-width: 706px;
  display: inline-block;
  
  ${media(xlLarge)`
    float: left;
  `}
`

const FeaturedVideo = ({ description, url, fullVideoUrl, viewMoreUrl }) => (
  <Section>
    <StyledContainer>
      <VideoDescription
        description={description}
        url={url}
        fullVideoUrl={fullVideoUrl}
        viewMoreUrl={viewMoreUrl}
      />
      <Iframe frameBorder='0' src={url} />
    </StyledContainer>
  </Section>
)

FeaturedVideo.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fullVideoUrl: PropTypes.string.isRequired,
  viewMoreUrl: PropTypes.string.isRequired
}

export default FeaturedVideo
