import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 1rem 0; /* Usando rem para melhor responsividade */

  @media (max-width: 768px) {
    padding: 0.5rem 0; /* Reduz o padding em telas menores */
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1075px;
  margin: 0 auto;
  padding: 0 1rem; /* Usando rem para melhor responsividade */

  @media (max-width: 768px) {
    padding: 0 0.5rem; /* Reduz o padding em telas menores */
  }
`;

export const Logo = styled.div`
  display: flex; /* Alinhamento horizontal das imagens */
  align-items: center; /* Alinhamento vertical */

  .tenis-logo {
    height: 35px; /* Altura específica para o logo do tênis */
    margin-left: 5px; /* Margem específica para o logo do tênis */
    
  img {
    height: 30px;

    &:not(:last-child) {
      margin-right: 10px; /* Aplica margem apenas para não ser o último item */
    }
  }

  @media (max-width: 768px) {
    img {
      height: 25px; /* Reduz a altura da imagem em telas menores */
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

  .link {
  text-decoration: none;
  }

  .title {
    font-size: 1.125rem; /* Tamanho do título em rem (18px) */
    font-weight: bold; /* Coloque o texto em negrito */
    color: white; /* Cor branca para destaque */

    @media (max-width: 768px) {
      font-size: 1rem; /* Reduz o tamanho do título em telas menores */
    }
  }

  .items {
    font-size: 0.75rem; /* Tamanho do texto para o número de itens em rem (12px) */
    color: #a3a3a3; /* Use um cinza claro */
    right: 0; /* Posiciona o texto à direita da div */

    @media (max-width: 768px) {
      font-size: 0.6875rem; /* Reduz o tamanho do texto em telas menores */
    }
  }

  svg {
    margin-left: 8px; /* Espaço entre o texto e o ícone */
    color: white; /* Ajuste a cor do ícone se necessário */

    @media (max-width: 768px) {
      display: none; /* Oculta o ícone em telas menores */
    }
  }
`;

export const CartNumber = styled.span`
  margin-left: 8px; /* Espaço entre o texto e o número */
  color: white; /* Cor do número */
  font-weight: bold; /* Texto em negrito */

  @media (max-width: 768px) {
    /* Exibe o número apenas em telas menores */
    display: block;
  }
`;

