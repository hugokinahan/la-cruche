import React from 'react'
import { Label, Table } from 'semantic-ui-react'

function Legacy() {

  return (
    <Table celled className="table-one">
          <Table.Header>
            <Table.Row className="table-headers">
              <Table.HeaderCell>La Cruche</Table.HeaderCell>
              <Table.HeaderCell >
                Rounds Played
              </Table.HeaderCell>
              <Table.HeaderCell >
                Total Points
              </Table.HeaderCell>
              <Table.HeaderCell >
                Average Points
              </Table.HeaderCell>
              <Table.HeaderCell className="phone-hide">
                Best Round
              </Table.HeaderCell>
              <Table.HeaderCell >
                Wins
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          <Table.Row>
              <Table.Cell>Harry Rees</Table.Cell>
              <Table.Cell >8</Table.Cell>
              <Table.Cell >                
              <span className="yellow-jersey">
                  244
                </span>
              </Table.Cell>
              <Table.Cell >                
              <span className="yellow-jersey">
                  30.50
                </span></Table.Cell>
              <Table.Cell className="phone-hide">41</Table.Cell>
              <Table.Cell>
                <span className="yellow-jersey">
                  2
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hugo Kinahan</Table.Cell>
              <Table.Cell >8</Table.Cell>
              <Table.Cell >238</Table.Cell>
              <Table.Cell >29.75</Table.Cell>
              <Table.Cell className="phone-hide">38</Table.Cell>
              <Table.Cell>0
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Milo Shirley</Table.Cell>
              <Table.Cell >8
              </Table.Cell>
              <Table.Cell >229</Table.Cell>
              <Table.Cell >28.63</Table.Cell>
              <Table.Cell className="phone-hide">34
              </Table.Cell>
              <Table.Cell>0
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Harry FitzGerald</Table.Cell>
              <Table.Cell >8
              </Table.Cell>
              <Table.Cell >223</Table.Cell>
              <Table.Cell >27.88</Table.Cell>
              <Table.Cell className="phone-hide">35</Table.Cell>
              <Table.Cell>0
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tom Young</Table.Cell>
              <Table.Cell >7</Table.Cell>
              <Table.Cell >198</Table.Cell>
              <Table.Cell >28.29</Table.Cell>
              <Table.Cell className="phone-hide">35</Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Joe Mellor</Table.Cell>
              <Table.Cell >8</Table.Cell>
              <Table.Cell >187</Table.Cell>
              <Table.Cell >23.38</Table.Cell>
              <Table.Cell className="phone-hide">30</Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Alex Rhodes</Table.Cell>
              <Table.Cell >7</Table.Cell>
              <Table.Cell >169</Table.Cell>
              <Table.Cell >24.14</Table.Cell>
              <Table.Cell className="phone-hide">28</Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Dom Barnes</Label>
              </Table.Cell>
              <Table.Cell >5.5</Table.Cell>
              <Table.Cell >157</Table.Cell>
              <Table.Cell >28.55
              </Table.Cell>
              <Table.Cell className="phone-hide">
                <span className="yellow-jersey">43</span>
              </Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Paul Kidd</Table.Cell>
              <Table.Cell >4</Table.Cell>
              <Table.Cell >106</Table.Cell>
              <Table.Cell >26.50</Table.Cell>
              <Table.Cell className="phone-hide">29</Table.Cell>
              <Table.Cell>0</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Cunningham</Table.Cell>
              <Table.Cell >4</Table.Cell>
              <Table.Cell >90</Table.Cell>
              <Table.Cell >22.50</Table.Cell>
              <Table.Cell className="phone-hide">27</Table.Cell>
              <Table.Cell>0</Table.Cell>
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

export default Legacy