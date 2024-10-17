import React from 'react';
import QuantityControl from '../QuantityItem/index';
import { ProductImage, ProductInfo, ProductName, ProductPrice, ProductWrapper } from "./styles";

const ProductItem: React.FC = () => {
  const product = {
    image: '/tenis2.jpg', 
    name: 'Tênis de Caminhada Leve Confortável', 
    quantity: 1, 
    price: 179.90 

  };
  return (
    <ProductWrapper>
      <ProductInfo>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
      </ProductInfo>
      <QuantityControl />
      <ProductPrice>
        <span>R${product.price.toFixed(2)}</span>
      </ProductPrice>
    </ProductWrapper>
  );
};

export default ProductItem;