import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get('/patients').then((response) => setPatients(response.data.Items));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
      <Link to="/create-patient">Cadastrar paciente</Link>
    </>
  );
}

export default Dashboard;
