import styled from 'styled-components';
import { ButtonStyleProps } from '../../../types/button/buttonStyles';

export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) => (props.primary ? 'purple' : 'gray')};
  font-size: ${(props) => (props.large ? '18px' : '14px')};
  padding: ${(props) => (props.large ? '12px 24px' : '8px 16px')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;