import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Map from './Map';

function Currents() {
  return (
    <>
      <Container >
        <Card border='light' style={{ marginTop: 10 }}>
          {/* <Card border='light' > */}
          {/* <div style={{ paddingTop: 15, paddingLeft:10 }}>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
          </div> */}
          <Form style={{ marginTop: 15, marginLeft: 15 }}>
            {/* <div key={`inline-switch`} className="mb-3"> */}
            <div key={`inline-switch`} >
              <Form.Check
                inline
                label="Контроль напряжения"
                name="group1"
                type="switch"
                id={`switch-1`}
              />
              <Form.Check
                inline
                label="Контроль тока"
                name="group1"
                type="switch"
                id={`switch-2`}
              />
              <Form.Check
                inline
                // disabled
                name="group1"
                label="Индивидуальная настройка"
                type="switch"
                id={`switch-3`}
              />
              <Form.Check
                inline
                style={{ paddingLeft: 30 }}
              >
                <Form.Group
                  as={Row}
                  className="mb-2"
                  controlId="CurrLimitFine">
                  <Form.Label column sm="5">
                    {/* <Form.Label > */}
                    Порог тока, мА
                  </Form.Label>
                  <Col
                    sm="4"
                    style={{ paddingLeft: 0 }}
                  >
                    {/* <Col> */}
                    <Form.Control type="Label" placeholder="Ток, мА" />
                  </Col>
                </Form.Group>
              </Form.Check>
            </div>
          </Form>

        </Card>
        <Card border='light' style={{ marginTop: 5, minHeight: 500 }}>
          Токи групп
        </Card>

      </Container>
    </>
  )
}

export default Currents;