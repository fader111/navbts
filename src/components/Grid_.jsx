import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table1 from "./Table1";
import Table2 from "./Table2";

function Grid1() {
  return (
    <Container>
      <Row>
        <Col sm>abra</Col>
        <Col sm>caaadabra</Col>
        {/* {Table1} */}
        {/* {Table2} */}
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default Grid1;