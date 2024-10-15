import { Container, HeaderContainer } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <div className="logo">
          <img
            src="/ROCKETSHOES.jpg"
            alt="RocketShoes"
            width={150}
            height={50}
          />
          <img
            src="/noun_Running_1473810.jpg"
            alt="RocketShoes"
            width={30}
            height={30}
          />
        </div>
        <div>
          <span>Meu carrinho</span>
          <FaShoppingCart size={24} />
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
