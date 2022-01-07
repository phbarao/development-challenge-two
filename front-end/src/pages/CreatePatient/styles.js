import styled from 'styled-components';

export const Container = styled.div`
  background-color: #37ccd7;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  label {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  margin-top: 5px;
  border-radius: 5px;
  padding: 0 15px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #4967cf;
  color: #fff;
  border-radius: 5px;
`;
