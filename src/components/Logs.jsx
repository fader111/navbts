import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Alarms from './Alarms';
import Warnings from './Warnings';
import Events from './Events';

function Logs() {
  return (
    <>
      <Container >
        <Card border='light' style={{ marginTop: 10, minHeight: 500 }}>
          <Tabs
            defaultActiveKey="alarms"
            id="uncontrolled-tab"
            className="mb-3"
          >
            <Tab eventKey="alarms" title="Аварии">
              <Alarms />
            </Tab>
            <Tab eventKey="warnings" title="Предупреждения">
              <Warnings />
            </Tab>
            <Tab eventKey="info" title="Информация">
              <Events />
            </Tab>
          </Tabs>
        </Card>
      </Container>
    </>
  )
}

export default Logs;