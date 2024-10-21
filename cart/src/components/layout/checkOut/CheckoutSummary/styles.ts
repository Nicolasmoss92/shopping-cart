import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 96%; /* Garante que o contêiner ocupe toda a largura disponível */
  max-width: 1100px; /* Máximo de largura para garantir uma boa visualização */
  margin: 0 auto; /* Centraliza o contêiner */
  background-color: yellow;
  border-radius: 8px;
  margin-top: -10px;
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
