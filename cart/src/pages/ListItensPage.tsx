import Header from "../components/Header";
import Card from "../components/layout/card/Card";
import { CartProvider } from "../contexts/cartContext";
import { CardGrid, MainContainerCheckOutPage, PageWrapper } from "../styles/globalStyles";
import logoSrc from '../assets/images/ROCKETSHOES.png';
import additionalLogoSrc from '../assets/images/tenis.png';
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
        <Header 
          logoSrc={logoSrc}
          additionalLogoSrc={additionalLogoSrc}
          cartTitle="Meu Carrinho" 
          itemsLink="/itens" 
          checkoutLink="/checkout" 
          showCartIcon={true}
        />
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