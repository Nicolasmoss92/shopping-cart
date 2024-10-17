import { CheckoutButton, SummaryWrapper, TotalText } from "./styles";

const CheckoutSummary: React.FC = () => {
    const total = 179.90

    return (
        <SummaryWrapper>
            <CheckoutButton>Finalizar Pedido</CheckoutButton>
            <TotalText>Total: R${total}</TotalText>
        </SummaryWrapper>
    );
};

export default CheckoutSummary;