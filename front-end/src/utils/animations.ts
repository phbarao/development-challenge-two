import { keyframes } from 'styled-components';

export const appearFromRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
