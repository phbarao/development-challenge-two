import React, { memo } from 'react';

import { BackButtonContainer } from './styles';

interface BackButtonProps {
  title: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  return <BackButtonContainer>{title}</BackButtonContainer>;
};

export default memo(BackButton);
