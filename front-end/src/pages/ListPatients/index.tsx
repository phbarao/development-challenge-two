import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';

import api from '../../services/api';
import { PatientTypes } from '../CreatePatient';
import { formatDate } from '../../utils/formatDate';
import whiteLogo from '../../assets/white-logo.svg';
import LoadingSpinner from '../../components/LoadingSpinner';
import BackButton from '../../components/BackButton';
import { Container, PatientsList, PatientItem, CenterSpinner } from './styles';

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

      setPatients(response.data.body.Items);
      setLoading(false);
    };

    loadPatients();
  }, []);

  return (
    <Container>
      {loading ? (
        <CenterSpinner>
          <LoadingSpinner size={40} color="#fff" />
        </CenterSpinner>
      ) : (
        <>
          <header>
            <div className="title">
              <img className="logo" src={whiteLogo} alt="Med App" />

              <h1>Pacientes Cadastrados</h1>
            </div>

            <Link className="create-patient-button" to="/create-patient">
              <TiPlus size={22} />

              <p className="create-patient-text">Novo paciente</p>
            </Link>
          </header>

          <PatientsList>
            {patients.length === 0 ? (
              <PatientItem>
                <h3 className="empty">Nenhum paciente cadastrado</h3>
              </PatientItem>
            ) : (
              patients.map((patient) => (
                <PatientItem key={patient.id}>
                  <div className="top-block">
                    <h3 className="patient-name">{patient.name}</h3>

                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleDelete(patient.id)}
                    >
                      <p>Remover</p>

                      <RiDeleteBack2Line size={25} />
                    </button>
                  </div>

                  <div className="info">
                    <div className="left-block">
                      <p>
                        <strong>Data de Nascimento: </strong>{' '}
                        {formatDate(patient.birthDate)}{' '}
                      </p>

                      <p>
                        {' '}
                        <strong>Email: </strong>
                        {patient.email}
                      </p>
                    </div>

                    <div className="right-block">
                      <p>
                        <strong>Telefone: </strong>
                        {patient.phone}
                      </p>

                      <p>
                        <strong>Endereço: </strong>
                        {`${patient.address.street}, ${patient.address.number}. ${patient.address.city}-${patient.address.state}`}
                      </p>
                    </div>
                  </div>
                </PatientItem>
              ))
            )}

            <BackButton path="/" title="Página Inicial" />
          </PatientsList>
        </>
      )}
    </Container>
  );
};

export default ListPatients;
