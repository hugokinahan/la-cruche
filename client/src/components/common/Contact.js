import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
// import { Link } from 'react-router-dom'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import { SiTwitter, SiInstagram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

function Contact() {

  return (
    <section>
      <Nav />
      <div className="contact-content">
        <h1 className="contact-header">Contact</h1>
        <h3>Follow us on social media or get in touch via email</h3>
        <div className="icons">
          <a href="https://twitter.com/LaCruche2020">
            <SiTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/la_cruche_/">
            <SiInstagram className="icon" />
          </a>
          <a href='mailto:hugokinahan@hotmail.com' >
            <MdEmail className="icon" />
          </a>
        </div>
        <div className="twitter-feed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="LaCruche2020"
            options={{ height: 400, width: 300 }}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact