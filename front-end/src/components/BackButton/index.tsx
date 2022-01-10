import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import { Container } from './styles';

interface BackButtonProps {
  title: string;
  path: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title, path }) => {
  return (
    <Container>
      <Link to={path}>
        <MdOutlineKeyboardBackspace color="#fff" size={30} />
        {title}
      </Link>
    </Container>
  );
};

export default memo(BackButton);
