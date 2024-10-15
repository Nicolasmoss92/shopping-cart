import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #3b82f6;
  color: white;
  padding: 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 800px; 

  @media (max-width: 768px) { /* Ajustes para telas menores */
    gap: 15px; /* Reduz o espaço em telas pequenas */
  }

  @media (max-width: 480px) { /* Ajustes para dispositivos móveis */
    gap: 10px; /* Reduz ainda mais o espaço em telas muito pequenas */
  }
`;

export const CartText = styled.div`
  margin-right: 8px;
  text-align: right;

  span {
    display: block;
    font-size: 12px;

    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      color: #888;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre texto e imagem */
  
  span {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  
  img {
    margin: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CartInfo = styled.div`
  margin-right: 8px;
  text-align: right;

  span {
    display: block;
    font-size: 12px;

    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      color: #888;
    }
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Para centralizar, se necessário */
`;