import React from 'react'
import { getAllCourses } from '../../lib/api'
import Nav from './Nav'
import Footer from './Footer'

import ReactMapGL, { Marker, Popup } from 'react-map-gl'

function Courses() {

  const [courses, setCourses ] = React.useState(null)

  const [popup, setPopup] = React.useState(null)

  const [viewport, setViewport] = React.useState({
    latitude: 52.4816546,
    longitude: -3.1791934,
    zoom: 5.3
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllCourses()
        console.log(data)
        setCourses(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(courses)

  return (
    <section>
      <Nav />
      <div className='map-content'>
        <h1 className='courses-header'>Courses</h1>
        <div className='map-container'>
        <ReactMapGL
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height="100%"
              width="100%"
              mapStyle='mapbox://styles/mapbox/satellite-v9'
              {...viewport}
              onClick={() => setPopup(null)}
              onViewportChange={viewport => setViewport(viewport)}
            >
              {courses ?
                courses.map(course => (
                  <Marker
                    className='map-markers'
                    key={course._id}
                    latitude={course.latitude}
                    longitude={course.longitude}
                  >
                    <span
                      role="img"
                      aria-label="map-marker"
                      onClick={() => setPopup(course)}
                    >
                    ⛳️
                    </span>
                  </Marker>
                ))
                :
                <div className="ring-loader">
                  {/* <RingLoader color="purple" size={60} /> */}
                </div>
              }
              {popup &&
          <Popup
            closeOnClick={true}
            latitude={popup.latitude}
            longitude={popup.longitude}
            closeButton={false}
          >
            <h4 className='popup-info'>{popup.name}, {popup.city}</h4>
            <img className='popup-image' alt='golf-course' src={popup.image}/>
          </Popup>
}
            </ReactMapGL>
            </div>
      </div>
      <Footer />
    </section>
  )
}

export default Courses