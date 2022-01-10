import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 15px;
  transition: 0.3s;

  ::placeholder {
    color: #000000;
  }

  &:hover {
    background-color: #f4f4f4;
    transition: 0.3s;
  }
`;
