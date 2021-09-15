import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './components/common/About'
import Blog from './components/common/Blog'
import PGA21 from './components/common/blogs/PGA21'
import Gallery2021 from './components/common/blogs/Gallery2021'
import Review2020 from './components/common/blogs/Review2020'
import Review2021 from './components/common/blogs/Review2021'
import WGCDellTech from './components/common/blogs/WGCDellTech'
import Masters21 from './components/common/blogs/Masters21'
import Contact from './components/common/Contact'
import Courses from './components/common/Courses'
import Home from './components/common/Home'
import Leaderboards from './components/common/Leaderboards'
import Members from './components/common/Members'
import Rules from './components/common/Rules'
import Tours from './components/common/Tours'
import MemberShow from './components/members/MemberShow'
import NotFound from './components/common/NotFound'
import HandicapTracker from './components/common/HandicapTracker'


function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/pga21" component={PGA21} />
        <Route path="/blog/masters21" component={Masters21} />
        <Route path="/blog/wgc" component={WGCDellTech} />
        <Route path="/tours/gallery-2021" component={Gallery2021} />
        <Route path="/blog/review-2021" component={Review2021} />
        <Route path="/blog/review-2020" component={Review2020} />
        <Route path="/members/:id" component={MemberShow} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/tours" component={Tours} />
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/rules" component={Rules} />
        <Route path="/courses" component={Courses} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/handicap" component={HandicapTracker} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )


}

export default App
