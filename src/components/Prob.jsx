import Form from 'react-bootstrap/Form';

function Prob() {
  return (
    <Form style={{margin:50}}>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default Prob;