// import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Sonnet from 'components/Sonnet';
import Container from 'react-bootstrap/Container';
import Alarms from './Alarms';

function Logs() {
  return (
    <>
      {/* <Container style={{margin:20}}> */}
      <Container>
        <div style={{ margin: 10}}>
          <Tabs
            defaultActiveKey="alarms"
            id="uncontrolled-tab"
            className="mb-3"
          >
            <Tab eventKey="alarms" title="Аварии" style={{ padding: 10}}>
              <Alarms />
            </Tab>
            <Tab eventKey="alerts" title="Предупреждения">
              {/* <Sonnet /> */}
              asdfsdf
            </Tab>
            <Tab eventKey="info" title="Информация">
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  )
}

export default Logs;