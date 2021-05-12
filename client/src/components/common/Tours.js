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
          <img alt="logo" src="https://golf-pass.brightspotcdn.com/dims4/default/b818c56/2147483647/strip/true/crop/1024x661+0+31/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2Fd9%2F0b%2F2f370834cdd43515c5e43d102de0%2F60045.jpg" />
          <div className="blog-card-content">
            <h2>La Cruche 2021, Wales</h2>
            <p>
              With the perils of the pandemic striking again, the original La Cruche 2021 Tour to France was postponed to 2022. Nevertheless, this gives us the opportunity to sample maybe one of the more underrated spots of UK golf - South Wales.
            </p>
            <a href="https://www.pandkgolfclub.co.uk/">
              <Button>Pyle & Kenfig Golf Club</Button>
            </a>
            <a href="https://ashburnhamgolfclub.co.uk/">
              <Button>Ashburnham Golf Club</Button>
            </a>
            <a href="https://www.machynys.com/">
              <Button>Machynys Peninsula Golf Club</Button>
            </a>
            <Link to="/courses">
              <Button>Map View</Button>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="logo"
            src="https://www.opengolfclub.com/wp-content/uploads/2020/07/le_touquet_golf_resort_parcours_la_mer-1.jpg"
          />
          <div className="blog-card-content">
            <h2>La Cruche 2022, France</h2>
            <p>
              In 2022, La Cruche will descend on North-West France, playing two
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