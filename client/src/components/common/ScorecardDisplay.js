import React from 'react'
import Footer from '../common/Footer'
import Nav from '../common/Nav'
import { getAllScorecards, getAllMembers  } from '../../lib/api'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function ScorecardDisplay({ formdata, playerOneName, playerTwoName, playerThreeName, playerFourName, handleSubmit, handlePlayerOneChange }){

  console.log(formdata)

  const [scorecards, setScorecards] = React.useState([])
  const [members, setMembers] = React.useState([])
  const [player, setPlayer] = React.useState('All')
  const [course, setCourse] = React.useState('All')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllScorecards()
        setScorecards(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllMembers()
        setMembers(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handlePlayerFilterChange = (e) => {
    setPlayer(e.target.value)
  }

  // const handleCourseFilterChange = (e) => {
  //   setCourse(e.target.value)
  // }

  let filteredScorecards = []

  function handleFilteredScorecards() {
    // eslint-disable-next-line array-callback-return
    filteredScorecards = scorecards.filter(scorecard => {
      if (player === scorecard.playerOneName || player === scorecard.playerTwoName || player === scorecard.playerThreeName || player === scorecard.playerFourName ) {
        return scorecard
      } else {
        if (player === 'All') {
          return scorecard
        }
      }
    })
  }

  handleFilteredScorecards()

  // function handleColors() {
  //   filteredScorecards.map(scorecard => {
  //     if (scorecard.playerOneHoleOne - scorecard.parHoleOne === +1) {
  //       return <Table.Cell className="table-cell" +></Table.Cell>
  //     }
  //   })
  // }
  // return <div className={"myClass " + (position === index ? 'active' : '')}></div>


  return (
    // <h1>Hello World</h1>
    <section>
      <Nav />
      <div className="about-content">
        <h1 className="about-header">Member Scorecards</h1>
        <div className="scorecard-filters">
          <div>          
          <p>Filter by player:</p>
          <select onChange={handlePlayerFilterChange} defaultValue='All'>
            {members
              ? members.map((member) => {
                  return <option>{member.name}</option>
                })
              : ""}
          </select>
          </div>
          {/* <div>
          <p>Course</p>
          <select onChange={handleCourseFilterChange}>
            {scorecards
              ? scorecards.map((scorecard) => {
                  return <option>{scorecard.courseName}</option>;
                })
              : ""}
          </select>
          </div> */}

        </div>
        <div className="scorecard-container">
          {filteredScorecards ? (
            filteredScorecards.map((scorecard) => {
              return (
                <section>
                  <div className="player-container">
                    <div className="scorecard-headers">
                      <h1>
                        {scorecard.courseName} - {scorecard.date}
                      </h1>
                      <h4>{scorecard.yardageTotal} yds</h4>
                      <h4>Par: {scorecard.parTotal}</h4>
                      <Icon className="icon" name="trash alternate"/>
                    </div>
                    <div className="">
                      {scorecard.playerOneTotal ? (
                        <div className="scorecard-players">
                          <p>Player One: {scorecard.playerOneName}</p>
                          <p>Score: {scorecard.playerOneTotal}</p>
                          <p>
                            Score To Par: +
                            {scorecard.playerOneTotal - scorecard.parTotal}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {scorecard.playerTwoTotal ? (
                      <div className="scorecard-players">
                        <p>Player Two: {scorecard.playerTwoName}</p>
                        <p>Score: {scorecard.playerTwoTotal}</p>
                        <p>
                          Score To Par: +
                          {scorecard.playerTwoTotal - scorecard.parTotal}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {scorecard.playerThreeTotal ? (
                      <div className="scorecard-players">
                        <p>Player Three: {scorecard.playerThreeName}</p>
                        <p>Score: {scorecard.playerThreeTotal}</p>
                        <p>
                          Score To Par: +
                          {scorecard.playerThreeTotal - scorecard.parTotal}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {scorecard.playerFourTotal ? (
                      <div className="scorecard-players">
                        <p>Player Four: {scorecard.playerFourName}</p>
                        <p>Score: {scorecard.playerFourTotal}</p>
                        <p>
                          Score To Par: +
                          {scorecard.playerFourTotal - scorecard.parTotal}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Hole</Table.HeaderCell>
                          <Table.HeaderCell>1</Table.HeaderCell>
                          <Table.HeaderCell>2</Table.HeaderCell>
                          <Table.HeaderCell>3</Table.HeaderCell>
                          <Table.HeaderCell>4</Table.HeaderCell>
                          <Table.HeaderCell>5</Table.HeaderCell>
                          <Table.HeaderCell>6</Table.HeaderCell>
                          <Table.HeaderCell>7</Table.HeaderCell>
                          <Table.HeaderCell>8</Table.HeaderCell>
                          <Table.HeaderCell>9</Table.HeaderCell>
                          <Table.HeaderCell>OUT</Table.HeaderCell>
                          <Table.HeaderCell>10</Table.HeaderCell>
                          <Table.HeaderCell>11</Table.HeaderCell>
                          <Table.HeaderCell>12</Table.HeaderCell>
                          <Table.HeaderCell>13</Table.HeaderCell>
                          <Table.HeaderCell>14</Table.HeaderCell>
                          <Table.HeaderCell>15</Table.HeaderCell>
                          <Table.HeaderCell>16</Table.HeaderCell>
                          <Table.HeaderCell>17</Table.HeaderCell>
                          <Table.HeaderCell>18</Table.HeaderCell>
                          <Table.HeaderCell>IN</Table.HeaderCell>
                          <Table.HeaderCell>OUT</Table.HeaderCell>
                          <Table.HeaderCell>TOTAL</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.HeaderCell>Yardage</Table.HeaderCell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeOneYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeTwoYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeThreeYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeFourYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeFiveYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeSixYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeSevenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeEightYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeNineYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {Number(scorecard.holeOneYardage) +
                              Number(scorecard.holeTwoYardage) +
                              Number(scorecard.holeThreeYardage) +
                              Number(scorecard.holeFourYardage) +
                              Number(scorecard.holeFiveYardage) +
                              Number(scorecard.holeSixYardage) +
                              Number(scorecard.holeSevenYardage) +
                              Number(scorecard.holeEightYardage) +
                              Number(scorecard.holeNineYardage)}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeTenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeElevenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeTwelveYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeThirteenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeFourteenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeFifteenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeSixteenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeSeventeenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.holeEighteenYardage}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {Number(scorecard.holeTenYardage) +
                              Number(scorecard.holeElevenYardage) +
                              Number(scorecard.holeTwelveYardage) +
                              Number(scorecard.holeThirteenYardage) +
                              Number(scorecard.holeFourteenYardage) +
                              Number(scorecard.holeFifteenYardage) +
                              Number(scorecard.holeSixteenYardage) +
                              Number(scorecard.holeSeventeenYardage) +
                              Number(scorecard.holeEighteenYardage)}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {Number(scorecard.holeOneYardage) +
                              Number(scorecard.holeTwoYardage) +
                              Number(scorecard.holeThreeYardage) +
                              Number(scorecard.holeFourYardage) +
                              Number(scorecard.holeFiveYardage) +
                              Number(scorecard.holeSixYardage) +
                              Number(scorecard.holeSevenYardage) +
                              Number(scorecard.holeEightYardage) +
                              Number(scorecard.holeNineYardage)}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.yardageTotal}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.HeaderCell>Par</Table.HeaderCell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleOne}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleTwo}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleThree}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleFour}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleFive}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleSix}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleSeven}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleEight}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleNine}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {Number(scorecard.parHoleOne) +
                              Number(scorecard.parHoleTwo) +
                              Number(scorecard.parHoleThree) +
                              Number(scorecard.parHoleFour) +
                              Number(scorecard.parHoleFive) +
                              Number(scorecard.parHoleSix) +
                              Number(scorecard.parHoleSeven) +
                              Number(scorecard.parHoleEight) +
                              Number(scorecard.parHoleNine)}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleTen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleEleven}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleTwelve}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleThirteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleFourteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleFifteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleSixteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleSeventeen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parHoleEighteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {Number(scorecard.parHoleTen) +
                              Number(scorecard.parHoleEleven) +
                              Number(scorecard.parHoleTwelve) +
                              Number(scorecard.parHoleThirteen) +
                              Number(scorecard.parHoleFourteen) +
                              Number(scorecard.parHoleFifteen) +
                              Number(scorecard.parHoleSixteen) +
                              Number(scorecard.parHoleSeventeen) +
                              Number(scorecard.parHoleEighteen)}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {Number(scorecard.parHoleOne) +
                              Number(scorecard.parHoleTwo) +
                              Number(scorecard.parHoleThree) +
                              Number(scorecard.parHoleFour) +
                              Number(scorecard.parHoleFive) +
                              Number(scorecard.parHoleSix) +
                              Number(scorecard.parHoleSeven) +
                              Number(scorecard.parHoleEight) +
                              Number(scorecard.parHoleNine)}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.parTotal}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.HeaderCell>Index</Table.HeaderCell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleOne}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleTwo}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleThree}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleFour}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleFive}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleSix}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleSeven}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleEight}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleNine}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">-</Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleTen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleEleven}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleTwelve}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleThirteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleFourteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleFifteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleSixteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleSeventeen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">
                            {scorecard.indexHoleEighteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell-background">-</Table.Cell>
                          <Table.Cell className="table-cell-background">-</Table.Cell>
                          <Table.Cell className="table-cell-background">-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.HeaderCell>
                            {scorecard.playerOneName}
                          </Table.HeaderCell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleOne}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleTwo}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleThree}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleFour}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleFive}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleSix}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleSeven}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleEight}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleNine}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneGoingOut}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleTen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleEleven}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleTwelve}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleThirteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleFourteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleFifteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleSixteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleSeventeen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneHoleEighteen}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneComingIn}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneGoingOut}
                          </Table.Cell>
                          <Table.Cell className="table-cell">
                            {scorecard.playerOneTotal}
                          </Table.Cell>
                        </Table.Row>
                        {scorecard.playerTwoHoleOne ? (
                          <Table.Row>
                            <Table.HeaderCell>
                              {scorecard.playerTwoName}
                            </Table.HeaderCell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleOne}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleTwo}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleThree}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleFour}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleFive}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleSix}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleSeven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleEight}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleNine}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleTen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleEleven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleTwelve}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleThirteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleFourteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleFifteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleSixteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleSeventeen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoHoleEighteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoComingIn}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerTwoTotal}
                            </Table.Cell>
                          </Table.Row>
                        ) : (
                          ""
                        )}
                        {scorecard.playerThreeHoleOne ? (
                          <Table.Row>
                            <Table.HeaderCell>
                              {scorecard.playerThreeName}
                            </Table.HeaderCell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleOne}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleTwo}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleThree}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleFour}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleFive}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleSix}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleSeven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleEight}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleNine}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleTen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleEleven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleTwelve}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleThirteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleFourteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleFifteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleSixteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleSeventeen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeHoleEighteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeComingIn}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerThreeTotal}
                            </Table.Cell>
                          </Table.Row>
                        ) : (
                          ""
                        )}
                        {scorecard.playerFourHoleOne ? (
                          <Table.Row>
                            <Table.HeaderCell>
                              {scorecard.playerFourName}
                            </Table.HeaderCell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleOne}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleTwo}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleThree}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleFour}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleFive}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleSix}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleSeven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleEight}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleNine}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleTen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleEleven}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleTwelve}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleThirteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleFourteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleFifteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleSixteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleSeventeen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourHoleEighteen}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourComingIn}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourGoingOut}
                            </Table.Cell>
                            <Table.Cell className="table-cell">
                              {scorecard.playerFourTotal}
                            </Table.Cell>
                          </Table.Row>
                        ) : (
                          ""
                        )}
                      </Table.Body>

                      {/* <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
                    </Table>
                  </div>
                </section>
              );
            })
          ) : (
            <p>No Data to show</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ScorecardDisplay