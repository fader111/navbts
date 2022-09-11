import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Addr from './Address'

const Home = () => {
  return (
    <>
      {/* // <Container className="container-sm"> */}
      <Addr />
      <Container>
        <Row>
          <Col >
            {/* <Table className="m-1" striped bordered hover> */}
            <Card border='light'>
              <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Состояние</Card.Header>
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
          </Col>
          <Col >
            <Card border='light'>
              <Card.Header style={{ backgroundColor: "#e0e0e0" }}>Настройки сети</Card.Header>
              {/* <Table striped hover> */}
              <Table hover>
                {/* <Table className="m-2" striped bordered> */}
                {/* <thead>
              <tr>
                <th colSpan={2}>Настройки сети</th>
              </tr>
            </thead> */}
                <tbody>
                  <tr>
                    <td><b>IP адрес</b></td>
                    <td>192.169.0.1</td>
                  </tr>
                  <tr>
                    <td><b>Маска подсети</b></td>
                    <td>255.255.255.248</td>
                  </tr>
                  <tr>
                    <td><b>Основной шлюз</b></td>
                    <td>192.169.0.254</td>
                  </tr>
                  <tr>
                    <td><b>Статус соединения</b></td>
                    <td>Отключен</td>
                  </tr>
                  <tr>
                    <td><b>Статус управления</b></td>
                    <td>Отключен</td>
                  </tr>
                  <tr>
                    <td><b>Физический адрес</b></td>
                    <td>24:3E:7A:D0:00:11</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;