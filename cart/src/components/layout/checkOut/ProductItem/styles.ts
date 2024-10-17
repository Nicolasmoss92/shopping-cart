// styles.ts
import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Alinha os itens no espaço disponível
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 100%; // Garante que o item ocupe 100% da largura disponível
  box-sizing: border-box; // Inclui padding e border na largura total

  @media (max-width: 600px) {
    flex-direction: column; // Altera para coluna em telas menores
    align-items: flex-start; // Alinha os itens à esquerda
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

