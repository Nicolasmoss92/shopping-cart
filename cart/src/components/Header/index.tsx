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
          <div>
            <span>Meu carrinho</span>
            <span>Itens {totalItems}</span>
          </div>
          <div>
            <FaShoppingCart size={24} data-testid="shopping-cart-icon" />
          </div>
        </CardStyle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
