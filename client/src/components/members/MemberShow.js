import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleMember } from '../../lib/api'
import Nav from '../common/Nav'


function MemberShow() {
  const [member, setMember] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)
  const { id } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleMember(id)
        setMember(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  return (
    <section className="section">
      <Nav />
      <h2 className="members-header">Members</h2>
      <div className="member-container">
        {member ? (
          <div className="member-box">
            <div className="member-info-box" key={member.id}>
              <h2>{member.name}</h2>
              <img alt="profile-header" src={member.image} />
              {/* <div className="bio-questions">
                <div className="questions">
                  <p>HANDICAP:</p>
                  <p>HOME COURSE:</p>
                  <p>FAVOURITE COURSE PLAYED:</p>
                  <p>BEST GOLF MEMORY:</p>
                  <p>LOWEST ROUND:</p>
                  <p>FAVOURITE SHOT:</p>
                  <p>WEAKNESS:</p>
                  <p>BEST FINISH:</p>
                  <p>FAVOURITE LA CRUCHE MOMENT:</p>
                </div>
                <div className="answers">
                  <p>{member.handicap}</p>
                  <p>HOME COURSE: {member.homeCourse}</p>
                  <p>{member.favCoursePlayed}</p>
                  <p>{member.bestGolfMemory}</p>
                  <p>{member.lowestRound}</p>
                  <p>{member.favShot}</p>
                  <p>{member.weakness}</p>
                  <p>{member.bestFinish}</p>
                  <p>{member.favLCMemory}</p>
                </div>
              </div> */}
              <p>HANDICAP:&nbsp;&nbsp;&nbsp;{member.handicap}</p>
              <p>HOME COURSE:&nbsp;&nbsp;&nbsp;{member.homeCourse}</p>
              <p>FAVOURITE COURSE PLAYED:&nbsp;&nbsp;&nbsp;{member.favCoursePlayed}</p>
              <p>BEST GOLF MEMORY:&nbsp;&nbsp;&nbsp;{member.bestGolfMemory}</p>
              <p>LOWEST ROUND:&nbsp;&nbsp;&nbsp;{member.lowestRound}</p>
              <p>FAVOURITE SHOT:&nbsp;&nbsp;&nbsp;{member.favShot}</p>
              <p>WEAKNESS:&nbsp;&nbsp;&nbsp;{member.weakness}</p>
              <p>BEST FINISH:&nbsp;&nbsp;&nbsp;{member.bestFinish}</p>
              <p>FAVOURITE LA CRUCHE MOMENT:&nbsp;&nbsp;&nbsp;{member.favLCMemory}</p>
            </div>
          </div>
        ) : (
          <h2 className="error">{hasError ? "Fore!" : ""}</h2>
        )}
      </div>
    </section>
  );
}

export default MemberShow
