import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

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
    <>
      <h1>Create Patient</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">
          ID
          <input
            value={values.id}
            name="id"
            type="text"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="name">
          Nome
          <input
            value={values.name}
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            value={values.email}
            name="email"
            type="email"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Salvar</button>
      </form>
      <Link to="/">Voltar</Link>
    </>
  );
}

export default CreatePatient;
