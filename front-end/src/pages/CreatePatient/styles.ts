import styled from 'styled-components';

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
    align-items: center;
    margin-bottom: 15px;
  }

  .logo {
    width: 30px;
    margin-right: 10px;
  }

  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Form = styled.form`
  width: 80%;
  max-width: 500px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  fieldset {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;

    legend {
      color: #fff;
      padding: 10px;
      font-size: 18px;
      text-align: center;
    }
  }

  .address-group {
    display: flex;
    display: grid;
    grid-template-columns: 80% 20%;
    gap: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #37ccd7;
  color: #fff;
  border-radius: 5px;
`;
