import React from 'react';
import { SubHeaderWrapper } from "./styles";


const SubHeader: React.FC = () => {
    return (
      <SubHeaderWrapper>
        <span>Produto</span>
        <span>QTD</span>
        <span>Preço</span>
      </SubHeaderWrapper>
    );
  };
  
  export default SubHeader;