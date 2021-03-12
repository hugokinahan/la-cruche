
import { Link } from 'react-router-dom'

import Logo from '../images/logo.jpg'

import { slide as Menu } from 'react-burger-menu'


function Nav() {


  return (
    <section>
      <div className="title">
        <Link to="/">
          <h1>La Cruche</h1>
        </Link>
        {/* <p className="past-winner">Past Winners: 2020 Harry Rees (NIR)</p> */}
      </div>
      <div className="nav-bar">
        <div className="burger-menu" id="page-wrap">
          <span />
          <span />
          <span />
        </div>
        {/* <div id="page-wrap">
      </div> */}
        <Menu>
          <Link to="/">
            <img alt="logo" src={Logo} />
          </Link>
          <Link to="/about" className="nav-item">
            About Us
          </Link>
          <Link to="/members" className="nav-item">
            Meet The Team
          </Link>
          <Link to="/tours" className="nav-item">
            Tours
          </Link>
          <Link to="/leaderboards" className="nav-item">
            Leaderboards
          </Link>
          <Link to="/rules" className="nav-item">
            Rules
          </Link>
          <Link to="/courses" className="nav-item">
            Golf Courses
          </Link>
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
          <Link to="/contact" className="nav-item">
            Contact Us
          </Link>
        </Menu>
      </div>
    </section>
  );
}

export default Nav