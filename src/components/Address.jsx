import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Addr = () => {
  return (
    <>
      <Table className="addr" variant='primary' size="sm" >
        <tbody>
          <tr>
            <td><Container > Адрес: улица Ленина 45, стр. 2 </Container></td>
          </tr>
        </tbody>
      </ Table>
    </>
  );
};

export default Addr;