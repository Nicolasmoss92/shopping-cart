import styled from 'styled-components';
import { ButtonStyleProps } from '../../../types/button/buttonStyles';

export const StyledButton = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.primary ? '#7159c1' : '#ccc')};  // Fundo roxo se for primary
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: ${(props) => (props.large ? '12px 24px' : '8px 16px')};  // Define tamanho via props
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  width: ${(props) => (props.large ? '300px' : '200px')};  // Tamanho do botão definido via props
  height: 45px;

  &:hover {
    background-color: ${(props) => (props.primary ? '#5639a3' : '#bbb')};  // Muda o fundo ao hover
  }

  span {
    margin-left: 10px;
  }
`;