import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 96%; /* Garante que o contêiner ocupe toda a largura disponível */
  max-width: 1100px; /* Máximo de largura para garantir uma boa visualização */
  margin: 0 auto; /* Centraliza o contêiner */
  background-color: white;
  border-radius: 8px;
  margin-top: -10px;
`;


export const TotalText = styled.span`
  font-size: 24px; /* Tamanho do texto total */
  font-weight: bold; /* Negrito */
  color: black; /* Cor do texto */
  margin-left: auto; /* Para empurrar o total para o lado direito */
  display: flex; /* Para poder alinhar */
  align-items: center; /* Centraliza verticalmente */
`;

