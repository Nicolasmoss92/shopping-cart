import styled from 'styled-components';

// Body (Amarelo) - container principal
export const MainContainer = styled.main`
  background-color: #f5f5f5; /* Cor de fundo para o body */
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardGrid = styled.div`
  display: flex; /* Usando flexbox para melhor controle */
  justify-content: flex-start; /* Alinha os itens à esquerda */
  align-items: flex-start; /* Alinha os itens no topo */
  width: 100vw; /* Largura total da tela */
  height: 100vh; /* Altura total da tela */
  background-color: #1a1a1a; /* Cor de fundo */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box; /* Inclui o padding na largura e altura total */
`;;