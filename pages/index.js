import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Cards from '../components/cards'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <title>Klatch</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav/>
    <Hero/>
    <Cards/>
    <Footer/>
  </div>
)

export default Home
