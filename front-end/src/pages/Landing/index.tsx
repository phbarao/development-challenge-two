import React from 'react';
import {
  MdKeyboardArrowRight,
  MdOutlinePersonAddAlt,
  MdOutlineFormatListBulleted,
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Menu, MenuItem } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img
          data-cy="logo-image"
          className="logo"
          src={logoImg}
          alt="Med App"
        />

        <Menu>
          <MenuItem
            data-cy="create-button"
            className="menu-item"
            to="/create-patient"
          >
            <MdOutlinePersonAddAlt className="patient-icon" />

            <p>Cadastrar Paciente</p>

            <MdKeyboardArrowRight className="arrow-icon" />
          </MenuItem>

          <MenuItem
            data-cy="list-button"
            className="menu-item"
            to="/list-patients"
          >
            <MdOutlineFormatListBulleted className="list-icon" />

            <p>Listar Pacientes</p>

            <MdKeyboardArrowRight className="arrow-icon" />
          </MenuItem>
        </Menu>
      </Content>
    </Container>
  );
};

export default Landing;
