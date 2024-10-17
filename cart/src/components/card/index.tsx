import CartButton from "../CardButton";
import { AddToCartButton, CartIcon, ProductCard, ProductImage, ProductName, ProductPrice} from "./styles";

const Cart: React.FC = () => {
  return (
    <div>
      <ProductCard>
        <ProductImage src="/tenis2.jpg" alt="Tênis de Caminhada Leve Confortável" />
        <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
        <ProductPrice>R$179,90</ProductPrice>
        <CartButton />
      </ProductCard>
    </div>
  );
};

export default Cart;