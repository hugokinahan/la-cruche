import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import MemberIndex from '../members/MemberIndex'

function About() {

  return (
    <section>
      <Nav />
      <div className='homepage-content'>
        <MemberIndex />
      </div>
      <Footer />
    </section>
  )
}

export default About