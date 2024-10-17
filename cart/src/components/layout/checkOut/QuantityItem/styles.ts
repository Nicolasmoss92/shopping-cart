import styled from 'styled-components';

// Estilizando o wrapper do controle de quantidade
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Estilizando o botão de adicionar
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ccc; /* Cor do botão */
  border-radius: 50%; /* Botão redondo */
  width: 30px; /* Largura do botão */
  height: 30px; /* Altura do botão */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px; /* Espaçamento entre o botão e o número */
  
  &:hover {
    background-color: #f0f0f0; /* Cor ao passar o mouse */
  }
`;

// Estilizando o campo de quantidade
export const QuantityDisplay = styled.span`
  font-size: 16px; /* Tamanho do texto */
  font-weight: bold; /* Peso do texto */
  margin: 0 10px; /* Espaçamento em volta do número */
`;

// Estilizando o botão de remover
export const RemoveButton = styled(Button)`
  border: 1px solid #8B5A5A; /* Cor do botão de remover */
`;