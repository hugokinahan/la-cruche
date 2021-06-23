import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import logo from '../images/logo.jpg'

function Rules() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="rules-header">Rules</h1>
        <div className="rules-content">
        <img alt='logo' src={logo} className='logo'/>
          <p>
            1. La Cruche will use Stableford scoring meaning EVERY putt must go
            in.
          </p>
          <p>
            2. Winter lies is dependent on the golf courses playing conditions
            at the time of play.
          </p>
          <p>
            3. In order to save time, La Cruche uses a ‘social’ alternative in
            the event of a lost of out of bounds ball; place the ball in the
            short rough adjacent to where you think the ball may have
            become lost or gone out of bounds and add a penalty stroke.
            Otherwise know as an ‘Irish drop’.
          </p>
          <p>4. Handicaps</p>
          <div className="indented-points">
            <p>
              1. Each player will use their handicap as declared at the
              beginning of La Cruche.
            </p>
            <p>
              2. The player with the highest Stableford score on each day will
              have their handicap docked by one. These can accumulate if the
              same player is the highest scorer on consecutive days.
            </p>
            <p>
              3. The declared handicaps will be reduced by one shot for each
              time the member has won La Cruche.
            </p>
          </div>
          <p>
            5. Sulking is strictly forbidden no matter how bad the round is. Any
            sulking can be anonymously reported via WhatsApp. Any player
            reported by two or more players in the same group will face a
            forfeit.
          </p>
          <p>6. In the event of a tie at the end of 72 holes, a playoff will ensue. This is dependent on permission from the golf club to do so. If a playoff cannot happen, the player with the highest individual score in one of their four rounds wins.</p>
          <div>
            <h2 className='games-header'>Games</h2>
            <p>
              The Yellow Jersey - the player with the highest score on each day
              MUST wear the Yellow Jersey for the next days play. Any refusal
              will result in a forfeit.
            </p>
            <p>
              Sweaty Balls - Each player will draw a golf ball at random at the
              start of the tour. This ball will have a number between 1 and 18
              marked on it. You MUST use this ball on the hole that your
              numbered ball dictates. If you lose this ball or forget to use it,
              you will face a forfeit.
            </p>
            <p>
              Par 3 Contest - Each player will enter with a £5 buy in. All par 3
              scores will be recorded. The player with the lowest net score on
              par 3’s wins the pot.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Rules