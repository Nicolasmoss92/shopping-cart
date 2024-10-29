import Header from "../components/Header";
import Card from "../components/layout/card/Card";
import Cart from "../components/layout/card/Card";
import { ProductCard } from "../components/layout/card/Card/styles";
import CheckoutSummary from "../components/layout/checkOut/CheckOutSummary";
import SubHeader from "../components/layout/checkOut/SubHeader";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { CartProvider } from "../contexts/cartContext";
import { CardGrid, MainContainerCheckOutPage, PageWrapper } from "../styles/globalStyles";
const products = [
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$100,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis de Caminhada Leve Confortável', productPrice: 'R$150,00' },
  // Adicione mais produtos conforme necessário
];

const CardGridPage: React.FC = () => {
  return (
    <CartProvider>
    <PageWrapper>
      <Header />
      <MainContainerCheckOutPage>
      <CardGrid>
        {products.map((product, index) => (
          <Card 
            key={index} 
            imageUrl={product.imageUrl} 
            productName={product.productName} 
            productPrice={product.productPrice} 
          />
        ))}
      </CardGrid>
      </MainContainerCheckOutPage>
    </PageWrapper>
    </CartProvider>
  );
};

export default CardGridPage;