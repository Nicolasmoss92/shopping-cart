import styled from 'styled-components';

interface ButtonStyleProps {
  primary?: boolean;
  $large?: boolean;
}

export const StyledButton = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7159c1;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: ${(props) => (props.$large ? '18px 24px' : '8px 16px')};
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  width: ${({ $large }) => ($large ? '300px' : '200px')};
  height: 45px;

  &:hover {
    background-color: #9a7fd1;
  }

  span {
    margin-left: 10px;
  }
`;
