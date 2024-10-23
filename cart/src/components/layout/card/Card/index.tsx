import CardButton from "../CardButton";
import CartButton from "../CardButton";
import { ProductCard, ProductImage, ProductName, ProductPrice } from "./styles";

interface CardProps {
  imageUrl: string;
  productName: string;
  productPrice: string;
}


const Card: React.FC<CardProps> = ({imageUrl, productName, productPrice}) => {
  return (
    <div>
      <ProductCard>
        <ProductImage src={imageUrl} alt={productName} />
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
        <CardButton />
      </ProductCard>
    </div>
  );
};

export default Card;