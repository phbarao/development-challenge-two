import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from '../CreatePatient/styles';

function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get('/patients').then((response) => setPatients(response.data.Items));
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>

      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
      <Link to="/create-patient">Cadastrar paciente</Link>
    </Container>
  );
}

export default Dashboard;
