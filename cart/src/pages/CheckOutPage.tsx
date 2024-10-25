import Header from "../components/Header";
import CheckoutButton from "../components/layout/checkOut/CheckOutButton";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { CartProvider, useCart } from "../contexts/cartContext";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";

interface Product {
    id: number; // Alterado de string para number
    name: string;
    price: string;
    imageUrl: string;
    quantity: number;
}

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
        <Header />
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