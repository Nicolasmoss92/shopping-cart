import styled from 'styled-components';

export const QuantityControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
`;

export const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.25rem;
  font-size: 1rem;
  color: #333;
`;
