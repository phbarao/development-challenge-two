import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Form, Label, Input, Button } from './styles';

const initialValue = {
  name: '',
  birthDate: '',
  email: '',
  whatsapp: '',
  address: {
    street: '',
    number: '',
    zipCode: '',
    city: '',
    state: '',
  },
};

function CreatePatient() {
  const [values, setValues] = useState(initialValue);

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put('/patients', values);
    history.push('/');
  };

  return (
    <Container>
      <h1>Create Patient</h1>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="id">
          ID
          <Input name="id" type="text" onChange={handleInputChange} required />
        </Label>

        <Label htmlFor="name">
          Nome
          <Input name="name" type="text" onChange={handleInputChange} />
        </Label>

        <Label htmlFor="name">
          E-mail
          <Input name="email" type="email" onChange={handleInputChange} />
        </Label>

        <Button type="submit">Salvar</Button>
      </Form>
      <Link to="/">Voltar</Link>
    </Container>
  );
}

export default CreatePatient;
