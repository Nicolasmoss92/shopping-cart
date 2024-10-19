import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 20px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1075px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.div`
  display: flex; /* Para alinhar as imagens horizontalmente */
  align-items: center; /* Centraliza verticalmente as imagens */

  img {
    height: 30px;
    margin-right: 0px; /* Espaço entre as imagens */
  }

  img:last-child {
    margin-right: 0; /* Remove o espaço da última imagem */
  }
`;


export const Cart = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  img {
    height: 24px;
    margin-left: 10px;
  }
`;
