import styled from 'styled-components';

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #4e38b4;
  border-radius: 2px 0 0 2px;
  height: 45px; /* Defina a altura para se ajustar ao botão */
  min-width: 62px; /* Ajuste conforme necessário */
  margin-right: 10px; /* Espaço entre o ícone e o texto do botão */
  margin-left: -45px; /* Mova o ícone para a esquerda */

  img {
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Quantity = styled.span`
  background-color: white;
  color: #4e38b4;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid #4e38b4;
  position: absolute; /* Pode manter essa posição se for necessário para o layout */
  top: -5px;
  right: -10px; /* Ajuste conforme a necessidade para posicionar corretamente */
`;
