import { Form, FormGroup, Label, Input } from 'reactstrap';

const Attestation = (props) => {
  return (
    <div className="checkin">
      <Form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfXnviCNyhsxZImFCmvahDLVUg5qNHZhQVtYhakvistTfX-Bw/formResponse"
        target="_blank"
        id="bootstrapForm"
        method="POST"
      >
        <FormGroup>
          <Label for="1849316991">Data:</Label>
          <Input
            type="date"
            name="entry.1942920674"
            id="1942920674_date"
            placeholder="Data"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="1118341689">Motivo:</Label>
          <Input id="249659244" type="text" name="entry.249659244" required />
        </FormGroup>

        <Input
          className="btn btn-dark"
          type="submit"
          value="Enviar Informações"
        />
      </Form>
    </div>
  );
};

export default Attestation;
