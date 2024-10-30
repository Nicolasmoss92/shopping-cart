import { useCart } from "../../hooks/useCart";
import { CardStyle, HeaderContainer, HeaderContent, Logo } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';

interface HeaderProps {
  logoSrc: string;                 
  additionalLogoSrc?: string;      
  cartTitle: string;             
  itemsLink: string;            
  checkoutLink: string;  
  showCartIcon?: boolean;    
}

const Header: React.FC<HeaderProps> = ({ logoSrc, additionalLogoSrc, cartTitle = "Meu carrinho", itemsLink, checkoutLink, showCartIcon }) => {
  const { totalItems } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
      <Logo>
          <a href={itemsLink} className="link">
            <img src={logoSrc} alt="Logo Principal" />
            <img src={additionalLogoSrc} alt="Logo Adicional" className="tenis-logo" />
          </a>
        </Logo>
        <CardStyle>
          <a href={checkoutLink} className="link">
            <div>
              <span className="title">{cartTitle}</span>
              <span className="items">{totalItems} itens</span>
            </div>
          </a>
          {showCartIcon && (
            <div>
              <FaShoppingCart size={30} data-testid="shopping-cart-icon" />
            </div>
          )}
        </CardStyle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;