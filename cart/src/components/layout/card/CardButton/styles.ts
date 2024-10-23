import styled from 'styled-components';

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #4e38b4;
  padding: 0;
  border-radius: 8px 0 0 8px;
  height: 100%;
  min-width: 60px;

  img {
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
`;

export const Quantity = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: white;
  color: #4e38b4;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #4e38b4;
`;
