import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

import WGCtips from '../../images/wgc-dell-tips.png'

function Review2020() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">2021 WGC Match Play Tips</h1>
        <h5>By Joe Mellor</h5>
        <div className="review-blog-content">
        <img className='author-headshot' src='https://i.postimg.cc/zvVfvjqR/joe-headshot.jpg' alt='author'/>
          <p>
            In what we hope to be the first of many La Cruche Tour Tips, members
            go head-to-head with a Win and E/W pick for the WGC Match Play this
            weekend in Austin, Texas. Using SkyBet prices and places
            requirements, returns will be tallied and added to a leaderboard.
          </p>
          <div className="round-one">
            <p>
              While the La Cruche trophy remains the most coveted prize in
              sport, there’ll certainly be bragging rights for those who can
              return a tidy profit from their best bets throughout the year.
            </p>
            <p>
              Without further ado, the members have had their say and have gone
              with the following bets:
            </p>
            <img src={WGCtips} alt='tips' />
            <p>One point will be placed on each bet, while E/W winnings will NOT be split between those who exit at the quarter final stage.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Review2020