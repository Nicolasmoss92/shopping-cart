import Header from "../components/Header";
import CheckoutSummary from "../components/layout/checkOut/CheckOutSummary";
import SubHeader from "../components/layout/checkOut/SubHeader";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { useCart } from "../hooks/useCart";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";
import { Product } from "../types/product/productTypes";


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
          logoSrc="/ROCKETSHOES.png" 
          additionalLogoSrc="/tenis.png" 
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