import styled from 'styled-components';

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  height: 442px;
  max-width: 300px;
  margin-top: 0px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    margin-top: 22px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 260px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin: 8px 0;
  color: #333;
  text-align: left;
`;

export const ProductPrice = styled.p`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
  text-align: left;
  margin-top: 0px;
`;

export const AddToCartButton = styled.button`
  background-color: #7159c1;
  color: white;
  font-weight: bold;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  &:hover {
    background-color: #5a47a3;
  }
`;

export const CartIcon = styled.span`
  font-size: 16px;
  margin-right: 4px;
`;
