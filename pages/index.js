import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Cards from '../components/cards'
import Footer from '../components/footer'
import landingHeaderData from '../components/landingHeaderData.js'
import footerLandingPageData from '../components/footerLandingPageData.js'


const Home = () => (
  <div>
    <Head>
      <title>Klatch</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav data={landingHeaderData}/>
    <Hero/>
    <Cards/>
    <Footer data={footerLandingPageData}/>
    <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
      `}</style>
  </div>
)

export default Home
