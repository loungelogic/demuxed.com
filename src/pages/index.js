import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import News from '../components/News'
import Events from '../components/Events'
import FeaturedVideo from '../components/FeaturedVideo'

const IndexPage = () => (
  <Layout>
    <Hero />
    <News />
    <Events />
    <FeaturedVideo />
  </Layout>
)

export default IndexPage
