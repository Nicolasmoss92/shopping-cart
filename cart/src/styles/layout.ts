import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  max-width: 1200px; /* A mesma largura máxima usada no header */
  margin: 20px auto; /* Espaçamento ao redor do conteúdo */
  padding: 0 20px; /* Espaçamento interno */
  width: 100%;
`;
