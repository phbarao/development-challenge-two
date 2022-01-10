import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  table,
  th,
  td {
    border: 1px solid #333;
    border-collapse: collapse;
    padding: 5px;
  }
`;

export const PatientsList = styled.div`
  width: 80%;
  background-color: lightgray;
  padding: 20px;
`;

export const PatientItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  padding: 10px;
`;
