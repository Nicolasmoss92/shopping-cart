import Header from "../components/Header";
import SubHeader from "../components/layout/checkOut/SubHeader";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { useCart } from "../hooks/useCart";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";
import { Product } from "../types/product/productTypes";
import logoSrc from '../assets/images/ROCKETSHOES.png';
import additionalLogoSrc from '../assets/images/tenis.png';
import CheckoutSummary from "../components/layout/checkOut/CheckOutSummary";

const CheckoutPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleIncrease = (product: Product) => {
    addToCart(product);
  };

  const handleDecrease = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <PageWrapper>
      <Header 
          logoSrc={logoSrc}
          additionalLogoSrc={additionalLogoSrc}
          cartTitle="Meu Carrinho" 
          itemsLink="/itens" 
          checkoutLink="/checkout" 
          showCartIcon={false}
        />
        <MainContainerItensPage>
          <SubHeader />
          {cart.length > 0 && cart.map((product) => (
            <ProductItem
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              onIncrease={() => handleIncrease(product)}
              onDecrease={() => handleDecrease(product)}
            />
          ))}
          <CheckoutSummary />
        </MainContainerItensPage>
      </PageWrapper>
    </div>
  );
};

export default CheckoutPage;