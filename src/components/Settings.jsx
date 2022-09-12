import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Settings() {
  return (
    <>
      <Container >
        <Card border='light' style={{ marginTop: 10 }}>
          <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Панель оператора</Card.Header>
          <Card.Body
            className="text-center"
            style={{ padding: 10 }}
          >
            {/* <Col style={{ fontSize: 20, marginBottom: 10 }}> */}
            <Card.Title>
              {/* Режимы */}
            </Card.Title>
            {/* </Col> */}
            <Row>
              <Col>
                <Button className="manbuttons" as="input" variant="outline-secondary" type="button" value="Ручное управление" style={{ marginBottom: 10 }} />{' '}
                <Button as="input" variant="outline-dark" type="submit" value="Выключить" className="manbuttons" style={{ marginBottom: 10 }} />{' '}
                <Button as="input" variant="outline-danger" type="submit" value="Кругом красный" className="manbuttons" style={{ marginBottom: 10 }} />{' '}
                <Button as="input" variant="outline-warning" type="submit" value="Желтое мигание" className="manbuttons" style={{ marginBottom: 10 }} />{' '}
              </Col>
            </Row>
            <Card.Title>
              {/* Фазы */}
            </Card.Title>
            <Row>
              <Col>
                <Button as="input" variant="secondary" type="button" value="Фазы" style={{ marginBottom: 10, width: 70 }} disabled />{' '}
                <Button as="input" variant="outline-secondary" type="button" value="1" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="2" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="3" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="4" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="button" value="5" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="6" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="7" style={{ marginBottom: 10, width: 50 }} />{' '}
                <Button as="input" variant="outline-secondary" type="submit" value="8" style={{ marginBottom: 10, width: 50 }} />{' '}
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card border='light' style={{ marginTop: 10 }}>
          <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Настройка детекторов</Card.Header>

          <Form style={{ padding: 10 }}>
            {/* <div key={`inline-switch`} > */}
            <Form.Check
              inline
              label="Настройки безопасности"
              name="group1"
              type="switch"
              id={`switch-1`}
            />
          </Form>
          <InputGroup
            size="sm"
            style={{ paddingLeft: 10, paddingRight: 10 }}
          >
            <InputGroup.Text id=""
              style={{ width: 500 }}
            >
              Время активации аварийного режима для включенного детектора, мин.
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Время, мин."
            // aria-label="Input group example"
            // aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <InputGroup
            size="sm"
            style={{ padding: 10 }}
          >
            <InputGroup.Text
              id="btnGroupAddon"
              style={{ width: 500 }}
            >
              Время активации аварийного режима для отключенного детектора, мин.
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Время, мин."
            // aria-label="Input group example"
            // aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </Card>

      </Container>
    </>
  )
}

export default Settings;