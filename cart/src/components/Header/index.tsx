import { useCart } from "../../contexts/cartContext";
import Card from "../layout/card/Card";
import { CardStyle, HeaderContainer, HeaderContent, Logo } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  
  return (
    <HeaderContainer>
    <HeaderContent>
      <Logo>
        <img src="/ROCKETSHOES.jpg" alt="Rocketshoes Logo" />
        <img src="/noun_Running_1473810.jpg" alt="Additional Logo" />
      </Logo>
      <CardStyle>
          <span>Meu carrinho</span>
          <FaShoppingCart size={24} data-testid="shopping-cart-icon" />
          {totalItems > 0 && <span>{totalItems}</span>} {/* Exibe a contagem */}
        </CardStyle>
    </HeaderContent>
  </HeaderContainer>
  );
};

export default Header;
