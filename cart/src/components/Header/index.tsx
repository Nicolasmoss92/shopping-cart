import { useCart } from "../../hooks/useCart";
import { CardStyle, HeaderContainer, HeaderContent, Logo } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <a href="/itens" className="link">
            <img src="/ROCKETSHOES.png" alt="Rocketshoes Logo" />
            <img src="/tenis.png" alt="Additional Logo" className="tenis-logo" />
          </a>
        </Logo>
        <CardStyle>
          <a href="/checkout" className="link">
            <div>
              <span className="title">Meu carrinho</span>
              <span className="items">{totalItems} itens</span>
            </div>
          </a>
          <div>
            <FaShoppingCart size={30} data-testid="shopping-cart-icon" />
          </div>
        </CardStyle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
