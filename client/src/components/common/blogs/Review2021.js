import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import ReactPlayer from 'react-player'

import imageOne from '../../images/wales/IMG_6141.jpg'
import imageTwo from '../../images/wales/IMG_6146.jpg'
import imageThree from '../../images/wales/IMG_0003.jpg'
import rhodesTrackman from '../../images/wales/rhodes-trackman.MP4'
import paulPK from '../../images/wales/paul-pk.MP4'
import imageFour from '../../images/wales/IMG_0065.jpg'
import imageFive from '../../images/wales/IMG_0007.jpg'
import imageSix from '../../images/wales/IMG_0011.jpg'
import imageSeven from '../../images/wales/IMG_0013.jpg'
import imageEight from '../../images/wales/IMG_0061.jpg'
import imageNine from '../../images/wales/IMG_6163.jpg'
import imageTen from '../../images/wales/IMG_0057.jpg'
import joePutt from '../../images/wales/joe-putt-machynys.MP4'
import imageEleven from '../../images/wales/IMG_6168.jpg'
import imageTwelve from '../../images/wales/IMG_6157.jpg'
import imageThirteen from '../../images/wales/IMG_6181.jpg'
import imageFourteen from '../../images/wales/IMG_6177.jpg'



function Review2021() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">La Cruche 2021 Review: Wales</h1>
        <h5>By Milo Shirley</h5>
        <div className="review-blog-content">
          <img
            className="author-headshot"
            src="https://i.postimg.cc/T1R4J7Kp/milo-headshot.jpg"
            alt="author"
          />
          <p>
            This year saw us head West along the M4 across the Severn and into
            the Land of Myth and Legend, as well as literally the cheapest pints
            aaaaaanywhere. That’s right, Wayels. Unsure of what to expect I
            speak on behalf of all of us when I say that we were very pleasantly
            surprised. Good food, great golf, and the best people. Rhyfeddol!
          </p>
          <img alt="Wales" src={imageOne} className="portrait" />
          <span className="span-italic">And what a warm welcome it was.</span>
          <div className="round-one">
            <h2>23rd June 2021</h2>
            <p className="italic">
              London. The eve of the tournament. Very warm.
            </p>
            <p>
              Rookie and big hitter Paul Kidd and I caught a midday train from
              Waverley down to London. Four hours flew by as we descended
              England’s east coast to the taste of Tennents and M&S wraps.
              Carting a suitcase and golf bag each across Zone 1 in the sticky
              heat wasn’t ideal but we didn’t care, being in London meant our
              trip had begun. La Cruche 2021 had begun. A quick stroll across to
              Mellor and Rhodes’ flat where introductions were made and charred
              meats were consumed, it was the perfect way to set the tone for
              the week. Excitement was building.
            </p>
            <h2>25th June 2021 - Round 1 - Pyle & Kenfig Golf Club</h2>
            <p className="italic">
              17- 22 Celsius. Dry, sunny, hot, foggy, windy. Greens running
              moderately quickly.
            </p>
            <p>
              This year more than last brought with it a greater sense of
              anticipation. I’m not sure if it was the addition of rookies; the
              dripping stash; going to unchartered lands; or the fact that we
              knew how much fun it could be (perhaps a combination of
              everything), but as Fitz, Rees and Youngy slalomed between the
              binmen of Hammersmith & Fulham and parked outside the flat, a real
              sense of excitement set in. With cars packed and Waze calibrated
              it was time to leave England behind and head to our 13.40 at Pyle
              and Kenfig.
            </p>
            <img src={imageThree} alt="Milo and Joe" className="portrait" />
            <span className="span-italic">
              Joe a little over-excited on the par 3 12th.
            </span>
            <p>
              We decided it would be a good idea to spend some time on the range
              to shake-off the cobwebs and dial in the wedges. Speaking of being
              dialled, the sight of Alex Rhodes parked in the middle bay,
              alignment sticks (his unused irons...) across his feet with
              AirPods in his ears did not go unnoticed. Between shots I asked
              him what he was listening to. His prompt answer made me think that
              he wasn’t listening to anything, that it was all a guise. Afterall
              how could he have heard me if he was?
            </p>
            <p>
              “Classical” he told me, as range ball 45 of 200 left the clubface
              of his new M4s.
            </p>
            <p>
              I half expected Nick Dougherty, camera-crew in tow to approach him
              and discuss his process and strategy for the week. Had this
              happened, his strategy would have been simple: “placement above
              Mellor at all costs.” On the range that day he was a Trackman
              short of his tour-card, or so it appeared.
            </p>
            <ReactPlayer
              className="react-player"
              url={rhodesTrackman}
              width="50%"
              height="50%"
              controls={true}
            />
            <span className="span-italic">
              Rhodes doing his best to win the longest drive comp.
            </span>
            <p>
              With the range done for all except Alex- who at this point was
              busy unscrewing the upgraded-golf-swing-plane-training-aid from
              his 8 iron- and with an hour until Group 1’s tee time it was time
              for some grub. The consensus was a panini and some crisps which I
              thoroughly enjoyed. Surprising to many was Joe Mellor CFO (food
              not financial) opting not to eat. Rumours began to circulate that
              due to nerves, he would have been unable to keep it down. I may or
              may not have started these rumours.
            </p>
            <p>
              GOAT, the defending champ, had the honour of getting our tour
              underway. Visibly nervous and with an embroidered star over the
              logo (shoutout Ms Barnes), he popped one right down the middle.
              Ice in those veins. Next up stood Kidd who, with his first
              tee-shot in his first tour and with everyone watching, showed the
              field that they’re made of different gravy up on Tayside blasting
              his drive up the right fairway. A ballsy way to leave your mark on
              the competition and as we found out later, the first shot in a
              round which would leave him tied for 2nd going into day 2. Tied
              with Rhodes I should add. Fitz, Mellor and I were second up and
              with the lowest combined handicap of the three groups, there was
              pressure to deliver. After nervy starts from myself and Joe (Fitz
              striped the ball all day, all week in fact) we steadied the ship
              and started putting points on the board. I have never played a
              golf course whose 9s contrast so extremely.
            </p>
            <ReactPlayer
              className="react-player"
              url={paulPK}
              width="50%"
              height="50%"
              controls={true}
            />
            <span className="span-italic">
              Big Hitter Paul showing great tempo off the tee.
            </span>
            <p>
              Think of the front as the gradual, slow, calm, clicking ascent of
              a rollercoaster. You’re relaxed, comfy and enjoying the ride,
              blissfully unaware about what’s coming next or where its pin is
              positioned. You’ve even got time to roll yourself a cigarette and
              the benign conditions in which to light it. Off the 9th green and
              the next thing you know you’ve crested the hill and are now teeing
              off the 10th (index 1) descending rapidly, uncontrollably left and
              right as the wind billows around you and danger is everywhere you
              look. People are screaming, arms are everywhere and Fitz has lost
              his rangefinder. You’re scared. The back was a glorious test,
              illustrated best by the fact that it yielded the lowest points
              total of any 9 all week. It was proper links golf; firm and fast
              with elevated greens tucked into and around dunes covered with
              gorse. False fronts to greens and forced carries off the tee
              provided stern tests but a range of ways to overcome them. Looking
              back, 11, 12 and 13 were the most memorable. A stretch of holes-
              in those conditions- where every golfer must accept that there
              will be times when the game’s joy is found not in tattooing the
              ball 300yds but in scrapping out a result on a very tough set of
              holes. A 7 for 1 for example. La Cruche loves a 7 for 1.
            </p>
            <img alt="P&K" src={imageTwo} />
            <span className="span-italic">
              A fantastic view of the dunes surrounding the course.
            </span>
            <p>
              The wind died for our final three holes which opened the
              opportunity to score some points coming in. I sensed on the 18th
              green- by the lack of what I thought was a compulsory handshake
              and “well played mate, really enjoyed that”- that my playing
              partners were either fed-up or thirsty or both. I decided to watch
              the final group of Youngy, Kinahan and Cunningham close out their
              round. I’d told myself that Tom and Hugo would be the ones to
              manoeuvrer quietly in the shadows all week and by the smile on
              Youngy’s face during his and Jamie’s handshake (Fitz and Mellor
              please take note) and Hugo’s fist pump, I wasn’t wrong. Back in
              the clubhouse and in between sips of Guinness talk quickly turned
              to scoring. If ever a scoreboard reflected the equal struggle
              faced by all it was this one. 70% of the field occupied places 1,
              2 and 3 with 4 of us tied for 1st on 30pts. Incredible given the
              tiny margin for error around Pyle & Kenfig.
            </p>
            <img src={imageFour} alt="Group 3 off 18" />
            <span className="span-italic">
              Closing the round with a 4 for 3. You can see what it mean to him.
            </span>
            <p>
              With bags packed we headed for Burry Port: the Phuket of
              Carmarthenshire. I think Burry Port might just be my favourite
              place ever visited while on a mainland UK based La Cruche golfing
              holiday. It genuinely goes off. We were welcomed by the warm,
              albeit firm, greetings of our Airbnb host, Diane who warned us
              that we’d better behave ourselves. My guess was that clearly, she
              had heard Joe’s antics from the previous year and decided that
              Sean Paul would not feature this year. Showered and shiny we
              decided to head into town and see what was what. I’ll tell you
              what was what. The Portobello Inn- or as those who’ve arm-wrestled
              the regulars affectionally call it- The Zoo was what. More on The
              Zoo and its beer and its patrons later.
            </p>
          </div>
          <div className="round-two">
            <h2>25th June 2021 - Round 2 - Ashburnham Golf Club</h2>
            <p className="italic">
              14-20 Celsius. Cloudy, windy, wet, sunny. Greens running firm.
            </p>
            <p>
              We arrived at Ashburnham with plenty of time to spare before our
              first tee time at 12.50. The course itself was challenging.
              Tipping out at 6660 it’s not stupid-long, the greens are fairly
              large, and the bunkering is a constant presence, but it is
              avoidable. The practice-green however, is the most
              confidence-shattering piece of grass I’ve ever ‘warmed up’ on. I
              suspect that most of us enjoy the pre-round routine of paying your
              green fee, making a few putts on the practice patch, maybe a swing
              or two in the net if you have time and then an eyeing up of the
              relatively short and wide par 4 first hole. Not at Ashburnham you
              don’t. Once you’ve accepted that you’ll never make a putt ever
              again you walk to and below the front of the clubhouse- in view of
              everybody- where you’re given a downhill, downwind 177yd par 3 to
              navigate. My 3-ball came off the first green with a combined score
              of 14. We played this course twice, that’s 6 groups. 14 was the
              second lowest combined score of any group across the two rounds-
              distance and difficulty do not always correlate.
            </p>
            <img alt="Ashburnham" src={imageFive} className="portrait" />
            <span className="span-italic">
              The lads adding pressure to an already difficult first tee shot at
              Ashburnham.
            </span>
            <p>
              Our group had a wholly uneventful round of golf but looking back
              what stuck with me was yet another par 3, the 6th. Marked as index
              1, I’ve never seen so many ‘3 for 3s.’ Despite a relatively large
              swale before an elevated green, it seemed a strange choice for the
              hardest hole on the course- it wasn’t even the hardest par 3 on
              the course.
            </p>
            <p>
              I thought the back 9 was better than the front. Most notably the
              stretch of holes 8-11 where you reach the furthest point from the
              club house, the wind changes and suddenly you’re playing a
              completely different course. On the way out you had the wind over
              your right shoulder (the drawers’ dream) but coming back it’s into
              you off the left. No longer was missing it right a safe option-
              tough when all the danger on the back was right and your playing
              partner occasionally slices the ball backwards. I believe the mark
              of a good course are its finishing 3 holes. Ashburnham did not
              disappoint here. A short par 3 off a cliff edge, a long tough par
              4 and a short dog-legged par 4 to a raised green beside the
              clubhouse. It would become the perfect finishing hole come Sunday
              but this time around it cost myself Paul and Jamie a few more
              points than it should have. First to finish, we sat on the
              elevated greenside and watched our fellow competitors come in.
            </p>
            <img alt="Ashburnham Tee" src={imageSix} className="portrait" />
            <span className="span-italic">
              Fitz’ first outing in the Gilet Jaune.
            </span>
            <p>
              Two scores on Friday stood out a cut above the field. Inevitably
              the GOAT had shaken off his first-round nerves and the pressure
              that comes with being the defending champ by posting an impressive
              41 pointer which launched him from T-7 to 2nd place (don’t worry
              Barnes, your points record remains intact). More importantly
              though was Fair-Weather-Fitz’ 34 points- off 8, that’s eight! -
              which would see him top the leader board heading into the weekend.
            </p>
            <img
              alt="Ashburnham 18 Tee"
              src={imageSeven}
              className="portrait"
            />
            <span className="span-italic">
              A view from the 15th tee back toward the clubhouse.
            </span>
            <p>
              With cards signed and SweatyBall penalties consumed it was time to
              head home, freshen up and welcome the talented Dom Barnes to
              Wales. As they say, better late than never and what a night to
              make your arrival; one for the books. We had a booking at The Zoo
              with our name on it and a date with the British Brothers
              middleweight arm-wrestling team. I won’t go into too much detail
              about happened at The Zoo, partly to protect the current and
              future job prospects of my fellow tourists, partly because I can’t
              actually remember and partly because it would take too long.
              However, I do remember how happy the staff and the locals were to
              have us, so much so that they gave us a 45-minute lock-in at the
              end. I remember channelling my inner Simon Whitlock as I schooled
              Hugo at a few rounds of darts. I remember watching as each of us
              tried and failed to beat two brothers and their wives at an
              arm-wrestle, an activity no-doubt provoked by Mellor declaring to
              one brother that “I’ve done your missus and I’ll do you next” (he
              didn’t). I remember Mal, the co-owner of the pub, slowly
              meandering through the tables while fulfilling the stereotype that
              all Welshmen have unbelievable pipes (he was performing karaoke).
              And lastly, I remember the smiles on the faces of our entire party
              as we sipped on our Double Dragons tucked away in the corner of a
              pub in a corner of Wales that few have ever visited but should.
            </p>
            <img
              alt="Arm Wrseting at The Zoo"
              src={imageEight}
              className="portrait"
            />
            <span className="span-italic">
              Even with two hands she couldn’t do it. Ruthless from Mellor.
            </span>
          </div>
          <div className="round-three">
            <h2>26th June 2021 - Round 3 - Machynys Peninsula Golf Club</h2>
            <p className="italic">
              20-26 Celsius. Still, warm, sunny, perfect. Greens running
              quickly.
            </p>
            <p>
              Hanging like a wizard’s sleeve and thankful for the Committee’s
              decision to book a Saturday afternoon tee time we rose
              mid-morning, had a light feed, and headed to Machynys Machh – Un –
              Is Golf Club. The course was the closest thing to playing golf in
              America I’ve experienced- ironic given it’s located on Nicklaus
              Avenue but has a name which looks as though it’s missing at least
              3 vowels. The view from the balcony which overlooks the closing
              stretch is probably How It Feels to Chew 5 Gum. It looked
              spectacular. As I write this, I’m looking through the yardage book
              to find a quote from Tommy Fleetwood OLY which states “this is
              arguably the best man-made links in the world.” It’s the only one
              I’ve played but I totally agree with him. It was my favourite
              course of the week.
            </p>
            <p>
              Included in the price of our green fee was a two-course lunch and
              a range session (so American, right?). After some delicious scampi
              and a slice of cheesecake, it was time to hit some balls. I
              thought Rhodes’ range antics on day 1 would have been hard to beat
              but as Mellor himself will tell you, Pyle & Kenfig didn’t have
              wild geese roaming their driving range, did they Mellor?
            </p>
            <img alt="Machynys Lunch" src={imageNine} />
            <span className="span-italic">
              Lunch on Saturday at Machynys. The team look ready.
            </span>
            <p>
                The following is a first hand account from Mr. Mellor, detailing the horrific incident involving Joe, his driver and a goose. Thankfully, no geese suffered any long term injuries (we hope...):
              </p>
            <div className="hugo-account">
              <p>
              "One of the finer days of the tour was about to take a dark turn that none of us could have foreseen. All was dandy at Machynys, the sun was shining down on the terrace where egos were being thrown into question over the choice of a morning coffee or a creamy Guinness. ‘One of each for me thanks barkeep!’. For future reference: A rather unsettling combination for the stomach, especially when guided down with one of Fitz’ s luscious Marlboro Touchs. Needless to say, the gents beckoned for myself as the others went to hit the range. Being the last out, I was left with the end slot on the line, where I plonked down the sticks and plucked out my five wood to get going. While the natural beauty of Machynys was part of its allure, I couldn’t help but feel the gaggle of geese a mere 80 yards in front of the tees was a touch too far, though with no one else seeming bothered by them, why should I be?"
              </p>
              <p>
              "My five wood had been playing up in recent rounds which, of course, was entirely of its own accord and had nothing to do with my swing, so I thought it best to give it a chance to prove itself here. It did not. The first was topped and trickled about 30 yards in front, at which point I was extremely concerned for the gaggle. The second flew low and hard, nutmegging one of the unsuspecting birds, to which I was expecting a few ‘Oles’ from the rest of the range. Alas, nothing. If that shot hadn’t ruined his career, the next certainly did. Another unintentional stinger darted directly toward the feathered creatures, and struck one on directly on the neck. Protective instincts kicked in as the group charged to surround and help the poor bastard while he floundered about on the deck, trying to determine which way was up and down. Gasps and screams echoed around the range as we all waited in bated breath for the outcome. After a good 30 seconds of him running around like a, well… He seemed to come to, much to the relief of those in witness to the horror show. Nevertheless, that five wood is firmly planted in the corner of my garage in shame, never to see the light of day again."
              </p>
            </div>
            <p>
              The course was in fantastic condition. Wide fairways gave you a
              sense of freedom off the tee, while equally wide and relentlessly
              fast greens gave you plenty of opportunities- but little chance of
              two-putting- from 30 feet. Again, consulting my yardage book I
              count 73 bunkers (so American, right?) in total and 9 different
              bodies of water. To say it was a course greater than the sum of
              its parts doesn’t quite work due to there being so many of them,
              but playing it felt like a lot more than just piles of sand and
              water. Perhaps this is what Fleetwood was getting at.
            </p>
            <img alt="Machynys Teebox" src={imageTen} />
            <span className="span-italic">
              Mid way through our sun-filled back 9. The GOAT in yellow.
            </span>
            <p>
              I was paired with the GOAT and the criminal himself who, with
              12pts on the front, clearly let goose-gate get to him. His back 9
              was a different story though, an 18-pointer epitomised by a lovely
              15-foot putt on 16 and 3-hop-and-drop birdie (4 for 4 no less) on
              the par 5 13th. The 14th box was well and truly his. GOAT and I
              ran out of steam a little on the way in but it didn’t matter to me
              one bit. This was the definition of a twilight-nine. The sun low
              in the sky created these amazing long shadows across greens and
              fairways, the views down the Bristol Channel and across towards
              Somerset were incredible, no wind meant the evening temperatures
              didn’t drop too low and it being late meant the course was
              essentially our own.
            </p>
            <ReactPlayer
              className="react-player"
              url={joePutt}
              width="50%"
              height="50%"
              controls={true}
            />
            <span className="span-italic">It never looked anywhere else.</span>
            <p>
              Notable scorers not in our group included an impressive 35-pointer
              from Barnes- a great round no-doubt helped by having the ball on a
              string off the tee. Another notable mention belongs to Youngy for
              also breaking into the 30s, a score than would see him jostle into
              3rd place. Interestingly, Machynys provided Barnes; Cunningham;
              Mellor and Rhodes with their highest scores of the week. I’m not
              sure what this says about the rest of the field, I’m not even sure
              what it says about the 4 names I’ve just said but I thought it
              worth mentioning.
            </p>
            <p>
              As we finished our Guinness on the balcony after what had turned
              out to be 9 hours spent at the club, we sadly said our goodbyes to
              Youngy who had important business to attend to (La Cruche is yet
              to complete a weeks’ golf with a full cohort, here’s hoping France
              doesn’t make anyone else surrender.) It was time discuss pairings
              for Sunday at Ashburnham.
            </p>
            <img src={imageEleven} alt="Group Machynys" />
            <span className="span-italic">Taken shortly after goose-gate.</span>
          </div>
          <div className="round-four">
            <h2>27th June 2021 - Round 4 - Ashburnham Golf Club</h2>
            <p className="italic">
              15-20 Celsius. Mild, overcast, gentle breeze. Greens running
              slower than Friday.
            </p>
            <p>Pairings:</p>
            <p>Group 1: Cunningham, Barnes, Kidd</p>
            <p>Group 2: Mellor, Rhodes, Shirley</p>
            <p>Final Group: Kinahan, Fitzgerald, Rees</p>
            <p>
              Sunday had a very different feel to the rest of the week.
              Afterall, there were 2pts seperating 1st and 2nd, and 7 seperating
              1st and 5th. It was tight at the top. Given my partners’ antics
              all week it was clear that Group 2 would have been the featured
              group had we decided to breach our current contract and agree to
              Sky Sports’ Terms. A years’ bragging rights were on the line
              between the two range-cretins, and I was battling hard for a
              bronze medal.
            </p>
            <img alt="Ashburnham" src={imageTwelve} />
            <span className="span-italic">
              All smiles between the two flatmates.
            </span>
            <p>
              For me personally this battle felt to be going to right way after
              a great birdie on 17. A 4-iron into the green from 200 yards and a
              25-footer into the middle of the cup. An obnoxiously loud
              celebration, a 3 for 4 and only a few points behind Kinahan I
              thought. Post a number on 18 and see where that leaves you. I
              proceed to put myself in a great spot off the tee, leaving 120
              yards into the elevated green. I hit the roughest, fattest gap
              wedge of my life and walked off with a 6. Shite. My playing
              partners were in a battle of their own, ebbing and flowing with
              momentum shifts throughout the round. Both willing each other on
              as is customary, but both giving me a wry smile when the other
              missed a putt worth some points. I don’t think either of them knew
              the other was doing this but I had front row seats for all of it.
              It was excellent.
            </p>
            <p>
              Some decent scores emerged from the first group. Kidd with the 3rd
              highest round of the day, a very respectable 29 given the tougher
              conditions early on. Barnes with another 30+ scorecard led some to
              believe that had he been swinging a golf club since Thursday the
              Jug would surely have been his to lose. Cunningham’s round wasn’t
              so hot and it seemed he’d peaked a day early. I asked him about
              this during the prize giving in which he informed me that this
              year was simply his ‘warm-up’ for next year. I do not doubt this,
              and I do not doubt him either- in recent weeks he has discovered
              that his irons had XStiff shafts on them, shafts designed for the
              lofty swing speeds of Cameron Champ and Paul Kidd. Once this is
              remedied, he will arrive in Normandy with purpose and power. A
              good outside bet for sure.
            </p>
            <p>
              With the 6 of us sitting on the 18th greenside hill, talk quickly
              turned to questions surrounding the final group’s pace of play.
              From memory there had been an altercation with Fitz concerning an
              unplayable on the par 3 16th. A stewards’ inquiry was deemed
              unnecessary, and play had resumed but this proved had to be the
              decisive hole. There was a 3-point swing in GOAT’s favour which
              took him 1 ahead of Fitz with 2 left to play. We looked back down
              the 18th to see who’s box it was as that would give us the story
              of the previous hole: it was GOAT’s box, ahead by 1 with a shot to
              play with. Fitz’ bogey on 18 wasn’t enough to turn the tide back
              in his favour.
            </p>
            <img src={imageThirteen} alt="Group last hole" />
            <span className="span-italic">
              Post-ceremony squad photo minus Youngy.
            </span>
            <p>
              Sport has a funny way of replicating itself and just as he’d done
              9 months prior, GOAT intelligently left himself a comfy uphill
              putt to secure a point which would ultimately nullify his
              opponents’. Picking his ball out of the hole and with a question
              that sums up his humility he asked Kinahan, “is that allowed?”
            </p>
            <p>Of course it’s allowed.</p>
            <p>
              A huge congratulations to the winner of La Cruche 2021 in Wales,
              Harry Rees. Is the three-peat on? Le 2k2k22 will answer that very
              question. Until then, get your lips off my noodle.
            </p>
            <img src={imageFourteen} alt="Champion GOAT" className="portrait" />
            <span className="span-italic">Deja vu? </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Review2021