// styles.ts
import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  align-items: center;
  padding: 20px 0;
  width: 100%;  /* Para ocupar toda a largura disponível */
  max-width: 1400px; /* Mantenha o max-width */
  margin: 0 auto;
  margin-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1; // Permite que a div ocupe espaço disponível
`;

export const ProductImage = styled.img`
  width: 60px; // Ajuste o tamanho da imagem conforme necessário
  height: auto; // Mantém a proporção da imagem
  margin-right: 10px;
`;

export const ProductName = styled.h3`
  font-size: 16px; // Ajuste conforme necessário
  margin: 0; // Remove margens para melhor controle
`;

export const ProductPrice = styled.div`
  font-size: 16px; // Ajuste conforme necessário
  font-weight: bold;
  color: #000;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px; // Espaçamento entre os componentes
`;

