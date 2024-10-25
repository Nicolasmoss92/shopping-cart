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
  display: flex; /* Alinhamento horizontal das imagens */
  align-items: center; /* Alinhamento vertical */

  img {
    height: 30px;

    &:not(:last-child) {
      margin-right: 10px; /* Aplica margem apenas para não ser o último item */
    }
  }
`;

export const CardStyle = styled.div`
  display: flex;
  align-items: center; /* Align the items vertically in the center */
  color: white; /* Text color */

  div:first-child {
    display: flex;
    flex-direction: column; /* Stack "Meu carrinho" and "{totalItems} itens" */
    margin-right: 8px; /* Space between the text and the cart icon */
  }

  div:last-child {
    margin-left: 8px; /* Space between the icon and text, in case you need it */
  }

  span {
    font-size: 14px; /* Adjust text size */
  }
`;