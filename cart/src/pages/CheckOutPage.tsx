import Header from "../components/Header";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";

const CheckoutPage: React.FC = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <CheckoutSummary />
        </div>
    );
};

export default CheckoutPage;