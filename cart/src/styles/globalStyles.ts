import styled from 'styled-components';

export const MainContainerItensPage = styled.main`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 0.3rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const MainContainerCheckoutPage = styled.main`
  background-color: black;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const CardGrid = styled.section`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const PageWrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;
