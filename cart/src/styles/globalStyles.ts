import styled from 'styled-components';

// Body (Amarelo) - container principal
export const MainContainerItensPage = styled.main`
  background-color: white; /* Cor de fundo para o body */
  padding: 2rem; /* Usando rem para melhor responsividade */
  display: flex;
  flex-direction: column; /* Alinha itens verticalmente */
  justify-content: flex-start; /* Alinha ao topo */
  width: 100%; /* Garante que ocupe toda a largura da tela */
  max-width: 1080px; /* Limita a largura máxima */
  margin: 0 auto; /* Centraliza o container */
  box-sizing: border-box; /* Inclui padding na largura total */
  border-radius: 1rem; /* Adiciona bordas arredondadas */
  overflow: hidden; 

  /* Media queries para responsividade */
  @media (max-width: 1024px) {
    padding: 1.5rem; /* Ajusta o padding para telas de tablet */
  }

  @media (max-width: 768px) {
    padding: 1rem; /* Reduz o padding em telas menores */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Mais ajuste para telas pequenas */
  }
`;


// Body (Amarelo) - container principal
export const MainContainerCheckoutPage = styled.main`
  background-color: black; /* Cor de fundo para o body */
  padding: 2rem; /* Usando rem para responsividade */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha ao topo */
  width: 100%; /* Garante que ocupe toda a largura da tela */
  max-width: 1200px; /* Limita a largura máxima */
  margin: 0 auto; /* Centraliza o container */
  box-sizing: border-box; /* Inclui padding na largura total */

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    padding: 1rem; /* Reduz o padding em telas menores */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Mais ajuste para telas pequenas */
  }
`;

export const CardGrid = styled.section`
  background-color: black; /* Cor de fundo preta */
  display: flex;
  flex-wrap: wrap; /* Permite que os cards quebrem linha */
  justify-content: flex-start;
  gap: 20px; /* Espaçamento entre os cards */
  width: 100%;
  padding: 20px; /* Usando rem para melhor responsividade */
  box-sizing: border-box;

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    justify-content: center; /* Centraliza os cards em telas menores */
    padding: 1rem; /* Reduz o padding em telas menores */
    gap: 15px; /* Reduz o espaço entre os cards em telas menores */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Ajuste para telas pequenas */
    gap: 10px; /* Ajusta o espaço entre os cards */
  }

  /* Para telas grandes */
  @media (min-width: 1024px) {
    justify-content: space-between; /* Distribui os cards de forma uniforme */
  }
`;

export const PageWrapper = styled.div`
  background-color: black; /* Cor de fundo preta */
  min-height: 100vh; /* Para cobrir toda a altura da página */
  padding: 2rem; /* Usando rem para melhor responsividade */
  box-sizing: border-box;

  /* Media queries para responsividade */
  @media (max-width: 768px) {
    padding: 1rem; /* Reduz o padding em telas menores */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Mais ajuste para telas pequenas */
  }
`;