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
