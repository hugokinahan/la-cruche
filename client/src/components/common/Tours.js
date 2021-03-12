import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import Image1 from '../images/group-rosapenna-tom-morris.jpg'
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Tours() {

  return (
    <section>
      <Nav />
      <div className="blog-content">
        <h1 className="blog-header">Tours</h1>
        <div className="blog-card">
          <img alt="logo" src={Image1} />
          <div className="blog-card-content">
            <h2>La Cruche 2020, Northern Ireland</h2>
            <p>
              The first of many. La Cruche visited phenomenal courses in
              Northern Ireland and one in the Republic of Ireland. Harry 'GOAT'
              Rees was crowned the inaugural La Cruche champion as it came down
              to the 72nd hole.
            </p>
            <Link to="/blog/review-2020">
              <Button>Read More</Button>
            </Link>
            <Link to="/tours/gallery-2020">
              <Button>Gallery</Button>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="logo"
            src="https://www.letouquetgolfresort.com/_files/_cache/1/resize/1920-0.ratio/93fa0f2516dd60f3d7851a38504ff725.jpg"
          />
          <div className="blog-card-content">
            <h2>La Cruche 2021, France</h2>
            <p>
              In 2021, La Cruche will descend on North-West France, playing two
              rounds at Le Touquet Golf Resort and two at the nearby Les Golfs
              d'Hardelot.
            </p>
            <a href="https://www.letouquetgolfresort.com/en/">
              <Button>Le Touquet Golf Resort</Button>
            </a>
            <a href="https://www.hardelotgolfclub.com/en/">
              <Button>Les Golfs d'Hardelot</Button>
            </a>
            <Link to="/courses">
              <Button>Map View</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Tours