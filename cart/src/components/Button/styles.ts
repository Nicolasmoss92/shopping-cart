import styled from 'styled-components';
import { ButtonStyleProps } from '../../types/button/buttonStylesType';

export const StyledButton = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7159c1;  // Fundo roxo se for primary
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: ${(props) => (props.large ? '18px 24px' : '8px 16px')}; 
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  width: ${(props) => (props.large ? '300px' : '200px')};  
  height: 45px;

  &:hover {
    background-color: #9a7fd1  // Muda o fundo ao hover
  }

  span {
    margin-left: 10px;
  }
`;