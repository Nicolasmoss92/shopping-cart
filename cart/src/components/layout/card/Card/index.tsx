import CardButton from "../CardButton";
import CartButton from "../CardButton";
import { ProductCard, ProductImage, ProductName, ProductPrice} from "./styles";

const Card: React.FC = () => {
  return (
    <div>
      <ProductCard>
        <ProductImage src="/tenis2.jpg" alt="Tênis de Caminhada Leve Confortável" />
        <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
        <ProductPrice>R$179,90</ProductPrice>
        <CardButton />
      </ProductCard>
    </div>
  );
};

export default Card;