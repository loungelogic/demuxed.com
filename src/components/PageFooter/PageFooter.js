import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import FooterLogo from './FooterLogo'
import FooterNav from './FooterNav'
import facebookIcon from '../../images/facebook.svg'
import twitterIcon from '../../images/twitter.svg'
import youtubeIcon from '../../images/youtube.svg'
import { brandPurple } from '../../styles/variables'

const navBlocks = [
  {
    title: 'Community',
    links: [
      { to: '/', caption: 'Home' },
      { to: '/events', caption: 'Events' },
      { to: '/jobs', caption: 'Jobs' },
      { to: '/videos', caption: 'Videos' },
      { to: '/about', caption: 'About' },
      { to: 'mailto:info@demuxed.com', caption: 'info@demuxed.com' }
    ]
  },
  {
    title: 'Legal stuff',
    links: [
      { to: '/', caption: 'Code of Conduct' },
      { to: '/', caption: 'Privacy' }
    ]
  },
  {
    title: 'Follow us',
    links: [
      {
        to: 'https://twitter.com/demuxed',
        caption: 'Twitter',
        icon: twitterIcon
      },
      {
        to: 'https://www.youtube.com/channel/UCIc_DkRxo9UgUSTvWVNCmpA',
        caption: 'YouTube',
        icon: youtubeIcon
      },
      {
        to: 'https://www.facebook.com/info',
        caption: 'Facebook',
        icon: facebookIcon
      }
    ]
  },
]

const Footer = styled.footer`
  background-color: ${brandPurple};
  color: #fff;
  position: relative;
`

const StyledContainer = styled(Container)`
  padding: 3em 2em;
`

const LogoContainer = styled.div`
  width: 100%;
`

const PageFooter = () => (
  <Footer>
    <StyledContainer>
      <LogoContainer>
        <FooterLogo />
      </LogoContainer>
      {navBlocks.map(({ title, links }, i) => (
        <FooterNav key={i}>
          <FooterNav.Title>{title}</FooterNav.Title>
          {links.map(({ to, caption, icon }, i) => (
            <FooterNav.Link key={i} to={to} icon={icon}>
              {caption}
            </FooterNav.Link>    
          ))}
        </FooterNav>
      ))}
    </StyledContainer>
  </Footer>
)

export default PageFooter
