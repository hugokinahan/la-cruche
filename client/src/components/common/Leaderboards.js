import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import LC2020 from './leaderboards/LC2020'
import LC2021 from './leaderboards/LC2021'

function Leaderboards() {

  const [selectInput, setSelectInput] = React.useState('All')

  function handleSelect(e) {
    setSelectInput(String(e.target.value))
  }

  console.log(selectInput)

  return (
    <section>
      <Nav />
      <div className="leaderboard-content">
        <h1 className="leaderboards-header">Leaderboards</h1>
        <select onChange={handleSelect} className='leaderboard-button'>
          <option >All</option>
          <option >Northern Ireland 2020</option>
          <option >Wales 2021</option>
        </select>
        {selectInput === 'Northern Ireland 2020' ?
        <div>
          <h2 className="sub-heading">Northern Ireland Tour 2020</h2>
          <LC2020 /> 
        </div>
        :
        ''
  }
          {selectInput === 'Wales 2021' ?
        <div>
          <h2 className="sub-heading">Wales Tour 2021</h2>
          <LC2021 />
        </div>
        :
        ''
  }
            {selectInput === 'All' ?
        <div>
          <h2 className="sub-heading">Northern Ireland Tour 2020</h2>
          <LC2020 /> 
          <h2 className="sub-heading">Wales Tour 2021</h2>
          <LC2021 />
        </div>
        :
        ''
  }
      </div>
      <Footer />
    </section>
  )
}

export default Leaderboards