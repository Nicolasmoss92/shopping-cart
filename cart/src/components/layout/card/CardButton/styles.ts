import styled from 'styled-components';

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #4e38b4;
  border-radius: 2px 0 0 2px;
  height: 45px; /* Defina a altura para se ajustar ao botão */
  min-width: 62px; /* Ajuste conforme necessário */
  margin-right: 20px; /* Espaço entre o ícone e o texto do botão */
  margin-left: -35px; /* Mova o ícone para a esquerda */

  /* Adicione um padding interno para mover o conteúdo para a direita */
  padding-left: 10px; /* Ajuste conforme necessário */
`;

export const ItemCount = styled.span`
  color: white;
  border-radius: 50%;
  top: -5px; /* Ajuste a posição vertical conforme necessário */
  right: -10px; /* Ajuste a posição horizontal conforme necessário */
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  text-align: center; /* Centraliza o texto */
`;

