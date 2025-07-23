import CardButton from '../CardButton';
import { ProductCard, ProductImage, ProductName, ProductPrice } from './styles';

interface CardProps {
  imageUrl: string;
  productName: string;
  productPrice: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, productName, productPrice }) => {
  const product = {
    id: Math.random(),
    name: productName,
    price: productPrice,
    quantity: 0,
    imageUrl: imageUrl,
  };
  return (
    <div>
      <ProductCard>
        <ProductImage src={imageUrl} alt={productName} />
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
        <CardButton product={product} />
      </ProductCard>
    </div>
  );
};

export default Card;
