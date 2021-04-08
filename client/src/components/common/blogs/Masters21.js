import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

import mastersTips from '../../images/masters21.png'

function Review2020() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">The Masters 2021 Tips</h1>
        <h5>By Joe Mellor</h5>
        <div className="review-blog-content">
        <img className='author-headshot' src='https://i.postimg.cc/zvVfvjqR/joe-headshot.jpg' alt='author'/>
          <p>
            In truth, trying to predict the 2020 Masters by using previous trends was always going to be a much bigger challenge than usual considering it was held in November and Augusta was playing completely differently than it does in its usual April slot. However, it’s normal service resumed in that regard as under five months after Dustin Johnson picked up his first Green Jacket, the best of the best go head-to-head again in the 85th edition of the Masters.
          </p>
          <div className="round-one">
            <p>
              The course needs absolutely no introduction and is up there with the most iconic venues in sporting history, and the return to an April showing around here means the course trends and stats are more prevalent than in DJ’s record-breaking win. As ever, approach play and a good touch around the greens will be key in picking a winner here, and with rumours from numerous sources that the course is playing longer and firmer than ever, that deft touch is going to be even more necessary, as the frequent shouts of ‘mudball’ from November are likely to be few and far between this time around.
            </p>
            <p>
            A slight change of format here, and ignoring prices, members have made four picks, with one from each of the top 10, 1-20, 21-30 and 31+ in the official world rankings. Individual player scores will be totalled, with the lowest combined score taking home the gold. If a players misses the cut, a further 10 points will be added to their score.
            </p>
            <p>Without further ado, the members have had their say and have gone with the following picks:</p>
            <img src={mastersTips} alt='tips' />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Review2020