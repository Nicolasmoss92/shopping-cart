import React from 'react';
import QuantityControl from '../QuantityItem/index';
import { ProductImage, ProductInfo, ProductName, ProductPrice, ProductWrapper } from "./styles";

interface ProductItemProps {
  image: string;
  name: string;
  quantity: number;
  price: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ image, name, quantity, price }) => {
  return (
    <ProductWrapper>
      <ProductInfo>
        <ProductImage src={image} alt={name} />
        <ProductName>{name}</ProductName>
      </ProductInfo>
      <div>Quantity: {quantity}</div>
      <ProductPrice>
        <span>R${price}</span>
      </ProductPrice>
    </ProductWrapper>
  );
}
export default ProductItem;