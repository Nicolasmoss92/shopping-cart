import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 0fr 0fr; /* Aloca espaço para os três blocos: imagem + nome, contador, preço */
  align-items: center;
  gap: 5rem;
  padding: 2rem 0;
  border-bottom: 1px solid #eee; /* Divisor entre itens */
  padding-left: 1.8rem;
  padding-right: 3.9rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Layout responsivo para dispositivos menores */
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif; 
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  gap: 2rem;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  font-family: 'Roboto', sans-serif; 
  font-weight: bold;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  font-family: 'Roboto', sans-serif; 
  font-weight: bold;
  font-size: 1.5rem;
  color: #000000;
  min-width: 80px;
  text-align: right;
  padding-right: 0rem;
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
  font-weight: bold;
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
