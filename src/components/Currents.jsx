import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Map from './Map';

function Currents() {
  return (
    <>
      <Container >
        <Card border='light' style={{ marginTop: 10 }}>
          <Form style={{ marginTop: 15, marginLeft: 15 }}>
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
                  <Form.Label column sm="6">
                    {/* <Form.Label > */}
                    Порог тока, мА
                  </Form.Label>
                  <Col
                    sm="4"
                    style={{ paddingLeft: 0, paddingRight: 0, marginRight: 0 }}
                  >
                    {/* <Col> */}
                    <Form.Control type="Label" placeholder="Ток, мА" />
                  </Col>
                </Form.Group>
              </Form.Check>
            </div>
          </Form>

        </Card>
        <Card border='light' style={{ marginTop: 0, minHeight: 500 }}>
          <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Токи групп</Card.Header>
          <Table hover bordered size="sm" striped="columns" responsive="sm">
            {/* <Table className="m-1" striped bordered hover> так криво сжимается */}
            {/* <Table triped bordered hover> */}
            <thead>
              <tr>
                <th ></th>
                <th colSpan={2}>Красный</th>
                <th colSpan={2}>Желтый</th>
                <th colSpan={2}>Зеленый</th>
                <th colSpan={2}>Дополн.</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr>
                  <td key={index*10}><b>Группа {index + 1}</b></td>
                  <td key={index*10+1}>0</td>
                  <td key={index*10+2}>0</td>
                  <td key={index*10+3}>0</td>
                  <td key={index*10+4}>0</td>
                  <td key={index*10+5}>0</td>
                  <td key={index*10+6}>0</td>
                  <td key={index*10+7}>0</td>
                  <td key={index*10+8}>0</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </>
  )
}

export default Currents;