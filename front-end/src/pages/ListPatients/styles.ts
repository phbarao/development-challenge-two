import styled from 'styled-components';

import { fadeIn } from '../../utils/animations';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #37ccd5;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 80%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    .title {
      display: flex;
      align-items: center;
      line-height: 20px;

      .logo {
        width: 40px;
      }

      h1 {
        color: #fff;
        font-size: 22px;
        margin-left: 10px;
      }
    }

    .create-patient-button {
      color: #fff;
      border: 1px solid #fff;
      padding: 10px 20px;
      border-radius: 10px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #fff;
        color: #37ccd5;
        transition: 0.3s;
      }

      svg {
        margin-right: 10px;
      }
    }

    @media (max-width: 500px) {
      .create-patient-button {
        width: 100px;
        svg {
          margin-right: 0;
        }
      }

      .create-patient-text {
        text-align: center;
        line-height: 16px;
      }
    }
  }
`;

export const PatientsList = styled.div`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  animation: ${fadeIn} 1s;

  h3 {
    color: #6d85d9;
    font-weight: 400;
  }

  .empty {
    text-align: center;
    color: #a2a2a2;
  }

  .top-block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: gray;
      margin-left: 5px;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    padding-top: 5px;
  }

  .delete-button {
    height: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    transition: 0.3s;

    &:hover {
      color: red;
      transition: 0.3s;

      svg {
        color: red;
        transition: 0.3s;
      }
    }
  }

  .right-block {
    padding-left: 10px;
    text-align: right;
  }

  @media (max-width: 500px) {
    .right-block {
      text-align: center;
    }
  }
`;

export const PatientItem = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 5px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 500px) {
    .info {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
`;

export const CenterSpinner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
