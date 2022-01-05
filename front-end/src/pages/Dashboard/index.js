import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function loadPatients() {
      const items = await api.get('/patients');

      setPatients(items.data.Items);
    }

    loadPatients();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Dashboard;
