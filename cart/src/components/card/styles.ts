import styled from 'styled-components';

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 250px;  /* Largura do card ajustada */
  margin-left: 255px; /* Posição fixa à esquerda */
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: auto; /* Em telas menores, centraliza o card */
    margin-right: auto;
    max-width: 100%; /* Card ocupa 100% da largura da tela em dispositivos móveis */
    margin-top: 20px;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 16px; /* Espaço entre a imagem e o nome do produto */
`;

export const ProductName = styled.h3`
  font-size: 14px; /* Fonte menor para se ajustar ao card */
  margin: 8px 0;
  color: #333;
  text-align: left; /* Alinhamento à esquerda */
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
  text-align: left; /* Alinhamento à esquerda */
`;

export const AddToCartButton = styled.button`
  background-color: #7159c1;
  color: white;
  font-weight: bold;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;  /* O botão ocupa a largura total do card */

  &:hover {
    background-color: #5a47a3;
  }
`;

export const CartIcon = styled.span`
  font-size: 16px;
  margin-right: 4px; /* Espaço entre o ícone e o texto */
`;
