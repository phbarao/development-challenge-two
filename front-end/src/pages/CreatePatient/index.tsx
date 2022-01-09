import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import * as Yup from 'yup';

import api from '../../services/api';
import whiteLogo from '../../assets/white-logo.svg';
import Input from '../../components/Input';
import { Container, Form, Button } from './styles';

export interface Patient {
  id?: string;
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
  };
}

// interface CreatePatientFormData {
//   name: string;
//   birthDate: string;
//   email: string;
//   phone: string;
//   address: {
//     street: string;
//     number: string;
//     city: string;
//     state: string;
//   };
// }

const initialValue = {
  name: '',
  birthDate: '',
  email: '',
  phone: '',
  address: {
    street: '',
    number: '',
    city: '',
    state: '',
  },
};

const CreatePatient: React.FC = () => {
  const [values, setValues] = useState<Patient>(initialValue);

  const history = useHistory();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await api.post('/patients', values);
    history.push('/');
  };

  return (
    <Container>
      <header>
        <img className="logo" src={whiteLogo} alt="Med App" />

        <h2 className="title">Cadastrar Paciente</h2>
      </header>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome do paciente:"
          onChange={handleInputChange}
        />

        <Input
          type="string"
          name="birthDate"
          placeholder="Data de nascimento:"
          onChange={handleInputChange}
        />

        <fieldset>
          <legend>Contato</legend>

          <Input
            type="email"
            name="email"
            placeholder="E-mail:"
            onChange={handleInputChange}
          />

          <Input
            type="phoneNumber"
            name="phoneNumber"
            placeholder="Telefone para contato:"
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <div className="address-group">
            <Input
              type="text"
              name="street"
              placeholder="Nome da rua:"
              onChange={handleInputChange}
            />

            <Input
              type="text"
              name="number"
              placeholder="Número:"
              onChange={handleInputChange}
            />
          </div>

          <div className="address-group">
            <Input
              type="text"
              name="city"
              placeholder="Cidade:"
              onChange={handleInputChange}
            />

            <Input
              type="text"
              name="state"
              placeholder="Estado:"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <Button type="submit">Salvar</Button>
      </Form>

      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default CreatePatient;
