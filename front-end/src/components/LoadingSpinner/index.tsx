import React from 'react';
import { ImSpinner6 } from 'react-icons/im';

import { Container } from './styles';

interface SpinnerProps {
  color: string;
  size: number;
}

const LoadingSpinner: React.FC<SpinnerProps> = ({ color, size }) => {
  return (
    <Container>
      <ImSpinner6 size={size} color={color} />
    </Container>
  );
};

export default LoadingSpinner;
