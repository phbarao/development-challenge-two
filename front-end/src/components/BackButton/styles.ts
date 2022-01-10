import styled from 'styled-components';

export const Container = styled.div`
  a {
    width: 100%;
    color: #fff;
    height: 20px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: center;
    transition: 0.3s;
    font-size: 16px;

    &:hover {
      opacity: 0.5;
      transition: 0.3s;
    }
  }
`;
