import React from 'react';
import QuantityControl from '../QuantityItem/index';
import { ProductImage, ProductInfo, ProductName, ProductPrice, ProductWrapper } from "./styles";

interface ProductItemProps {
  image: string;
  name: string;
  quantity: number;
  price: string;
}

const ProductItem: React.FC<{ image: string, name: string, price: string, quantity: number, onIncrease: () => void, onDecrease: () => void }> = ({ image, name, price, quantity, onIncrease, onDecrease }) => {
  return (
    <ProductWrapper>
      <ProductInfo>
        <ProductImage src={image} alt={name} />
        <ProductName>{name}</ProductName>
      </ProductInfo>
      <QuantityControl quantity={quantity} onIncrease={onIncrease} onDecrease={onDecrease} />
      <ProductPrice>
        <span>R${price}</span>
      </ProductPrice>
    </ProductWrapper>
  );
}
export default ProductItem;