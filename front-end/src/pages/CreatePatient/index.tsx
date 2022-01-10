import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../services/api';
import whiteLogo from '../../assets/white-logo.svg';
import Input from '../../components/Input';
import { Container, Form, Button } from './styles';

export interface PatientTypes {
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

const CreatePatient: React.FC = () => {
  const [values, setValues] = useState<PatientTypes>({
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
  });

  const history = useHistory();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleAddressInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const updatedPatients = { ...values };
    updatedPatients.address[name] = value;

    setValues(updatedPatients);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!values.name) {
      toast.error('O nome é obrigatório.');
    }

    await api.post('/patients', values);

    history.push('/list-patients');
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
            type="phone"
            name="phone"
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
              onChange={handleAddressInputChange}
            />

            <Input
              type="text"
              name="number"
              placeholder="Número:"
              onChange={handleAddressInputChange}
            />
          </div>

          <div className="address-group">
            <Input
              type="text"
              name="city"
              placeholder="Cidade:"
              onChange={handleAddressInputChange}
            />

            <Input
              type="text"
              name="state"
              placeholder="Estado:"
              onChange={handleAddressInputChange}
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
