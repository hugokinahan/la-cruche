import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import useForm from '../../utils/useForm'
import { useHistory } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { getAllMembers } from '../../lib/api'
import ScorecardDisplay from './ScorecardDisplay'

function HandicapTracker() {

  const history = useHistory()

  const [registerErrors, setRegisterErrors] = React.useState(false)
  const [members, setMembers] = React.useState([])
  const [hasError, setHasError] = React.useState(false)
  const [playerOneName, setPlayerOneName] = React.useState('')
  const [playerTwoName, setPlayerTwoName] = React.useState('')
  const [playerThreeName, setPlayerThreeName] = React.useState('')
  const [playerFourName, setPlayerFourName] = React.useState('')

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

  const { formdata,  handleChange } = useForm({
    courseName: '',
    date: '',
    playerOne: '', 
    playerTwo: '',
    playerThree: '', 
    playerFour: '', 
    holeOneYardage: '',
    holeTwoYardage: '',
    holeThreeYardage: '',
    holeFourYardage: '',
    holeFiveYardage: '',
    holeSixYardage: '',
    holeSevenYardage: '',
    holeEightYardage: '',
    holeNineYardage: '',
    holeTenYardage: '',
    holeElevenYardage: '',
    holeTwelveYardage: '',
    holeThirteenYardage: '',
    holeFourteenYardage: '',
    holeFifteenYardage: '',
    holeSixteenYardage: '',
    holeSeventeenYardage: '',
    holeEighteenYardage: '',
    yardageGoingOut: '',
    yardageComingIn: '',
    yardageTotal: '',
    parHoleOne: '', 
    parHoleTwo: '', 
    parHoleThree: '', 
    parHoleFour: '', 
    parHoleFive: '', 
    parHoleSix: '', 
    parHoleSeven: '', 
    parHoleEight: '', 
    parHoleNine: '', 
    parHoleTen: '', 
    parHoleEleven: '', 
    parHoleTwelve: '', 
    parHoleThirteen: '', 
    parHoleFourteen: '', 
    parHoleFifteen: '', 
    parHoleSixteen: '', 
    parHoleSeventeen: '', 
    parHoleEighteen: '', 
    parGoingOut: '',
    parComingIn: '',
    parTotal: '',
    indexHoleOne: '',
    indexHoleTwo: '',
    indexHoleThree: '',
    indexHoleFour: '',
    indexHoleFive: '',
    indexHoleSix: '',
    indexHoleSeven: '',
    indexHoleEight: '',
    indexHoleNine: '',
    indexHoleTen: '',
    indexHoleEleven: '',
    indexHoleTwelve: '',
    indexHoleThirteen: '',
    indexHoleFourteen: '',
    indexHoleFifteen: '',
    indexHoleSixteen: '',
    indexHoleSeventeen: '',
    indexHoleEighteen: '',
    playerOneHoleOne: '',
    playerOneHoleTwo: '',
    playerOneHoleThree: '',
    playerOneHoleFour: '',
    playerOneHoleFive: '',
    playerOneHoleSix: '',
    playerOneHoleSeven: '',
    playerOneHoleEight: '',
    playerOneHoleNine: '',
    playerOneHoleTen: '',
    playerOneHoleEleven: '',
    playerOneHoleTwelve: '',
    playerOneHoleThirteen: '',
    playerOneHoleFourteen: '',
    playerOneHoleFifteen: '',
    playerOneHoleSixteen: '',
    playerOneHoleSeventeen: '',
    playerOneHoleEighteen: '',
    playerOneGoingOut: '',
    playerOneComingIn: '',
    playerOneTotal: '',
    playerTwoHoleOne: '',
    playerTwoHoleTwo: '',
    playerTwoHoleThree: '',
    playerTwoHoleFour: '',
    playerTwoHoleFive: '',
    playerTwoHoleSix: '',
    playerTwoHoleSeven: '',
    playerTwoHoleEight: '',
    playerTwoHoleNine: '',
    playerTwoHoleTen: '',
    playerTwoHoleEleven: '',
    playerTwoHoleTwelve: '',
    playerTwoHoleThirteen: '',
    playerTwoHoleFourteen: '',
    playerTwoHoleFifteen: '',
    playerTwoHoleSixteen: '',
    playerTwoHoleSeventeen: '',
    playerTwoHoleEighteen: '',
    playerTwoGoingOut: '',
    playerTwoComingIn: '',
    playerTwoTotal: '',
    playerThreeHoleOne: '',
    playerThreeHoleTwo: '',
    playerThreeHoleThree: '',
    playerThreeHoleFour: '',
    playerThreeHoleFive: '',
    playerThreeHoleSix: '',
    playerThreeHoleSeven: '',
    playerThreeHoleEight: '',
    playerThreeHoleNine: '',
    playerThreeHoleTen: '',
    playerThreeHoleEleven: '',
    playerThreeHoleTwelve: '',
    playerThreeHoleThirteen: '',
    playerThreeHoleFourteen: '',
    playerThreeHoleFifteen: '',
    playerThreeHoleSixteen: '',
    playerThreeHoleSeventeen: '',
    playerThreeHoleEighteen: '',
    playerThreeGoingOut: '',
    playerThreeComingIn: '',
    playerThreeTotal: '',
    playerFourHoleOne: '',
    playerFourHoleTwo: '',
    playerFourHoleThree: '',
    playerFourHoleFour: '',
    playerFourHoleFive: '',
    playerFourHoleSix: '',
    playerFourHoleSeven: '',
    playerFourHoleEight: '',
    playerFourHoleNine: '',
    playerFourHoleTen: '',
    playerFourHoleEleven: '',
    playerFourHoleTwelve: '',
    playerFourHoleThirteen: '',
    playerFourHoleFourteen: '',
    playerFourHoleFifteen: '',
    playerFourHoleSixteen: '',
    playerFourHoleSeventeen: '',
    playerFourHoleEighteen: '',
    playerFourGoingOut: '',
    playerFourComingIn: '',
    playerFourTotal: '',
    playerOneName: '',
    playerTwoName: '',
    playerThreeName: '',
    playerFourName: '',
  })

  function handlePlayerOneChange(e) {
    setPlayerOneName(e.target.value)
  }
  function handlePlayerTwoChange(e) {
    setPlayerTwoName(e.target.value)
  }
  function handlePlayerThreeChange(e) {
    setPlayerThreeName(e.target.value)
  }
  function handlePlayerFourChange(e) {
    setPlayerFourName(e.target.value)
  }
  console.log(playerOneName)
  console.log(playerTwoName)
  console.log(playerThreeName)
  console.log(playerFourName)

  console.log(formdata)

  return (
    <section>
      <Nav />
      <div className="about-content">
        <h1 className="about-header">Handicap Tracker</h1>
        <Table celled>
          <Table.Header>
            <input
              className="input-cell"
              placeholder="e.g. Royal Portrush"
              onChange={handleChange}
              name="courseName"
              value={formdata.courseName}
            />
            <input
              className="input-cell"
              placeholder="e.g. 12/06/2021"
              onChange={handleChange}
              name="date"
              value={formdata.date}
            />
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
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTwoYardage"
                  value={formdata.holeTwoYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeThreeYardage"
                  value={formdata.holeThreeYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFourYardage"
                  value={formdata.holeFourYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFiveYardage"
                  value={formdata.holeFiveYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSixYardage"
                  value={formdata.holeSixYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSevenYardage"
                  value={formdata.holeSevenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeEightYardage"
                  value={formdata.holeEightYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeNineYardage"
                  value={formdata.holeNineYardage}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.holeOneYardage) +
                  Number(formdata.holeTwoYardage) +
                  Number(formdata.holeThreeYardage) +
                  Number(formdata.holeFourYardage) +
                  Number(formdata.holeFiveYardage) +
                  Number(formdata.holeSixYardage) +
                  Number(formdata.holeSevenYardage) +
                  Number(formdata.holeEightYardage) +
                  Number(formdata.holeNineYardage)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTenYardage"
                  value={formdata.holeTenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeElevenYardage"
                  value={formdata.holeElevenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTwelveYardage"
                  value={formdata.holeTwelveYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeThirteenYardage"
                  value={formdata.holeThirteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFourteenYardage"
                  value={formdata.holeFourteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFifteenYardage"
                  value={formdata.holeFifteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSixteenYardage"
                  value={formdata.holeSixteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSeventeenYardage"
                  value={formdata.holeSeventeenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeEighteenYardage"
                  value={formdata.holeEighteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.yardageGoingOut =
                    Number(formdata.holeTenYardage) +
                    Number(formdata.holeElevenYardage) +
                    Number(formdata.holeTwelveYardage) +
                    Number(formdata.holeThirteenYardage) +
                    Number(formdata.holeFourteenYardage) +
                    Number(formdata.holeFifteenYardage) +
                    Number(formdata.holeSixteenYardage) +
                    Number(formdata.holeSeventeenYardage) +
                    Number(formdata.holeEighteenYardage))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.yardageComingIn =
                    Number(formdata.holeOneYardage) +
                    Number(formdata.holeTwoYardage) +
                    Number(formdata.holeThreeYardage) +
                    Number(formdata.holeFourYardage) +
                    Number(formdata.holeFiveYardage) +
                    Number(formdata.holeSixYardage) +
                    Number(formdata.holeSevenYardage) +
                    Number(formdata.holeEightYardage) +
                    Number(formdata.holeNineYardage))
                }
              </Table.Cell>
              <Table.Cell>
                {/* <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="yardageTotal"
                  value={formdata.yardageTotal}
                /> */}
                {
                  (formdata.yardageTotal =
                    Number(formdata.yardageGoingOut) +
                    Number(formdata.yardageComingIn))
                }
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Par</Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleOne"
                  value={formdata.parHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleTwo"
                  value={formdata.parHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleThree"
                  value={formdata.parHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleFour"
                  value={formdata.parHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleFive"
                  value={formdata.parHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleSix"
                  value={formdata.parHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleSeven"
                  value={formdata.parHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleEight"
                  value={formdata.parHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleNine"
                  value={formdata.parHoleNine}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.parHoleOne) +
                  Number(formdata.parHoleTwo) +
                  Number(formdata.parHoleThree) +
                  Number(formdata.parHoleFour) +
                  Number(formdata.parHoleFive) +
                  Number(formdata.parHoleSix) +
                  Number(formdata.parHoleSeven) +
                  Number(formdata.parHoleEight) +
                  Number(formdata.parHoleNine)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleTen"
                  value={formdata.parHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleEleven"
                  value={formdata.parHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleTwelve"
                  value={formdata.parHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleThirteen"
                  value={formdata.parHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleFourteen"
                  value={formdata.parHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleFifteen"
                  value={formdata.parHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleSixteen"
                  value={formdata.parHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleSeventeen"
                  value={formdata.parHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="parHoleEighteen"
                  value={formdata.parHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.parComingIn =
                    Number(formdata.parHoleTen) +
                    Number(formdata.parHoleEleven) +
                    Number(formdata.parHoleTwelve) +
                    Number(formdata.parHoleThirteen) +
                    Number(formdata.parHoleFourteen) +
                    Number(formdata.parHoleFifteen) +
                    Number(formdata.parHoleSixteen) +
                    Number(formdata.parHoleSeventeen) +
                    Number(formdata.parHoleEighteen))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.parGoingOut =
                    Number(formdata.parHoleOne) +
                    Number(formdata.parHoleTwo) +
                    Number(formdata.parHoleThree) +
                    Number(formdata.parHoleFour) +
                    Number(formdata.parHoleFive) +
                    Number(formdata.parHoleSix) +
                    Number(formdata.parHoleSeven) +
                    Number(formdata.parHoleEight) +
                    Number(formdata.parHoleNine))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.parTotal =
                    Number(formdata.parGoingOut) + Number(formdata.parComingIn))
                }
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Index</Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleOne"
                  value={formdata.indexHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleTwo"
                  value={formdata.indexHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleThree"
                  value={formdata.indexHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleFour"
                  value={formdata.indexHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleFive"
                  value={formdata.indexHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleSix"
                  value={formdata.indexHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleSeven"
                  value={formdata.indexHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleEight"
                  value={formdata.indexHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleNine"
                  value={formdata.indexHoleNine}
                />
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleTen"
                  value={formdata.indexHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleEleven"
                  value={formdata.indexHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleTwelve"
                  value={formdata.indexHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleThirteen"
                  value={formdata.indexHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleFourteen"
                  value={formdata.indexHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleFifteen"
                  value={formdata.indexHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleSixteen"
                  value={formdata.indexHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleSeventeen"
                  value={formdata.indexHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="indexHoleEighteen"
                  value={formdata.indexHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <select onChange={handlePlayerOneChange}>
                  {members &&
                    members.map((member) => {
                      return <option>{member.name}</option>;
                    })}
                </select>
              </Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleOne"
                  value={formdata.playerOneHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleTwo"
                  value={formdata.playerOneHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleThree"
                  value={formdata.playerOneHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleFour"
                  value={formdata.playerOneHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleFive"
                  value={formdata.playerOneHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleSix"
                  value={formdata.playerOneHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleSeven"
                  value={formdata.playerOneHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleEight"
                  value={formdata.playerOneHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleNine"
                  value={formdata.playerOneHoleNine}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.playerOneHoleOne) +
                  Number(formdata.playerOneHoleTwo) +
                  Number(formdata.playerOneHoleThree) +
                  Number(formdata.playerOneHoleFour) +
                  Number(formdata.playerOneHoleFive) +
                  Number(formdata.playerOneHoleSix) +
                  Number(formdata.playerOneHoleSeven) +
                  Number(formdata.playerOneHoleEight) +
                  Number(formdata.playerOneHoleNine)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleTen"
                  value={formdata.playerOneHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleEleven"
                  value={formdata.playerOneHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleTwelve"
                  value={formdata.playerOneHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleThirteen"
                  value={formdata.playerOneHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleFourteen"
                  value={formdata.playerOneHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleFifteen"
                  value={formdata.playerOneHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleSixteen"
                  value={formdata.playerOneHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleSeventeen"
                  value={formdata.playerOneHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerOneHoleEighteen"
                  value={formdata.playerOneHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerOneComingIn =
                    Number(formdata.playerOneHoleTen) +
                    Number(formdata.playerOneHoleEleven) +
                    Number(formdata.playerOneHoleTwelve) +
                    Number(formdata.playerOneHoleThirteen) +
                    Number(formdata.playerOneHoleFourteen) +
                    Number(formdata.playerOneHoleFifteen) +
                    Number(formdata.playerOneHoleSixteen) +
                    Number(formdata.playerOneHoleSeventeen) +
                    Number(formdata.playerOneHoleEighteen))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerOneGoingOut =
                    Number(formdata.playerOneHoleOne) +
                    Number(formdata.playerOneHoleTwo) +
                    Number(formdata.playerOneHoleThree) +
                    Number(formdata.playerOneHoleFour) +
                    Number(formdata.playerOneHoleFive) +
                    Number(formdata.playerOneHoleSix) +
                    Number(formdata.playerOneHoleSeven) +
                    Number(formdata.playerOneHoleEight) +
                    Number(formdata.playerOneHoleNine))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerOneTotal =
                    Number(formdata.playerOneGoingOut) +
                    Number(formdata.playerOneComingIn))
                }
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <select onChange={handlePlayerTwoChange}>
                  {members &&
                    members.map((member) => {
                      return <option>{member.name}</option>;
                    })}
                </select>
              </Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleOne"
                  value={formdata.playerTwoHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleTwo"
                  value={formdata.playerTwoHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleThree"
                  value={formdata.playerTwoHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleFour"
                  value={formdata.playerTwoHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleFive"
                  value={formdata.playerTwoHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleSix"
                  value={formdata.playerTwoHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleSeven"
                  value={formdata.playerTwoHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleEight"
                  value={formdata.playerTwoHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleNine"
                  value={formdata.playerTwoHoleNine}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.playerTwoHoleOne) +
                  Number(formdata.playerTwoHoleTwo) +
                  Number(formdata.playerTwoHoleThree) +
                  Number(formdata.playerTwoHoleFour) +
                  Number(formdata.playerTwoHoleFive) +
                  Number(formdata.playerTwoHoleSix) +
                  Number(formdata.playerTwoHoleSeven) +
                  Number(formdata.playerTwoHoleEight) +
                  Number(formdata.playerTwoHoleNine)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleTen"
                  value={formdata.playerTwoHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleEleven"
                  value={formdata.playerTwoHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleTwelve"
                  value={formdata.playerTwoHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleThirteen"
                  value={formdata.playerTwoHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleFourteen"
                  value={formdata.playerTwoHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleFifteen"
                  value={formdata.playerTwoHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleSixteen"
                  value={formdata.playerTwoHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleSeventeen"
                  value={formdata.playerTwoHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerTwoHoleEighteen"
                  value={formdata.playerTwoHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerTwoComingIn =
                    Number(formdata.playerTwoHoleTen) +
                    Number(formdata.playerTwoHoleEleven) +
                    Number(formdata.playerTwoHoleTwelve) +
                    Number(formdata.playerTwoHoleThirteen) +
                    Number(formdata.playerTwoHoleFourteen) +
                    Number(formdata.playerTwoHoleFifteen) +
                    Number(formdata.playerTwoHoleSixteen) +
                    Number(formdata.playerTwoHoleSeventeen) +
                    Number(formdata.playerTwoHoleEighteen))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerTwoGoingOut =
                    Number(formdata.playerTwoHoleOne) +
                    Number(formdata.playerTwoHoleTwo) +
                    Number(formdata.playerTwoHoleThree) +
                    Number(formdata.playerTwoHoleFour) +
                    Number(formdata.playerTwoHoleFive) +
                    Number(formdata.playerTwoHoleSix) +
                    Number(formdata.playerTwoHoleSeven) +
                    Number(formdata.playerTwoHoleEight) +
                    Number(formdata.playerTwoHoleNine))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerTwoTotal =
                    Number(formdata.playerTwoGoingOut) +
                    Number(formdata.playerTwoComingIn))
                }
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <select onChange={handlePlayerThreeChange}>
                  {members &&
                    members.map((member) => {
                      return <option>{member.name}</option>;
                    })}
                </select>
              </Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleOne"
                  value={formdata.playerThreeHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleTwo"
                  value={formdata.playerThreeHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleThree"
                  value={formdata.playerThreeHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleFour"
                  value={formdata.playerThreeHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleFive"
                  value={formdata.playerThreeHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleSix"
                  value={formdata.playerThreeHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleSeven"
                  value={formdata.playerThreeHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleEight"
                  value={formdata.playerThreeHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleNine"
                  value={formdata.playerThreeHoleNine}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.playerThreeHoleOne) +
                  Number(formdata.playerThreeHoleTwo) +
                  Number(formdata.playerThreeHoleThree) +
                  Number(formdata.playerThreeHoleFour) +
                  Number(formdata.playerThreeHoleFive) +
                  Number(formdata.playerThreeHoleSix) +
                  Number(formdata.playerThreeHoleSeven) +
                  Number(formdata.playerThreeHoleEight) +
                  Number(formdata.playerThreeHoleNine)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleTen"
                  value={formdata.playerThreeHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleEleven"
                  value={formdata.playerThreeHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleTwelve"
                  value={formdata.playerThreeHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleThirteen"
                  value={formdata.playerThreeHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleFourteen"
                  value={formdata.playerThreeHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleFifteen"
                  value={formdata.playerThreeHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleSixteen"
                  value={formdata.playerThreeHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleSeventeen"
                  value={formdata.playerThreeHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerThreeHoleEighteen"
                  value={formdata.playerThreeHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerThreeComingIn =
                    Number(formdata.playerThreeHoleTen) +
                    Number(formdata.playerThreeHoleEleven) +
                    Number(formdata.playerThreeHoleTwelve) +
                    Number(formdata.playerThreeHoleThirteen) +
                    Number(formdata.playerThreeHoleFourteen) +
                    Number(formdata.playerThreeHoleFifteen) +
                    Number(formdata.playerThreeHoleSixteen) +
                    Number(formdata.playerThreeHoleSeventeen) +
                    Number(formdata.playerThreeHoleEighteen))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerThreeGoingOut =
                    Number(formdata.playerThreeHoleOne) +
                    Number(formdata.playerThreeHoleTwo) +
                    Number(formdata.playerThreeHoleThree) +
                    Number(formdata.playerThreeHoleFour) +
                    Number(formdata.playerThreeHoleFive) +
                    Number(formdata.playerThreeHoleSix) +
                    Number(formdata.playerThreeHoleSeven) +
                    Number(formdata.playerThreeHoleEight) +
                    Number(formdata.playerThreeHoleNine))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerThreeTotal =
                    Number(formdata.playerThreeGoingOut) +
                    Number(formdata.playerThreeComingIn))
                }
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <select onChange={handlePlayerFourChange}>
                  {members &&
                    members.map((member) => {
                      return <option>{member.name}</option>;
                    })}
                </select>
              </Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleOne"
                  value={formdata.playerFourHoleOne}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleTwo"
                  value={formdata.playerFourHoleTwo}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleThree"
                  value={formdata.playerFourHoleThree}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleFour"
                  value={formdata.playerFourHoleFour}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleFive"
                  value={formdata.playerFourHoleFive}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleSix"
                  value={formdata.playerFourHoleSix}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleSeven"
                  value={formdata.playerFourHoleSeven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleEight"
                  value={formdata.playerFourHoleEight}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleNine"
                  value={formdata.playerFourHoleNine}
                />
              </Table.Cell>
              <Table.Cell>
                {Number(formdata.playerFourHoleOne) +
                  Number(formdata.playerFourHoleTwo) +
                  Number(formdata.playerFourHoleThree) +
                  Number(formdata.playerFourHoleFour) +
                  Number(formdata.playerFourHoleFive) +
                  Number(formdata.playerFourHoleSix) +
                  Number(formdata.playerFourHoleSeven) +
                  Number(formdata.playerFourHoleEight) +
                  Number(formdata.playerFourHoleNine)}
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleTen"
                  value={formdata.playerFourHoleTen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleEleven"
                  value={formdata.playerFourHoleEleven}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleTwelve"
                  value={formdata.playerFourHoleTwelve}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleThirteen"
                  value={formdata.playerFourHoleThirteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleFourteen"
                  value={formdata.playerFourHoleFourteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleFifteen"
                  value={formdata.playerFourHoleFifteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleSixteen"
                  value={formdata.playerFourHoleSixteen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleSeventeen"
                  value={formdata.playerFourHoleSeventeen}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="playerFourHoleEighteen"
                  value={formdata.playerFourHoleEighteen}
                />
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerFourComingIn =
                    Number(formdata.playerFourHoleTen) +
                    Number(formdata.playerFourHoleEleven) +
                    Number(formdata.playerFourHoleTwelve) +
                    Number(formdata.playerFourHoleThirteen) +
                    Number(formdata.playerFourHoleFourteen) +
                    Number(formdata.playerFourHoleFifteen) +
                    Number(formdata.playerFourHoleSixteen) +
                    Number(formdata.playerFourHoleSeventeen) +
                    Number(formdata.playerFourHoleEighteen))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerFourGoingOut =
                    Number(formdata.playerFourHoleOne) +
                    Number(formdata.playerFourHoleTwo) +
                    Number(formdata.playerFourHoleThree) +
                    Number(formdata.playerFourHoleFour) +
                    Number(formdata.playerFourHoleFive) +
                    Number(formdata.playerFourHoleSix) +
                    Number(formdata.playerFourHoleSeven) +
                    Number(formdata.playerFourHoleEight) +
                    Number(formdata.playerFourHoleNine))
                }
              </Table.Cell>
              <Table.Cell>
                {
                  (formdata.playerFourTotal =
                    Number(formdata.playerFourGoingOut) +
                    Number(formdata.playerFourComingIn))
                }
              </Table.Cell>
            </Table.Row>
            {/* <Table.Row>
            <Table.HeaderCell>
                Notes
              </Table.HeaderCell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTwoYardage"
                  value={formdata.holeTwoYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeThreeYardage"
                  value={formdata.holeThreeYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFourYardage"
                  value={formdata.holeFourYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFiveYardage"
                  value={formdata.holeFiveYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSixYardage"
                  value={formdata.holeSixYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSevenYardage"
                  value={formdata.holeSevenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeEightYardage"
                  value={formdata.holeEightYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeNineYardage"
                  value={formdata.holeNineYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTenYardage"
                  value={formdata.holeTenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeElevenYardage"
                  value={formdata.holeElevenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeTwelveYardage"
                  value={formdata.holeTwelveYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeThirteenYardage"
                  value={formdata.holeThirteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFourteenYardage"
                  value={formdata.holeFourteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeFifteenYardage"
                  value={formdata.holeFifteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSixteenYardage"
                  value={formdata.holeSixteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeSeventeenYardage"
                  value={formdata.holeSeventeenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeEighteenYardage"
                  value={formdata.holeEighteenYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  className="input-cell"
                  placeholder=""
                  onChange={handleChange}
                  name="holeOneYardage"
                  value={formdata.holeOneYardage}
                />
              </Table.Cell>
            </Table.Row> */}
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
        <button>Submit Scorecard</button>
        <div>
          <ScorecardDisplay
            formdata={formdata}
            playerOneName={playerOneName}
            playerTwoName={playerTwoName}
            playerThreeName={playerThreeName}
            playerFourName={playerFourName}
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default HandicapTracker