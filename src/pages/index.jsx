import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import HomePageEventsSection from '../components/HomePageEventsSection';
import TweetsSection from '../components/TweetsSection';
import FeaturedVideo from '../components/FeaturedVideo';
import HomePageJobsSection from '../components/HomePageJobsSection';
import InvolvementSection from '../components/InvolvementSection';

const IndexPage = () => (
  <Layout headerProps={{ dark: true }}>
    <Hero />
    <NewsSection />
    <HomePageEventsSection />
    <TweetsSection />
    <FeaturedVideo />
    <HomePageJobsSection />
    <InvolvementSection />
  </Layout>
);

export default IndexPage;
