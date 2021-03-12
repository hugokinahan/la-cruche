import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import Footer from './Footer'
import MiloYellow from '../images/milo-candid-rosapenna.jpg'
import Trophy from '../images/la-cruche-trophy.jpeg'

function About() {

  return (
    <section>
      <Nav />
      <div className='about-content'>
        <h2 className='about-header'>About Us</h2>
        <div className='about-text'>
        <p>La Cruche was formed in 2020 between 10 friends eager to make the most of our shared passion for golf. The French name, La Cruche, translates to 'The Jug', paying homage to the La Cruche trophy pictured below. Found in an unused cupboard at home by Harry FitzGerald, it became the perfect addition to the tour (apparently some other golf tournament has a similar trophy).</p>  
        <img className='trophy' alt='trophy' src={Trophy} />
          
        <p>It would be remiss to say that La Cruche isn't competitive, but it certainly isn't all about taking our beloved trophy home. With handicaps ranging from 9 to 20 amongst the members, the golf isn't of the highest quality but provides some high-class entertainment. The rules are fairly relaxed with some generous 'Irish drops' allowed when necessary, but make no mistake, any sulking is taken very seriously.</p>

        <p>Inspiration from other major events does't stop with the La Cruche trophy. The player with the highest Stableford score at the end of each round has the honour of wearing the Yellow Jersey for the following round (candidly modeled by Milo below). A ploy that was intended to make the leader look and feel ridiculous but one which had the opposite effect during our first Tour.</p> 
          
        <img alt='milo-yellow-jersey' src={MiloYellow} />

        <p>During a relaxation in COVID restrictions, the founding 8 members of La Cruche seized the opportunity to embark on our first Tour, Northern Ireland. Read all about the <Link to='/blog/review-2020'>Northern Ireland Tour here.</Link></p>
      </div>
      </div>
      <Footer />
    </section>
  )
}

export default About