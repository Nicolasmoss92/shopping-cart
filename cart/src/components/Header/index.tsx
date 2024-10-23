import { useCart } from "../../contexts/cartContext";
import Card from "../layout/card/Card";
import { CardStyle, HeaderContainer, HeaderContent, Logo } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  const { quantity } = useCart(); 
  
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
          {quantity > 0 && <span>{quantity}</span>}  {/* Exibe a quantidade se maior que 0 */}
        </CardStyle>
    </HeaderContent>
  </HeaderContainer>
  );
};

export default Header;
