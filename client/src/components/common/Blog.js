import React from "react";
import Nav from "./Nav";
import Footer from './Footer'

import Image1 from '../images/logo.jpg'
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">Blog</h1>
        <div className='blog-card'>
          <img alt='logo' src='https://www.wsav.com/wp-content/uploads/sites/75/2021/03/Masters-UPDATED-1.jpg?w=1920&h=1080&crop=1' />
          <div className='blog-card-content'>
          <h2>The Masters 2021 Picks</h2>
          <p>Joe reveals the tips and picks from each La Cruche member as all eyes turn to Augusta, just five months after DJ's record breaking week.</p>
          <Link to='/blog/masters21'>
          <Button>Read More</Button>
          </Link>
          </div>
          </div>
                <div className='blog-card'>
          <img alt='logo' src='https://pbs.twimg.com/profile_images/1085971315201376256/s7kHezHp_400x400.jpg' />
          <div className='blog-card-content'>
          <h2>2021 WGC Match Play Tips</h2>
          <p>Joe reveals the tips from each La Cruche member as the golfing world descends on Austin, Texas.</p>
          <Link to='/blog/wgc'>
          <Button>Read More</Button>
          </Link>
          </div>
        </div>
        <div className='blog-card'>
          <img alt='logo' src={Image1} />
          <div className='blog-card-content'>
          <h2>La Cruche 2020 Review</h2>
          <p>Milo reviews the inaugural La Cruche Tour in Northern Ireland, giving a round by round synopsis of the trials and tribulations of golf in Ulster.</p>
          <Link to='/blog/review-2020'>
          <Button>Read More</Button>
          </Link>
          </div>
        </div>
        </div>
        <Footer />
    </section>
  );
}

export default Blog;
