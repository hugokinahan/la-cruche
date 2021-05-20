import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

import pga21tips from '../../images/pga21tips.jpeg'

function PGA21() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">The PGA Championship 2021 Tips</h1>
        <h5>By Joe Mellor</h5>
        <div className="review-blog-content">
        <img className='author-headshot' src='https://i.postimg.cc/zvVfvjqR/joe-headshot.jpg' alt='author'/>
          <p>
          In what is widely considered to be the least prestigious of the four majors, the PGA Championship still holds its own amongst the biggest competitions in the sport. The schedule change to bring the event from its usual season ending August window into a more prime-time slot in May, is an attempt to give the Championship the dignity it well and truly deserves.
          </p>
          <div className="round-one">
            <p>
            Unlike the Masters, the changing venues leave form as much less of an indicator, especially at a course which is a relatively unknown quantity on tour. Back in Kiawah Island, the same venue that Rory McIlroy won this competition by eight clear strokes in 2012, the strongest field on tour to date will have to do battle with the elements in order to go well here.
            </p>
            <p>
            Pete Dye designed this course with his wife Alice, though alterations were made when Alice noted that an ocean-side course without views of the ocean is redundant, and so the conditions are now even more of a factor with greens and fairways raised to give unparalleled views of the Atlantic. It’s widely regarded among professionals and pundits as one of the hardest courses in golf, and the scene of 1991’s ‘War on the Shore’ will once again play host to the world’s best gunning for the Wanamaker Trophy.
            </p>
            <p>Members have made four picks, with one from each of the top 10, 1-20, 21-30 and 31+ in the official world rankings. Individual player scores will be totalled, with the lowest combined score taking home the gold. If a player misses the cut, a further 10 points will be added to their score.</p>
            <p>The boys’ picks are as follows:</p>
            <img src={pga21tips} alt='tips' />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PGA21