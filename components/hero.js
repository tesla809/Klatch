import React from 'react';

const Hero = () => (
  <div className='hero'>
    <h1 className='title'>Klatch</h1>
    <p className='description'>
      A Distributed Meetup platform
    </p>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        background-color: #00455d;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .title {
        color: #ED1C40;
      }
    `}</style>
  </div>
);

export default Hero;