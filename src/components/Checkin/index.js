import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import format from 'date-fns/format';

import ptBR from 'date-fns/locale/pt-BR';

const Checkin = (props) => {
  const [date, setDate] = useState('');

  const dateAndTime = () => {
    setDate(
      format(new Date(), 'd MMMM - H:mm', {
        locale: ptBR,
      })
    );
  };

  useEffect(() => {
    setInterval(dateAndTime, 1000);
  }, []);

  return (
    <div className="checkin">
      <Form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfivIJHTh7hOuTLI70fMQCrMUQHs31Tb2ab4Mby2cJ28Par6g/formResponse"
        target="_blank"
        id="bootstrapForm"
        method="POST"
      >
        <FormGroup>
          <Label for="exampleSelect">Tipo de Registro:</Label>
          <Input
            type="select"
            id="1849316991"
            name="entry.1942920674"
            class="form-control"
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida - Almoço">Saida - Almoço</option>
            <option value="Retorno - Almoço">Retorno - Almoço</option>
            <option value="Saída">Saída</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Data e Hora:</Label>
          <Input
            id="1682207370"
            type="text"
            name="entry.1682207370"
            class="form-control"
            value={date}
            placeholder={date}
            required
          />
        </FormGroup>

        <Input className="btn btn-dark" type="submit" value="Bater o ponto" />
      </Form>

      <Alert color="success">Ponto Registrado com Sucesso</Alert>
    </div>
  );
};

export default Checkin;
