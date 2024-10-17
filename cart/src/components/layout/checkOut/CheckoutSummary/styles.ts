import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Alinha o total e o botão
  align-items: center; // Centraliza verticalmente
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9; // Cor de fundo
  border-radius: 8px; // Bordas arredondadas
  margin-top: 20px; // Espaçamento superior
`;

export const TotalText = styled.span`
  font-size: 24px; // Tamanho do texto total
  font-weight: bold; // Negrito
  color: #000; // Cor do texto
`;

export const CheckoutButton = styled.button`
  background-color: #7159c1; // Cor de fundo do botão
  color: #fff; // Cor do texto
  border: none; // Sem bordas
  border-radius: 4px; // Bordas arredondadas
  padding: 10px 20px; // Espaçamento interno
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  transition: background-color 0.3s; // Transição suave

  &:hover {
    background-color: #5639a3; // Cor ao passar o mouse
  }
`;
