import React, { InputHTMLAttributes, memo } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, onChange }) => {
  return (
    <InputContainer
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default memo(Input);
