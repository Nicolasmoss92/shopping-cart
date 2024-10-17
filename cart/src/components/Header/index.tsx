import { Cart, HeaderContainer, HeaderContent, Logo } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
    <HeaderContent>
      <Logo>
        <img src="/ROCKETSHOES.jpg" alt="Rocketshoes Logo" />
        <img src="/noun_Running_1473810.jpg" alt="Additional Logo" />
      </Logo>
      <Cart>
        <span>Meu carrinho</span>
        <FaShoppingCart size={24}  data-testid="shopping-cart-icon" />
      </Cart>
    </HeaderContent>
  </HeaderContainer>
  );
};

export default Header;
