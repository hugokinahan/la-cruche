import React from 'react'
import { Link } from 'react-router-dom'
import { getAllMembers } from '../../lib/api'

// import miloHeadshot from '../images/milo-headshot.JPG'

function MemberIndex({_id}) {
  const [members, setMembers] = React.useState([])
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllMembers()
        setMembers(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

    // sorting members into alphabetical order
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1
      }
      if ( a.name > b.name ){
        return 1
      }
      return 0
    }
    members.sort(compare)

  return (
    <section className="section">
      <h2 className='members-header'>Members</h2>
      <div className="members-container">
        {members ?
          <div className="members-box">
            {members.map(member => (
              <div className='members-info-box' key={member._id}>
                <h2>{member.name}</h2>
                <Link to={`/members/${member._id}`}>
                <img alt='profile-headshot' src={member.image} />
                {/* <p>HANDICAP: {member.handicap}</p>
                <p>HOME COURSE: {member.homeCourse}</p>
                <p>FAVOURITE COURSE PLAYED: {member.favCoursePlayed}</p>
                <p>BEST GOLF MEMORY: {member.bestGolfMemory}</p>
                <p>LOWEST ROUND: {member.lowestRound}</p>
                <p>FAVOURITE SHOT: {member.favShot}</p>
                <p>WEAKNESS: {member.weakness}</p>
                <p>BEST FINISH: {member.bestFinish}</p>
                <p>FAVOURITE LA CRUCHE MOMENT: {member.favLCMemory}</p> */}
                </Link>
              </div>
            ))}
          </div>
          :
          <h2 className="error">
            {hasError ? 'Fore!' : ''}
          </h2>
        }
      </div>
      {/* <div className="members-container">
        <div className="members-box">
          <div className='members-info-box'>
            <h2>Alex Rhodes</h2>
            <img src='https://i.postimg.cc/Qtj981Bp/alex-headshot.jpg' alt='alex'/>
          </div>

        </div>

      </div> */}
    </section>
  )
}

export default MemberIndex