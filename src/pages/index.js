import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import News from '../components/News'
import Events from '../components/Events'
import Tweets from '../components/Tweets'
import FeaturedVideo from '../components/FeaturedVideo'
import Jobs from '../components/Jobs'

const IndexPage = () => (
  <Layout>
    <Hero />
    <News />
    <Events />
    <Tweets />
    <FeaturedVideo />
    <Jobs />
  </Layout>
)

export default IndexPage
