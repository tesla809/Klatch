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
        background-color: rgba(0, 69, 93, 0.87);
        padding-bottom: 20px;
      
        // outline and blend words to background
        text-shadow:
          -1px -1px 0 rgba(0, 69, 93, 1),
          1px -1px 0 #333,
          -1px 1px 0 rgba(0, 69, 93, 1),
          1px 1px 0 #333;
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
        color: white;
      }
      .title {
        color: #ED1C40;
      }
    `}</style>
  </div>
);

export default Hero;