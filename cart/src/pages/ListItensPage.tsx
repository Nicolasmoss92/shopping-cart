import Header from "../components/Header";
import Card from "../components/layout/card/Card";
import Cart from "../components/layout/card/Card";
import { ProductCard } from "../components/layout/card/Card/styles";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { CardGrid, MainContainerCheckOutPage, PageWrapper } from "../styles/globalStyles";
const products = [
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 1', productPrice: 'R$100,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 2', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 2', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 2', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 2', productPrice: 'R$150,00' },
  { imageUrl: '/tenis2.jpg', productName: 'Tênis 2', productPrice: 'R$150,00' },
  // Adicione mais produtos conforme necessário
];

const CardGridPage: React.FC = () => {
  return (
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
  );
};

export default CardGridPage;