import Header from "../components/Header";
import Cart from "../components/layout/card/Card";
import { ProductCard } from "../components/layout/card/Card/styles";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { CardGrid, MainContainer } from "../styles/globalStyles";

const CardGridPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MainContainer>
                <CardGrid>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    
                </CardGrid>
            </MainContainer>
        </div>
    );
};

export default CardGridPage;