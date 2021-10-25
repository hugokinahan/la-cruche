import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import Nav from '../common/Nav'
import Footer from './Footer'

import logo from '../images/logo.jpg'



function Home() {

  return (
    <section>
      <Nav />
      <div className="homepage-content">
        <div className="homepage-images">
          <div className="homepage-card">
            {/* <img alt="homepage-golf" src={Image1} /> */}
            <section class="carousel" aria-label="Gallery">
              <ol class="carousel__viewport">
                <li id="carousel__slide1" class="carousel__slide">
                  <div class="carousel__snapper">
                    <a href="#carousel__slide4" class="carousel__prev">
                      Go to last slide
                    </a>
                    <a href="#carousel__slide2" class="carousel__next">
                      Go to next slide
                    </a>
                  </div>
                </li>
                <li id="carousel__slide2" class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide1" class="carousel__prev">
                    Go to previous slide
                  </a>
                  <a href="#carousel__slide3" class="carousel__next">
                    Go to next slide
                  </a>
                </li>
                <li id="carousel__slide3" class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide2" class="carousel__prev">
                    Go to previous slide
                  </a>
                  <a href="#carousel__slide4" class="carousel__next">
                    Go to next slide
                  </a>
                </li>
                <li id="carousel__slide4" class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide3" class="carousel__prev">
                    Go to previous slide
                  </a>
                  <a href="#carousel__slide1" class="carousel__next">
                    Go to first slide
                  </a>
                </li>
              </ol>
              <aside class="carousel__navigation">
                <ol class="carousel__navigation-list">
                  <li class="carousel__navigation-item">
                    <a
                      href="#carousel__slide1"
                      class="carousel__navigation-button"
                    >
                      Go to slide 1
                    </a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a
                      href="#carousel__slide2"
                      class="carousel__navigation-button"
                    >
                      Go to slide 2
                    </a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a
                      href="#carousel__slide3"
                      class="carousel__navigation-button"
                    >
                      Go to slide 3
                    </a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a
                      href="#carousel__slide4"
                      class="carousel__navigation-button"
                    >
                      Go to slide 4
                    </a>
                  </li>
                </ol>
              </aside>
            </section>
            <div className="latest-news">
              <h2>Latest News</h2>
              <div className="news-card">
              <img alt="logo-golf" src={logo} />
                <p>
                Relive the 2021 La Cruche tour as we descended on South Wales and the stunning golf courses hugging the Carmarthenshire Coastline. 
                </p>
                <Link to="/blog/review-2021">
                  <Button>Read More</Button>
                </Link>
              </div>
              <div className="news-card">
                <p>
                  Read Milo's recollection of the trials and tribulations of the 2020 Tour of Northern Ireland.
                </p>
                <Link to="/blog/review-2020">
                  <Button>Read More</Button>
                </Link>
              </div>
              <div className="news-card">
                <p>
                  Meet the La Cruche members and find out more about their
                  golfing experiences.
                </p>
                <Link to="/members">
                  <Button>Members</Button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="twitter-feed">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="LaCruche2020"
              options={{ height: 400, width: 300 }}
            />
          </div> */}
          {/* <img alt="homepage-golf" src={Image2} />
          <img alt="homepage-golf" src={Image3} />
          <img alt="homepage-golf" src={Image4} />
          <img alt="homepage-golf" src={Image5} />
          <img alt="homepage-golf" src={Image6} /> */}
        </div>
      </div>
      <Footer />
    </section>
  );

}

export default Home