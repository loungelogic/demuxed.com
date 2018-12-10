import React from 'react'
import styled from 'styled-components'

import Link from '../../Link'

const StyledLink = styled(Link)`
  &:hover {
    opacity: 0.8;
  }
`

const Img = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const MeetupPhotoLink = ({ url, photoUrl }) => (
  <StyledLink to={url}>
    <Img src={photoUrl} />
  </StyledLink>
)

export default MeetupPhotoLink
