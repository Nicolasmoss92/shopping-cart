import React from 'react';
import { SubHeaderWrapper } from './styles';

const SubHeader: React.FC = () => {
  return (
    <SubHeaderWrapper>
      <span>PRODUTO</span>
      <span>QTD</span>
      <span>PREÇO</span>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
