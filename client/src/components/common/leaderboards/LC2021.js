import React from 'react'
import { Label, Table } from 'semantic-ui-react'

function LC2021() {

  return (
    <Table celled className="table-one">
          <Table.Header>
            <Table.Row className="table-headers">
              <Table.HeaderCell>La Cruche 2021</Table.HeaderCell>
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
              <Table.HeaderCell>Wales</Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Pyle & Kenfig Golf Club
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
              Ashburnham Golf Club
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Machynys Peninsula Golf Club
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
              Ashburnham Golf Club
              </Table.HeaderCell>
              <Table.HeaderCell>Points Total</Table.HeaderCell>
              <Table.HeaderCell>Standings</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          <Table.Row>
              <Table.Cell>Harry Rees (18)</Table.Cell>
              <Table.Cell className="phone-hide">18</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">41</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">29</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell>
                <span className="yellow-jersey">
                  118
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="yellow-jersey">
                  1st
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Harry FitzGerald (9)</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">30</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">34</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell>
                <span className="second">
                  117
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="second">
                  2nd
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hugo Kinahan (12)</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">28</Table.Cell>
              <Table.Cell className="phone-hide">28</Table.Cell>
              <Table.Cell>
                <span className="third">
                  113
                </span>
              </Table.Cell>
              <Table.Cell>
                <span className="third">
                  3rd
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Milo Shirley (10)</Table.Cell>
              <Table.Cell className="phone-hide">30
              </Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">28
              </Table.Cell>
              <Table.Cell>111
              </Table.Cell>
              <Table.Cell>4th=
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tom Young (12)</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell className="phone-hide">24*</Table.Cell>
              <Table.Cell>111</Table.Cell>
              <Table.Cell>4th=</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Paul Kidd (12)</Table.Cell>
              <Table.Cell className="phone-hide">25</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">25</Table.Cell>
              <Table.Cell className="phone-hide">29</Table.Cell>
              <Table.Cell>106</Table.Cell>
              <Table.Cell>6th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Dom Barnes (12)</Label>
              </Table.Cell>
              <Table.Cell className="phone-hide">18</Table.Cell>
              <Table.Cell className="phone-hide">21</Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">35</span>
              </Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">31</span>
              </Table.Cell>
              <Table.Cell>105</Table.Cell>
              <Table.Cell>7th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Alex Rhodes (18)</Table.Cell>
              <Table.Cell className="phone-hide">25</Table.Cell>
              <Table.Cell className="phone-hide">24</Table.Cell>
              <Table.Cell className="phone-hide">28</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell>103</Table.Cell>
              <Table.Cell>8th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Joe Mellor (18)</Table.Cell>
              <Table.Cell className="phone-hide">21</Table.Cell>
              <Table.Cell className="phone-hide">26</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell className="phone-hide">24</Table.Cell>
              <Table.Cell>101</Table.Cell>
              <Table.Cell>9th</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Cunningham (18)</Table.Cell>
              <Table.Cell className="phone-hide">18</Table.Cell>
              <Table.Cell className="phone-hide">21</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell className="phone-hide">24</Table.Cell>
              <Table.Cell>90</Table.Cell>
              <Table.Cell>10th</Table.Cell>
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
  )
}

export default LC2021