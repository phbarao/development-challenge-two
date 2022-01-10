import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, onChange }) => {
  return (
    <InputContainer
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default memo(Input);
