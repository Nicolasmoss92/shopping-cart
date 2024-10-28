import { useCart } from "../../../../hooks/useCart";
import CheckoutButton from "../CheckOutButton";
import {SummaryWrapper, TotalText } from "./styles";

const CheckoutSummary: React.FC = () => {
    const { cart } = useCart();  // Acessa o cart pelo contexto

    // Calcula o total com base no preço e quantidade de cada produto
    const total = cart.reduce((acc, product) => {
        const priceNumber = parseFloat(product.price.replace('R$', '').replace(',', '.'));
        return acc + (priceNumber * product.quantity);
    }, 0).toFixed(2);

    return (
        <SummaryWrapper>
            <CheckoutButton />
            <TotalText>Total: R${total}</TotalText>
        </SummaryWrapper>
    );
};

export default CheckoutSummary;