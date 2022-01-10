import React from 'react';
import { ImSpinner6 } from 'react-icons/im';

import { Container } from './styles';

const LoadingSpinner: React.FC = () => {
  return (
    <Container>
      <ImSpinner6 size={30} color="#6d85d9" />
    </Container>
  );
};

export default LoadingSpinner;
