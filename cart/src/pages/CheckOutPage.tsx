import Header from "../components/Header";
import CheckoutButton from "../components/layout/checkOut/CheckOutButton";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { CartProvider, useCart } from "../contexts/cartContext";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";

// const products = [
//     { image: '/tenis2.jpg', name: 'Tênis 1', price: 'R$100,00' },
//     { image: '/tenis2.jpg', name: 'Tênis 2', price: 'R$150,00' },
//     // Adicione mais produtos conforme necessário
//   ];

  const CheckoutPage: React.FC = () => {
    const { cart } = useCart();

      return (
          <div>
              <PageWrapper>
                  <Header />
                  <MainContainerItensPage>
                      <SubHeader />
                      {cart.map((product, index) => (
                        <ProductItem
                            key={product.id}
                            image={product.imageUrl}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                      <CheckoutSummary />
                  </MainContainerItensPage>
              </PageWrapper>
          </div>
      );
  };
  
  export default CheckoutPage;