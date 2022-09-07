import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Currents() {
  return (
    <>
      <Container >
        <Card border='light' style={{ marginTop: 10 }}>
        {/* <Card border='light' > */}
          <div style={{ padding: 10 }}>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
          </div>

        </Card>
        <Card border='light' style={{ marginTop: 5, minHeight: 500 }}>
          Токи групп
        </Card>

      </Container>
    </>
  )
}

export default Currents;