import Button from "../../../button/Button";
import { CartIconWrapper, ItemCount } from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  imageUrl: string;
};

const CardButton: React.FC<{ product: Product }> = ({ product }) => {
  const { cart, addToCart } = useCart();

  const { quantity = 0 } = cart.find((item) => item.id === product.id) || {};

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button
      title="ADICIONAR AO CARRINHO"
      showIcon={true}
      icon={
        <CartIconWrapper>
          <FaShoppingCart size={24} data-testid="shopping-cart-icon" />
          <ItemCount>{quantity}</ItemCount>
        </CartIconWrapper>
      }
      large={true}
      onClick={handleAddToCart}
    />
  );
};

export default CardButton;
