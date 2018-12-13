import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import News from '../components/News'
import Events from '../components/Events'
import Tweets from '../components/Tweets'
import FeaturedVideo from '../components/FeaturedVideo'
import Jobs from '../components/Jobs'
import InvolvementOptions from '../components/InvolvementOptions'

const IndexPage = () => (
  <Layout headerProps={{ dark: true }}>
    <Hero />
    <News />
    <Events />
    <Tweets />
    <FeaturedVideo />
    <Jobs />
    <InvolvementOptions />
  </Layout>
)

export default IndexPage
