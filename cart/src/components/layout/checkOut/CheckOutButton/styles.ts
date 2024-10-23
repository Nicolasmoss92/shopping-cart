import styled from 'styled-components';
import Button from '../../../button/Button';


// Estilo específico para o botão de checkout
export const CheckoutButtonStyled = styled(Button)`
  background-color: #7159c1; // Cor de fundo do botão
  color: #fff; // Cor do texto
  border: none; // Sem bordas
  border-radius: 4px; // Bordas arredondadas
  padding: 10px 20px; // Espaçamento interno
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  transition: background-color 0.3s; // Transição suave

  &:hover {
    background-color: #5639a3; // Cor ao passar o mouse
  }
`;