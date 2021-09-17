import React from 'react'
import Footer from '../common/Footer'
import Nav from '../common/Nav'
import { getAllScorecards } from '../../lib/api'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function ScorecardDisplay({ formdata, playerOneName, playerTwoName, playerThreeName, playerFourName, handleSubmit }){

  console.log(formdata)

  const [scorecards, setScorecards] = React.useState([])

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

  console.log(scorecards)

  return (
    // <h1>Hello World</h1>
    <section>
    <Nav />
    <div className='about-content'>
      <h1 className='about-header'>Member Scorecards</h1>
    <div className='scorecard-container'>
      {scorecards ? scorecards.map(scorecard => {
        return (
          <section>
            <div className="player-container">
              <div className="scorecard-headers">
                <h1>{scorecard.courseName}</h1>
                <h4>{scorecard.yardageTotal}</h4>
                <h4>{scorecard.parTotal}</h4>
              </div>
              <div className="">
                {scorecard.playerOneTotal ? (
                  <div className="scorecard-players">
                    <p>Player One: {playerOneName}</p>
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
                  <p>Player Two: {playerTwoName}</p>
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
                  <p>Player Three: {playerThreeName}</p>
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
                  <p>Player Four: {playerFourName}</p>
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
              <Table.Cell>
                {scorecard.holeOneYardage}
              </Table.Cell>
              </Table.Row>
              </Table.Body>
              </Table>
            </div>
          </section>
        );
      }) 
    : <p>No Data to show</p>}
    </div>
    </div>
    <Footer />
  </section>
    
  )
}

export default ScorecardDisplay