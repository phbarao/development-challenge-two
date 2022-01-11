import styled from 'styled-components';
import { fadeIn } from '../../utils/animations';

export const Container = styled.div`
  background-color: #6d85d9;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .logo {
    width: 40px;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  width: 80%;
  max-width: 500px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${fadeIn} 1s;

  fieldset {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 15px;

    legend {
      color: #fff;
      padding: 10px;
      font-size: 18px;
      text-align: center;
    }
  }

  .address-group {
    width: 100%;
    display: flex;
    gap: 5px;

    input:last-child {
      width: 45%;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #37ccd7;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #4ad6e0;
    transition: 0.3s;
  }
`;
