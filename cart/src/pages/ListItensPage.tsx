import Header from "../components/Header";
import Card from "../components/layout/card/Card";
import { CartProvider } from "../contexts/cartContext";
import { CardGrid, MainContainerCheckoutPage, PageWrapper } from "../styles/globalStyles";
import logoSrc from '../assets/images/ROCKETSHOES.png';
import additionalLogoSrc from '../assets/images/tenis.png';
const products = [
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$453,86" },
  { imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$340,02" },
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis Adidas Duramo Lite 2 0", productPrice: "R$179,12" },
  { imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg", productName: "Tênis Adidas Duramo Lite 2 0", productPrice: "R$352,99" },
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$386,01" },
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$578,41" },
  { imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg", productName: "Tênis de Caminhada Leve Confortável", productPrice: "R$170,39" },
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis Adidas Duramo Lite 2 0", productPrice: "R$448,61" },
  { imageUrl: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$512,65" },
  { imageUrl: "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp", productName: "Tênis VR Caminhada Confortável Detalhes Couro Masculino", productPrice: "R$276,22" }
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
        <MainContainerCheckoutPage>
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
        </MainContainerCheckoutPage>
      </PageWrapper>
    </CartProvider>
  );
};

export default CardGridPage;