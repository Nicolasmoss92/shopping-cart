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
  align-items: center;
  color: white;

  div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }

  .title {
    font-size: 18px; /* Aumente o tamanho do título */
    font-weight: bold; /* Coloque o texto em negrito */
    color: white; /* Cor branca para destaque */
  }

  .items {
    font-size: 12px; /* Diminua o tamanho do texto para o número de itens */
    color: #a3a3a3; /* Use um cinza claro */
    right: 0; /* Posiciona o texto à direita da div */
  }

  svg {
    margin-left: 8px; /* Espaço entre o texto e o ícone */
    color: white; /* Ajuste a cor do ícone se necessário */
  }
`;