import React from 'react';
import {
  MdKeyboardArrowRight,
  MdOutlinePersonAddAlt,
  MdOutlineFormatListBulleted,
} from 'react-icons/md';
import { Container, Content, Menu, MenuItem } from './styles';
import logoImg from '../../assets/logo.svg';

function Landing() {
  return (
    <Container>
      <Content>
        <img className="logo" src={logoImg} alt="GoBarber" />

        <Menu>
          <MenuItem className="menu-item" to="/create-patient">
            <MdOutlinePersonAddAlt className="patient-icon" />
            <p>Cadastrar Paciente</p>

            <MdKeyboardArrowRight className="arrow-icon" />
          </MenuItem>

          <MenuItem className="menu-item" to="/list-patients">
            <MdOutlineFormatListBulleted className="list-icon" />
            <p>Listar Pacientes</p>

            <MdKeyboardArrowRight className="arrow-icon" />
          </MenuItem>
        </Menu>
      </Content>
    </Container>
  );
}

export default Landing;
