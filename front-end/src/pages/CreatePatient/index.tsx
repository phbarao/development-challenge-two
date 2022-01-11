import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { patientsInitialState } from '../../utils/constants';
import whiteLogo from '../../assets/white-logo.svg';
import Input from '../../components/Input';
import LoadingSpinner from '../../components/LoadingSpinner';
import BackButton from '../../components/BackButton';
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
  const [values, setValues] = useState<PatientTypes>(patientsInitialState);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      birthDate: Yup.date().required(),
      email: Yup.string().email(),
      phone: Yup.string(),
      address: Yup.object().shape({
        street: Yup.string(),
        number: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
      }),
    });

    try {
      await schema.validate(values, {
        abortEarly: false,
      });

      await api.post('/patients', values);

      setLoading(false);

      toast.success('Paciente cadastrado com sucesso.');
      history.push('/list-patients');
    } catch (error) {
      setLoading(false);

      if (values.name === '' || values.birthDate === '') {
        toast.error('Nome e data de nascimento são dados obrigatórios.');
        return;
      }

      toast.error('Falha no cadastro, verifique os dados e tente novamente.');
    }
  };

  return (
    <Container>
      <header>
        <img className="logo" src={whiteLogo} alt="Med App" />

        <h2>Cadastrar Paciente</h2>
      </header>

      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Campos obrigatórios</legend>

          <Input
            required
            type="text"
            name="name"
            placeholder="Nome do paciente:"
            onChange={handleInputChange}
          />

          <Input
            type="date"
            name="birthDate"
            placeholder="Data de nascimento:"
            onChange={handleInputChange}
          />
        </fieldset>

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

        <Button title="Salvar">
          {loading ? <LoadingSpinner color="#fff" size={30} /> : 'Salvar'}
        </Button>
      </Form>

      <BackButton path="/list-patients" title="Voltar para lista" />
    </Container>
  );
};

export default CreatePatient;
