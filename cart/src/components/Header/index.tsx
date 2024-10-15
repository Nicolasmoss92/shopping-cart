import { Container, HeaderContainer } from "./header.styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <h1>RocketShoes</h1>
        <div>
          <span>Meu carrinho</span>
          <FaShoppingCart size={24} /> {/* Ícone do carrinho */}
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;