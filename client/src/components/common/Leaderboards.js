import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import { Label, Table } from 'semantic-ui-react'

function Leaderboards() {

  return (
    <section>
      <Nav />
      <div className="homepage-content">
        <h1 className="leaderboards-header">Leaderboards</h1>
        <h2 className="sub-heading">Northern Ireland Tour 2020</h2>
        <Table celled className="table-one">
          <Table.Header>
            <Table.Row className="table-headers">
              <Table.HeaderCell>La Cruche 2020</Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Round 1
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Round 2
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Round 3
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Round 4
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row className="table-headers">
              <Table.HeaderCell>Northern Ireland</Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Portrush Golf Club, Valley Course
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Rosapenna Golf Club, Sandy Hills Links
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Ballycastle Golf Club
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Hilton Hotel Templepatrick
              </Table.HeaderCell>
              <Table.HeaderCell>Points Total</Table.HeaderCell>
              <Table.HeaderCell>Final Standings</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Dom Barnes</Label>
              </Table.Cell>
              <Table.Cell className="phone-hide">19</Table.Cell>
              <Table.Cell className="phone-hide">20</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">43</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">18*</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>6th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Harry FitzGerald</Table.Cell>
              <Table.Cell className="phone-hide">23</Table.Cell>
              <Table.Cell className="phone-hide">22</Table.Cell>
              <Table.Cell className="phone-hide">35</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell>106</Table.Cell>
              <Table.Cell>5th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hugo Kinahan</Table.Cell>
              <Table.Cell className="phone-hide">23</Table.Cell>
              <Table.Cell className="phone-hide">33</Table.Cell>
              <Table.Cell className="phone-hide">38</Table.Cell>
              <Table.Cell className="phone-hide">31</Table.Cell>
              <Table.Cell><span className='second'>125</span></Table.Cell>
              <Table.Cell><span className='second'>2nd</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Joe Mellor</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">20</Table.Cell>
              <Table.Cell className="phone-hide">23</Table.Cell>
              <Table.Cell className="phone-hide">17</Table.Cell>
              <Table.Cell>86</Table.Cell>
              <Table.Cell>7th =</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Harry Rees</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">34</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">39</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell>
                <span className="yellow-jersey">126</span>
              </Table.Cell>
              <Table.Cell>
                <span className="yellow-jersey">1st</span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Alex Rhodes</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">20</Table.Cell>
              <Table.Cell className="phone-hide">20*</Table.Cell>
              <Table.Cell className="phone-hide">20</Table.Cell>
              <Table.Cell>86</Table.Cell>
              <Table.Cell>7th =</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Milo Shirley</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">33</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">24</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">34</span>
              </Table.Cell>
              <Table.Cell>
                <span className="third">
                  118
                </span>
              </Table.Cell>
              <Table.Cell><span className="third">3rd</span></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tom Young</Table.Cell>
              <Table.Cell className="phone-hide">24</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">35</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell>111</Table.Cell>
              <Table.Cell>4th</Table.Cell>
            </Table.Row>
          </Table.Body>
          {/* 
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
            <Menu.Item className='winner' as='a'>Winner: Harry Rees (126pts)</Menu.Item>
            <Menu.Item as='a'>* denotes incomplete round</Menu.Item>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
        </Table>
      </div>
      <Footer />
    </section>
  );
}

export default Leaderboards