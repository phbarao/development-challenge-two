import styled from 'styled-components';

import { rotate } from '../../utils/animations';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
