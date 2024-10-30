import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem; /* Usando rem para melhor responsividade */
  width: 96%;
  max-width: 68.75rem; /* 1100px em rem */
  margin: 0 auto;
  background-color: white;
  border-radius: 0.5rem; /* 8px em rem */
  margin-top: -0.625rem; /* -10px em rem */

  /* Media queries para responsividade */
  @media (max-width: 48rem) { /* 768px em rem */
    padding: 1rem; /* Reduz o padding em telas menores */
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TotalText = styled.span`
  font-size: 1.5rem; /* Tamanho do texto total, usando rem */
  font-weight: bold;
  color: black;
  margin-left: auto;
  display: flex;
  align-items: center;

  .label {
    font-size: 1rem; /* Tamanho da fonte da label, usando rem */
    margin-top: 0.375rem; /* Usando rem para melhor responsividade */
    margin-right: -0.4375rem; /* -7px em rem */
    color: #999999; /* Cor para "TOTAL" */
  }

  .value {
    color: #333333; /* Cor para o valor "R$TOTAL" */
    margin-left: 0.5rem; /* Espaçamento entre "TOTAL" e o valor */
  }

  /* Media queries para responsividade */
  @media (max-width: 48rem) {
    font-size: 1.25rem; /* Reduz o tamanho da fonte em telas menores */

    .label {
      font-size: 0.875rem; /* Reduz o tamanho da fonte da label em telas menores */
    }
  }
`;
