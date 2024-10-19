import styled from 'styled-components';

// Body (Amarelo) - container principal
export const MainContainer = styled.main`
  background-color: #f5f5f5; /* Cor de fundo para o body */
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha ao topo */
  width: 100%; /* Garante que ocupe toda a largura da tela */
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o container */
  box-sizing: border-box; /* Inclui padding na largura total */
`;


// CardGrid - Grid responsivo para os cards
export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os cards quebrem linha */
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 0px;

  /* Para telas grandes */
  @media (min-width: 1024px) {
    justify-content: space-between; /* Distribui os cards de forma uniforme */
  }

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza os cards em telas menores */
  }
`;
