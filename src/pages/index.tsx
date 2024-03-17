import React from 'react'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Layout from '../components/Layout'
import Services from '../components/Services'
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Jobs />
      </Layout>
    </>
  )
}

export default IndexPage
