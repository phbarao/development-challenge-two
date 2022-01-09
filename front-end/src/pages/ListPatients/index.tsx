import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';
import { PatientTypes } from '../CreatePatient';

const ListPatients: React.FC = () => {
  const [patients, setPatients] = useState<PatientTypes[]>([]);

  const handleDelete = async (id: string): Promise<void> => {
    await api.delete(`/patients/${id}`);

    const updatedPatients = patients.filter((item) => item.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    api.get('/patients').then((response) => setPatients(response.data.Items));
  }, []);

  return (
    <Container>
      <h1>ListPatients</h1>

      <table style={{ textAlign: 'center', fontSize: '14px' }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.birthDate}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>
                {`${patient.address.street}, ${patient.address.number}.
                  ${patient.address.city}-${patient.address.state}`}
              </td>
              <td>
                <button
                  name={patient.id}
                  type="button"
                  onClick={() => handleDelete(patient.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/create-patient">Cadastrar paciente</Link>
    </Container>
  );
};

export default ListPatients;
