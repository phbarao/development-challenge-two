import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { Container, PatientsList, PatientItem } from './styles';
import { PatientTypes } from '../CreatePatient';
import LoadingSpinner from '../../components/LoadingSpinner';

const ListPatients: React.FC = () => {
  const [patients, setPatients] = useState<PatientTypes[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string): Promise<void> => {
    await api.delete(`/patients/${id}`);

    const updatedPatients = patients.filter((item) => item.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    const loadPatients = async (): Promise<void> => {
      setLoading(true);

      const response = await api.get('/patients');

      setPatients(response.data.Items);
      setLoading(false);
    };

    loadPatients();
  }, []);

  return (
    <Container>
      <h1>Pacientes Cadastrados</h1>
      {loading ? (
        <LoadingSpinner size={30} color="#6d85d9" />
      ) : (
        <PatientsList>
          {patients.map((patient) => (
            <PatientItem>
              <h3>{patient.name}</h3>
              <p>Data de Nascimento: {formatDate(patient.birthDate)} </p>
              <p>Email: {patient.email}</p>
              <button type="button" onClick={() => handleDelete(patient.id)}>
                X
              </button>
            </PatientItem>
          ))}
        </PatientsList>
      )}

      <Link to="/">Página Inicial</Link>
      <Link to="/create-patient">Cadastrar paciente</Link>
    </Container>
  );
};

export default ListPatients;
