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

  // Verifica se o produto já está no carrinho e obtém sua quantidade
  const productInCart = cart.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Ícone do carrinho com o contador de itens específicos daquele produto
  const icon = (
    <CartIconWrapper>
      <FaShoppingCart size={24} data-testid="shopping-cart-icon" />
      <ItemCount>{quantity}</ItemCount> {/* Sempre exibe a quantidade */}
    </CartIconWrapper>
  );

  return (
    <Button
      title="ADICIONAR AO CARRINHO"  // Texto do botão
      showIcon={true}  // Indica que o ícone deve ser mostrado
      icon={icon}  // Passa o ícone
      primary={true}  // Define como botão primário
      large={true}  // Define como botão grande
      onClick={handleAddToCart}  // Chama a função de adicionar ao carrinho
    />
  );
};

export default CardButton;
