import React, { ButtonHTMLAttributes, memo } from 'react';

import { Container } from './styles';

type SubmitButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const SubmitButton: React.FC<SubmitButtonTypes> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default memo(SubmitButton);
