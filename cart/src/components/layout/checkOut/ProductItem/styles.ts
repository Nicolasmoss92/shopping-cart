import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  color: #333;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #333;
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  min-width: 80px;
  text-align: right;
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
