import { Button, CartIcon, Quantity } from "./styles";

const CartButton: React.FC = () => {
  return (
    <Button>
      <CartIcon>
        <img src='./Vector.jpg' alt="Carrinho" />
        <span>55</span>
      </CartIcon>
      <span>ADICIONAR AO CARRINHO</span>
    </Button>
  );
};

export default CartButton;
