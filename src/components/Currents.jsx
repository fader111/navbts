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
                  <Form.Label column sm="5">
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
        <Card border='light' style={{ marginTop: 0, minHeight: 5000 }}>
              <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Токи групп</Card.Header>
              <Table hover>
                {/* <Table className="m-1" striped bordered hover> так криво сжимается */}
                {/* <Table triped bordered hover> */}
                {/* <thead>
                    <tr>
                      <th colSpan={2}>Состояние</th>
                    </tr>
                  </thead> */}
                <tbody>
                  <tr>
                    <td><b>Уровень доступа</b></td>
                    <td>Оператор</td>
                  </tr>
                  <tr>
                    <td><b>Режим работы</b></td>
                    <td>Календарный план</td>
                  </tr>
                  <tr>
                    <td><b>Текущая фаза</b></td>
                    <td>2/2</td>
                  </tr>
                  <tr>
                    <td><b>Версия ПО</b></td>
                    <td>1.1.3</td>
                  </tr>
                  <tr>
                    <td><b>Режим ВПУ</b></td>
                    <td>Разрешен</td>
                  </tr>
                  <tr>
                    <td><b>Номер СО</b></td>
                    <td>3080</td>
                  </tr>
                </tbody>
              </Table>
            </Card>

      </Container>
    </>
  )
}

export default Currents;