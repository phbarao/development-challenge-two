import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4967cf;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .logo {
    width: 100px;
  }
`;

export const Menu = styled.nav`
  width: 60%;
  max-width: 500px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuItem = styled(Link)`
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  transition: 0.3s;
  padding: 0 8%;

  p {
    font-size: 18px;
    margin-right: -10px;
  }

  svg {
    color: #37ccd7;
  }

  .patient-icon {
    font-size: 30px;
    margin-right: -10px;
  }

  .list-icon {
    font-size: 30px;
    margin-left: -3px;
  }

  .arrow-icon {
    font-size: 30px;
    margin-right: -10px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.3s;
  }
`;
