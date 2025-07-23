import React from 'react';
import QuantityControl from '../QuantityItem/index';
import {
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from './styles';

interface ProductItemProps {
  image: string;
  name: string;
  price: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  const totalPrice = `R$${(
    parseFloat(price.replace('R$', '').replace(',', '.')) * quantity
  )
    .toFixed(2)
    .replace('.', ',')}`;

  return (
    <ProductWrapper>
      <ProductInfo>
        <ProductImage src={image} alt={name} />
        <div>
          <ProductName>{name}</ProductName>
          <span>{price}</span>
        </div>
      </ProductInfo>
      <QuantityControl
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
      <ProductPrice>
        <span>{totalPrice}</span>
      </ProductPrice>
    </ProductWrapper>
  );
};

export default ProductItem;
