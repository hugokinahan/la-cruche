import React from 'react'

function ScorecardDisplay({ formdata, playerOneName, playerTwoName, playerThreeName, playerFourName }){

  console.log(formdata)

  return (
    // <h1>Hello World</h1>
    <div>
      <div className="scorecard-container">
        <div className="scorecard-headers">
          <h1>
            {formdata.courseName} - {formdata.date}
          </h1>
          <h1>Par: {formdata.parTotal}</h1>
          <h2>Yardage: {formdata.yardageTotal} yds</h2>
        </div>
        <div className="scorecard-players">
          {playerOneName ? (
            <div className="scorecard-player-results">
              <p>{playerOneName}</p>
              <p>Score: {formdata.playerOneTotal}</p>
              <p>
                Score To Par: +{formdata.playerOneTotal - formdata.parTotal}
              </p>
            </div>
          ) : (
            ""
          )}
          {playerTwoName ? (
            <div className="scorecard-player-results">
              <p>{playerTwoName}</p>
              <p>Score: {formdata.playerTwoTotal}</p>
              <p>
                Score To Par: +{formdata.playerTwoTotal - formdata.parTotal}
              </p>
            </div>
          ) : (
            ""
          )}
          {playerThreeName ? (
            <div className="scorecard-player-results">
              <p>{playerThreeName}</p>
              <p>Score: {formdata.playerThreeTotal}</p>
              <p>
                Score To Par: +{formdata.playerThreeTotal - formdata.parTotal}
              </p>
            </div>
          ) : (
            ""
          )}
          {playerFourName ? (
            <div className="scorecard-player-results">
              <p>{playerFourName}</p>
              <p>Score: {formdata.playerFourTotal}</p>
              <p>
                Score To Par: +{formdata.playerFourTotal - formdata.parTotal}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default ScorecardDisplay