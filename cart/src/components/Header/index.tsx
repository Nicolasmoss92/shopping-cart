import { CartContainer, CartInfo, CartText, Container, HeaderContainer, LogoContainer } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
      <LogoContainer>
          <img
            src="/ROCKETSHOES.jpg"
            alt="Logotipo da RocketShoes"
            width={150}
            height={50}
          />
          <img
            src="/noun_Running_1473810.jpg"
            alt="Ícone de corrida"
            width={30}
            height={30}
          />
        </LogoContainer>
        <CartContainer>
          <CartInfo>
            <span>Meu carrinho</span>
            <span>3 itens</span>
          </CartInfo>
          <FaShoppingCart size={24} />
        </CartContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
