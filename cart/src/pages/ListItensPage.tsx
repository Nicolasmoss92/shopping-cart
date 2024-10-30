import Header from "../components/Header";
import Card from "../components/layout/card/Card";
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
        <Header 
          logoSrc="/ROCKETSHOES.png" 
          additionalLogoSrc="/tenis.png" 
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