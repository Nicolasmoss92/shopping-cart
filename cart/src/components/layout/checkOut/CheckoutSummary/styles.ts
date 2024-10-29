import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem; /* Usando rem para melhor responsividade */
  width: 96%; /* Garante que o contêiner ocupe toda a largura disponível */
  max-width: 1100px; /* Máximo de largura para garantir uma boa visualização */
  margin: 0 auto; /* Centraliza o contêiner */
  background-color: white;
  border-radius: 8px;
  margin-top: -10px;
  
  /* Media queries para responsividade */
  @media (max-width: 768px) {
    padding: 1rem; /* Reduz o padding em telas menores */
    flex-direction: column; /* Muda a direção para coluna em telas menores */
    align-items: flex-start; /* Alinha itens ao início */
  }
`;



export const TotalText = styled.span`
  font-size: 1.5rem; /* Tamanho do texto total, usando rem */
  font-weight: bold; /* Negrito */
  color: black; /* Cor principal para fallback */
  margin-left: auto; /* Para empurrar o total para o lado direito */
  display: flex; /* Para alinhar horizontalmente */
  align-items: center; /* Centraliza verticalmente */

  .label {
    font-size: 1rem; /* Tamanho da fonte da label, usando rem */
    margin-top: 0.375rem; /* Usando rem para melhor responsividade */
    margin-right: -7px;
    color: #999999; /* Cor para "TOTAL" */
  }

  .value {
    color: #333333; /* Cor para o valor "R$TOTAL" */
    margin-left: 0.5rem; /* Espaçamento entre "TOTAL" e o valor */
  }

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    font-size: 1.25rem; /* Reduz o tamanho da fonte em telas menores */
    
    .label {
      font-size: 0.875rem; /* Reduz o tamanho da fonte da label em telas menores */
    }
  }
`;